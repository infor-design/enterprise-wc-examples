import React, { useEffect, useRef } from 'react';
import type IdsBarChartType from 'ids-enterprise-wc/components/ids-bar-chart/ids-bar-chart';
import 'ids-enterprise-wc/components/ids-bar-chart/ids-bar-chart';

const IdsBarChart = () => {
  const barChartRef = useRef<IdsBarChartType>();

  useEffect(() => {
    const barChart = barChartRef.current;

    async function fetchData() {
      const response = await fetch('/data/components-colors.json');
      const data = await response.json();

      if (barChart) barChart.data = data;
    }
    fetchData();
  }, []);
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
            ref={barChartRef}
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
