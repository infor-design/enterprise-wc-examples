import React from 'react';
import 'ids-enterprise-wc/components/ids-pie-chart/ids-pie-chart';

const IdsPieChart = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Pie Chart
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-pie-chart
            title="A pie chart showing component usage"
            id="index-example"
          ></ids-pie-chart>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsPieChart;
