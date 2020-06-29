import axios from 'axios';
import { Repo, Contributor } from 'features/reposList/types';
import { REPOS_PER_PAGE, PROJECT_REPO_LINK, CONTRIBUTORS_PER_PAGE } from 'utils/consts';
import log from 'utils/log';

const SEARCH_URL_BASE = 'https://api.github.com/search/repositories';
const REPO_URL_BASE = 'https://api.github.com/repositories';

export interface GetReposResponse {
    incomplete_results: boolean,
    items: Repo[],
    total_count: number,
}

interface IConfig {
    params: {
        q: string,
        page?: number,
        sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated',
        order?: 'desc' | 'asc',
        per_page?: number,
    },
    headers?: {
        [key: string]: string,
    },
}

export const fetchRepos = async (q: string, page: number): Promise<GetReposResponse | string> => {
  try {
    const config: IConfig = {
      params: {
        q,
        page,
        sort: 'stars',
        order: 'desc',
        per_page: REPOS_PER_PAGE,
      },
    };

    const response = await axios.get<GetReposResponse>(SEARCH_URL_BASE, config);

    return response.data;
  } catch (e) {
    log.error(e);
    return e.message;
  }
};

export const fetchRepoDetails = async (id: string): Promise<Repo | string> => {
  try {
    const response = await axios.get<Repo>(`${REPO_URL_BASE}/${id}`);

    return response.data;
  } catch (e) {
    log.error(e);
    return e.message;
  }
};

/**
 * https://developer.github.com/v3/repos/#list-repository-contributors
 *
 * Lists contributors to the specified repository and
 * sorts them by the number of commits per contributor in descending order.
 */
export const fetchContributors = async (url: string): Promise<Contributor[] | string> => {
  try {
    const config = {
      params: {
        per_page: CONTRIBUTORS_PER_PAGE,
      },
    };

    const response = await axios.get<Contributor[]>(url, config);

    return response.data;
  } catch (e) {
    log.error(e);
    return e.message;
  }
};

/**
 *  https://developer.github.com/v3/repos/#list-repository-languages
 */
export const fetchLanguages = async (url: string): Promise<string[] | [] | string> => {
  try {
    const response = await axios.get<{[key:string]: number}>(url);

    return Object.keys(response.data);
  } catch (e) {
    log.error(e);
    return e.message;
  }
};

axios.interceptors.request.use((config: Partial<IConfig> = {}) => {
  try {
    // eslint-disable-next-line global-require
    const { GITHUB_OAUTH_TOKEN } = require('secret.json');

    if (!GITHUB_OAUTH_TOKEN) {
      throw new Error('No github OAuth Access Token provided or config field key "GITHUB_OAUTH_TOKEN" is misspelled.');
    }

    // eslint-disable-next-line no-param-reassign
    config.headers = { ...config.headers, Authorization: `token ${GITHUB_OAUTH_TOKEN}` };
  } catch (e) {
    log.error(e);
    log.error(`Read the README Access token section for more details: ${PROJECT_REPO_LINK}#access-token`);
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return config;
  }
});
