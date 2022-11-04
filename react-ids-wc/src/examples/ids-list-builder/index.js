import React from 'react';
import 'ids-enterprise-wc/components/ids-list-builder/ids-list-builder';

const IdsListBuilder = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          List Builder (single selection)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2">
        <ids-layout-grid-cell>
          <ids-list-builder
            height="310px"
            selectable="single"
            id="list-builder-1"
          >
            <template>
              <ids-text font-size="16" type="span">
                manufacturerName
              </ids-text>
            </template>
          </ids-list-builder>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsListBuilder;
