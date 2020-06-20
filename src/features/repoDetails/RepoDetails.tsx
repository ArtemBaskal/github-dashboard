import React, { useEffect, useState } from 'react';
import { RouteChildrenProps } from 'react-router';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from 'app/rootReducer';
import RepoInfo from 'components/RepoCard';
import Profile from 'components/Profile';
import Loading from 'components/Loading';
import MainPageLink from 'components/MainPageLink';
import withErrorBoundary from 'utils/HOCs/withErrorBoundary';
import { loadRepoDetails, resetRepoDetails } from 'features/repoDetails/repoDetailsSlice';
import 'features/repoDetails/RepoDetails.css';

type IProps = {}

const RepoDetails = React.memo((props: RouteChildrenProps<IProps>) => {
  const { location: { pathname } } = props;
  const id = pathname.replace(/^\//, '');

  const dispatch = useDispatch();
  const { t } = useTranslation();

  /**
   * Used for catching error in error boundary https://github.com/facebook/react/issues/14981#issuecomment-468460187.
   * Make sure the component or its ascendant
   * is wrapped in withErrorBoundary HOC to throw error safely.
   */
  const [, setErrorBoundary] = useState();

  const repoDetails = useSelector((state: RootState) => state.repoDetails, shallowEqual);
  const {
    name, stargazers_count, updated_at, languages,
    description, owner, contributors, html_url,
    isFetchingContributors, isFetchingLanguages,
  } = repoDetails;

  useEffect(() => {
    (async () => {
      try {
        await dispatch(loadRepoDetails(id));
      } catch (error) {
        setErrorBoundary(() => {
          throw error;
        });
      }
    })();

    return () => {
      dispatch(resetRepoDetails());
    };
  }, [dispatch, id]);

  return (
    <div className="repo-details__container">
      {Object.keys(repoDetails).length === 0
        ? <Loading text={t('loading')} />
        : (
          <>
            <MainPageLink />
            <RepoInfo
              name={name}
              stargazers_count={stargazers_count}
              updated_at={updated_at}
              html_url={html_url}
            />
            {owner && (
            <section className="repo-details__owner">
              <h3 className="repo-details__owner--header">{t('owner')}</h3>
              <Profile {...owner} />
                {!isFetchingLanguages && languages && languages.map((language) => (
                  <span key={language} className="repo-details__language" title={language}>{language}</span>
                ))}
                {(isFetchingContributors || isFetchingLanguages)
                  ? <h3>{t('fetching')}</h3>
                  : <p className="repo-details__description">{description}</p>}
            </section>
            )}
            {!isFetchingContributors && contributors && contributors.length > 1 && (
            <article>
              <h3 className="repo-details__header--contributors">{t('top_contributors')}</h3>
              <ul className="contributors__container">
                {contributors.map((
                  contributor,
                ) => <li key={contributor.login}><Profile {...contributor} /></li>)}
              </ul>
            </article>
            )}
          </>
        )}
    </div>
  );
});

export default withErrorBoundary(RepoDetails);
