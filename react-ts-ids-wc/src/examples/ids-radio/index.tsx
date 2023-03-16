import React, { useRef } from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsRadioGroupType from 'ids-enterprise-wc/components/ids-radio/ids-radio-group';
import 'ids-enterprise-wc/components/ids-radio/ids-radio';


const IdsRadio = () => {
  const radioGroupRef = useRef<IdsRadioGroupType>();

  return (
    <>
      <IdsTitle>Ids Radio Example</IdsTitle>

      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-radio-group label="Normal">
            <ids-radio value="opt1" label="Option one"></ids-radio>
            <ids-radio
              value="opt2"
              label="Option two"
              checked="true"
            ></ids-radio>
          </ids-radio-group>

          <ids-radio-group label="Disabled Group" disabled="true">
            <ids-radio
              value="opt1"
              label="Option one"
              checked="true"
            ></ids-radio>
            <ids-radio value="opt2" label="Option two"></ids-radio>
          </ids-radio-group>

          <ids-radio-group label="Disabled Item">
            <ids-radio value="opt1" label="Option one"></ids-radio>
            <ids-radio
              value="opt2"
              label="Option two"
              checked="true"
            ></ids-radio>
            <ids-radio
              value="opt3"
              label="Option three"
              disabled="true"
            ></ids-radio>
          </ids-radio-group>

          <ids-radio-group>
            <ids-radio value="opt1" label="Option one"></ids-radio>
            <ids-radio
              value="opt2"
              label="Option two"
              checked="true"
            ></ids-radio>
          </ids-radio-group>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-radio-group label="Dirty tracking" dirty-tracker="true">
            <ids-radio value="opt1" label="Option one"></ids-radio>
            <ids-radio
              value="opt2"
              label="Option two"
              checked="true"
            ></ids-radio>
            <ids-radio
              value="opt3"
              label="Option three"
              disabled="true"
            ></ids-radio>
            <ids-radio value="opt4" label="Option four"></ids-radio>
          </ids-radio-group>

          <ids-radio-group label="Set Group Checked and Value" value="opt1">
            <ids-radio value="opt1" label="Option one"></ids-radio>
            <ids-radio value="opt2" label="Option two"></ids-radio>
          </ids-radio-group>

          <ids-radio-group label="Colored Radios">
            <ids-radio
              color="emerald07"
              value="emerald07"
              label="Emerald 07"
            ></ids-radio>
            <ids-radio
              color="amethyst07"
              value="amethyst07"
              label="Amethyst 07"
            ></ids-radio>
            <ids-radio
              color="azure07"
              value="azure07"
              label="Azure 07"
            ></ids-radio>
            <ids-radio
              color="amber07"
              value="amber07"
              label="Amber 07"
              checked="true"
            ></ids-radio>
            <ids-radio
              color="ruby07"
              value="ruby07"
              label="Ruby 07"
            ></ids-radio>
            <ids-radio
              color="ruby07"
              value="ruby07d"
              label="Ruby 07 (disabled)"
              disabled="true"
            ></ids-radio>
            <ids-radio
              color="caution"
              value="caution"
              label="Caution"
            ></ids-radio>
          </ids-radio-group>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-radio-group
            ref={radioGroupRef}
            label="Radio with Validation"
            validate="required"
          >
            <ids-radio value="opt1" label="Option one"></ids-radio>
            <ids-radio value="opt2" label="Option two"></ids-radio>
            <ids-radio
              value="opt3"
              label="Option three"
              disabled="true"
            ></ids-radio>
          </ids-radio-group>
          <ids-button type="secondary" onClick={() => radioGroupRef?.current?.clear()}>
            <span>Clear</span>
          </ids-button>
          <ids-button type="secondary" onClick={() => radioGroupRef?.current?.checkValidation()}>
            <span>Validate</span>
          </ids-button>

          <br />
          <br />
          <ids-radio-group label="Horizontal Radio" horizontal="true">
            <ids-radio value="opt1" label="Option one"></ids-radio>
            <ids-radio
              value="opt2"
              label="Option two"
              checked="true"
            ></ids-radio>
            <ids-radio
              value="opt3"
              label="Option three"
              disabled="true"
            ></ids-radio>
          </ids-radio-group>

          <ids-radio-group horizontal="true">
            <ids-radio value="opt1" label="Option one"></ids-radio>
            <ids-radio
              value="opt2"
              label="Option two"
              checked="true"
            ></ids-radio>
            <ids-radio
              value="opt3"
              label="Option three"
              disabled="true"
            ></ids-radio>
          </ids-radio-group>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsRadio;
