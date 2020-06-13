import React, { useEffect } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Link } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CONTRIBUTORS_IN_DETAILS, ROUTES } from '../../utils/consts';
import { loadRepoDetails, resetRepoDetails } from './repoDetailsSlice';
import { RootState } from '../../app/rootReducer';
import { Contributor } from '../reposList/types';
import RepoInfo from '../../components/RepoInfo';

type IProps = { id: string }

const RepoDetails = React.memo((props: RouteChildrenProps<IProps>) => {
  const { location: { pathname } } = props;
  const id = pathname.replace(/^\//, '');

  const dispatch = useDispatch();

  const repoDetails = useSelector((state: RootState) => state.repoDetails, shallowEqual);
  const {
    name, stargazers_count, updated_at, language,
    description, owner, contributors,
  } = repoDetails;

  useEffect((): () => void => {
    dispatch(loadRepoDetails(id));
    return () => dispatch(resetRepoDetails());
  }, [dispatch, id]);

  const renderProfile = ({
    avatar_url, html_url, login, contributions,
  }: Partial<Contributor>) => (
    <>
      <div><a href={html_url}>{login}</a></div>
      <img src={avatar_url} alt="avatar" loading="lazy" />
      {contributions && <p>{contributions}</p>}
    </>
  );

  return (
    <>
      {Object.keys(repoDetails).length === 0
        ? <h5>Загрузка...</h5>
        : (
          <>
            <Link to={ROUTES.MAIN}>На главную</Link>
            <RepoInfo
              name={name}
              stargazers_count={stargazers_count}
              updated_at={updated_at}
            />
            {owner && (
            <>
              Владелец:
              {renderProfile(owner)}
            </>
            )}
            <div>{language}</div>
            <div>{description}</div>
            {contributors && contributors.length > 1 && (
            <>
              <h4>Контрибьютеры:</h4>
              <ul>
                {contributors.slice(0, CONTRIBUTORS_IN_DETAILS).map((
                  contributor,
                ) => <li key={contributor.login}>{renderProfile(contributor)}</li>)}
              </ul>
            </>
            )}
          </>
        )}
    </>
  );
});

export default RepoDetails;
