import React, { useEffect, useRef } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsLineChartType from 'ids-enterprise-wc/components/ids-line-chart/ids-line-chart';
import 'ids-enterprise-wc/components/ids-line-chart/ids-line-chart';

const IdsLineChart = () => {
  const lineCharRef = useRef<IdsLineChartType>();

  useEffect(() => {
    const lineChart = lineCharRef.current;

    async function fetchData() {
      const response = await fetch('/data/components.json');
      const data = await response.json();

      if (lineChart) lineChart.data = data;
    }
    fetchData();
  }, []);

  return (
    <>
      <IdsTitle>Line Chart Example</IdsTitle>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-line-chart
            ref={lineCharRef}
            title="A line chart showing component usage"
            width="800"
            height="500"
            show-vertical-grid-lines="true"
            rotate-x-labels="-65"
          ></ids-line-chart>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsLineChart;
