import React from 'react';

const IdsToggleButton = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Toggle Buttons
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="4" gap="md">
        <ids-layout-grid-cell>
          <ids-toggle-button
            onClick={e => e.target.toggle()}
            icon-on="star-filled"
            icon-off="star-outlined"
            text-off="Toggle Button (Off)"
            text-on="Toggle Button (On)"
          >
            <ids-icon slot="icon" icon="settings"></ids-icon>
            <span slot="text"></span>
          </ids-toggle-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsToggleButton;
