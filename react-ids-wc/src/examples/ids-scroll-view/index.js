import React from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-scroll-view/ids-scroll-view';

const IdsScrollView = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Scroll View
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="4">
        <ids-layout-grid-cell col-span="1">
          <ids-scroll-view>
            <img
              slot="scroll-view-item"
              src="https://via.placeholder.com/340/888888/ffffff/?text=340 x 340"
              alt="Slide 1"
            />
            <img
              slot="scroll-view-item"
              src="https://via.placeholder.com/340/888888/ffffff/?text=340 x 340"
              alt="Slide 2"
            />
            <img
              slot="scroll-view-item"
              src="https://via.placeholder.com/340/888888/ffffff/?text=340 x 340"
              alt="Slide 3"
            />
            <img
              slot="scroll-view-item"
              src="https://via.placeholder.com/340/888888/ffffff/?text=340 x 340"
              alt="Slide 4"
            />
          </ids-scroll-view>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsScrollView;
