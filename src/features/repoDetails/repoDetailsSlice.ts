/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from 'app/store';
import { fetchRepoDetails, fetchContributors, fetchLanguages } from 'api/githubAPI';
import { Repo, Contributor } from 'features/reposList/types';
import { TOP_CONTRIBUTORS_QUANTITY } from 'utils/consts';

type Fetching = {
    isFetchingContributors?: boolean,
    isFetchingLanguages?: boolean
};

const initialState: Partial<Repo> & Fetching = {
  isFetchingContributors: true,
  isFetchingLanguages: true,
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
        description,
        owner: {
          id: owner_id, html_url: owner_html_url, login, avatar_url,
        },
        html_url,
      } = action.payload;

      state = {
        id,
        name,
        stargazers_count,
        updated_at,
        description,
        html_url,
        owner: {
          id: owner_id, html_url: owner_html_url, login, avatar_url,
        },
      };

      state.isFetchingContributors = true;
      state.isFetchingLanguages = true;

      return state as Repo;
    },
    getRepoContributors: (state, action: PayloadAction<Contributor[]>): Repo => {
      state.contributors = action.payload.slice(0, TOP_CONTRIBUTORS_QUANTITY).map(({
        id, html_url, login, avatar_url, contributions,
      }) => ({
        id, html_url, login, avatar_url, contributions,
      }));

      state.isFetchingContributors = false;

      return state as Repo;
    },
    getRepoLanguages: (state, action: PayloadAction<string[]>): Repo => {
      state.languages = action.payload;
      state.isFetchingLanguages = false;

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

  const { contributors_url, languages_url } = repoDetails;
  const [repoContributors, repoLanguages] = await Promise
    .all([fetchContributors(contributors_url), fetchLanguages(languages_url)]);

  if (typeof repoContributors === 'string') {
    throw repoContributors;
  } else {
    dispatch(repoDetailSlice.actions.getRepoContributors(repoContributors));
  }

  if (typeof repoLanguages === 'string') {
    throw repoContributors;
  } else {
    dispatch(repoDetailSlice.actions.getRepoLanguages(repoLanguages));
  }
};

export default repoDetailSlice.reducer;
