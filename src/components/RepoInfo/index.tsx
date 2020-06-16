import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Repo } from 'features/reposList/types';
import { formatDate } from 'utils/helpers';
import { RootState } from 'app/rootReducer';
import 'components/RepoInfo/index.css';

const RepoInfo = ({
  id, name, stargazers_count, updated_at, html_url,
}: Partial<Repo>) => {
  const { t } = useTranslation();
  const currentLocale = useSelector((state: RootState) => state.i18n.currentLocale);

  return (
    <>
      <div className="repo-info">
        <h3 className="repo-info__name--title">
          {id ? (
            <Link
              to={id.toString()}
              className="repo-info__name repo-info__name--link"
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
          &#128279;
          &nbsp;
          <a href={html_url} className="repo-info__name repo-info__name--link">{html_url}</a>
        </div>
        )}
      </div>
      <br />
    </>
  );
};

export default RepoInfo;
