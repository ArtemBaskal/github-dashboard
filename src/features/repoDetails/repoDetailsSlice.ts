/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from 'app/store';
import { fetchRepoDetails, fetchContributors } from 'api/githubAPI';
import { Repo, Contributor } from 'features/reposList/types';

const initialState: Partial<Repo> & { isFetchingContributors?: boolean } = {
  isFetchingContributors: true,
};

const repoDetailSlice = createSlice({
  name: 'repoDetails',
  initialState,
  reducers: {
    getRepoDetails(state, action: PayloadAction<Repo>): Repo {
      const {
        id,
        name,
        stargazers_count,
        updated_at,
        language,
        description,
        owner,
        contributors,
        html_url,
      } = action.payload;

      state = {
        id,
        name,
        stargazers_count,
        updated_at,
        language,
        description,
        owner,
        contributors,
        html_url,
      };

      return state as Repo;
    },
    getRepoContributors: (state, action: PayloadAction<Contributor[]>): Repo => {
      state.contributors = action.payload;
      state.isFetchingContributors = false;

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
  } else {
    dispatch(repoDetailSlice.actions.getRepoDetails(repoDetails));
  }

  const repoContributors = await fetchContributors(repoDetails.contributors_url!);

  if (typeof repoContributors === 'string') {
    throw repoContributors;
  } else {
    dispatch(repoDetailSlice.actions.getRepoContributors(repoContributors));
  }
};

export default repoDetailSlice.reducer;
