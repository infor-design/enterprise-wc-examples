import React from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-card/ids-card';
import 'ids-enterprise-wc/ids-virtual-scroll/ids-virtual-scroll';

const IdsVirtualScroll = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Virtual Scroller
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2" gap="xl">
        <ids-layout-grid-cell>
          <ids-card>
            <div slot="card-header">
              <ids-text
                font-size="20"
                type="h2"
                overflow="ellipsis"
                tooltip="true"
              >
                List With Virtual Scroll
              </ids-text>
            </div>
            <div slot="card-content">
              <ids-virtual-scroll
                id="virtual-scroll-1"
                height="308"
                item-height="20"
                item-count="1000"
              >
                <div className="ids-list-view">
                  <ul slot="contents"></ul>
                </div>
              </ids-virtual-scroll>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-card>
            <div slot="card-header">
              <ids-text
                font-size="20"
                type="h2"
                overflow="ellipsis"
                tooltip="true"
              >
                Table With Virtual Scroll
              </ids-text>
            </div>
            <div slot="card-content">
              <div className="ids-data-grid" role="table" aria-label="Products">
                <div className="ids-data-grid-header" role="rowgroup">
                  <div role="row" className="ids-data-grid-row">
                    <span
                      className="ids-data-grid-header-cell"
                      role="columnheader"
                    >
                      <span className="ids-data-grid-header-text">Id</span>
                    </span>
                    <span
                      className="ids-data-grid-header-cell"
                      role="columnheader"
                    >
                      <span className="ids-data-grid-header-text">Product</span>
                    </span>
                  </div>
                </div>
                <ids-virtual-scroll
                  id="virtual-scroll-2"
                  height="273"
                  item-height="50"
                  item-count="1000"
                >
                  <div className="ids-data-grid-container">
                    <div
                      className="ids-data-grid-body"
                      role="rowgroup"
                      slot="contents"
                    ></div>
                  </div>
                </ids-virtual-scroll>
              </div>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsVirtualScroll;
