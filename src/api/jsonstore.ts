import axios from 'axios';
import { Repo } from 'features/reposList/types';

const baseUrl = 'https://api.github.com/search/repositories';

interface GetReposResponse {
    incomplete_results: boolean,
    items: Repo[],
    total_count: number,
}

// eslint-disable-next-line import/prefer-default-export
export const fetchRepos = async (q: string): Promise<Repo[]> => {
  try {
    const response = await axios.get<GetReposResponse>(baseUrl,
      {
        params: {
          q,
        },
      });

    return response.data.items;
  } catch (e) {
    console.error(e);
    return e.message;
  }
};
