import React from 'react';
import './main.css';
import './App.css';
import ReposList from 'features/reposList/ReposList';
import SearchInput from 'features/search/SearchInput';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Paginator from '../features/pagination/Paginator';
import RepoDetails from '../features/repoDetails/RepoDetails';
import NotFoundPage from '../components/NotFoundPage';
import { ROUTES } from '../utils/consts';
import Footer from '../components/Footer';

// TODO: add aria attributes for accessibility
const App = () => (
  <>
    <div className="container">
      <Router>
        <Switch>
          <Route path={ROUTES.MAIN} exact>
            <SearchInput />
            <ReposList />
            <Paginator />
          </Route>
          <Route path={ROUTES.REPO_CARD} exact component={RepoDetails} />
          <Route path={ROUTES.NOT_FOUND} component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
    <Footer />
  </>
);

export default App;
