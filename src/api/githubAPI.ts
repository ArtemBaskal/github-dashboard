import axios from 'axios';
import { Repo } from 'features/reposList/types';
import { REPOS_PER_PAGE } from '../utils/consts';

const baseUrl = 'https://api.github.com/search/repositories';

export interface GetReposResponse {
    incomplete_results: boolean,
    items: Repo[],
    total_count: number,
}

export const fetchRepos = async (q: string, page: number): Promise<GetReposResponse> => {
  try {
    const response = await axios.get<GetReposResponse>(baseUrl,
      {
        params: {
          q,
          page,
          sort: 'stars',
          order: 'desc',
          per_page: REPOS_PER_PAGE,
        },
      });

    return response.data;
  } catch (e) {
    console.error(e);
    return e.message;
  }
};
