import axios from 'axios';
import { Repo, Contributor } from 'features/reposList/types';
import { REPOS_PER_PAGE } from 'utils/consts';
import log from 'utils/log';

const SEARCH_URL = 'https://api.github.com/search/repositories';
const REPO_URL = 'https://api.github.com/repositories';

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
    headers: {
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
      headers: {},
    };

    const response = await axios.get<GetReposResponse>(SEARCH_URL, config);

    return response.data;
  } catch (e) {
    log.error(e);
    return e.message;
  }
};

export const fetchRepoDetails = async (id: string): Promise<Repo | string> => {
  try {
    const response = await axios.get<Repo>(`${REPO_URL}/${id}`);

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
    const response = await axios.get<Contributor[]>(url);

    return response.data;
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
      throw new Error('Read the README Access token section for more details: https://github.com/ArtemBaskal/github-dashboard#access-token');
    }

    // eslint-disable-next-line no-param-reassign
    config.headers = { ...config.headers, Authorization: `token ${GITHUB_OAUTH_TOKEN}` };
  } catch (e) {
    log.error(e);
    log.error('Read the README Access token section for more details: https://github.com/ArtemBaskal/github-dashboard#access-token');
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return config;
  }
});
