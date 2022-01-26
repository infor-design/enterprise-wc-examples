import React, { useState } from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-button/ids-button';
import 'ids-enterprise-wc/ids-alert/ids-alert';

import { data } from './data';

const IdsAlert = () => {
  // Using state to be able to manipulate the data on button click
  const [items, setItems] = useState(data);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Alerts
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-layout-grid auto="true" gap="md">
        {items.map(item => (
          <ids-layout-grid-cell key={item.icon}>
            <ids-alert icon={item.icon}></ids-alert>
          </ids-layout-grid-cell>
        ))}
      </ids-layout-grid>
      <ids-layout-grid cols="12" gap="md">
        <ids-layout-grid-cell>
          <ids-button type="primary" onClick={() => setItems(items.slice(0, -1))}>
            <span slot="text">Remove item</span>
          </ids-button>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-button type="secondary" onClick={() => setItems(data)}>
            <span slot="text">Reset</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsAlert;
