import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-button';
import 'ids-enterprise-wc/components/ids-modal-button';
import 'ids-enterprise-wc/components/ids-message';

const IdsMessage = () => {
  const messageErrRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const messageErr = messageErrRef.current;
    const triggerBtn = triggerRef.current;

    // Link the About to its trigger button
    messageErr.target = triggerRef.current;
    messageErr.trigger = 'click';

    // Event handler to be used in attach and cleanup event listener
    const handleBeforeShow = () => {
      triggerBtn.disabled = true;
      return true;
    };

    const handleHide = () => {
      triggerBtn.disabled = false;
    };

    // Attach event listener
    messageErr.addEventListener('beforeshow', handleBeforeShow);
    messageErr.addEventListener('hide', handleHide);

    // Cleanup event listener on React component unmount
    return () => [
      messageErr.removeEventListener('beforeshow', handleBeforeShow),
      messageErr.removeEventListener('hide', handleHide)
    ];
  }, []);

  return (
    <>
      <ids-message ref={messageErrRef} status="error">
        <ids-text slot="title" font-size="24" type="h2">
          Lost connection
        </ids-text>
        <ids-text align="left">
          This application has experienced a system error due to the lack of
          internet access. Please restart the application in order to proceed.
        </ids-text>
        <ids-modal-button slot="buttons" type="secondary" cancel>
          Cancel
        </ids-modal-button>
        <ids-modal-button slot="buttons" type="primary">
          Confirm
        </ids-modal-button>
      </ids-message>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Message
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-button type="secondary" ref={triggerRef}>
            Error Example
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsMessage;
