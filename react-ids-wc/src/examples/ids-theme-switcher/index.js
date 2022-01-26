import React from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-tag/ids-tag';
import 'ids-enterprise-wc/ids-theme-switcher/ids-theme-switcher';

const IdsThemeSwitcher = () => {
  return (
    <>
      <ids-theme-switcher mode="light" version="new"></ids-theme-switcher>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Themes
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-tag>Normal Tag</ids-tag>
      </ids-layout-grid>
    </>
  );
};

export default IdsThemeSwitcher;
