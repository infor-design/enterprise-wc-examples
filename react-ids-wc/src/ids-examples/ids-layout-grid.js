import React from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid.js';
import 'ids-enterprise-wc/ids-text/ids-text.js';

function IdsLayoutGrid() {
  return (
    <React.Fragment>
      <ids-layout-grid>
        <ids-text font-size="12">Layout Grid</ids-text>
      </ids-layout-grid>
      <ids-layout-grid>
        <ids-layout-grid-cell fill="true"><ids-text font-size="12">A</ids-text></ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true"><ids-text font-size="12">B</ids-text></ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true"><ids-text font-size="12">C</ids-text></ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true"><ids-text font-size="12">D</ids-text></ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true"><ids-text font-size="12">E</ids-text></ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-text font-size="12">Layout Standalone CSS</ids-text>
      </ids-layout-grid>
      <div className="ids-layout-grid">
        <div className="ids-layout-grid-cell ids-background-fill"><ids-text font-size="12">A</ids-text></div>
        <div className="ids-layout-grid-cell ids-background-fill"><ids-text font-size="12">B</ids-text></div>
        <div className="ids-layout-grid-cell ids-background-fill"><ids-text font-size="12">C</ids-text></div>
        <div className="ids-layout-grid-cell ids-background-fill"><ids-text font-size="12">D</ids-text></div>
      </div>
    </React.Fragment>
  );
}

export default IdsLayoutGrid;
