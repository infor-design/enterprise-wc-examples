import React from 'react';
import 'ids-enterprise-wc/components/ids-theme-switcher/ids-theme-switcher';
import 'ids-enterprise-wc/components/ids-tag/ids-tag';


const IdsThemeSwitcher = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-theme-switcher mode="light"></ids-theme-switcher>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Themes
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true">
        <ids-tag>Normal Tag</ids-tag>
      </ids-layout-grid>
    </>
  );
};

export default IdsThemeSwitcher;
