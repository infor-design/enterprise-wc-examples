import React, { useEffect, useRef } from 'react';
import 'ids-enterprise-wc/components/ids-area-chart/ids-area-chart';

const IdsAreaChart = () => {
  const areaCharRef = useRef();

  useEffect(() => {
    const areaChart = areaCharRef.current;

    async function fetchData() {
      const response = await fetch('/data/components.json');
      const data = await response.json();

      areaChart.data = data;
    }
    fetchData();
  }, []);

  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="12" type="h1">
          Area Chart
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true" padding="md">
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
