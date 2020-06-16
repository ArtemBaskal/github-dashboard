import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from 'app/store';
import { fetchRepos } from 'api/githubAPI';
import { Repo } from 'features/reposList/types';
import { setTotalPages } from 'features/pagination/pageSlice';

type IRepos = Repo[];

const initialState: IRepos = [];

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    fetchRepos: (state, action: PayloadAction<Repo[]>): IRepos => action.payload,
  },
});

export const loadRepos = (q: string, page: number): AppThunk => async (dispatch: AppDispatch) => {
  const repos = await fetchRepos(q, page);

  if (typeof repos === 'string') {
    throw repos;
  }

  dispatch(reposSlice.actions.fetchRepos(repos.items));
  dispatch(setTotalPages(repos.total_count));
};

export default reposSlice.reducer;
