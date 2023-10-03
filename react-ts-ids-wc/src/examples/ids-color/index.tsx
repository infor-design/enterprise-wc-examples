import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-color/ids-color';


const IdsColor = () => {
  return (
    <>
      <IdsTitle>Color Example</IdsTitle>

      <ids-layout-grid auto-fit="true" padding="md">
        <ids-color hex="#da9e2d"></ids-color>
      </ids-layout-grid>
    </>
  );
};

export default IdsColor;
