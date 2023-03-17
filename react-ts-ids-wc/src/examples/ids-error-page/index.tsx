import { useEffect, useRef } from 'react';
import useEvent from '../../hooks/useEvent';
import type IdsErrorPageType from 'ids-enterprise-wc/components/ids-error-page/ids-error-page';
import 'ids-enterprise-wc/components/ids-error-page/ids-error-page';

const IdsErrorPage = () => {
  const errorPageRef = useRef<IdsErrorPageType>();

  const handleActionBtn = (e: any) => {
    errorPageRef?.current?.hide?.()
      .then?.((data) => console.log('error-modal hidden', data));
  }

  const handleBeforeHide = (e: any) => {
    // passing false to response will cause hide() action to be "vetoed"
    // e?.detail?.response?.(false);
    e?.detail?.response?.(true);
  }

  useEvent('action-button', handleActionBtn, errorPageRef);
  useEvent('beforehide', handleBeforeHide, errorPageRef);

  useEffect(() => {
    // Show on initial page load
    errorPageRef?.current?.show?.();
  }, []);

  return (
    <ids-error-page
      ref={errorPageRef}
      fullsize=""
      icon="empty-error-loading"
      label="Access Denied"
      description="Configuration Manager access has been denied."
      button-text="Accept"
    ></ids-error-page>
  );
};

export default IdsErrorPage;
