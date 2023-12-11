import React, { useState } from 'react';
import { data } from './data';
import 'ids-enterprise-wc/components/ids-alert/ids-alert';

const IdsAlert = () => {
  // Using state to be able to manipulate the data on button click
  const [items, setItems] = useState(data);

  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Alerts
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true" gap="md" padding-x="md">
        {items.map(item => (
          <ids-layout-grid-cell key={item.icon}>
            <ids-alert icon={item.icon}></ids-alert>
          </ids-layout-grid-cell>
        ))}
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <br></br>
          <ids-button appearance="secondary" onClick={() => setItems(items.slice(0, -1))}>
            <span>Remove item</span>
          </ids-button>
          <br></br>&nbsp;
          <ids-button appearance="secondary" onClick={() => setItems(data)}>
            <span>Reset</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsAlert;
