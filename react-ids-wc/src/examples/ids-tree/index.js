import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-tree/ids-tree';

const IdsTree = () => {
  const treeRef = useRef();

  useEffect(async () => {
    const tree = treeRef.current

    // Do an ajax request
    const response = await fetch('/data/tree-basic.json');
    const data = await response.json()

    // Set data
    tree.data = data

    const handleSelected = (e) => {
      console.info('selected:', e?.detail);
    }

    // On selected
    tree.addEventListener('selected', handleSelected);

    return () => tree.removeEventListener('selected', handleSelected)
  }, [])

  return (
    <>
      <ids-layout-grid>
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Ids Tree
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell>
          <ids-tree ref={treeRef} label="Tree Demo"></ids-tree>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsTree;
