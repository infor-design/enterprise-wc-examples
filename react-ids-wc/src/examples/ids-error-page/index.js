import React from 'react';
import 'ids-enterprise-wc/components/ids-error-page/ids-error-page';

const IdsErrorPage = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-error-page
            id="error-page-1"
            fullsize=""
            visible="true"
            icon="empty-error-loading"
            label="Access Denied"
            description="Configuration Manager access has been denied."
            button-text="Return"
          ></ids-error-page>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsErrorPage;
