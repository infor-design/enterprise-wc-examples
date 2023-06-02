import React, { useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsAxisChartType from 'ids-enterprise-wc/components/ids-axis-chart/ids-axis-chart';
import 'ids-enterprise-wc/components/ids-axis-chart/ids-axis-chart';

const IdsAxisChart = () => {
  const axisChartRef = useRef<IdsAxisChartType>();

  useFetch('/data/components.json', (data) => {
    if (axisChartRef.current) axisChartRef.current.data = data;
  });

  return (
    <>
      <IdsTitle>Axis Chart Example</IdsTitle>

      <ids-layout-grid auto-fit="true">
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
