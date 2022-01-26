import React from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-icon/ids-icon';
import 'ids-enterprise-wc/ids-toggle-button/ids-toggle-button';

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
