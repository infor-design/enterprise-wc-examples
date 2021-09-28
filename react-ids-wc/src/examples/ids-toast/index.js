import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-icon';
import 'ids-enterprise-wc/components/ids-toast';

const IdsToast = () => {
  const triggerRef = useRef();
  const toastContainerRef = useRef();

  useEffect(() => {
    const btnToastDemo = triggerRef.current;
    const toastContainer = toastContainerRef.current;

    // Show toast message
    btnToastDemo.addEventListener('click', () => {
      let toast = toastContainer.querySelector('ids-toast');
      if (!toast) {
        toast = document.createElement('ids-toast');
        toastContainer.appendChild(toast);
      }
      toast.show({
        title: 'Application Offline',
        message: 'This is a Toast message',
      });
    });
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Toast
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-button ref={triggerRef} type="secondary">
            <span slot="text">Toast Message</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <div ref={toastContainerRef} />
    </>
  );
};

export default IdsToast;
