import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-data-label/ids-data-label';

const IdsDataLabel = () => {
  return (
    <>
      <IdsTitle>Data Label Example</IdsTitle>

      <ids-layout-grid auto="true" gap="md">
        <ids-data-label label="Shipping to" label-position="left">
          Los Angeles, California 90001 USA
        </ids-data-label>
        <ids-data-label label="Shipping to">
          Los Angeles, California 90001 USA
        </ids-data-label>
      </ids-layout-grid>
    </>
  );
};

export default IdsDataLabel;
