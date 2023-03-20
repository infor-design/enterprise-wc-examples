import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsButton from '../../components/ids-button/IdsButton';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-button/ids-button';


const IdsButtonExample = () => {
  return (
    <>
      <IdsTitle>Buttons Example</IdsTitle>

      <IdsGrid cols="6" gap="sm">
        <IdsGridCell>
          <IdsButton
            type="primary"
            onClick={({ target }) => {
              target.text = 'Clicked';
            }}
          >
            <span>Primary Button</span>
          </IdsButton>
        </IdsGridCell>

        <IdsGridCell>
          <IdsButton
            icon="rocket"
            iconAlign="end"
            type="secondary"
            onClick={(e) => { e.target.text = 'Clicked'; }}
          >
            <span>Secondary Button</span>
          </IdsButton>
        </IdsGridCell>
        <IdsGridCell>
          <IdsButton
            onClick={(e) => { e.target.text = 'Clicked'; }}
          >
            <span>Plain Button</span>
          </IdsButton>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsButtonExample;
