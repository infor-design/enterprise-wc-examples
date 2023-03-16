import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import { data } from './data';
import 'ids-enterprise-wc/components/ids-alert/ids-alert';
import 'ids-enterprise-wc/components/ids-button/ids-button';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell';
import 'ids-enterprise-wc/components/ids-layout-flex/ids-layout-flex';
import 'ids-enterprise-wc/components/ids-layout-flex/ids-layout-flex-item';


const IdsAlert = () => {
  // Using state to be able to manipulate the data on button click
  const [items, setItems] = React.useState(data);

  return (
    <>
      <IdsTitle>Alerts Example</IdsTitle>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-layout-flex gap="20" justify-content="flex-start">
            {items.map(item => (
              <ids-layout-flex-item key={item.icon}>
                <ids-alert icon={item.icon}></ids-alert>
              </ids-layout-flex-item>
            ))}
          </ids-layout-flex>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell auto="true">
          <ids-button type="secondary" onClick={() => setItems(items.slice(0, -1))}>
            <span>Remove item</span>
          </ids-button>
          <ids-button type="secondary" onClick={() => setItems(data)}>
            <span>Reset</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsAlert;
