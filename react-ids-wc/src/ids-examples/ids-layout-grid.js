import React from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid.js';
import 'ids-enterprise-wc/ids-label/ids-label.js';

function IdsLayoutGrid() {
  return (
    <React.Fragment>
      <ids-layout-grid>
        <ids-label font-size="12">Layout Grid</ids-label>
      </ids-layout-grid>
      <ids-layout-grid>
        <ids-layout-column fill="true"><ids-label font-size="12">A</ids-label></ids-layout-column>
        <ids-layout-column fill="true"><ids-label font-size="12">B</ids-label></ids-layout-column>
        <ids-layout-column fill="true"><ids-label font-size="12">C</ids-label></ids-layout-column>
        <ids-layout-column fill="true"><ids-label font-size="12">D</ids-label></ids-layout-column>
        <ids-layout-column fill="true"><ids-label font-size="12">E</ids-label></ids-layout-column>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-label font-size="12">Layout Standalone CSS</ids-label>
      </ids-layout-grid>
      <div className="ids-layout-grid">
        <div className="ids-layout-column ids-background-fill"><ids-label font-size="12">A</ids-label></div>
        <div className="ids-layout-column ids-background-fill"><ids-label font-size="12">B</ids-label></div>
        <div className="ids-layout-column ids-background-fill"><ids-label font-size="12">C</ids-label></div>
        <div className="ids-layout-column ids-background-fill"><ids-label font-size="12">D</ids-label></div>
      </div>
    </React.Fragment>
  );
}

export default IdsLayoutGrid;
