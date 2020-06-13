import React from 'react';
import { RootState } from 'app/rootReducer';
import { shallowEqual, useSelector } from 'react-redux';
import RepoInfo from '../../components/RepoInfo';

const ReposList = (): JSX.Element => {
  const repos = useSelector((state: RootState) => state.repos, shallowEqual);
  const isSearching = useSelector((state: RootState) => state.search.isSearching);

  return (
    <>
      {!isSearching && repos.length === 0 && <h6>Ничего не найдено</h6>}
      {repos.length > 0 && (
        <ul>
          {repos.map(({
            id, name, stargazers_count, updated_at, html_url,
          }) => (
            <li key={id}>
              <RepoInfo
                id={id}
                name={name}
                stargazers_count={stargazers_count}
                updated_at={updated_at}
                html_url={html_url}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReposList;
