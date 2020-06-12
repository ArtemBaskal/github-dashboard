import React from 'react';
import { RootState } from 'app/rootReducer';
import { useSelector } from 'react-redux';
import ReposListItem from './ReposListItem';

const ReposList = React.memo((): JSX.Element => {
  const repos = useSelector((state: RootState) => state.repos);
  const isSearching = useSelector((state: RootState) => state.search.isSearching);

  return (
    <>
      {isSearching && <h6>Searching...</h6>}
      {!isSearching && repos.length === 0 && <h6>Ничего не найдено</h6>}
      {repos.length > 0 && (
        <ul>
          {repos.map(({
            id, name, stargazers_count, updated_at, html_url,
          }) => (
            <ReposListItem
              key={id}
              id={id}
              name={name}
              stargazers_count={stargazers_count}
              updated_at={updated_at}
              html_url={html_url}
            />
          ))}
        </ul>
      )}
    </>
  );
});

export default ReposList;
