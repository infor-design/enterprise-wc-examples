import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-hidden/ids-hidden';

const IdsHidden = () => {
  return (
    <>
      <IdsTitle>Hidden Example</IdsTitle>

      <ids-hidden hide-up="md">
        <ids-card>
          <div slot="card-header">
            <ids-text
              font-size="20"
              type="h2"
              overflow="ellipsis"
              tooltip="true"
            >
              Card Title One
            </ids-text>
          </div>
          <div slot="card-content"></div>
        </ids-card>
      </ids-hidden>

      <ids-hidden hide-down="md">
        <ids-card>
          <div slot="card-header">
            <ids-text
              font-size="20"
              type="h2"
              overflow="ellipsis"
              tooltip="true"
            >
              Card Title Two
            </ids-text>
          </div>
          <div slot="card-content"></div>
        </ids-card>
      </ids-hidden>
    </>
  );
};

export default IdsHidden;
