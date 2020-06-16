import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { loadRepos } from 'features/reposList/reposSlice';
import { setCurrentPage } from 'features/pagination/pageSlice';
import { setSearchTerm, setIsSearching } from 'features/search/searchSlice';
import useDebounce from 'utils/hooks/useDebounce';
import { RootState } from 'app/rootReducer';
import {
  FIRST_PAGE, INPUT_DEBOUNCE_DELAY, DEFAULT_SEARCH_TERM, REPOS_PER_PAGE,
} from 'utils/consts';
import 'features/search/SearchInput.css';

const SearchInput = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const search = useSelector((state: RootState) => state.search.searchTerm);
  const page = useSelector((state: RootState) => state.pages.currentPage);
  const pages = useSelector((state: RootState) => state.pages.totalPages);
  const repos = useSelector((state: RootState) => state.repos, shallowEqual);
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

  const reposFound = pages > 1 ? pages * REPOS_PER_PAGE : Object.keys(repos).length;

  const renderHint = () => {
    if (isSearching) {
      return <div className="search-input__status">{t('search')}</div>;
    }
    if (reposFound) {
      return <div className="search-input__status">{`${t('repos_found_approximately')} ${reposFound}`}</div>;
    }
    return null;
  };

  return (
    <div className="search-input__container">
      <input
        type="text"
        value={search}
        placeholder={t('repo_search')}
        onChange={onChange}
        className="search-input"
      />
      {renderHint()}
    </div>
  );
};

export default SearchInput;
