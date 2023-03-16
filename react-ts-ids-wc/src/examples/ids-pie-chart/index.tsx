import React, { useEffect, useRef } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsPieChartType from 'ids-enterprise-wc/components/ids-pie-chart/ids-pie-chart';
import 'ids-enterprise-wc/components/ids-pie-chart/ids-pie-chart';

const IdsPieChart = () => {
  const pieCharRef = useRef<IdsPieChartType>();

  useEffect(() => {
    const pieChart = pieCharRef.current;

    async function fetchData() {
      const response = await fetch('/data/items-single.json');
      const data = await response.json();

      if (pieChart) pieChart.data = data;
    }
    fetchData();
  }, []);

  return (
    <>
      <IdsTitle>Pie Chart Example</IdsTitle>

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
