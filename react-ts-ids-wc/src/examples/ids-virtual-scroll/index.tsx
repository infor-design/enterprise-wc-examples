import React, { useRef, useEffect } from 'react';
import type IdsVirtualScrollType from 'ids-enterprise-wc/components/ids-virtual-scroll/ids-virtual-scroll';
import 'ids-enterprise-wc/components/ids-virtual-scroll/ids-virtual-scroll';
import './styles.css';


const IdsVirtualScroll = () => {
  const virtualScrollListRef = useRef<IdsVirtualScrollType>();
  const virtualScrollTableRef = useRef<IdsVirtualScrollType>();
  const dataGridRef = useRef<any>();

  useEffect(() => {
    const virtualScrollList = virtualScrollListRef.current;
    const virtualScrollTable = virtualScrollTableRef.current;
    const datagrid = dataGridRef.current;

    async function fetchData() {
      // Do an ajax request
      const response = await fetch('/data/products.json');
      const data = await response.json();

      if (virtualScrollList) {
        // Setup the list view
        virtualScrollList.data = data;
        virtualScrollList.itemTemplate = item =>
          `<div part="list-item">${item.productName}</div>`;
      }

      if (virtualScrollTable) {
        // Set up the table, which has a custom area with scrolling
        virtualScrollTable.scrollTarget = datagrid;
        virtualScrollTable.itemTemplate =
          item => `<div part="row" role="row" class="ids-data-grid-row">
          <span role="cell" part="cell" class="ids-data-grid-cell"><span class="text-ellipsis" part="text-ellipsis">${item.productId}</span></span>
          <span role="cell" part="cell" class="ids-data-grid-cell"><span class="text-ellipsis" part="text-ellipsis">${item.productName}</span></span>
        </div>`;
        virtualScrollTable.data = data;
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Virtual Scroller
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2" gap="xl">
        <ids-layout-grid-cell>
          <ids-card auto-height>
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
              <div className="ids-list-view-overflow">
                <ids-virtual-scroll
                  ref={virtualScrollListRef}
                  height="100vh"
                  item-height="20"
                  buffer-size="3"
                  item-count="1000"
                >
                  <div className="ids-list-view-container">
                    <div className="ids-list-view" data-part="contents"></div>
                  </div>
                </ids-virtual-scroll>
              </div>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-card auto-height overflow="hidden">
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
              <div
                ref={dataGridRef}
                className="ids-data-grid"
                role="table"
                aria-label="Products"
              >
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
                  ref={virtualScrollTableRef}
                  height="100vh"
                  id="virtual-scroll-2"
                  item-height="50"
                  item-count="1000"
                >
                  <div className="ids-data-grid-container">
                    <div
                      className="ids-data-grid-body"
                      data-part="contents"
                      role="rowgroup"
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
