import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-toolbar/ids-toolbar';
import 'ids-enterprise-wc/ids-button/ids-button';
import 'ids-enterprise-wc/ids-menu-button/ids-menu-button';
import 'ids-enterprise-wc/ids-theme-switcher/ids-theme-switcher';
import 'ids-enterprise-wc/ids-icon/ids-icon';
import 'ids-enterprise-wc/ids-popup-menu/ids-popup-menu';
import 'ids-enterprise-wc/ids-header/ids-header';

const IdsHeader = () => {
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
      <ids-text font-size="12" type="h1" audible="true">
        Ids Header
      </ids-text>

      <ids-header>
        <ids-toolbar>
          <ids-toolbar-section>
            <ids-button icon="menu" role="button" color-variant="alternate">
              <span slot="text" className="audible">
                Application Menu Trigger
              </span>
            </ids-button>
          </ids-toolbar-section>
          <ids-toolbar-section type="title">
            <ids-text font-size="20" color-variant="alternate">
              My Header
            </ids-text>
            <ids-text font-size="14" color-variant="alternate">
              With some extra information below
            </ids-text>
          </ids-toolbar-section>
          <ids-toolbar-section type="buttonset" align="end">
            <ids-button role="button" color-variant="alternate">
              <span slot="text">Text</span>
            </ids-button>

            <ids-menu-button
              ref={menuBtnRef}
              role="button"
              dropdown-icon
              color-variant="alternate"
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

            <ids-button disabled color-variant="alternate">
              <span slot="text" className="audible">
                Settings
              </span>
              <ids-icon slot="icon" icon="settings"></ids-icon>
            </ids-button>

            <ids-button color-variant="alternate">
              <span slot="text" className="audible">
                Trash
              </span>
              <ids-icon slot="icon" icon="delete"></ids-icon>
            </ids-button>
          </ids-toolbar-section>
          <ids-theme-switcher
            mode="light"
            version="new"
            color-variant="alternate"
          ></ids-theme-switcher>
        </ids-toolbar>
      </ids-header>
    </>
  );
};

export default IdsHeader;
