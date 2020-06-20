import { PAGINATION_BUTTONS_COUNT, MAX_SEARCH_PAGE, DEFAULT_DATE_FORMAT_OPTIONS } from 'utils/consts';
import log from 'utils/log';

export const generatePagesNumeration = (
  current: number, total: number, width: number = PAGINATION_BUTTONS_COUNT,
) => {
  // eslint-disable-next-line no-param-reassign
  total = total > MAX_SEARCH_PAGE ? MAX_SEARCH_PAGE : total;
  const length = total < width ? total : width;
  const left = Math.max(0, Math.min(total - width, current - Math.floor(width / 2)));

  const items: (number | string)[] = Array.from({ length }, (item, idx) => idx + left);

  if (items[0] > 0) {
    items.splice(0, 2, 0, 'prev-more');
  }

  if (items[items.length - 1] < total - 1) {
    items.splice(items.length - 1, 2, 'next-more', total - 1);
  }
  return items;
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
