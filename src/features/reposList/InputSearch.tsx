import React, {useEffect, useState} from "react";
import {loadRepos} from "./reposSlice";
import {useDispatch} from "react-redux";

const InputSearch = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('initial');

    useEffect(() => {
        dispatch(loadRepos(`name=${search}`));
    }, [])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);

        if (search) {
            dispatch(loadRepos(`name=${search}`));
        }
    };
    return <input
        type='text'
        value={search}
        placeholder='Поиск репозитория'
        onChange={onChange}
    />;
}

export default InputSearch;
