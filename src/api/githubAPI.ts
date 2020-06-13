import axios from 'axios';
import { Repo } from 'features/reposList/types';
import { REPOS_PER_PAGE } from '../utils/consts';

let GITHUB_OAUTH_TOKEN: string;
try {
  // eslint-disable-next-line global-require
  const secretConfig = require('../secret.json');
  GITHUB_OAUTH_TOKEN = secretConfig.GITHUB_OAUTH_TOKEN;
} catch (e) {
  console.error(e);
  console.error('Read the  README Access token section for more details: https://github.com/ArtemBaskal/github-dashboard#access-token');
}

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
        Authorization?: string,
    },
}

export const fetchRepos = async (q: string, page: number): Promise<GetReposResponse> => {
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

    if (GITHUB_OAUTH_TOKEN) {
      config.headers.Authorization = `token ${GITHUB_OAUTH_TOKEN}`;
    }

    const response = await axios.get<GetReposResponse>(SEARCH_URL, config);

    return response.data;
  } catch (e) {
    console.error(e);
    return e.message;
  }
};

export const fetchRepoDetails = async (id: string): Promise<Repo> => {
  try {
    const response = await axios.get<Repo>(`${REPO_URL}/${id}`);

    return response.data;
  } catch (e) {
    console.error(e);
    return e.message;
  }
};
