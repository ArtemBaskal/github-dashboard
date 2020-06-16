/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from 'app/store';
import { fetchRepoDetails, fetchContributors } from 'api/githubAPI';
import { Repo, Contributor } from 'features/reposList/types';

const initialState: Partial<Repo> = {};

const repoDetailSlice = createSlice({
  name: 'repoDetail',
  initialState,
  reducers: {
    getRepoDetails: (state, action: PayloadAction<Repo>): Repo => action.payload,
    getRepoContributors: (state, action: PayloadAction<Contributor[]>): Repo => {
      state.contributors = action.payload;

      return state as Repo;
    },
    resetRepoDetails: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { resetRepoDetails } = repoDetailSlice.actions;

export const loadRepoDetails = (id: string): AppThunk => async (dispatch: AppDispatch) => {
  const repoDetails = await fetchRepoDetails(id);

  if (typeof repoDetails === 'string') {
    throw repoDetails;
  }

  const { contributors_url } = repoDetails;
  dispatch(repoDetailSlice.actions.getRepoDetails(repoDetails));

  const repoContributors = await fetchContributors(contributors_url!);
  dispatch(repoDetailSlice.actions.getRepoContributors(repoContributors));
};

export default repoDetailSlice.reducer;
