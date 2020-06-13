import React from 'react';
import './App.css';
import ReposList from 'features/reposList/ReposList';
import SearchInput from 'features/search/SearchInput';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Paginator from '../features/pagination/Paginator';
import RepoDetails from '../features/repoDetails/repoDetails';
import NotFoundPage from '../components/NotFoundPage';
import { ROUTES } from '../utils/consts';

const App = () => (
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
);

export default App;
