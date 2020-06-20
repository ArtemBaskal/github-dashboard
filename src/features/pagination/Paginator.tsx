import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { FIRST_PAGE, MAX_SEARCH_PAGE } from 'utils/consts';
import { RootState } from 'app/rootReducer';
import { generatePagesNumeration } from 'utils/helpers';
import { setCurrentPage } from 'features/pagination/pageSlice';
import 'features/pagination/Paginator.css';

const Paginator = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { totalPages, currentPage } = useSelector((state: RootState) => state.pages, shallowEqual);
  const isSearching = useSelector((state: RootState) => state.search.isSearching);

  const isFirstPage = currentPage === FIRST_PAGE;
  const isLastPage = currentPage === totalPages;
  const isSearchEdgePage = currentPage === MAX_SEARCH_PAGE;
  const noPages = totalPages === 0;

  const increaseCurrentPage = () => dispatch(setCurrentPage(currentPage + 1));
  const decreaseCurrentPage = () => dispatch(setCurrentPage(currentPage - 1));

  const paginator = generatePagesNumeration(currentPage, totalPages).map((idx) => {
    const isNumber = typeof idx === 'number';
    const displayPage = isNumber ? idx as number + 1 : '...';

    const handleClick = () => dispatch(setCurrentPage(displayPage as number));

    const isCurrentPage = displayPage === currentPage;
    const pageClass = classNames('paginator__button', { 'paginator__button--pressed': isCurrentPage });

    return (
      <button
        key={idx}
        type="button"
        onClick={handleClick}
        className={pageClass}
        disabled={isSearching || isCurrentPage || !isNumber || displayPage > MAX_SEARCH_PAGE}
      >
        {displayPage}
      </button>
    );
  });

  return (
    totalPages > 1 ? (
      <div className="paginator__container">
        <button
          className="paginator__button"
          type="button"
          disabled={isFirstPage || noPages || isSearching}
          onClick={decreaseCurrentPage}
        >
          {t('previous')}
        </button>
        {paginator}
        <button
          className="paginator__button"
          type="button"
          disabled={isLastPage || noPages || isSearching || isSearchEdgePage}
          onClick={increaseCurrentPage}
        >
          {t('next')}
        </button>
      </div>
    ) : <></>
  );
};

export default Paginator;
