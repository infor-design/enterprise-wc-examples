import React from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
// import 'ids-enterprise-wc/components/ids-input';

const IdsInput = () => {
  const person = 'John Smith';

  function handleClickable(e) {
    console.log('Input Changed', e.target);
  }

  return (
    <>
      <ids-layout-grid>
        <ids-text font-size="12">Inputs</ids-text>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell>
          <ids-input label="Normal Input" value={ person } onChange={ handleClickable }></ids-input>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
}

export default IdsInput;
