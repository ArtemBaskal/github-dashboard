import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from 'app/store';
import { fetchRepoDetails } from 'api/githubAPI';
import { Repo } from 'features/reposList/types';

// TODO: fix to Repo
const initialState: any = {};

const repoDetailSlice = createSlice({
  name: 'repoDetail',
  initialState,
  reducers: {
    getRepoDetails: (state, action: PayloadAction<Repo>): Repo => action.payload,
  },
});

export const loadRepoDetails = (id: string): AppThunk => async (dispatch: AppDispatch) => {
  const repoDetails = await fetchRepoDetails(id);
  console.log(repoDetails);

  dispatch(repoDetailSlice.actions.getRepoDetails(repoDetails));
};

export default repoDetailSlice.reducer;
