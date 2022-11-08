import React from 'react';
import 'ids-enterprise-wc/components/ids-container/ids-container';

const IdsContainer = () => {
  return (
    <>
      <ids-container padding="8" role="main" hidden>
        <ids-theme-switcher mode="light"></ids-theme-switcher>
      </ids-container>
    </>
  );
};

export default IdsContainer;
