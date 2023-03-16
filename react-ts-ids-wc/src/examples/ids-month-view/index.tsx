import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-month-view/ids-month-view';

const IdsMonthView = () => {
  return (
    <>
      <IdsTitle>Month View Example</IdsTitle>

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
