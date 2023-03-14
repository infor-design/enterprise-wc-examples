import React from 'react';
import 'ids-enterprise-wc/components/ids-list-box/ids-list-box';

const IdListBox = () => {
  return (
    <>
      <ids-layout-grid>
        <ids-text font-size="12" type="h1">
          List Box
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-list-box>
          <ids-list-box-option>Option One</ids-list-box-option>
          <ids-list-box-option>Option Two</ids-list-box-option>
          <ids-list-box-option>Option Three</ids-list-box-option>
        </ids-list-box>
      </ids-layout-grid>
    </>
  );
};

export default IdListBox;
