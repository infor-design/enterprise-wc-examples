import React from 'react';
import IdsButton from '../../components/ids-button/IdsButton';
import IdsFlex, { IdsFlexItem } from '../../components/ids-flex/IdsFlex';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import { data } from './data';
import 'ids-enterprise-wc/components/ids-alert/ids-alert';


const IdsAlert = () => {
  // Using state to be able to manipulate the data on button click
  const [items, setItems] = React.useState(data);

  return (
    <>
      <IdsTitle>Alerts Example</IdsTitle>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <IdsFlex gap="20" justify="flex-start">
            {items.map(item => (
              <IdsFlexItem key={item.icon}>
                <ids-alert icon={item.icon}></ids-alert>
              </IdsFlexItem>
            ))}
          </IdsFlex>
        </IdsGridCell>
      </IdsGrid>
      <IdsGrid auto-fit>
        <IdsGridCell>
          <IdsButton type="secondary" onClick={() => setItems(items.slice(0, -1))}>
            <span>Remove item</span>
          </IdsButton>
          <IdsButton type="secondary" onClick={() => setItems(data)}>
            <span>Reset</span>
          </IdsButton>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsAlert;
