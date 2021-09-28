import React from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-button';
import 'ids-enterprise-wc/components/ids-tooltip';

const IdsTooltip = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Tooltips
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-button id="button-1" type="secondary">
            Hover to show a Tooltip
          </ids-button>
          <ids-tooltip
            target="#button-1"
            id="tooltip-example"
            data-automation-id="tooltip-example"
          >
            Additional Information
          </ids-tooltip>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsTooltip;
