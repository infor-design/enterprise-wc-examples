import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-menu-button/ids-menu-button';

const IdsMenuButton = () => {
  return (
    <>
      <IdsTitle>Menu Buttons Example</IdsTitle>

      <ids-layout-grid cols="4" gap="md" padding-x="md">
        <ids-layout-grid-cell>
          <ids-menu-button id="menu-button" icon="settings" appearance="tertiary" menu="my-menu" dropdown-icon="dropdown">
            <span>Settings</span>
          </ids-menu-button>
          <ids-popup-menu id="my-menu" target="menu-button" trigger-type="click">
            <ids-menu-group>
              <ids-menu-item>Personalize Columns...</ids-menu-item>
            </ids-menu-group>
            <ids-separator></ids-separator>
            <ids-menu-group select="single" id="sizes">
              <ids-menu-header>Row Height</ids-menu-header>
              <ids-menu-item disabled="true" value="extra-small">
                Extra Small
              </ids-menu-item>
              <ids-menu-item value="small">Small</ids-menu-item>
              <ids-menu-item value="medium">Medium</ids-menu-item>
              <ids-menu-item value="large" selected="true">
                Large
              </ids-menu-item>
            </ids-menu-group>
            <ids-separator></ids-separator>
            <ids-menu-group select="multiple" keep-open="true">
              <ids-menu-header>Filtering Options</ids-menu-header>
              <ids-menu-item selected="true">Show Filter Row</ids-menu-item>
              <ids-menu-item value="run-filter">Run Filter</ids-menu-item>
              <ids-menu-item value="clear-filter">Clear Filter</ids-menu-item>
            </ids-menu-group>
          </ids-popup-menu>

          <ids-menu-button id="icon-button" menu="icon-menu" icon="more" tooltip="Multiselect">
          </ids-menu-button>
          <ids-popup-menu id="icon-menu" target="icon-button" trigger-type="click">
            <ids-menu-group select="multiple" keep-open="true">
              <ids-menu-item value="1">Option One</ids-menu-item>
              <ids-menu-item value="2">Option Two</ids-menu-item>
              <ids-menu-item value="3">Option Three</ids-menu-item>
            </ids-menu-group>
          </ids-popup-menu>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsMenuButton;
