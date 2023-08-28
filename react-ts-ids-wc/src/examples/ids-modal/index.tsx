import React, { useRef } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsModalType from 'ids-enterprise-wc/components/ids-modal/ids-modal';
import 'ids-enterprise-wc/components/ids-modal/ids-modal';


const IdsModal = () => {
  const modalRef = useRef<IdsModalType>();

  return (
    <>
      <IdsTitle>Modal Example</IdsTitle>

      <ids-modal ref={modalRef} aria-labelledby="my-modal-title">
        <ids-text slot="title" font-size="24" type="h2" id="my-modal-title">
          Active IDS Modal
        </ids-text>
        <ids-modal-button
          slot="buttons"
          appearance="primary"
          onClick={() => {
            modalRef.current?.hide()
          }}
        >
          <span>OK</span>
        </ids-modal-button>
        <ids-text type="p">This is an active IDS Modal component</ids-text>
      </ids-modal>

      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-button
            appearance="secondary"
            // Trigger ids-modal visibility with React onClick synthetic event
            onClick={() => {
              modalRef.current?.show()
            }}
            disabled={modalRef.current?.visible}
          >
            <span>Trigger a Modal</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsModal;
