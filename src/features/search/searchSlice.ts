/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveInSessionStorage } from 'utils/helpers';

type IRepos = { isSearching: boolean, searchTerm: string };

const initialState: IRepos = { isSearching: true, searchTerm: sessionStorage.searchTerm || '' };

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

      saveInSessionStorage('searchTerm', state.searchTerm);

      return state;
    },
  },
});

export const {
  setIsSearching,
  setSearchTerm,
} = searchSlice.actions;

export default searchSlice.reducer;
