import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-button';
import 'ids-enterprise-wc/components/ids-modal';
import 'ids-enterprise-wc/components/ids-modal-button';

const IdsModal = () => {
  const modalRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    const modal = modalRef.current;

    // Links the Modal to its trigger button (sets up click/focus events)
    modal.trigger = 'click';
    modal.target = triggerRef.current;

    // Close the modal when its inner button is clicked.
    modal.onButtonClick = () => {
      modal.hide();
    };

    const handleBeforeShow = () => {
      triggerRef.current.disabled = true;

      return true;
    };

    const handleOnHide = () => {
      triggerRef.current.disabled = false;
    };

    // Disable the trigger button when showing the Modal.
    modal.addEventListener('beforeshow', handleBeforeShow);

    // After the modal is done hiding, re-enable its trigger button.
    modal.addEventListener('hide', handleOnHide);

    return () => [
      modal.removeEventListener('beforeshow', handleBeforeShow),
      modal.removeEventListener('hide', handleOnHide)
    ];
  }, []);

  return (
    <>
      <ids-modal ref={modalRef} aria-labelledby="my-modal-title">
        <ids-text slot="title" font-size="24" type="h2" id="my-modal-title">
          Active IDS Modal
        </ids-text>
        <ids-modal-button slot="buttons" type="primary">
          <span slot="text">OK</span>
        </ids-modal-button>
        <ids-text type="p">This is an active IDS Modal component</ids-text>
      </ids-modal>

      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Modal
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-button ref={triggerRef} type="secondary">
            <span slot="text">Trigger a Modal</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsModal;
