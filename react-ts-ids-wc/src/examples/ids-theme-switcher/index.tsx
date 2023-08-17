import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-theme-switcher/ids-theme-switcher';
import 'ids-enterprise-wc/components/ids-tag/ids-tag';


const IdsThemeSwitcher = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-theme-switcher mode="light"></ids-theme-switcher>
      </ids-layout-grid>

      <IdsTitle>Themes Example</IdsTitle>

      <ids-layout-grid auto-fit="true">
        <ids-tag>Normal Tag</ids-tag>
      </ids-layout-grid>
    </>
  );
};

export default IdsThemeSwitcher;
