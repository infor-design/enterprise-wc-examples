import React, { useRef, useEffect } from 'react';
import type IdsErrorPageType from 'ids-enterprise-wc/components/ids-error-page/ids-error-page';
import 'ids-enterprise-wc/components/ids-error-page/ids-error-page';

const IdsErrorPage = () => {
  const errorPageRef = useRef<IdsErrorPageType>();

  useEffect(() => {
    const errorPage = errorPageRef.current;

    // Show on initial page load
    errorPage?.show();

    const handleActionBtn = () => {
      errorPage?.hide();
    }

    const handleBeforeHide = (e: any) => {
      e?.detail?.response?.(false);
    }

    errorPage?.addEventListener('action-button', handleActionBtn);
    errorPage?.addEventListener('beforehide', handleBeforeHide);

    return () => {
      errorPage?.removeEventListener('action-button', handleActionBtn);
      errorPage?.removeEventListener('beforehide', handleBeforeHide);
    }
  }, [])

  return (
    <ids-error-page
      ref={errorPageRef}
      fullsize=""
      icon="empty-error-loading"
      label="Access Denied"
      description="Configuration Manager access has been denied."
      button-text="Return"
    ></ids-error-page>
  );
};

export default IdsErrorPage;
