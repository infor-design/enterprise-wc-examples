import React, { useRef, useEffect } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
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
      <IdsTitle>Tooltips Example</IdsTitle>

      <ids-layout-grid auto-fit="true" padding="md">
        <ids-layout-grid-cell>
          <ids-button ref={triggerRef} appearance="secondary">Hover to show a Tooltip</ids-button>
          <ids-tooltip ref={tooltipRef}>
            Additional Information
          </ids-tooltip>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsTooltip;
