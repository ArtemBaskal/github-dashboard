/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IRepos = { isSearching: boolean, searchTerm: string };

const initialState: IRepos = { isSearching: false, searchTerm: '' };

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;

      return state;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;

      return state;
    },
  },
});

export const {
  setIsSearching,
  setSearchTerm,
} = searchSlice.actions;

export default searchSlice.reducer;
