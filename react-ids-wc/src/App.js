import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as Examples from './examples';
import Home from './home';
import { routes } from './settings/routes';

import './index.css';

import 'ids-enterprise-wc/ids-container/ids-container';

const App = () => {
  return (
    <ids-container>
      <Router>
        <Routes>
          {routes.map(({ route, name }) => {
            const Element = Examples[name];

            if (!Element) return null;

            return (
              <Route key={route} path={`/${route}`} element={<Element />} />
            );
          })}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ids-container>
  );
};

export default App;
