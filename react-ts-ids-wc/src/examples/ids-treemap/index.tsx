import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-treemap/ids-treemap';
import type IdsTreemapType from 'ids-enterprise-wc/components/ids-treemap/ids-treemap';

const IdsTreemap = () => {
  const treeMapRef = useRef<IdsTreemapType>();

  useEffect(() => {
    const treeMap = treeMapRef.current;

    if (treeMap) {
      treeMap.data = treeMap.treeMap({
        data: [
          {
            value: 28,
            color: '#003876',
            text: 'JSON',
            label: '28%'
          },
          {
            value: 18,
            color: '#004A99',
            text: 'PDF',
            label: '18%'
          },
          {
            value: 8,
            color: '#0054B1',
            text: 'BOD',
            label: '8%'
          },
          {
            value: 8,
            color: '#0066D4',
            text: 'TXT',
            label: '8%'
          },
          {
            value: 17,
            color: '#0072ED',
            text: 'CSV',
            label: '17%'
          },
          {
            value: 7,
            color: '#1C86EF',
            text: 'Assets',
            label: '7%'
          },
          {
            value: 14,
            color: '#55A3F3',
            text: 'Others',
            label: '14%'
          }
        ],
        height: 300
      });
    }

  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Ids Treemap
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-treemap ref={treeMapRef} title="Storage Utilization (78 GB)"></ids-treemap>
    </>
  );
};

export default IdsTreemap;
