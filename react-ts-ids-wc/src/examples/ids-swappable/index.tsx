import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-swappable/ids-swappable';
import 'ids-enterprise-wc/components/ids-swappable/ids-swappable-item';

const IdsSwappable = () => {
  return (
    <>
      <IdsTitle>Ids Swappable Example</IdsTitle>

      <IdsGrid auto>
        <ids-text font-size="12" type="h1">
          Basic Example
        </ids-text>
      </IdsGrid>

      <IdsGrid cols="2" gap="xl">
        <IdsGridCell col-span="1">
          <ids-swappable id="swappable-1">
            <ids-swappable-item class="p-8">
              <ids-text font-size="16" type="p">
                Swappable Item 1
              </ids-text>
            </ids-swappable-item>
            <ids-swappable-item class="p-8">
              <ids-text font-size="16" type="p">
                Swappable Item 2
              </ids-text>
            </ids-swappable-item>
            <ids-swappable-item class="p-8">
              <ids-text font-size="16" type="p">
                Swappable Item 3
              </ids-text>
            </ids-swappable-item>
          </ids-swappable>
        </IdsGridCell>
      </IdsGrid>

      <IdsGrid auto>
        <ids-text font-size="12" type="h1">
          Multiple Selection Example
        </ids-text>
      </IdsGrid>

      <IdsGrid cols="2" gap="xl">
        <IdsGridCell col-span="1">
          <ids-swappable id="swappable-2" selection="multiple">
            <ids-swappable-item class="p-8">
              <ids-text font-size="16" type="p">
                Swappable Item 1
              </ids-text>
            </ids-swappable-item>
            <ids-swappable-item class="p-8">
              <ids-text font-size="16" type="p">
                Swappable Item 2
              </ids-text>
            </ids-swappable-item>
            <ids-swappable-item class="p-8">
              <ids-text font-size="16" type="p">
                Swappable Item 3
              </ids-text>
            </ids-swappable-item>
            <ids-swappable-item class="p-8">
              <ids-text font-size="16" type="p">
                Swappable Item 4
              </ids-text>
            </ids-swappable-item>
            <ids-swappable-item class="p-8">
              <ids-text font-size="16" type="p">
                Swappable Item 5
              </ids-text>
            </ids-swappable-item>
            <ids-swappable-item class="p-8">
              <ids-text font-size="16" type="p">
                Swappable Item 6
              </ids-text>
            </ids-swappable-item>
          </ids-swappable>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsSwappable;
