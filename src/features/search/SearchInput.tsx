import React, { useEffect, useState } from 'react';
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
  const repos = useSelector((state: RootState) => state.repos, shallowEqual);
  const { currentPage, totalPages } = useSelector((state: RootState) => state.pages, shallowEqual);
  const currentLocale = useSelector((state: RootState) => state.i18n.currentLocale);
  const isSearching = useSelector((state: RootState) => state.search.isSearching);

  /**
   * Used for catching error in error boundary https://github.com/facebook/react/issues/14981#issuecomment-468460187.
   * Make sure the component or its ascendant
   * is wrapped in withErrorBoundary HOC to throw error safely.
   */
  const [, setErrorBoundary] = useState();

  const debouncedSearchTerm = useDebounce(search, INPUT_DEBOUNCE_DELAY);
  const trimmedSearch = search.trim();
  const searchTerm = trimmedSearch ? `${debouncedSearchTerm} in:name` : DEFAULT_SEARCH_TERM;

  useEffect(() => {
    (async () => {
      try {
        await dispatch(loadRepos(searchTerm, currentPage));
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

  useEffect(() => {
    dispatch(setIsSearching(true));
  }, [dispatch, trimmedSearch, currentPage]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentPage(FIRST_PAGE));
    dispatch(setSearchTerm(e.target.value));
  };

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
      <input
        id={id}
        type="text"
        value={search}
        placeholder={t('repo_search')}
        onChange={onChange}
        className="search-input"
        aria-label="search"
      />
      {renderHint()}
    </section>
  );
};

export default SearchInput;
