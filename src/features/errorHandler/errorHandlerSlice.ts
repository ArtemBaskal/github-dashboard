/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ErrorHandler = { errorMessage: string | null }

const initialState: ErrorHandler = { errorMessage: null };

const errorHandler = createSlice({
  name: 'errorHandler',
  initialState,
  reducers: {
    setErrorMessage: (state, action: PayloadAction<string | null>) => {
      state.errorMessage = action.payload;

      return state;
    },
  },
});

export const { setErrorMessage } = errorHandler.actions;

export default errorHandler.reducer;
