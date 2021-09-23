import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../settings/routes';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-block-grid';
import 'ids-enterprise-wc/components/ids-block-grid/ids-block-grid-item';
import 'ids-enterprise-wc/components/ids-card';
import 'ids-enterprise-wc/components/ids-text';

import './example.css';

const Home = () => {
  return (
    <ids-layout-grid auto="true" gap="md">
      <ids-layout-grid-cell>
        <ids-block-grid align="center">
          {routes.map(({ route, title }) => (
            <ids-block-grid-item key={route}>
              <Link to={`/${route}`}>
                <ids-card auto-height="true">
                  <div slot="card-content" className="main-list">
                    <ids-text
                      type="h2"
                      font-size="16"
                      font-weight="bold"
                      color="slate-100"
                    >
                      {title}
                    </ids-text>
                  </div>
                </ids-card>
              </Link>
            </ids-block-grid-item>
          ))}
        </ids-block-grid>
      </ids-layout-grid-cell>
    </ids-layout-grid>
  );
};

export default Home;
