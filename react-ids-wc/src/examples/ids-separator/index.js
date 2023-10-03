import React from 'react';
import 'ids-enterprise-wc/components/ids-separator/ids-separator';

const IdsSeparator = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="12" type="h1">
          Separator
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="12" gap="md">
        <ids-layout-grid-cell>
          <ids-text>Left</ids-text>
          <ids-separator></ids-separator>
          <ids-text>Right</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="12" type="h1">
          Separator (Vertical)
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="12" gap="md">
        <ids-layout-grid-cell>
          <ids-text>Top</ids-text>
          <ids-separator vertical="true"></ids-separator>
          <ids-text>Bottom</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsSeparator;
