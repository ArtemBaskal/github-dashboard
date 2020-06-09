import React from 'react';
import './App.css';
import ReposList from 'features/reposList/ReposList';
import InputSearch from '../features/reposList/InputSearch';

const App = () => <>
    <InputSearch />
    <ReposList />
</>

export default App;
