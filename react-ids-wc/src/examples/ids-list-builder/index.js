import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-list-builder/ids-list-builder';

const IdsListBuilder = () => {
  const listBuilderRef = useRef();

  useEffect(() => {
    const listBuilder = listBuilderRef.current;

    const fetchData = async () => {
      // Do an ajax request
      const response = await fetch('/data/bikes.json');
      const data = await response.json();

      listBuilder.data = data;
    };

    // Set the default template
    listBuilder.defaultTemplate = '<ids-text font-size="16" type="span">${manufacturerName}</ids-text>';

    fetchData();
  }, []);

  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="12" type="h1">
          List Builder (single selection)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2">
        <ids-layout-grid-cell>
          <ids-list-builder height="310px" selectable="single" ref={listBuilderRef}></ids-list-builder>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsListBuilder;
