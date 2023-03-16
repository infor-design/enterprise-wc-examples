import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-swappable/ids-swappable';
import 'ids-enterprise-wc/components/ids-swappable/ids-swappable-item';

const IdsSwappable = () => {
  return (
    <>
      <IdsTitle>Ids Swappable Example</IdsTitle>

      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Basic Example
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="2" gap="xl">
        <ids-layout-grid-cell col-span="1">
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
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Multiple Selection Example
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="2" gap="xl">
        <ids-layout-grid-cell col-span="1">
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
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsSwappable;
