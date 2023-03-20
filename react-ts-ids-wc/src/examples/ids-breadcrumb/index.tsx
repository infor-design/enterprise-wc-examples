import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-breadcrumb/ids-breadcrumb';


const IdsBreadcrumb = () => {
  return (
    <>
      <IdsTitle>Breadcrumb Example</IdsTitle>

      <ids-layout-grid auto="true">
        <ids-breadcrumb>
          <ids-hyperlink font-size="14" color="unset" href="#">
            First Item
          </ids-hyperlink>
          <ids-hyperlink font-size="14" color="unset" href="#">
            Second Item
          </ids-hyperlink>
          <ids-hyperlink font-size="14" color="unset" disabled>
            Disabled Item
          </ids-hyperlink>
          <ids-hyperlink font-size="14" color="unset">
            Current Item
          </ids-hyperlink>
        </ids-breadcrumb>
      </ids-layout-grid>
    </>
  );
};

export default IdsBreadcrumb;
