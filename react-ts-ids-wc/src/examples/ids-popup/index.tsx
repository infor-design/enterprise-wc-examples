import React, { useRef, useEffect } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsPopupType from 'ids-enterprise-wc/components/ids-popup/ids-popup';
import type IdsButtonType from 'ids-enterprise-wc/components/ids-button/ids-button';
import 'ids-enterprise-wc/components/ids-popup/ids-popup';
import 'ids-enterprise-wc/components/ids-button/ids-button';


const IdsPopup = () => {
  const popupRef = useRef<IdsPopupType>();
  const triggerRef = useRef<IdsButtonType>();

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const trigger = triggerRef.current;
    const popup = popupRef.current;

    // Sets the element to align with
    if (popup) popup.alignTarget = trigger as IdsButtonType;

    // Event handler to be used in attach and cleanup event listener
    // Toggles the Popup
    const handleVisible = () => {
      if (popup) popup.visible = !popup.visible;
    };

    // Attach event listener
    trigger?.addEventListener('click', handleVisible);

    // Cleanup event listener on React component unmount
    return () => trigger?.removeEventListener('click', handleVisible);
  }, []);

  return (
    <>
      <IdsTitle>Popup Example</IdsTitle>

      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-button type="secondary" ref={triggerRef}>
            <span>Trigger a Popup</span>
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
