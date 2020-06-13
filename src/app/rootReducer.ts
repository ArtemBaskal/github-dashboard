import { combineReducers } from '@reduxjs/toolkit';

import repos from 'features/reposList/reposSlice';
import pages from 'features/pagination/pageSlice';
import search from 'features/search/searchSlice';
import repoDetails from 'features/repoDetails/repoDetailsSlice';

const rootReducer = combineReducers({
  repos, pages, search, repoDetails,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
