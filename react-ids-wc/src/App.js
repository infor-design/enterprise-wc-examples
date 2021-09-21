import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as Components from './examples';
import Home from './Home';
import { routes } from './settings/routes';

const App = () => {
  return (
    <div className="App" role="main">
      <Router>
        <Switch>
          {routes.map(({ route, name }) => {
            const Component = Components[name];

            return (
              <Route key={route} path={`/${route}`}>
                <Component />
              </Route>
            );
          })}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
