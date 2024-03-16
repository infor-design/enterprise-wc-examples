import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import 'ids-enterprise-wc/components/ids-separator/ids-separator';

const IdsSeparator = () => {
  return (
    <>
      <IdsGrid auto-fit gap="md" padding="xs">
        <ids-text font-size="12" type="h2">
          Separator
        </ids-text>
      </IdsGrid>
      <IdsGrid cols="12" gap="md" padding="xs">
        <IdsGridCell>
          <ids-text>Left</ids-text>
          <ids-separator></ids-separator>
          <ids-text>Right</ids-text>
        </IdsGridCell>
      </IdsGrid>
      <br></br>

      <IdsGrid auto-fit gap="md" padding="xs">
        <ids-text font-size="12" type="h2">
          Separator (Vertical)
        </ids-text>
      </IdsGrid>
      <br></br>

      <IdsGrid cols="12" gap="md" paddingX="xs">
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
