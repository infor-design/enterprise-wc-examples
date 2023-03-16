import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-toggle-button/ids-toggle-button';


const IdsToggleButton = () => {
  return (
    <>
      <IdsTitle>Toggle Buttons Example</IdsTitle>

      <ids-layout-grid cols="4" gap="md">
        <ids-layout-grid-cell>
          <ids-toggle-button
            onClick={(e: any) => e?.target?.toggle?.()}
            icon-on="star-filled"
            icon-off="star-outlined"
            text-off="Toggle Button (Off)"
            text-on="Toggle Button (On)"
          >
            <ids-icon icon="settings"></ids-icon>
            <span></span>
          </ids-toggle-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsToggleButton;
