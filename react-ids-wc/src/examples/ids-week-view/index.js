import React from 'react';
import 'ids-enterprise-wc/components/ids-week-view/ids-week-view';

const IdsWeekView = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Week View
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-week-view
            first-day-of-week="1"
            show-today="true"
            start-date="10/23/2019"
            end-date="11/01/2019"
            show-timeline="false"
          ></ids-week-view>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsWeekView;
