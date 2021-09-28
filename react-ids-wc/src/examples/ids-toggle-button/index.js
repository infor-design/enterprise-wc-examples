import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-icon';
import 'ids-enterprise-wc/components/ids-toggle-button';

const IdsToggleButton = () => {
  const triggerRef = useRef();

  useEffect(() => {
    const trigger = triggerRef.current;

    const handleClick = e => {
      e.target.toggle();
    };

    trigger.addEventListener('click', handleClick);

    return () => trigger.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Toggle Buttons
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="4" gap="md">
        <ids-layout-grid-cell>
          <ids-toggle-button
            ref={triggerRef}
            icon-on="star-filled"
            icon-off="star-outlined"
            text-off="Toggle Button (Off)"
            text-on="Toggle Button (On)"
          >
            <ids-icon slot="icon" icon="settings"></ids-icon>
            <span slot="text"></span>
          </ids-toggle-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsToggleButton;
