import React from 'react';
import { IdsGrid, IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-calendar/ids-calendar';

const IdsCalendar = () => {
  return (
    <>
      <IdsTitle>Calendar View Example</IdsTitle>

      <IdsGrid auto>
        <IdsGridCell auto>
          <ids-calendar
            date="10/22/2019"
            show-legend
            show-details
          ></ids-calendar>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsCalendar;
