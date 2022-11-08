import React from 'react';
import 'ids-enterprise-wc/components/ids-locale/ids-locale';

const IdsLocale = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Locale (Translated Strings)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid
        cols="4"
        gap="sm"
        id="translation-container"
      ></ids-layout-grid>
    </>
  );
};

export default IdsLocale;
