import React from 'react';

import { categories, routes } from '../settings/routes';

const Home = () => {
  return (
    <ids-layout-grid auto-fit="true" gap="md">
      <ids-layout-grid-cell>
        {Object.values(categories).map(category => (
          <div key={category}>
            <ids-layout-grid auto-fit="true" padding="md">
              <ids-text type="h1" font-size="24">
                {category}
              </ids-text>
            </ids-layout-grid>
            <ids-layout-grid auto-fit="true">
              <ids-layout-grid-cell>
                <ids-block-grid align="center">
                  {routes
                    .filter(route => route.category === category)
                    .map(({ route, title }) => (
                      <ids-block-grid-item key={route}>
                        <ids-card
                          actionable="true"
                          height="65"
                          href={`/${route}`}
                          target="_self"
                        >
                          <div slot="card-content">
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
                      </ids-block-grid-item>
                    ))}
                </ids-block-grid>
              </ids-layout-grid-cell>
            </ids-layout-grid>
          </div>
        ))}
      </ids-layout-grid-cell>
    </ids-layout-grid>
  );
};

export default Home;
