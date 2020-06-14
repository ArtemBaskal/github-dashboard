import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Repo } from '../features/reposList/types';
import { formatDate } from '../utils/helpers';

const RepoInfo = ({
  id, name, stargazers_count, updated_at, html_url,
}: Partial<Repo>) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        {id && <Link to={id.toString()}>{name}</Link>}
        {stargazers_count && (
        <div>
          {stargazers_count}
          {' '}
          &#9734;
        </div>
        )}
        {updated_at && <div>{`${t('last_commit_date')}: ${formatDate(updated_at)}`}</div>}
        {html_url && <a href={html_url}>{html_url}</a>}
      </div>
      <br />
    </>
  );
};

export default RepoInfo;
