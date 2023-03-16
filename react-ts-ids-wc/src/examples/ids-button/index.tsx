import React from 'react';
import IdsButton from '../../components/ids-button/IdsButton';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-button/ids-button';


const IdsButtonExample = () => {
  return (
    <>
      <IdsTitle>Buttons Example</IdsTitle>

      <ids-layout-grid cols="4" gap="md">
        <ids-layout-grid-cell>
          <IdsButton
            type="primary"
            onClick={({ target }) => {
              target.text = 'Clicked';
            }}
          >
            <span>Primary Button</span>
          </IdsButton>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <IdsButton
            icon="rocket"
            iconAlign="end"
            type="secondary"
            onClick={(e) => { e.target.text = 'Clicked'; }}
          >
            <span>Secondary Button</span>
          </IdsButton>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <IdsButton
            onClick={(e) => { e.target.text = 'Clicked'; }}
          >
            <span>Plain Button</span>
          </IdsButton>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsButtonExample;
