import React, { useRef, useEffect } from 'react';

const IdsSwapList = () => {
  const swaplistRef = useRef();

  useEffect(() => {
    async function fetchData() {
      // Adding ref current element to variable to be able cleanup event listeners on unmount
      const element = swaplistRef.current;

      // Do an ajax request
      const response = await fetch('/data/periods.json');
      const data = await response.json();

      // Set the default template
      element.defaultTemplate = [
        '<ids-swappable-item><ids-text>${city}</ids-text></ids-swappable-item>',
      ].join('\n');

      // Set data
      element.data = data;
    }
    fetchData();
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          SwapList
        </ids-text>
      </ids-layout-grid>

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
