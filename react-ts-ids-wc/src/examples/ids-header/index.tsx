import React from 'react';
import 'ids-enterprise-wc/components/ids-header/ids-header';
import 'ids-enterprise-wc/components/ids-toolbar/ids-toolbar';
import 'ids-enterprise-wc/components/ids-search-field/ids-search-field';

const IdsHeader = () => {
  return (
    <>
      <ids-text font-size="12" type="h1" audible="true">
        Ids Header
      </ids-text>

      <ids-header>
        <ids-toolbar>
          <ids-toolbar-section type="button">
            <ids-button icon="menu" role="button">
              <span className="audible">
                Application Menu Trigger
              </span>
            </ids-button>
          </ids-toolbar-section>
          <ids-toolbar-section type="title">
            <ids-text font-size="20">My Header</ids-text>
            <ids-text font-size="14">With some extra information below</ids-text>
          </ids-toolbar-section>
          <ids-toolbar-section align="end">
            <ids-search-field
              clearable
              color-variant="alternate"
              label-state="collapsed"
              no-margins
            ></ids-search-field>
          </ids-toolbar-section>
          <ids-toolbar-section type="button">
            <ids-theme-switcher mode="light"></ids-theme-switcher>
          </ids-toolbar-section>
        </ids-toolbar>
      </ids-header>
    </>
  );
};

export default IdsHeader;
