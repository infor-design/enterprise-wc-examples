import React from 'react';
import 'ids-enterprise-wc/components/ids-axis-chart/ids-axis-chart';

const IdsAxisChart = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Axis Chart
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-axis-chart
            title="A line chart showing component usage"
            width="700"
            height="400"
            id="index-example"
          ></ids-axis-chart>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsAxisChart;
