/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REPOS_PER_PAGE } from 'utils/consts';
import { saveInSessionStorage } from 'utils/helpers';

type IRepos = { totalPages: number, currentPage: number };

const initialState: IRepos = {
  totalPages: 1,
  currentPage: parseInt(sessionStorage.currentPage, 10) || 1,
};

const pageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;

      saveInSessionStorage('currentPage', state.currentPage.toString());

      return state;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      const total_count = action.payload;
      state.totalPages = Math.ceil(total_count / REPOS_PER_PAGE);

      return state;
    },
  },
});

export const {
  setCurrentPage,
  setTotalPages,
} = pageSlice.actions;

export default pageSlice.reducer;
