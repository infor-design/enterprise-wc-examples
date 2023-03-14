/* eslint-disable no-template-curly-in-string */
import React, { useRef, useEffect } from 'react';
import type IdsListViewType from 'ids-enterprise-wc/components/ids-list-view/ids-list-view';
import 'ids-enterprise-wc/components/ids-list-view/ids-list-view';

const IdsListView = () => {
  const listViewRef = useRef<IdsListViewType>();

  useEffect(() => {
    const listView = listViewRef.current;

    const fetchData = async () => {
      // Do an ajax request
      const response = await fetch('/data/events.json');
      const data = await response.json();

      if (listView) listView.data = data;
    }

    if (listView) {
      // Set the default template
      listView.defaultTemplate = [
        '<ids-text font-size="16" type="h2">${subject}</ids-text>',
        '<ids-text font-size="12" type="span">ID: ${id}</ids-text>',
        '<ids-text font-size="12" type="span">Comments: ${comments}</ids-text>'
      ].join('\n');
    }

    fetchData();
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          List View
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="2" gap="xl">
        <ids-layout-grid-cell col-span="1">
          <div style={{ height: '70vh' }}>
            <ids-list-view ref={listViewRef} item-height="76"></ids-list-view>
          </div>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsListView;
