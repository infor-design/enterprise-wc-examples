import React from 'react';
import 'ids-enterprise-wc/components/ids-checkbox-group/ids-checkbox-group';

const IdsCheckboxGroup = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Checkbox Group
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-checkbox-group label="Choose from these options:">
            <ids-checkbox label="Option 1" checked="false"></ids-checkbox>
            <ids-checkbox label="Option 2" checked="true"></ids-checkbox>
            <ids-checkbox label="Option 3" checked="true"></ids-checkbox>
          </ids-checkbox-group>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsCheckboxGroup;
