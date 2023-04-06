import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import IdsButton from '../ids-button/IdsButton';
import 'ids-enterprise-wc/components/ids-app-menu/ids-app-menu';
import 'ids-enterprise-wc/components/ids-container/ids-container';
import 'ids-enterprise-wc/components/ids-header/ids-header';
import 'ids-enterprise-wc/components/ids-icon/ids-icon';
import 'ids-enterprise-wc/components/ids-search-field/ids-search-field';
import 'ids-enterprise-wc/components/ids-text/ids-text';
import 'ids-enterprise-wc/components/ids-toolbar/ids-toolbar';
import 'ids-enterprise-wc/components/ids-toolbar/ids-toolbar-section';


interface BookmarkProps {
  icon: string;
  link: string;
  text: string;
}

const Bookmark: React.FC<BookmarkProps> = (props) => (
  <Link to={props.link}>
    <IdsButton icon={props.icon}>
      <ids-text audible>{props.text}</ids-text>
    </IdsButton>
  </Link>
);

interface LayoutProps {
  children: any;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
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
            <IdsButton id="app-menu-trigger" icon="menu">
              <span className="audible">Open App Menu</span>
            </IdsButton>
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
        <ids-text slot="username" font-size="24" font-weight="bold">IDS Web Components</ids-text>

        {/* <!-- Header Toolbar --> */}
        <ids-toolbar slot="header">
          <ids-toolbar-section align="center-even" type="fluid">
            <Bookmark link="/ids-button" icon="stacked" text="Buttons" />
            <Bookmark link="/ids-input" icon="day-next" text="Forms" />
            <Bookmark link="/ids-data-grid" icon="calculator" text="Data Grid" />
            <Bookmark link="/ids-tree" icon="detail-view" text="Tree" />
            <Bookmark link="/ids-area-chart" icon="overlay-line" text="Area Chart" />
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
