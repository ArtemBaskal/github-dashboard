import { REPOS_PER_PAGE, DEFAULT_DATE_FORMAT_OPTIONS } from 'utils/consts';
import log from 'utils/log';

export const getPageNumbers = (
  page: number, totalPages: number, reposPerPage: number = REPOS_PER_PAGE,
) => {
  const shift = Math.floor(reposPerPage / 2);
  const maybeLeftmost = page > shift ? page - shift : 0;
  const maybeRightmost = maybeLeftmost + reposPerPage;

  const rightmost = maybeRightmost < totalPages ? maybeRightmost : totalPages;
  const rightmostShifted = rightmost > reposPerPage ? rightmost - REPOS_PER_PAGE : rightmost;

  const leftmost = maybeLeftmost < rightmostShifted ? maybeLeftmost : rightmostShifted;

  const pages = [];
  for (let i = leftmost; i < rightmost; i += 1) {
    pages.push(i + 1);
  }

  return pages;
};

export const formatDate = (
  dateTime: string, language: string = navigator.language, options = DEFAULT_DATE_FORMAT_OPTIONS,
) => new Date(dateTime).toLocaleString(language, options);

export const saveInSessionStorage = (key: string, value: string): string => {
  try {
    sessionStorage[key] = value;
    return value;
  } catch (e) {
    log.error(e);
    log.error('The limit of sessionStorage is exceeded and it will be cleared.');
    localStorage.clear();
    sessionStorage[key] = value;
    return value;
  }
};
