import React, { useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsDataGridType from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';
import 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';
import 'ids-enterprise-wc/components/ids-text/ids-text';

import { getGridColumns } from './columns';

const IdsDataGrid = () => {
  const dataGridRef = useRef<IdsDataGridType>();
  // TODO: Update grid data from the state
  // const [gridData, setGridData] = useState();

  useFetch('/data/books.json', (data) => {
    if (dataGridRef.current) {
      dataGridRef.current.columns = getGridColumns(dataGridRef.current.formatters);
      dataGridRef.current.data = data;
    }
  });

  return (
    <>
      <IdsTitle>Data Grid Example</IdsTitle>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-data-grid
            ref={dataGridRef}
            row-selection="multiple"
            label="Books"
            row-height="md"
          ></ids-data-grid>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsDataGrid;
