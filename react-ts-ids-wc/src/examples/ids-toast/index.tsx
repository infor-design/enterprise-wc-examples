import React, { useRef } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsToastType from 'ids-enterprise-wc/components/ids-toast/ids-toast';
import 'ids-enterprise-wc/components/ids-button/ids-button';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell';
import 'ids-enterprise-wc/components/ids-text/ids-text';
import 'ids-enterprise-wc/components/ids-toast/ids-toast';


const IdsToast = () => {
  const toastContainerRef = useRef<any>();

  const handleToastAdd = () => {
    let toast: IdsToastType = toastContainerRef.current.querySelector('ids-toast');

    if (!toast) {
      toast = document.createElement('ids-toast') as IdsToastType;
      toastContainerRef.current.appendChild(toast);
    }

    toast?.show?.({
      title: 'Application Offline',
      message: 'This is a Toast message'
    });
  };

  return (
    <>
      <IdsTitle>Toast Example</IdsTitle>

      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-button onClick={handleToastAdd} type="secondary">
            <span>Toast Message</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <div ref={toastContainerRef} />
    </>
  );
};

export default IdsToast;
