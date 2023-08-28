/* eslint-disable no-template-curly-in-string */
import React, { useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsListBuilderType from 'ids-enterprise-wc/components/ids-list-builder/ids-list-builder';
import 'ids-enterprise-wc/components/ids-list-builder/ids-list-builder';

const IdsListBuilder = () => {
  const listBuilderRef = useRef<IdsListBuilderType>();

  useFetch('/data/bikes.json', (data) => {
    const listBuilder = listBuilderRef.current;

    if (listBuilder) {
      listBuilder.data = data;
      listBuilder.defaultTemplate = '<ids-text font-size="16" type="span">${manufacturerName}</ids-text>';
    }
  });

  return (
    <>
      <IdsTitle>List Builder (single selection) Example</IdsTitle>

      <ids-layout-grid cols="2">
        <ids-layout-grid-cell>
          <ids-list-builder height="310px" selectable="single" ref={listBuilderRef}></ids-list-builder>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsListBuilder;
