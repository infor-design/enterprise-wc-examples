import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-layout-flex/ids-layout-flex';
import './styles.css';

const IdsLayoutFlex = () => {
  return (
    <>
      <IdsTitle>Layout Flex Example</IdsTitle>

      <div className="demo-ids-layout-flex">
        <ids-layout-grid cols="2">
          <ids-layout-grid-cell col-span="1" class="fill">
            <ids-layout-flex gap="8">
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
            </ids-layout-flex>
          </ids-layout-grid-cell>
        </ids-layout-grid>

        <ids-layout-grid auto-fit="true" gap="md" padding-x="md">
          <ids-text font-size="12" type="h2">
            justify-content (center)
          </ids-text>
        </ids-layout-grid>
        <ids-layout-grid cols="2">
          <ids-layout-grid-cell col-span="1" class="fill">
            <ids-layout-flex gap="8" justify-content="center">
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
            </ids-layout-flex>
          </ids-layout-grid-cell>
        </ids-layout-grid>

        <ids-layout-grid auto-fit="true" gap="md" padding-x="md">
          <ids-text font-size="12" type="h2">
            justify-content (flex-end)
          </ids-text>
        </ids-layout-grid>
        <ids-layout-grid cols="2">
          <ids-layout-grid-cell col-span="1" class="fill">
            <ids-layout-flex gap="8" justify-content="flex-end">
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
            </ids-layout-flex>
          </ids-layout-grid-cell>
        </ids-layout-grid>

        <ids-layout-grid auto-fit="true" gap="md" padding-x="md">
          <ids-text font-size="12" type="h2">
            justify-content (space-between)
          </ids-text>
        </ids-layout-grid>
        <ids-layout-grid cols="2">
          <ids-layout-grid-cell col-span="1" class="fill">
            <ids-layout-flex gap="8" justify-content="space-between">
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
            </ids-layout-flex>
          </ids-layout-grid-cell>
        </ids-layout-grid>

        <ids-layout-grid auto-fit="true" gap="md" padding-x="md">
          <ids-text font-size="12" type="h2">
            justify-content (space-around)
          </ids-text>
        </ids-layout-grid>
        <ids-layout-grid cols="2">
          <ids-layout-grid-cell col-span="1" class="fill">
            <ids-layout-flex gap="8" justify-content="space-around">
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
            </ids-layout-flex>
          </ids-layout-grid-cell>
        </ids-layout-grid>

        <ids-layout-grid auto-fit="true" gap="md" padding-x="md">
          <ids-text font-size="12" type="h2">
            justify-content (space-evenly)
          </ids-text>
        </ids-layout-grid>
        <ids-layout-grid cols="2">
          <ids-layout-grid-cell col-span="1" class="fill">
            <ids-layout-flex gap="8" justify-content="space-evenly">
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
            </ids-layout-flex>
          </ids-layout-grid-cell>
        </ids-layout-grid>

        <ids-layout-grid auto-fit="true" gap="md" padding-x="md">
          <ids-text font-size="12" type="h2">
            grow / shrink (items)
          </ids-text>
        </ids-layout-grid>
        <ids-layout-grid cols="2">
          <ids-layout-grid-cell col-span="1" class="fill">
            <ids-layout-flex gap="8">
              <ids-layout-flex-item grow="0" shrink="0">
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item grow="0" shrink="0">
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item grow="1" shrink="0">
                <div className="box"></div>
              </ids-layout-flex-item>
            </ids-layout-flex>
          </ids-layout-grid-cell>
        </ids-layout-grid>

        <ids-layout-grid auto-fit="true" gap="md" padding-x="md">
          <ids-text font-size="12" type="h2">
            direction (column)
          </ids-text>
        </ids-layout-grid>
        <ids-layout-grid cols="2">
          <ids-layout-grid-cell col-span="1" class="fill">
            <ids-layout-flex gap="8" direction="column">
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
              <ids-layout-flex-item>
                <div className="box"></div>
              </ids-layout-flex-item>
            </ids-layout-flex>
          </ids-layout-grid-cell>
        </ids-layout-grid>
      </div>
    </>
  );
};

export default IdsLayoutFlex;
