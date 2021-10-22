import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-button';
import 'ids-enterprise-wc/components/ids-tooltip';

const IdsTooltip = () => {
  const triggerRef = useRef();
  const tooltipRef = useRef();

  useEffect(() => {
    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;

    tooltip.target = trigger;
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Tooltips
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-button ref={triggerRef} type="secondary">Hover to show a Tooltip</ids-button>
          <ids-tooltip ref={tooltipRef}>
            Additional Information
          </ids-tooltip>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsTooltip;
