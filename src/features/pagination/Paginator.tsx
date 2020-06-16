import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { FIRST_PAGE } from 'utils/consts';
import { RootState } from 'app/rootReducer';
import { getPageNumbers } from 'utils/helpers';
import { setCurrentPage } from 'features/pagination/pageSlice';
import 'features/pagination/Paginator.css';

const Paginator = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const totalPages = useSelector((state: RootState) => state.pages.totalPages);
  const page = useSelector((state: RootState) => state.pages.currentPage);
  const isSearching = useSelector((state: RootState) => state.search.isSearching);

  const isFirstPage = page === FIRST_PAGE;
  const isLastPage = page === totalPages;
  const noPages = totalPages === 0;

  const increaseCurrentPage = () => dispatch(setCurrentPage(page as number + 1));
  const decreaseCurrentPage = () => dispatch(setCurrentPage(page as number - 1));

  const paginator = getPageNumbers(page as number, totalPages as number).map((idx) => {
    const handleClick = () => dispatch(setCurrentPage(idx));
    const isCurrentPage = idx === page;
    const pageClass = classNames('paginator__button', { 'paginator__button--pressed': isCurrentPage });

    // TODO: add hashrouting on button press?
    return (
      <button
        key={idx}
        type="button"
        onClick={handleClick}
        className={pageClass}
        disabled={isSearching || isCurrentPage}
      >
        {idx}
      </button>
    );
  });

  return (
        totalPages as number > 0 ? (
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
              disabled={isLastPage || noPages || isSearching}
              onClick={increaseCurrentPage}
            >
              {t('next')}
            </button>
          </div>
        ) : <></>
  );
};

export default Paginator;
