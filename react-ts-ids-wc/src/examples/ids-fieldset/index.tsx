import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-fieldset/ids-fieldset';


const IdsFieldset = () => {
  return (
    <>
      <IdsTitle>Fieldset Example</IdsTitle>

      <ids-layout-grid auto-fit="true">
        <form>
          <ids-fieldset>
            <legend>
              <ids-text font-size="24" type="h2" id="user-info">
                User Information
              </ids-text>
            </legend>
            <ids-input type="text" label="User Name" id="user-name"></ids-input>
            <ids-input
              type="text"
              label="User Address"
              id="user-address"
            ></ids-input>
          </ids-fieldset>
          <ids-fieldset>
            <legend>
              <ids-text font-size="24" type="h2" id="company-info">
                Company Information
              </ids-text>
            </legend>
            <ids-input
              type="text"
              label="Company Name"
              id="company-name"
            ></ids-input>
            <ids-input type="text" label="Company Type" id="type"></ids-input>
            <ids-input
              type="text"
              label="Company Address"
              id="company-address"
            ></ids-input>
            <ids-checkbox label="Checked" checked="true"></ids-checkbox>
            <ids-button type="primary">Submit</ids-button>
          </ids-fieldset>
        </form>
      </ids-layout-grid>
    </>
  );
};

export default IdsFieldset;
