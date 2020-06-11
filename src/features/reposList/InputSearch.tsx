import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadRepos } from './reposSlice';

const InputSearch = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('initial');

  useEffect(() => {
    dispatch(loadRepos(`name=${search}`));
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    if (search) {
      dispatch(loadRepos(`name=${search}`));
    }
  };
  return (
    <input
      type="text"
      value={search}
      placeholder="Поиск репозитория"
      onChange={onChange}
    />
  );
};

export default InputSearch;
