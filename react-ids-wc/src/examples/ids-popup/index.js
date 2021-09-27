import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-button';
import 'ids-enterprise-wc/components/ids-popup';

const IdsPopup = () => {
  const popupRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    const trigger = triggerRef.current;

    // Sets the element to align with
    popupRef.current.alignTarget = trigger;

    // Toggle the Popup
    const handleVisible = () => {
      popupRef.current.visible = !popupRef.current.visible;
    };

    trigger.addEventListener('click', handleVisible);

    return () => trigger.removeEventListener('click', handleVisible);
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Popup
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-button type="secondary" ref={triggerRef}>
            <span slot="text">Trigger a Popup</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-popup
        x="15"
        y="0"
        ref={popupRef}
        align="right"
        arrow="right"
        animated="true"
        type="menu"
      >
        <div slot="content">
          <div style={{ padding: 30 }}>My Popup Content</div>
        </div>
      </ids-popup>
    </>
  );
};

export default IdsPopup;
