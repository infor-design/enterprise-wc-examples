import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-card/ids-card';

const IdsCard = () => {
  return (
    <>
      <IdsTitle>Cards Example</IdsTitle>

      <ids-layout-grid cols="2" gap="md">
        <ids-layout-grid-cell>
          <ids-card>
            <div slot="card-header">
              <ids-text font-size="20" type="h2" overflow="ellipsis" tooltip="true">
                Card Title One
              </ids-text>
            </div>
            <div slot="card-content"></div>
          </ids-card>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-card>
            <div slot="card-header">
              <ids-text font-size="20" type="h2">
                Card Title Two
              </ids-text>
            </div>
            <div slot="card-content"></div>
          </ids-card>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-card actionable="true">
            <div slot="card-content">
              <ids-text font-size="16" type="p">
                Actionable Button Card
              </ids-text>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-card actionable="true" href="https://www.example.com" target="_self">
            <div slot="card-content">
              <ids-text font-size="16" type="p">
                Actionable Link Card
              </ids-text>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsCard;
