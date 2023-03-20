import React, { useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsBarChartType from 'ids-enterprise-wc/components/ids-bar-chart/ids-bar-chart';
import 'ids-enterprise-wc/components/ids-bar-chart/ids-bar-chart';

const IdsBarChart = () => {
  const barChartRef = useRef<IdsBarChartType>();

  useFetch('/data/components-colors.json', (data) => {
    if (barChartRef.current) barChartRef.current.data = data;
  });

  return (
    <>
      <IdsTitle>Bar Chart Example</IdsTitle>

      <IdsGrid auto>
        <IdsGridCell>
          <ids-bar-chart
            ref={barChartRef}
            title="Bar Chart - Component Adoption"
            width="700"
            height="500"
          ></ids-bar-chart>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsBarChart;
