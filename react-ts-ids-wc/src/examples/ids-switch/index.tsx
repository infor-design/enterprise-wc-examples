import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-switch/ids-switch';


const IdsSwitch = () => {
  return (
    <>
      <IdsTitle>Ids Switch Example</IdsTitle>

      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-switch label="Allow notifications" checked="true"></ids-switch>
          <ids-switch label="Allow my profile to be searched"></ids-switch>

          <ids-switch
            label="Automatically approve requests"
            disabled="true"
          ></ids-switch>
          <ids-switch
            label="Allow connections"
            checked="true"
            disabled="true"
          ></ids-switch>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsSwitch;
