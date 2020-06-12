import React from 'react';
import { Repo } from './types';
import { formatDate } from '../../utils/helpers';

const ReposListItem = ({
  name, stargazers_count, updated_at, html_url,
}: Repo) => (
  <>
    <li>
      <div>{name}</div>
      <div>
        {stargazers_count}
        {' '}
        &#9734;
      </div>
      <div>{`Последний коммит: ${formatDate(updated_at)}`}</div>
      <a href={html_url}>{html_url}</a>
    </li>
    <br />
  </>
);

export default ReposListItem;
