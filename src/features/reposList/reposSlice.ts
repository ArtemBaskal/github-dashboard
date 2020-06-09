import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AppThunk, AppDispatch} from 'app/store'
import {fetchRepos} from 'api/jsonstore';
import {Repo} from 'features/reposList/types';

const initialState: Repo[] = [];

const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        fetchRepos: (state, action: PayloadAction<Repo[]>) => action.payload,
    }
});

export const loadRepos = (q: string): AppThunk => async (dispatch: AppDispatch) => {
    const repos = await fetchRepos(q);
    dispatch(reposSlice.actions.fetchRepos(repos))
}

export default reposSlice.reducer;
