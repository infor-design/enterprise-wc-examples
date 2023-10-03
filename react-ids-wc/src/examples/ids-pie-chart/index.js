import React, { useEffect, useRef } from 'react';
import 'ids-enterprise-wc/components/ids-pie-chart/ids-pie-chart';

const IdsPieChart = () => {
  const pieCharRef = useRef();

  useEffect(() => {
    const pieChart = pieCharRef.current;

    async function fetchData() {
      const response = await fetch('/data/items-single.json');
      const data = await response.json();

      pieChart.data = data;
    }
    fetchData();
  }, []);

  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="12" type="h1">
          Pie Chart
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-pie-chart
            ref={pieCharRef}
            title="A pie chart showing component usage"
          ></ids-pie-chart>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsPieChart;
