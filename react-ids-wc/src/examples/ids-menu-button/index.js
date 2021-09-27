import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid'
import 'ids-enterprise-wc/components/ids-text'
import 'ids-enterprise-wc/components/ids-menu'
import 'ids-enterprise-wc/components/ids-icon'
import 'ids-enterprise-wc/components/ids-popup-menu'
import 'ids-enterprise-wc/components/ids-menu-button'

const IdsMenuButton = () => {
  const settingsTriggerRef = useRef();
  const settingsMenuRef = useRef();
  const iconTriggerRef = useRef();
  const iconMenuRef = useRef();

  useEffect(() => {
    settingsMenuRef.current.target = settingsTriggerRef.current
    settingsMenuRef.current.trigger = 'click'

    iconMenuRef.current.target = iconTriggerRef.current
    iconMenuRef.current.trigger = 'click'
  }, [])

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Menu Buttons
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="4" gap="md">
        <ids-layout-grid-cell>
          <ids-menu-button
            ref={settingsTriggerRef}
            icon="settings"
            type="tertiary"
            dropdown-icon
          >
            <span slot="text">Settings</span>
          </ids-menu-button>
          <ids-popup-menu ref={settingsMenuRef}>
            <ids-menu-group>
              <ids-menu-item>Personalize Columns</ids-menu-item>
            </ids-menu-group>
            <ids-separator></ids-separator>
            <ids-menu-group select="single">
              <ids-menu-header>Row Height</ids-menu-header>
              <ids-menu-item disabled="true">Extra Small</ids-menu-item>
              <ids-menu-item>Small</ids-menu-item>
              <ids-menu-item>Medium</ids-menu-item>
              <ids-menu-item selected="true">Large</ids-menu-item>
            </ids-menu-group>
            <ids-separator></ids-separator>
            <ids-menu-group select="multiple" keep-open="true">
              <ids-menu-item selected="true">Show Filter Row</ids-menu-item>
            </ids-menu-group>
            <ids-menu-group>
              <ids-menu-item>Run Filter</ids-menu-item>
              <ids-menu-item>Clear Filter</ids-menu-item>
            </ids-menu-group>
          </ids-popup-menu>

          <ids-menu-button ref={iconTriggerRef}>
            <ids-icon slot="icon" icon="more"></ids-icon>
            <span className="audible">Icon Only Button</span>
          </ids-menu-button>
          <ids-popup-menu ref={iconMenuRef}>
            <ids-menu-group>
              <ids-menu-item>Option One</ids-menu-item>
              <ids-menu-item>Option Two</ids-menu-item>
              <ids-menu-item>Option Three</ids-menu-item>
            </ids-menu-group>
          </ids-popup-menu>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsMenuButton;
