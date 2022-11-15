import React from 'react';
import 'ids-enterprise-wc/components/ids-month-view/ids-month-view';

const IdsMonthView = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Month View
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-month-view
            show-today="true"
            month="10"
            year="2021"
            day="15"
          ></ids-month-view>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsMonthView;
