import React, { useRef, useEffect } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsTreeType from 'ids-enterprise-wc/components/ids-tree/ids-tree';
import 'ids-enterprise-wc/components/ids-tree/ids-tree';

const IdsTree = () => {
  const treeRef = useRef<IdsTreeType>();

  useEffect(() => {
    const tree = treeRef.current;

    const fetchData = async function () {
      // Do an ajax request
      const response = await fetch('/data/tree-basic.json');
      const data = await response.json();

      // Set data
      if (tree) tree.data = data;
    };

    fetchData();

    const handleSelected = (e: any) => {
      console.info('selected:', e?.detail);
    };

    // On selected
    tree?.addEventListener('selected', handleSelected);

    return () => {
      tree?.removeEventListener('selected', handleSelected);
    };
  }, []);

  return (
    <>
      <IdsTitle>Ids Tree Example</IdsTitle>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-tree ref={treeRef} label="Tree Demo"></ids-tree>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsTree;