export const INPUT_DEBOUNCE_DELAY = 500;

export const REPOS_PER_PAGE = 10;

export const TOP_CONTRIBUTORS_QUANTITY = 10;

export const FIRST_PAGE = 1;

export const DEFAULT_SEARCH_TERM = 'stars:>100000';

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
