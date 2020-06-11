import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadRepos } from './reposSlice';
import useDebounce from './useDebounce';
import { INPUT_DEBOUNCE_DELAY } from '../../utils/consts';

type IProps = {
    setIsSearching: (isSearching: boolean) => void
}

const InputSearch = ({ setIsSearching }: IProps) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('initial');
  const debouncedSearchTerm = useDebounce(search, INPUT_DEBOUNCE_DELAY);

  useEffect(() => {
    (async () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        await dispatch(loadRepos(`name=${debouncedSearchTerm}`));
        setIsSearching(false);
      }
    })();
  },
  [dispatch, setIsSearching, debouncedSearchTerm]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
