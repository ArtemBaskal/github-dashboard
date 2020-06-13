import { REPOS_PER_PAGE, DEFAULT_DATE_FORMAT_OPTIONS } from './consts';

// TODO: simplify
export const getPageNumbers = (page: number, totalPages: number) => {
  const shift = Math.floor(REPOS_PER_PAGE / 2);
  const maybeLeftmost = page > shift ? page - shift : 0;
  const maybeRightmost = maybeLeftmost + REPOS_PER_PAGE;

  const rightmost = maybeRightmost < totalPages ? maybeRightmost : totalPages;
  const rightmostShifted = rightmost > REPOS_PER_PAGE ? rightmost - REPOS_PER_PAGE : rightmost;

  const leftmost = maybeLeftmost < rightmostShifted ? maybeLeftmost : rightmostShifted;

  const pages = [];
  for (let i = leftmost; i < rightmost; i += 1) {
    pages.push(i + 1);
  }

  return pages;
};

export const formatDate = (
  dateTime: string, options = DEFAULT_DATE_FORMAT_OPTIONS,
) => new Date(dateTime).toLocaleString(navigator.language, options);

export const saveInSessionStorage = (name: string, content: string) => {
  try {
    sessionStorage[name] = content;
  } catch (e) {
    console.error(e);
    console.error('The limit of sessionStorage is exceeded and it will be cleared.');
    localStorage.clear();
    sessionStorage[name] = content;
  }
};
