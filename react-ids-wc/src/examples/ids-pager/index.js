import React, { useRef } from 'react';

import 'ids-enterprise-wc/components/ids-pager/ids-pager';

const IdsPager = () => {
  const pagerRef = useRef();

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
            ref={pagerRef}
            page-size="20"
            page-number="10"
            total="200"
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
          <ids-button
            appearance="secondary"
            // Changing 'disabled' attribute
            onClick={() => {
              pagerRef.current?.setAttribute('disabled', String(!pagerRef.current.disabled))
            }}
          >
            <span>Disable</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsPager;
