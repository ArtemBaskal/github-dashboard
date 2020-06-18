import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Repo } from 'features/reposList/types';
import { formatDate } from 'utils/helpers';
import { RootState } from 'app/rootReducer';
import 'components/RepoCard/index.css';

const RepoCard = ({
  id, name, stargazers_count, updated_at, html_url,
}: Partial<Repo>) => {
  const { t } = useTranslation();
  const currentLocale = useSelector((state: RootState) => state.i18n.currentLocale);

  return (
    <main className="repo-card__container">
      <div className="repo-card">
        <h3 className="repo-card__name--title">
          {id ? (
            <Link
              to={id.toString()}
              className="repo-card__name"
              aria-label={name}
            >
              {name}
            </Link>
          ) : name}
        </h3>
        {stargazers_count !== undefined
                && stargazers_count >= 0 && (
                <div>
                  <span className="icon--purple">&#9733;</span>
                  &nbsp;
                  {stargazers_count}
                </div>
        )}
        {updated_at && (
        <div>
          <span className="icon--gray">&#9998;</span>
          &nbsp;
          {`${t('last_update')}:`}
          &nbsp;
          {`${formatDate(updated_at, currentLocale)}`}
        </div>
        )}
        {html_url && (
        <div>
          <span>&#128279;</span>
          &nbsp;
          <a href={html_url} className="repo-card__name repo-card__name--link" aria-label={t('repo')}>{html_url}</a>
        </div>
        )}
      </div>
      <br />
    </main>
  );
};

export default RepoCard;
