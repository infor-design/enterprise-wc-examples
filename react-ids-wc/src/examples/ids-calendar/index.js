import React from 'react';
import 'ids-enterprise-wc/components/ids-calendar/ids-calendar';

const IdsCalendar = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="12" type="h1">
          Calendar View
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-layout-grid-cell auto="true">
          <ids-calendar
            date="10/22/2019"
            show-legend
            show-details
          ></ids-calendar>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsCalendar;
