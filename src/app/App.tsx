import React, { Suspense, lazy } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ROUTES } from 'utils/consts';
import Footer from 'components/Footer';
import Loading from 'components/Loading';
import 'app/main.css';
import 'app/App.css';

const MainPage = lazy(() => import('components/MainPage'));
const NotFoundPage = lazy(() => import('components/NotFoundPage'));
const RepoDetails = lazy(() => import('features/repoDetails/RepoDetails'));

// TODO: add aria attributes for accessibility
// TODO: add black theme
// TODO: cache api calls https://developer.github.com/v3/#conditional-requests
const App = () => (
  <>
    <div className="container">
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path={ROUTES.MAIN} exact component={MainPage} />
            <Route path={ROUTES.REPO_CARD} exact component={RepoDetails} />
            <Route path={ROUTES.NOT_FOUND} component={NotFoundPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
    <Footer />
  </>
);

export default App;
