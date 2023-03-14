import React from 'react';
import 'ids-enterprise-wc/components/ids-color/ids-color';


const IdsColor = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Color
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-color hex="#da9e2d"></ids-color>
      </ids-layout-grid>
    </>
  );
};

export default IdsColor;
