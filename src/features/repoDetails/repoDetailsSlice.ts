import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from 'app/store';
import { fetchRepoDetails, fetchContributors } from 'api/githubAPI';
import { Repo, Contributor } from 'features/reposList/types';
import { setErrorMessage } from 'features/errorHandler/errorHandlerSlice';

const initialState: Partial<Repo> = {};

const repoDetailSlice = createSlice({
  name: 'repoDetail',
  initialState,
  reducers: {
    getRepoDetails: (state, action: PayloadAction<Repo>): Repo => action.payload,
    getRepoContributors: (state, action: PayloadAction<Contributor[]>): Repo => {
      // eslint-disable-next-line no-param-reassign
      state.contributors = action.payload;

      return state as Repo;
    },
    resetRepoDetails: (state) => {
      // eslint-disable-next-line no-param-reassign
      state = initialState;
      return state;
    },
  },
});

export const { resetRepoDetails } = repoDetailSlice.actions;

export const loadRepoDetails = (id: string): AppThunk => async (dispatch: AppDispatch) => {
  const repoDetails = await fetchRepoDetails(id);

  if (typeof repoDetails === 'string') {
    dispatch(setErrorMessage(repoDetails));
    return;
  }

  const { contributors_url } = repoDetails;
  const repoContributors = await fetchContributors(contributors_url!);

  dispatch(repoDetailSlice.actions.getRepoDetails(repoDetails));
  dispatch(repoDetailSlice.actions.getRepoContributors(repoContributors));
};

export default repoDetailSlice.reducer;
