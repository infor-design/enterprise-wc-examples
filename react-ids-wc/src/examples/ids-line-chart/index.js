import React from 'react';
import 'ids-enterprise-wc/components/ids-line-chart/ids-line-chart';

const IdsLineChart = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Line Chart
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-line-chart
            title="A line chart showing component usage"
            width="800"
            height="500"
            id="index-example"
            show-vertical-grid-lines="true"
            rotate-x-labels="-65"
          ></ids-line-chart>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsLineChart;
