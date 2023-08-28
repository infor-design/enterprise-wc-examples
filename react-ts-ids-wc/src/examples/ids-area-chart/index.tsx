import React, { useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsAreaChartType from 'ids-enterprise-wc/components/ids-area-chart/ids-area-chart';
import 'ids-enterprise-wc/components/ids-area-chart/ids-area-chart';

const IdsAreaChart = () => {
  const areaCharRef = useRef<IdsAreaChartType>();

  useFetch('/data/components.json', (data) => {
    if (areaCharRef?.current) areaCharRef.current.data = data;
  });

  return (
    <>
      <IdsTitle>Area Chart Example</IdsTitle>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-area-chart
            ref={areaCharRef}
            title="An area chart showing component usage"
            width="800"
            height="500"
          ></ids-area-chart>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsAreaChart;
