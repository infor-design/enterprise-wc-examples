import React, { useRef, useEffect } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsMenuType from 'ids-enterprise-wc/components/ids-menu/ids-menu';
import type IdsMenuItemType from 'ids-enterprise-wc/components/ids-menu/ids-menu-item';
import 'ids-enterprise-wc/components/ids-menu/ids-menu';
import 'ids-enterprise-wc/components/ids-menu/ids-menu-item';


const IdsMenu = () => {
  const noSelectRef = useRef<IdsMenuItemType>();
  const menuRef = useRef<IdsMenuType>();

  useEffect(() => {
    // Add a `beforeselected` veto to one of the menu items
    const noSelectEl = noSelectRef.current;
    const handleNoSelect = (e: any) => {
      console.info(
        '%c You cannot select this item',
        'color: #ff0000;',
        e?.detail?.elem
      );
      e?.detail?.response?.(false);
    };
    noSelectEl?.addEventListener('beforeselected', handleNoSelect);

    // Log to the console on `selected`
    const menuEl = menuRef.current;
    const handleSelected = (e: any) => {
      console.info(`Item "${e?.detail?.elem?.text}" was selected`);
    };
    menuEl?.addEventListener('selected', handleSelected);

    return function cleanup() {
      noSelectEl?.removeEventListener('beforeselected', handleNoSelect);
      menuEl?.removeEventListener('selected', handleSelected);
    }
  }, []);

  return (
    <>
      <IdsTitle>Menu Example</IdsTitle>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-menu>
            <ids-menu-group>
              <ids-menu-item>One</ids-menu-item>
              <ids-menu-item>Two</ids-menu-item>
              <ids-menu-item>Three</ids-menu-item>
            </ids-menu-group>
          </ids-menu>
        </IdsGridCell>
        <IdsGridCell>
          <ids-menu ref={menuRef}>
            <ids-menu-group>
              <ids-menu-item value="mail">
                Mail
                <ids-icon slot="icon" icon="mail"></ids-icon>
              </ids-menu-item>
              <ids-menu-item value="filter">
                Filter
                <ids-icon slot="icon" icon="filter"></ids-icon>
              </ids-menu-item>
              <ids-menu-item value="settings">
                Settings
                <ids-icon slot="icon" icon="settings"></ids-icon>
              </ids-menu-item>
              <ids-separator></ids-separator>
              <ids-menu-item value="long-no-icons">
                Very long, indescribable action with no icons
              </ids-menu-item>
              <ids-menu-item disabled="true" value="big-with-icons">
                Another big menu item, but with icons!
                <ids-icon slot="icon" icon="url"></ids-icon>
              </ids-menu-item>
            </ids-menu-group>
            <ids-separator></ids-separator>
            <ids-menu-header id="additional-actions-header">
              Additional Actions
            </ids-menu-header>
            <ids-menu-group aria-describedby="additional-actions-header">
              <ids-menu-item value="more-actions">More Actions</ids-menu-item>
              <ids-menu-item value="even-more-actions">
                Even More Actions
                <ids-icon slot="icon" icon="user"></ids-icon>
              </ids-menu-item>
              <ids-menu-item ref={noSelectRef} value="no-select">
                This one can't be selected (Check the console)
              </ids-menu-item>
            </ids-menu-group>
            <ids-separator></ids-separator>
            <ids-menu-group>
              <ids-menu-item value="other-items">
                Other Items
                <ids-icon slot="icon" icon="more"></ids-icon>
              </ids-menu-item>
            </ids-menu-group>
          </ids-menu>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsMenu;
