import { combineReducers } from '@reduxjs/toolkit';

import repos from 'features/reposList/reposSlice';
import pages from 'features/pagination/pageSlice';
import search from 'features/search/searchSlice';
import repoDetails from 'features/repoDetails/repoDetailsSlice';
import errorHandler from 'features/errorHandler/errorHandlerSlice';
import i18n from 'features/i18n/i18nSlice';

const rootReducer = combineReducers({
  repos, pages, search, repoDetails, i18n, errorHandler,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
