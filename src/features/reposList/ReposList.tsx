import React from 'react'
import ReposListItem from './ReposListItem'
import {RootState} from 'app/rootReducer';
import {useSelector} from 'react-redux';

const ReposList = (): JSX.Element => {
    const repos = useSelector((state: RootState) => state.repos);

    return <ul>{repos.map(({id, name}) => <ReposListItem key={id} name={name} />)}</ul>;
}

export default ReposList;
