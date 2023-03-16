import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-separator/ids-separator';

const IdsSeparator = () => {
  return (
    <>
      <IdsTitle>Separator Example</IdsTitle>

      <IdsGrid cols="12" gap="md">
        <IdsGridCell>
          <ids-text>Left</ids-text>
          <ids-separator></ids-separator>
          <ids-text>Right</ids-text>
        </IdsGridCell>
      </IdsGrid>

      <IdsGrid auto>
        <ids-text font-size="12" type="h1">
          Separator (Vertical)
        </ids-text>
      </IdsGrid>

      <IdsGrid cols="12" gap="md">
        <IdsGridCell>
          <ids-text>Top</ids-text>
          <ids-separator vertical="true"></ids-separator>
          <ids-text>Bottom</ids-text>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsSeparator;
