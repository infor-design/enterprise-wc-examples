import React from 'react';
import IdsButton from '../../components/ids-button/IdsButton';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-toolbar/ids-toolbar';

const IdsToolbar = () => {
  return (
    <>
      <IdsTitle>Toolbar Example</IdsTitle>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-toolbar id="my-toolbar">
            <ids-toolbar-section type="button">
              <IdsButton icon="menu" role="button">
                <span className="audible">
                  Application Menu Trigger
                </span>
              </IdsButton>
            </ids-toolbar-section>
            <ids-toolbar-section type="title" favor>
              <ids-text font-size="20">My Toolbar</ids-text>
              <ids-text font-size="14">With some extra information below</ids-text>
            </ids-toolbar-section>
            <ids-toolbar-section type="buttonset" align="end">
              <IdsButton id="button-1" role="button" noPadding>
                <span>Text 1</span>
              </IdsButton>
              <IdsButton id="button-2" role="button" noPadding>
                <span>Text 2</span>
              </IdsButton>
              <IdsButton id="button-3" role="button" noPadding>
                <span>Text 3</span>
              </IdsButton>

              <ids-menu-button
                id="button-4"
                menu="button-4-menu"
                role="button"
                trigger-type="click"
                dropdown-icon="dropdown"
                no-padding
              >
                <span>Menu</span>
              </ids-menu-button>
              <ids-popup-menu id="button-4-menu" target="#button-4">
                <ids-menu-group>
                  <ids-menu-item value="1">Item One</ids-menu-item>
                  <ids-menu-item value="2">Item Two</ids-menu-item>
                  <ids-menu-item value="3">Item Three</ids-menu-item>
                  <ids-menu-item>
                    More Items
                    <ids-popup-menu>
                      <ids-menu-group>
                        <ids-menu-item value="4">Item Four</ids-menu-item>
                        <ids-menu-item value="4">Item Five</ids-menu-item>
                        <ids-menu-item value="4">Item Six</ids-menu-item>
                      </ids-menu-group>
                    </ids-popup-menu>
                  </ids-menu-item>
                </ids-menu-group>
              </ids-popup-menu>

              <IdsButton id="button-5" disabled>
                <span className="audible">
                  Settings
                </span>
                <ids-icon icon="settings"></ids-icon>
              </IdsButton>

              <IdsButton id="button-6">
                <span className="audible">
                  Trash
                </span>
                <ids-icon icon="delete"></ids-icon>
              </IdsButton>
            </ids-toolbar-section>

            <ids-toolbar-more-actions overflow>
              <ids-menu-group>
                <ids-menu-item value="1">Option One</ids-menu-item>
                <ids-menu-item value="2">Option Two</ids-menu-item>
                <ids-menu-item value="3">Option Three</ids-menu-item>
                <ids-menu-item>
                  More Options
                  <ids-popup-menu>
                    <ids-menu-group>
                      <ids-menu-item value="4">Option Four</ids-menu-item>
                      <ids-menu-item value="5">Option Five</ids-menu-item>
                      <ids-menu-item value="6">Option Six</ids-menu-item>
                    </ids-menu-group>
                  </ids-popup-menu>
                </ids-menu-item>
              </ids-menu-group>
            </ids-toolbar-more-actions>
          </ids-toolbar>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsToolbar;
