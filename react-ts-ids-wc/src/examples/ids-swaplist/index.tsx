/* eslint-disable no-template-curly-in-string */
import React, { useRef, useEffect } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsSwapListType from 'ids-enterprise-wc/components/ids-swaplist/ids-swaplist';
import 'ids-enterprise-wc/components/ids-swaplist/ids-swaplist';


import 'ids-enterprise-wc/components/ids-swaplist/ids-swaplist';
import 'ids-enterprise-wc/components/ids-swappable/ids-swappable';

const IdsSwapList = () => {
  const swaplistRef = useRef<IdsSwapListType>();

  useEffect(() => {
    async function fetchData() {
      // Adding ref current element to variable to be able cleanup event listeners on unmount
      const element = swaplistRef.current;

      // Do an ajax request
      const response = await fetch('/data/periods.json');
      const data = await response.json();

      if (element) {
        // Set the default template
        element.defaultTemplate = [
          '<ids-swappable-item><ids-text>${city}</ids-text></ids-swappable-item>',
        ].join('\n');

        // Set data
        element.data = data;
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <IdsTitle>SwapList Example</IdsTitle>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-swaplist
            ref={swaplistRef}
            count="3"
          >
          </ids-swaplist>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  )
};

export default IdsSwapList;
