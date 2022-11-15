import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-error-page/ids-error-page';

const IdsErrorPage = () => {
  const errorPageRef = useRef();

  useEffect(() => {
    const errorPage = errorPageRef.current;

    // Show on initial page load
    errorPage.show();

    const handleActionBtn = () => {
      errorPage.hide();
    }

    const handleBeforeHide = (e) => {
      e.detail.response(false);
    }

    errorPage.addEventListener('action-button', handleActionBtn);
    errorPage.addEventListener('beforehide', handleBeforeHide);

    return () => {
      errorPage.removeEventListener('action-button', handleActionBtn);
      errorPage.removeEventListener('beforehide', handleBeforeHide);
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
