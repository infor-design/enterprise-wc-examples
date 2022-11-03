import React from 'react';
import 'ids-enterprise-wc/components/ids-date-picker/ids-date-picker';


const IdsDatePicker = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Date Picker
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-date-picker label="Date Field"></ids-date-picker>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsDatePicker;
