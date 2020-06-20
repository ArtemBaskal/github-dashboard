import React, {
  useEffect, useState, useMemo, useCallback,
} from 'react';
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

  const repos = useSelector((state: RootState) => state.repos, shallowEqual);
  const { currentPage, totalPages } = useSelector((state: RootState) => state.pages, shallowEqual);
  const { searchTerm, isSearching } = useSelector((state: RootState) => state.search, shallowEqual);
  const currentLocale = useSelector((state: RootState) => state.i18n.currentLocale);

  /**
     * Used for catching error in error boundary https://github.com/facebook/react/issues/14981#issuecomment-468460187.
     * Make sure the component or its ascendant
     * is wrapped in withErrorBoundary HOC to throw error safely.
     */
  const [, setErrorBoundary] = useState();

  const trimmedSearch = searchTerm.trim();
  const debouncedSearchTerm = useDebounce(trimmedSearch, INPUT_DEBOUNCE_DELAY);
  const search = trimmedSearch ? `${debouncedSearchTerm} in:name` : DEFAULT_SEARCH_TERM;

  useEffect(() => {
    dispatch(setIsSearching(true));

    (async () => {
      try {
        await dispatch(loadRepos(search, currentPage));
      } catch (error) {
        setErrorBoundary(() => {
          throw error;
        });
      }

      dispatch(setIsSearching(false));
    })();
  },
  // eslint-disable-next-line
        // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch, setIsSearching, debouncedSearchTerm, currentPage]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setCurrentPage(FIRST_PAGE));
    dispatch(setSearchTerm(value));
    if (value.trim()) {
      dispatch(setIsSearching(true));
    } else {
      dispatch(setIsSearching(false));
    }
  }, [dispatch]);

  const reposFound = totalPages > 1 ? totalPages * REPOS_PER_PAGE : Object.keys(repos).length;

  const id = 'input-search';

  const renderHint = () => {
    if (isSearching) {
      return <label htmlFor={id} className="search-input__status">{t('search')}</label>;
    }
    if (reposFound) {
      return (
        <label
          htmlFor={id}
          className="search-input__status"
        >
          {`${t('repos_found_approximately')} ${reposFound.toLocaleString(currentLocale)}`}
        </label>
      );
    }
    return null;
  };

  return (
    <section className="search-input__container">
      {useMemo(() => (
        <input
          id={id}
          type="text"
          value={searchTerm}
          placeholder={t('repo_search')}
          onChange={onChange}
          className="search-input"
          aria-label="search"
        />
      ), [id, searchTerm, onChange, t])}
      {renderHint()}
    </section>
  );
};

export default SearchInput;
