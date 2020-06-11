import React from 'react';
import { RootState } from 'app/rootReducer';
import { useSelector } from 'react-redux';
import ReposListItem from './ReposListItem';

type IProps = {
    isSearching: boolean
}

const ReposList = ({ isSearching }: IProps): JSX.Element => {
  const repos = useSelector((state: RootState) => state.repos);

  if (isSearching) {
    return <div>Searching...</div>;
  }

  return <ul>{repos && repos.map(({ id, name }) => <ReposListItem key={id} name={name} />)}</ul>;
};

export default ReposList;
