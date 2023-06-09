/* eslint-disable no-template-curly-in-string */
import React, { useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsSwapListType from 'ids-enterprise-wc/components/ids-swaplist/ids-swaplist';
import 'ids-enterprise-wc/components/ids-swaplist/ids-swaplist';


import 'ids-enterprise-wc/components/ids-swaplist/ids-swaplist';
import 'ids-enterprise-wc/components/ids-swappable/ids-swappable';

const IdsSwapList = () => {
  const swaplistRef = useRef<IdsSwapListType>();

  useFetch('/data/periods.json', (data) => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const element = swaplistRef.current;

    if (element) {
      // Set the default template
      element.defaultTemplate = [
        '<ids-swappable-item><ids-text>${city}</ids-text></ids-swappable-item>',
      ].join('\n');

      // Set data
      element.data = data;
    }
  });

  return (
    <>
      <IdsTitle>SwapList Example</IdsTitle>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-swaplist
            ref={swaplistRef}
            count="3"
          >
          </ids-swaplist>
        </IdsGridCell>
      </IdsGrid>
    </>
  )
};

export default IdsSwapList;
