import React from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-skip-link';

const IdsSkipLink = () => {
  return (
    <>
      <ids-skip-link href="#main-content">Skip to Main Content</ids-skip-link>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1" id="main-content">
          Skiplink (tab into the page)
        </ids-text>
      </ids-layout-grid>
    </>
  );
};

export default IdsSkipLink;
