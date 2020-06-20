import React, { useMemo } from 'react';
import { RootState } from 'app/rootReducer';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useSelector } from 'react-redux';
import RepoCard from 'components/RepoCard';
import 'features/reposList/RepoList.css';

const ReposList = (): JSX.Element => {
  const repos = useSelector((state: RootState) => state.repos, shallowEqual);
  const isSearching = useSelector((state: RootState) => state.search.isSearching);
  const { t } = useTranslation();

  const renderedRepos = useMemo(() => repos.length > 0 && (
  <ul className="repo-list">
    {repos.map(({
      id, name, stargazers_count, updated_at, html_url,
    }) => (
      <li key={id} className="repo-list--item">
        <RepoCard
          id={id}
          name={name}
          stargazers_count={stargazers_count}
          updated_at={updated_at}
          html_url={html_url}
        />
      </li>
    ))}
  </ul>
  ), [repos]);

  return (
    <section className="repos-list__container">
      {!isSearching && repos.length === 0 && <h4 className="repos-list__info--empty">{t('nothing_is_found')}</h4>}
      {renderedRepos}
    </section>
  );
};

export default ReposList;
