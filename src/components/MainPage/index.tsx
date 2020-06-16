import React from 'react';
import SearchInput from 'features/search/SearchInput';
import ReposList from 'features/reposList/ReposList';
import Paginator from 'features/pagination/Paginator';
import withErrorBoundary from 'utils/HOCs/withErrorBoundary';

const MainPage = () => (
  <>
    <SearchInput />
    <ReposList />
    <Paginator />
  </>
);

export default withErrorBoundary(MainPage);
