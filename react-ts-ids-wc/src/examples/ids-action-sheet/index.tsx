import React, { useRef } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import type IdsActionSheetType from 'ids-enterprise-wc/components/ids-action-sheet/ids-action-sheet';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-action-sheet/ids-action-sheet';

const IdsActionSheet = () => {
  const actionSheetRef = useRef<IdsActionSheetType>();

  return (
    <>
      <IdsTitle>Action Sheet Example</IdsTitle>

      <IdsGrid auto-fit gap="md">
        <IdsGridCell>
          <ids-menu-button
            id="icon-button"
            menu="icon-menu"
            onClick={() => {
              if (actionSheetRef.current) {
                actionSheetRef.current.visible = !actionSheetRef.current?.visible;
              }
            }}
          >
            <ids-icon icon="more"></ids-icon>
            <span className="audible">Icon Only Button</span>
          </ids-menu-button>

          <ids-popup-menu
            id="icon-menu"
            class="hide-sm-down"
            target="#icon-button"
            trigger-type="click"
          >
            <ids-menu-group>
              <ids-menu-item>
                Option One
                <ids-icon icon="mail"></ids-icon>
              </ids-menu-item>
              <ids-menu-item>
                Option Two
                <ids-icon icon="filter"></ids-icon>
              </ids-menu-item>
              <ids-menu-item>
                Option Three
                <ids-icon icon="profile"></ids-icon>
              </ids-menu-item>
            </ids-menu-group>
          </ids-popup-menu>

          <ids-action-sheet ref={actionSheetRef}>
            <ids-menu>
              <ids-menu-group>
                <ids-menu-item icon="mail" text-align="center">
                  Option One
                </ids-menu-item>
                <ids-menu-item icon="filter" text-align="center">
                  Option Two
                </ids-menu-item>
                <ids-menu-item icon="profile" text-align="center">
                  Option Three
                </ids-menu-item>
              </ids-menu-group>
            </ids-menu>
          </ids-action-sheet>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsActionSheet;
