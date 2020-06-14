import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { loadRepos } from '../reposList/reposSlice';
import useDebounce from '../../utils/hooks/useDebounce';
import { FIRST_PAGE, INPUT_DEBOUNCE_DELAY, DEFAULT_SEARCH_TERM } from '../../utils/consts';
import { RootState } from '../../app/rootReducer';
import { setCurrentPage } from '../pagination/pageSlice';
import { setSearchTerm, setIsSearching } from './searchSlice';

const SearchInput = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const search = useSelector((state: RootState) => state.search.searchTerm);
  const page = useSelector((state: RootState) => state.pages.currentPage);
  const isSearching = useSelector((state: RootState) => state.search.isSearching);

  const debouncedSearchTerm = useDebounce(search, INPUT_DEBOUNCE_DELAY);
  const searchTerm = search ? `name=${debouncedSearchTerm}` : DEFAULT_SEARCH_TERM;

  useEffect(() => {
    (async () => {
      dispatch(setIsSearching(true));

      await dispatch(loadRepos(searchTerm, page as number));

      dispatch(setIsSearching(false));
    })();
  },
  // eslint-disable-next-line
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch, setIsSearching, debouncedSearchTerm, page]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentPage(FIRST_PAGE));
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        value={search}
        placeholder={t('repo_search')}
        onChange={onChange}
      />
      {'   '}
      {isSearching && <span>{t('search')}</span>}
    </>
  );
};

export default SearchInput;
