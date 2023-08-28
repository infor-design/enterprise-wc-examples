import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-time-picker/ids-time-picker';

const IdsTimePicker = () => {
  return (
    <>
      <IdsTitle>Time Picker Example</IdsTitle>

      <ids-layout-grid auto-fit="true" cols="4">
        <ids-layout-grid-cell>
          <ids-time-picker
            label="Time Picker - autoselect"
            id="e2e-timepicker-autoselect"
            autoselect
            mask="true"
          ></ids-time-picker>
          <ids-time-picker
            label="Time Picker - autoupdate"
            id="e2e-timepicker-autoupdate"
            autoupdate
            value="1:00 AM"
            mask="true"
          ></ids-time-picker>
          <ids-time-picker
            label="Time Picker - required"
            id="e2e-timepicker-required"
            validate="required time"
            placeholder="Start time"
            mask="true"
          ></ids-time-picker>
          <ids-time-picker
            label="Time Picker - disabled"
            id="e2e-timepicker-disabled"
            disabled
            value="12:30 PM"
          ></ids-time-picker>
          <ids-time-picker
            label="Time Picker - readonly"
            id="e2e-timepicker-readonly"
            readonly
            value="12:30 PM"
          ></ids-time-picker>
          <ids-time-picker
            label="Dirty Tracker"
            format="hh:mm"
            id="e2e-timepicker-tracker"
            value="10:30"
            dirty-tracker="true"
            tabbable="false"
            mask="true"
          ></ids-time-picker>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsTimePicker;
