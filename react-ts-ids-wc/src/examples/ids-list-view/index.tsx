/* eslint-disable no-template-curly-in-string */
import React, { useRef, useEffect } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
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
      <IdsTitle>List View Example</IdsTitle>

      <IdsGrid cols="2" gap="xl">
        <IdsGridCell colSpan="1">
          <div style={{ height: '70vh' }}>
            <ids-list-view ref={listViewRef} item-height="76"></ids-list-view>
          </div>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsListView;
