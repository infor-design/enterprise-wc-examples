import React, { useState } from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-checkbox/ids-checkbox';

const IdsCheckbox = () => {
  // Changing indeterminate ids-checkbox attributes with React state
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <>
      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Ids Checkbox
          </ids-text>
          <br />
          <ids-checkbox label="Unchecked"></ids-checkbox>
          <ids-checkbox label="Checked" checked="true"></ids-checkbox>
          <ids-checkbox
            label="Dirty tracking"
            dirty-tracker="true"
          ></ids-checkbox>
          <ids-checkbox
            label="Disabled and unchecked"
            disabled="true"
          ></ids-checkbox>
          <ids-checkbox
            label="Disabled and checked"
            checked="true"
            disabled="true"
          ></ids-checkbox>
          <ids-checkbox label="Required" validate="required"></ids-checkbox>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Ids Checkbox - Colored
          </ids-text>
          <br />
          <ids-checkbox
            checked="true"
            color="emerald07"
            label="Emerald 07"
          ></ids-checkbox>
          <ids-checkbox
            checked="true"
            color="amethyst07"
            label="Amethyst 07"
          ></ids-checkbox>
          <ids-checkbox
            checked="true"
            color="azure07"
            label="Azure 07"
          ></ids-checkbox>
          <ids-checkbox
            checked="true"
            color="amber07"
            label="Amber 07"
          ></ids-checkbox>
          <ids-checkbox
            checked="true"
            color="ruby07"
            label="Ruby 07"
          ></ids-checkbox>
          <ids-checkbox
            checked="true"
            color="ruby07"
            label="Ruby 07 (disabled)"
            disabled="true"
          ></ids-checkbox>
          <ids-checkbox
            checked="true"
            color="caution"
            label="Caution"
          ></ids-checkbox>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Ids Indeterminate
          </ids-text>
          <br />
          <ids-checkbox
            label="Indeterminate"
            // Pass state value to web component attribute
            indeterminate={indeterminate}
          ></ids-checkbox>
          <ids-button type="primary" onClick={() => setIndeterminate(true)}>
            <span slot="text">Set</span>
          </ids-button>
          <ids-button type="secondary" onClick={() => setIndeterminate(false)}>
            <span slot="text">Remove</span>
          </ids-button>

          <br />
          <br />
          <ids-text font-size="12" type="h1">
            Ids Checkbox - Horizontal
          </ids-text>
          <br />

          <ids-checkbox
            label="Option 1 I am long"
            horizontal="true"
          ></ids-checkbox>
          <ids-checkbox
            label="Option 2"
            horizontal="true"
            checked="true"
          ></ids-checkbox>
          <ids-checkbox
            label="Option 3"
            horizontal="true"
            checked="true"
          ></ids-checkbox>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsCheckbox;
