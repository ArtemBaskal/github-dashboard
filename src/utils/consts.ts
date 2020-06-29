export const INPUT_DEBOUNCE_DELAY = 500;

// https://developer.github.com/v3/search/
export const GITHUB_SEARCH_LIMIT = 1000;

export const REPOS_PER_PAGE = 10;

export const CONTRIBUTORS_PER_PAGE = 10;

export const MAX_SEARCH_PAGE = Math.ceil(GITHUB_SEARCH_LIMIT / REPOS_PER_PAGE);

export const PAGINATION_BUTTONS_COUNT = 8;

export const FIRST_PAGE = 1;

export const DEFAULT_SEARCH_TERM = 'stars:>0';

export const DEFAULT_DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
};

export const ROUTES = {
  MAIN: '/',
  REPO_CARD: '/:id',
  NOT_FOUND: '*',
};

export const BASE_LOCALE = 'ru';

export const LANGUAGES = {
  en: { name: 'English', emojiFlag: '🇬🇧' },
  ru: { name: 'Русский', emojiFlag: '🇷🇺' },
};

export const PROJECT_REPO_LINK = 'https://github.com/ArtemBaskal/github-dashboard';

export const DEFAULT_PAGE_TITLE = 'Github Dashboard';
