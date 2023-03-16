import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-calendar/ids-calendar';

const IdsCalendar = () => {
  return (
    <>
      <IdsTitle>Calendar View Example</IdsTitle>

      <ids-layout-grid auto="true">
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
