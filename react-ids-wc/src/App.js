import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as Components from './examples';
import Home from './home';
import { routes } from './settings/routes';

import 'ids-enterprise-wc/ids-container/ids-container';

const App = () => {
  return (
    <ids-container>
      <Router>
        <Routes>
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
        </Routes>
      </Router>
    </ids-container>
  );
};

export default App;
