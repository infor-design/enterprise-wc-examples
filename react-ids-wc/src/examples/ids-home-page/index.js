import React from 'react';
import 'ids-enterprise-wc/components/ids-home-page/ids-home-page';

const IdsHomePage = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Home Page
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-home-page>
        <ids-card slot="card" colspan="3">
          <div slot="card-header">
            <ids-text
              font-size="20"
              type="h2"
              overflow="ellipsis"
              tooltip="true"
            >
              Card 3x1 (Dom Order 1) - A
            </ids-text>
          </div>
          <div slot="card-content"></div>
        </ids-card>
        <ids-card slot="card">
          <div slot="card-header">
            <ids-text
              font-size="20"
              type="h2"
              overflow="ellipsis"
              tooltip="true"
            >
              Card 1x1 (Dom Order 2) - B
            </ids-text>
          </div>
          <div slot="card-content"></div>
        </ids-card>
        <ids-card slot="card">
          <div slot="card-header">
            <ids-text
              font-size="20"
              type="h2"
              overflow="ellipsis"
              tooltip="true"
            >
              Card 1x1 (Dom Order 3) - C
            </ids-text>
          </div>
          <div slot="card-content"></div>
        </ids-card>
        <ids-card slot="card">
          <div slot="card-header">
            <ids-text
              font-size="20"
              type="h2"
              overflow="ellipsis"
              tooltip="true"
            >
              Card 1x1 (Dom Order 4) - D
            </ids-text>
          </div>
          <div slot="card-content"></div>
        </ids-card>
      </ids-home-page>
    </>
  );
};

export default IdsHomePage;
