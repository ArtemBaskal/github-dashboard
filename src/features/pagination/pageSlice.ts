/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REPOS_PER_PAGE } from '../../utils/consts';

type IRepos = { totalPages?: number, currentPage?: number };

const initialState: IRepos = { totalPages: 1, currentPage: localStorage.currentPage || 1 };

const pageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;

      try {
        localStorage.currentPage = action.payload;
      } catch (e) {
        console.error(e);
        console.error('Ошибка! В localStorage превышен лимит, оно будет очищено.');
        localStorage.clear();
      }

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
