import React from 'react';
import { Link } from 'react-router-dom';
import { Repo } from './types';
import { formatDate } from '../../utils/helpers';

const ReposListItem = ({
  id, name, stargazers_count, updated_at, html_url,
}: Repo) => (
  <>
    <li>
      <Link to={id.toString()}>{name}</Link>
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
