import {combineReducers} from '@reduxjs/toolkit'

import repos from 'features/reposList/reposSlice';

const rootReducer = combineReducers({repos})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
