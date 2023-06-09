import React, { useRef } from 'react';
import useEvent from '../../hooks/useEvent';
import useFetch from '../../hooks/useFetch';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsTreeType from 'ids-enterprise-wc/components/ids-tree/ids-tree';
import 'ids-enterprise-wc/components/ids-tree/ids-tree';

const IdsTree = () => {
  const treeRef = useRef<IdsTreeType>();

  const handleSelected = (e: any) => {
    console.info('selected:', e?.detail);
  };

  useEvent('selected', handleSelected, treeRef);

  useFetch('/data/tree-basic.json', (data) => {
    console.log('useFetch', data);
    if (treeRef?.current) treeRef.current.data = data;
  });

  return (
    <>
      <IdsTitle>Ids Tree Example</IdsTitle>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-tree ref={treeRef} label="Tree Demo"></ids-tree>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsTree;
