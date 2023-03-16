import React, { useEffect, useRef } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsAxisChartType from 'ids-enterprise-wc/components/ids-axis-chart/ids-axis-chart';
import 'ids-enterprise-wc/components/ids-axis-chart/ids-axis-chart';

const IdsAxisChart = () => {
  const axisChartRef = useRef<IdsAxisChartType>();

  useEffect(() => {
    const axisChart = axisChartRef.current;

    async function fetchData() {
      const response = await fetch('/data/components.json');
      const data = await response.json();

      if (axisChart) axisChart.data = data;
    }
    fetchData();
  }, []);

  return (
    <>
      <IdsTitle>Axis Chart Example</IdsTitle>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-axis-chart
            ref={axisChartRef}
            title="A line chart showing component usage"
            width="700"
            height="400"
          ></ids-axis-chart>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsAxisChart;
