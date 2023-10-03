import React, { useRef, useEffect, useState } from 'react';
import 'ids-enterprise-wc/components/ids-input/ids-input';


const IdsInput = () => {
  const sourceInputRef = useRef();
  const destinationInputRef = useRef();
  const [value, setValue] = useState('');

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const sourceInput = sourceInputRef.current;
    const destinationInput = destinationInputRef.current;

    // Event handler to be used in attach and cleanup event listener
    const handleChange = e => {
      setValue(e.target.value);
      destinationInput.value = e.target.value;
    };

    // Attach event listener
    sourceInput.addEventListener('keyup', handleChange);

    // Cleanup event listener on React component unmount
    return () => sourceInput.removeEventListener('keyup', handleChange);
  }, []);

  return (
    <>
      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Ids Input
          </ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h2">
            Ids Input - Sizes
          </ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h2">
            Input - Enable/ Disable/ Readonly
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-input
            ref={sourceInputRef}
            type="text"
            label="To change value of below readonly fields"
          ></ids-input>
          <ids-input
            type="text"
            label="Changing value with state"
            readonly="true"
            value={value}
          ></ids-input>
          <ids-input
            ref={destinationInputRef}
            type="text"
            label="Changing value with events"
            readonly="true"
          ></ids-input>
          <ids-input
            type="text"
            label="First Name"
            placeholder="Normal text Field"
          ></ids-input>
          <ids-input
            type="text"
            label="Last Name"
            validate="required"
          ></ids-input>
          <ids-input
            type="text"
            label="Email Address"
            placeholder="Company@address.com"
            validate="email required"
          ></ids-input>
          <ids-input
            type="text"
            label="Disabled"
            disabled="true"
            value="Field not editable"
          ></ids-input>
          <ids-input
            type="text"
            label="Readonly"
            readonly="true"
            value="02006"
          ></ids-input>
          <ids-input
            type="text"
            label="Dirty Tracking"
            dirty-tracker="true"
            placeholder="Dirty Tracking"
            value="02006"
          ></ids-input>
          <ids-input
            type="text"
            label="Clearable"
            placeholder="Clearable text Field"
            clearable="true"
          ></ids-input>
          <ids-input
            type="text"
            label="Autoselect"
            value="Text select on focus"
            autoselect="true"
          ></ids-input>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-input size="xs" label="Xtra Small"></ids-input>
          <ids-input size="sm" label="Small"></ids-input>
          <ids-input size="mm" label="Small - Medium"></ids-input>
          <ids-input size="md" label="Medium"></ids-input>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-input
            id="input-toggle-state"
            label="Text Field"
            value="Some text"
          ></ids-input>

          <ids-button id="btn-input-enable" appearance="secondary">
            <span>Enable</span>
          </ids-button>
          <ids-button id="btn-input-disable" appearance="secondary">
            <span>Disable</span>
          </ids-button>
          <ids-button id="btn-input-readonly" appearance="secondary">
            <span>Readonly</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true" padding="md">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h2">
            Ids Input - Text align
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-input
            label="Default align (left)"
            value="Default align"
          ></ids-input>
          <ids-input
            label="Left align"
            value="Left align"
            text-align="left"
          ></ids-input>
          <ids-input
            label="Center align"
            value="Center align"
            text-align="center"
          ></ids-input>
          <ids-input
            label="Right align"
            value="Right align"
            text-align="right"
          ></ids-input>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsInput;
