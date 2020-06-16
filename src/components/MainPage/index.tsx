import React from 'react';
import SearchInput from 'features/search/SearchInput';
import ReposList from 'features/reposList/ReposList';
import Paginator from 'features/pagination/Paginator';

const Index = () => (
  <>
    <SearchInput />
    <ReposList />
    <Paginator />
  </>
);

export default Index;
