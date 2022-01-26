import React from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-button/ids-button';
import 'ids-enterprise-wc/ids-pager/ids-pager';

const IdsPager = () => {
  return (
    <>
      <ids-layout-grid cols="3" gap="md">
        <ids-text font-size="12" type="h1">
          Ids Pager
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-pager
            page-size="20"
            page-number="10"
            total="200"
            id="ids-pager-example"
          >
            <ids-pager-button first></ids-pager-button>
            <ids-pager-button previous></ids-pager-button>
            <ids-pager-input></ids-pager-input>
            <ids-pager-button next></ids-pager-button>
            <ids-pager-button last></ids-pager-button>
          </ids-pager>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="lg">
        <ids-layout-grid-cell>
          <ids-button type="secondary" id="ids-pager-toggle-disable-button">
            <span slot="text">Disable</span>
          </ids-button>
          <ids-button type="secondary" id="ids-pager-type-toggle-button">
            <span slot="text">NumberList</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsPager;
