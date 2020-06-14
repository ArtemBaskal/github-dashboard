import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Repo } from '../features/reposList/types';
import { formatDate } from '../utils/helpers';
import { RootState } from '../app/rootReducer';
import './RepoInfo.css';

const RepoInfo = ({
  id, name, stargazers_count, updated_at, html_url,
}: Partial<Repo>) => {
  const { t } = useTranslation();
  const currentLocale = useSelector((state: RootState) => state.i18n.currentLocale);

  return (
    <>
      <div className="repo-info">
        <div className="repo-info__name repo-info__name--title repo-info__name--link">
          {id ? (
            <Link
              to={id.toString()}
              className="repo-info__name repo-info__name--link"
            >
              {name}
            </Link>
          ) : name}
        </div>
        {stargazers_count !== undefined
                && stargazers_count >= 0 && (
                <div>
                  &#9734;
                  {' '}
                  {stargazers_count}
                </div>
        )}
        {updated_at && (
        <div>
          &#9998;
          {' '}
          {`${t('last_update')}:`}
          {' '}
          {`${formatDate(updated_at, currentLocale)}`}
        </div>
        )}
        {html_url && (
        <div>
          &#8962;
          {' '}
          <a href={html_url} className="repo-info__name repo-info__name--link">{html_url}</a>
        </div>
        )}
      </div>
      <br />
    </>
  );
};

export default RepoInfo;
