/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18n from 'utils/i18n';

const initialState = { currentLocale: i18n.language };

const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setCurrentLocale: (state, action: PayloadAction<string>) => {
      state.currentLocale = action.payload;

      return state;
    },
  },
});

export const {
  setCurrentLocale,
} = i18nSlice.actions;

export default i18nSlice.reducer;
