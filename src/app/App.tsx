import React, { useState } from 'react';
import './App.css';
import ReposList from 'features/reposList/ReposList';
import InputSearch from 'features/reposList/InputSearch';

const App = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <InputSearch setIsSearching={setIsSearching} />
      <ReposList isSearching={isSearching} />
    </>
  );
};

export default App;
