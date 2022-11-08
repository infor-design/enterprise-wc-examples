import React from 'react';
import 'ids-enterprise-wc/components/ids-bar-chart/ids-bar-chart';

const IdsBarChart = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Bar Chart
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-bar-chart
            id="index-example"
            title="Bar Chart - Component Adoption"
            width="700"
            height="500"
          ></ids-bar-chart>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsBarChart;
