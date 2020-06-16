import React from 'react';
import SearchInput from 'features/search/SearchInput';
import ReposList from 'features/reposList/ReposList';
import Paginator from 'features/pagination/Paginator';

const MainPage = () => (
  <>
    <SearchInput />
    <ReposList />
    <Paginator />
  </>
);

export default MainPage;
