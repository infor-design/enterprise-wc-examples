import React from 'react';
import Navigation from '../navigation/Navigation';
import 'ids-enterprise-wc/components/ids-app-menu/ids-app-menu';
import 'ids-enterprise-wc/components/ids-button/ids-button';
import 'ids-enterprise-wc/components/ids-container/ids-container';
import 'ids-enterprise-wc/components/ids-header/ids-header';
import 'ids-enterprise-wc/components/ids-icon/ids-icon';
import 'ids-enterprise-wc/components/ids-search-field/ids-search-field';
import 'ids-enterprise-wc/components/ids-text/ids-text';
import 'ids-enterprise-wc/components/ids-toolbar/ids-toolbar';
import 'ids-enterprise-wc/components/ids-toolbar/ids-toolbar-section';


interface LayoutType {
  children: any;
}

export const Layout: React.FC<LayoutType> = ({ children }) => {
  React.useEffect(() => {
    const appMenuDrawer: any = document.querySelector('#app-menu');
    const appMenuTriggerBtn: any = document.querySelector('#app-menu-trigger');
    appMenuDrawer.target = appMenuTriggerBtn;
    appMenuDrawer.visible = true;
  }, []);

  return (
    <ids-container role="main" padding="0" hidden>
      <ids-header>
        <ids-toolbar>
          <ids-toolbar-section type="button">
            <ids-button id="app-menu-trigger" icon="menu">
              <span className="audible">Open App Menu</span>
            </ids-button>
          </ids-toolbar-section>
          <ids-toolbar-section type="title">
            <ids-text font-size="20" type="h1">React Typescript Examples</ids-text>
          </ids-toolbar-section>
          <ids-toolbar-section align="end" type="button">
            <ids-theme-switcher mode="light"></ids-theme-switcher>
          </ids-toolbar-section>
        </ids-toolbar>
      </ids-header>

      <ids-app-menu id="app-menu">
        {/* <!-- Avatar/Username Area --> */}
        <ids-icon size="xxl" slot="avatar" icon="logo"></ids-icon>
        <ids-text slot="username" font-size="24" font-weight="bold">IDS Web Components</ids-text>

        {/* <!-- Header Toolbar --> */}
        <ids-toolbar slot="header">
          <ids-toolbar-section align="center-even" type="fluid">
            <ids-button id="header-btn-download" icon="download">
              <ids-text audible>Download</ids-text>
            </ids-button>
            <ids-button id="header-btn-print" icon="print">
              <ids-text audible>Print</ids-text>
            </ids-button>
            <ids-button id="header-btn-purchasing" icon="purchasing">
              <ids-text audible>Purchasing</ids-text>
            </ids-button>
            <ids-button id="header-btn-notification" icon="notification">
              <ids-text audible>Notification</ids-text>
            </ids-button>
            <ids-button id="header-btn-inventory" icon="inventory">
              <ids-text audible>Inventory</ids-text>
            </ids-button>
          </ids-toolbar-section>
        </ids-toolbar>

        <ids-search-field id="search" clearable color-variant="app-menu" label="Application Menu Search" label-state="collapsed" no-margins slot="search"></ids-search-field>

        {/* <!-- Main Content (Accordion Navigation) --> */}
        <Navigation />
      </ids-app-menu>
      <ids-container padding="20" hidden>
        {children}
      </ids-container>
    </ids-container>
  );
}

export default Layout;
