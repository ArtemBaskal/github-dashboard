import React from 'react';
import { RootState } from 'app/rootReducer';
import { useSelector } from 'react-redux';
import ReposListItem from './ReposListItem';
import radixSort from '../../utils/radixSort';
import { Repo } from './types';

type IProps = {
    isSearching: boolean
}

const ReposList = ({ isSearching }: IProps): JSX.Element => {
  const repos = useSelector((state: RootState) => state.repos);

  return (
    <>
      {isSearching && <div>Searching...</div>}
      <ul>
        {repos && radixSort<Repo>(repos, 'stargazers_count', false)
          .map(({ id, name, stargazers_count }) => (
            <div key={id}>
              {stargazers_count}
              <ReposListItem name={name} />
            </div>
          ))}
      </ul>
    </>
  );
};

export default ReposList;
