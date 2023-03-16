import React, { useEffect, useRef } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsAreaChartType from 'ids-enterprise-wc/components/ids-area-chart/ids-area-chart';
import 'ids-enterprise-wc/components/ids-area-chart/ids-area-chart';

const IdsAreaChart = () => {
  const areaCharRef = useRef<IdsAreaChartType>();

  useEffect(() => {
    const areaChart = areaCharRef.current;

    async function fetchData() {
      const response = await fetch('/data/components.json');
      const data = await response.json();

      if (areaChart) areaChart.data = data;
    }
    fetchData();
  }, []);

  return (
    <>
      <IdsTitle>Area Chart Example</IdsTitle>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-area-chart
            ref={areaCharRef}
            title="An area chart showing component usage"
            width="800"
            height="500"
          ></ids-area-chart>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsAreaChart;
