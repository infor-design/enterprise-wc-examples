import React, { useRef } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsMessageType from 'ids-enterprise-wc/components/ids-message/ids-message';
import 'ids-enterprise-wc/components/ids-message/ids-message';

const IdsMessage = () => {
  const messageRef = useRef<IdsMessageType>();

  return (
    <>
      <IdsTitle>Message Example</IdsTitle>

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

      <ids-layout-grid auto="true">
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
