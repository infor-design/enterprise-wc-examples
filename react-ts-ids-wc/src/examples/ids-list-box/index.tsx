import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-list-box/ids-list-box';

const IdListBox = () => {
  return (
    <>
      <IdsTitle>List Box Example</IdsTitle>

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
