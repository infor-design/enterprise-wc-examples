import React, { useEffect, useRef } from 'react';
import type IdsDataGridType from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';
import 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell';
import 'ids-enterprise-wc/components/ids-text/ids-text';

import { getGridColumns } from './columns';

const IdsDataGrid = () => {
  const dataGridRef = useRef<IdsDataGridType>();
  // TODO: Update grid data from the state
  // const [gridData, setGridData] = useState();

  useEffect(() => {
    async function fetchData() {
      // Do an ajax request
      const response = await fetch('/data/books.json');
      const data = await response.json();

      if (dataGridRef.current) {
        // Set columns
        dataGridRef.current.columns = getGridColumns(dataGridRef.current.formatters);

        // Set data
        dataGridRef.current.data = data;
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Data Grid
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-data-grid ref={dataGridRef} row-selection="multiple" label="Books" row-height="md"></ids-data-grid>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsDataGrid;
