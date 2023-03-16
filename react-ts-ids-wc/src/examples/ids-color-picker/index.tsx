import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-color-picker/ids-color-picker';

const IdsColorPicker = () => {
  return (
    <>
      <IdsTitle>Color Picker Example</IdsTitle>

      <ids-layout-grid auto="true" cols="2" gap="md">
        <ids-layout-grid-cell>
          <ids-color-picker id="color-picker-e2e-test" label="Default Color Picker"></ids-color-picker>
          <ids-color-picker label="Clearable Color Picker" value="ruby-80" clearable></ids-color-picker>
          <ids-color-picker label="Custom Colors" value="#F4ACB7">
            <ids-color hex="#D8E2DC"></ids-color>
            <ids-color hex="#FFE5D9"></ids-color>
            <ids-color hex="#FFCAD4"></ids-color>
            <ids-color hex="#F4ACB7"></ids-color>
            <ids-color hex="#9D8189"></ids-color>
          </ids-color-picker>

          <ids-color-picker label="Suppress Labels" value="#3B1470" suppress-labels></ids-color-picker>
          <ids-color-picker label="Suppress Tooltips" value="#3B1470" suppress-tooltips></ids-color-picker>
          <ids-color-picker
            label="Suppress Labels + Tooltips"
            value="#3B1470"
            suppress-labels
            suppress-tooltips
          ></ids-color-picker>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-color-picker label="Disabled Color Picker" value="#941E1E" disabled></ids-color-picker>
          <ids-color-picker label="Readonly Color Picker" value="#941E1E" readonly="true"></ids-color-picker>
          <ids-color-picker label="Validation" validate="required" clearable></ids-color-picker>
          <ids-color-picker label="Dirty Tracker" value="#E66467" dirty-tracker></ids-color-picker>
          <ids-color-picker label="Advanced Color Picker" value="#E66467" advanced="true"></ids-color-picker>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsColorPicker;
