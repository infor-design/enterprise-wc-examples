import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-button/ids-button';
import 'ids-enterprise-wc/ids-modal/ids-modal';
import 'ids-enterprise-wc/ids-modal-button/ids-modal-button';

const IdsModal = () => {
  const modalRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const modal = modalRef.current;
    const triggerBtn = triggerRef.current;

    // Link the About to its trigger button
    modal.target = triggerRef.current;
    modal.trigger = 'click';

    // Event handler to be used in attach and cleanup event listener
    const handleBeforeShow = () => {
      triggerBtn.disabled = true;
      return true;
    };

    const handleHide = () => {
      triggerBtn.disabled = false;
    };

    // Attach event listener
    modal.addEventListener('beforeshow', handleBeforeShow);
    modal.addEventListener('hide', handleHide);

    // Cleanup event listener on React component unmount
    return () => [
      modal.removeEventListener('beforeshow', handleBeforeShow),
      modal.removeEventListener('hide', handleHide)
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
