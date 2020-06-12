import React from 'react';
import './App.css';
import ReposList from 'features/reposList/ReposList';
import SearchInput from 'features/search/SearchInput';
import Paginator from '../features/pagination/Paginator';

const App = () => (
  <>
    <SearchInput />
    <ReposList />
    <Paginator />
  </>
);

export default App;
