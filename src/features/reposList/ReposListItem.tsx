import React from 'react';
import { Repo } from './types';

const ReposListItem = ({
  name, stargazers_count, updated_at, html_url,
}: Repo) => (
  <>
    <li>
      <div>{name}</div>
      <div>{`Количестов звёзд: ${stargazers_count}`}</div>
      <div>{`Последний коммит: ${updated_at}`}</div>
      <a href={html_url}>{html_url}</a>
    </li>
    <br />
  </>
);

export default ReposListItem;
