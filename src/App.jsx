import React from 'react';
import {
    Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.scss';

import Home from './pages/Home';
import Movie from './pages/Movie';

import { history } from './utils/navigationHelpers';
import { HOME_ROUTE, MOVIE_ROUTE_WITH_ID } from './constants/AppRoutes';

const queryClient = new QueryClient();

const App = () => (
    <div className="App">
        <QueryClientProvider client={queryClient}>
            <Router history={history}>
                <Switch>
                    <Route exact path={MOVIE_ROUTE_WITH_ID} component={Movie} />
                    <Route exact path={HOME_ROUTE} component={Home} />
                    <Route exact path='/'>
                        <Redirect to={HOME_ROUTE} />
                    </Route>
                </Switch>
            </Router>
        </QueryClientProvider>
    </div>
);

export default App;
