import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { FIRST_PAGE } from '../../utils/consts';
import { RootState } from '../../app/rootReducer';
import { getPageNumbers } from '../../utils/helpers';
import { setCurrentPage } from './pageSlice';

const Paginator = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const totalPages = useSelector((state: RootState) => state.pages.totalPages);
  const page = useSelector((state: RootState) => state.pages.currentPage);
  const isSearching = useSelector((state: RootState) => state.search.isSearching);

  const isFirstPage = page === FIRST_PAGE;
  const isLastPage = page === totalPages;

  const increaseCurrentPage = () => dispatch(setCurrentPage(page as number + 1));
  const decreaseCurrentPage = () => dispatch(setCurrentPage(page as number - 1));

  const paginator = getPageNumbers(page as number, totalPages as number).map((idx) => {
    const handleClick = () => dispatch(setCurrentPage(idx));
    const isCurrentPage = idx === page;
    const pageClassName = classNames({ 'paginator--current-page': isCurrentPage });

    return (
      <button
        key={idx}
        type="button"
        onClick={handleClick}
        className={pageClassName}
        disabled={isSearching || isCurrentPage}
      >
        {idx}
      </button>
    );
  });

  return (
    <div>
      <button type="button" disabled={isFirstPage || isSearching} onClick={decreaseCurrentPage}>{t('previous')}</button>
      {paginator}
      <button type="button" disabled={isLastPage || isSearching} onClick={increaseCurrentPage}>{t('next')}</button>
    </div>
  );
};

export default Paginator;
