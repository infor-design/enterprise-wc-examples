import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-button/ids-button';
import 'ids-enterprise-wc/ids-menu-button/ids-menu-button';
import 'ids-enterprise-wc/ids-icon/ids-icon';
import 'ids-enterprise-wc/ids-popup-menu/ids-popup-menu';
import 'ids-enterprise-wc/ids-toolbar/ids-toolbar';

const IdsToolbar = () => {
  const menuBtnRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const menu = menuRef.current;
    const menuBtn = menuBtnRef.current;

    // Link trigger with target
    menu.target = menuBtn;
    menu.trigger = 'click';
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Toolbar
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-toolbar>
            <ids-toolbar-section>
              <ids-button icon="menu" role="button">
                <span slot="text" className="audible">
                  Application Menu Trigger
                </span>
              </ids-button>
            </ids-toolbar-section>
            <ids-toolbar-section type="title">
              <ids-text font-size="20">My Toolbar</ids-text>
              <ids-text font-size="14">
                With some extra information below
              </ids-text>
            </ids-toolbar-section>
            <ids-toolbar-section type="buttonset" align="end">
              <ids-button id="button-1" role="button">
                <span slot="text">Text</span>
              </ids-button>

              <ids-menu-button
                ref={menuBtnRef}
                role="button"
                dropdown-icon
              >
                <span slot="text">Menu</span>
              </ids-menu-button>
              <ids-popup-menu ref={menuRef}>
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

              <ids-button id="button-3" disabled>
                <span slot="text" className="audible">
                  Settings
                </span>
                <ids-icon slot="icon" icon="settings"></ids-icon>
              </ids-button>

              <ids-button id="button-4">
                <span slot="text" className="audible">
                  Trash
                </span>
                <ids-icon slot="icon" icon="delete"></ids-icon>
              </ids-button>
            </ids-toolbar-section>

            <ids-toolbar-more-actions>
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
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsToolbar;
