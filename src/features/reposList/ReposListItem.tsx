import React from 'react';

interface RepoProps {
    name: string,
}

const ReposListItem = ({ name }: RepoProps) => <li>{name}</li>;

export default ReposListItem;
