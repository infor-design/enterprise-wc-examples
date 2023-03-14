import React, { useRef, useEffect } from 'react';
import type IdsButtonType from 'ids-enterprise-wc/components/ids-button/ids-button';
import type IdsTooltipType from 'ids-enterprise-wc/components/ids-tooltip/ids-tooltip';
import 'ids-enterprise-wc/components/ids-button/ids-button';
import 'ids-enterprise-wc/components/ids-tooltip/ids-tooltip';


const IdsTooltip = () => {
  const triggerRef = useRef<IdsButtonType>();
  const tooltipRef = useRef<IdsTooltipType>();

  useEffect(() => {
    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;

    if (tooltip) tooltip.target = trigger;
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
