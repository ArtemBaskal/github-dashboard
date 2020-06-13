import React, { useEffect } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../utils/consts';
import { loadRepoDetails } from './repoDetailsSlice';
import { RootState } from '../../app/rootReducer';

type IProps = { id: string }

const RepoDetails = React.memo((props: RouteChildrenProps<IProps>) => {
  const { location: { pathname } } = props;
  const dispatch = useDispatch();
  const repoDetails = useSelector((state: RootState) => state.repoDetails);
  console.log('name stargazers_count updated_at owner.avatar_url owner.url owner.login language description contributors_url');
  console.log(repoDetails);

  const id = pathname.slice(1, -1);

  useEffect(() => {
    dispatch(loadRepoDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Link to={ROUTES.MAIN}>На главную</Link>
      <br />
      <div>{pathname.slice(1, -1)}</div>
    </>
  );
});

export default RepoDetails;
