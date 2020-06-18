import React, { Suspense, lazy } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ROUTES } from 'utils/consts';
import Footer from 'components/Footer';
import Loading from 'components/Loading';
import Header from 'components/Header';
import 'app/main.css';
import 'app/App.css';

const MainPage = lazy(() => import('components/MainPage'));
const NotFoundPage = lazy(() => import('components/NotFoundPage'));
const RepoDetails = lazy(() => import('features/repoDetails/RepoDetails'));

// TODO: cache api calls https://developer.github.com/v3/#conditional-requests
// TODO: describe script in readme
// TODO: add smooth scroll on repo details open?
// TODO: add black theme?
const App = () => (
  <article>
    <main className="container">
      <Router>
        <Header />
        <Suspense fallback={<Loading />}>
          <div className="main-content">
            <Switch>
              <Route path={ROUTES.MAIN} exact component={MainPage} />
              <Route path={ROUTES.REPO_CARD} exact component={RepoDetails} />
              <Route path={ROUTES.NOT_FOUND} component={NotFoundPage} />
            </Switch>
          </div>
        </Suspense>
      </Router>
    </main>
    <Footer />
  </article>
);

export default App;
