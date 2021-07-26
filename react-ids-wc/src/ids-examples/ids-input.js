import React from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid.js';
import 'ids-enterprise-wc/ids-input/ids-input.js';

function IdsInput() {
  const person = 'John Smith';

  function handleClickable(e) {
    console.log('Input Changed', e.target);
  }

  return (
    <React.Fragment>
      <ids-layout-grid>
        <ids-text font-size="12">Inputs</ids-text>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell>
          <ids-input label="Normal Input" value={ person } onChange={ handleClickable }></ids-input>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </React.Fragment>
  );
}

export default IdsInput;
