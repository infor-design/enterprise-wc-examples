import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-week-view/ids-week-view';

const IdsWeekView = () => {
  return (
    <>
      <IdsTitle>Week View Example</IdsTitle>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-week-view
            first-day-of-week="1"
            show-today="true"
            start-date="10/23/2019"
            end-date="11/01/2019"
            show-timeline="false"
          ></ids-week-view>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsWeekView;
