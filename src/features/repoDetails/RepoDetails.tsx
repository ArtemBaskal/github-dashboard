import React, { useEffect } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Link } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TOP_CONTRIBUTORS_QUANTITY, ROUTES } from '../../utils/consts';
import { loadRepoDetails, resetRepoDetails } from './repoDetailsSlice';
import { RootState } from '../../app/rootReducer';
import RepoInfo from '../../components/RepoInfo';
import Profile from '../../components/Profile';
import './RepoDetails.css';

type IProps = { id: string }

const RepoDetails = React.memo((props: RouteChildrenProps<IProps>) => {
  const { location: { pathname } } = props;
  const id = pathname.replace(/^\//, '');

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const repoDetails = useSelector((state: RootState) => state.repoDetails, shallowEqual);
  const {
    name, stargazers_count, updated_at, language,
    description, owner, contributors, html_url,
  } = repoDetails;

  useEffect((): () => void => {
    dispatch(loadRepoDetails(id));
    return () => dispatch(resetRepoDetails());
  }, [dispatch, id]);

  return (
    <div className="repo-details__container">
      {Object.keys(repoDetails).length === 0
        ? <h4 className="repo-details__loader">{t('loading')}</h4>
        : (
          <>
            <h3 className="repo-details__link--main-page">
              <Link to={ROUTES.MAIN}>{t('to_main_page')}</Link>
            </h3>
            <RepoInfo
              name={name}
              stargazers_count={stargazers_count}
              updated_at={updated_at}
              html_url={html_url}
            />
            {owner && (
            <>
              {t('owner')}
              <Profile {...owner} />
              {language && <span className="repo-details__language">{language}</span>}
            </>
            )}
            <div className="repo-details__description">{description}</div>
            {contributors && contributors.length > 1 && (
            <>
              <h4 className="repo-details__header--contributors">{t('top_contributors')}</h4>
              <ul className="contributors__container">
                {contributors.slice(0, TOP_CONTRIBUTORS_QUANTITY).map((
                  contributor,
                ) => <li key={contributor.login}><Profile {...contributor} /></li>)}
              </ul>
            </>
            )}
          </>
        )}
    </div>
  );
});

export default RepoDetails;
