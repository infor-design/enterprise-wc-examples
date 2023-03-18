import React, { useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsPieChartType from 'ids-enterprise-wc/components/ids-pie-chart/ids-pie-chart';
import 'ids-enterprise-wc/components/ids-pie-chart/ids-pie-chart';

const IdsPieChart = () => {
  const pieCharRef = useRef<IdsPieChartType>();

  useFetch('/data/items-single.json', (data) => {
    if (pieCharRef.current) pieCharRef.current.data = data;
  });

  return (
    <>
      <IdsTitle>Pie Chart Example</IdsTitle>

      <IdsGrid cols="3" gap="md">
        <IdsGridCell>
          <ids-pie-chart
            ref={pieCharRef}
            title="A pie chart showing component usage"
          ></ids-pie-chart>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsPieChart;
