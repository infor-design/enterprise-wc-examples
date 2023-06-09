import React, { useRef } from 'react';

import 'ids-enterprise-wc/components/ids-message/ids-message';

const IdsMessage = () => {
  const messageRef = useRef();

  return (
    <>
      <ids-message ref={messageRef} status="error">
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

      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Message
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-button
            type="secondary"
            // Trigger ids-message visibility with React onClick synthetic event
            onClick={() => {
              messageRef.current?.show()
            }}
            disabled={messageRef.current?.visible}
          >
            Error Example
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsMessage;
