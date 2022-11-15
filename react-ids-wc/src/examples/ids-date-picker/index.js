import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-date-picker/ids-date-picker';

const IdsDatePicker = () => {
  const datePickerLegendRef = useRef();

  useEffect(() => {
    const datePickerLegend = datePickerLegendRef.current;

    datePickerLegend.legend = [
      {
        name: 'Public Holiday',
        color: 'emerald-60',
        dates: ['12/31/2021', '12/24/2021', '1/1/2022'],
      },
      { name: 'Weekends', color: 'amber-60', dayOfWeek: [0, 6] },
      {
        name: 'Other',
        color: 'ruby-30',
        dates: ['1/8/2022', '1/9/2022', '1/23/2022'],
      },
      {
        name: 'Half Days',
        color: 'amethyst-60',
        dates: ['1/21/2022', '1/22/2022'],
      },
      { name: 'Full Days', color: 'azure-30', dates: ['1/24/2022', '1/25/2022'] },
    ];
  }, [])

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Date Picker
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-date-picker
            label="Date Field"
            value="3/4/2016"
            tabbable="false"
            mask
          ></ids-date-picker>
          <ids-date-picker
            label="Date Field (required)"
            placeholder="true"
            format="yyyy-MM-dd"
            validate="required date"
            validation-events="blur"
            show-today="false"
            first-day-of-week="1"
            mask
          ></ids-date-picker>
          <ids-date-picker
            label="Date Field (disabled)"
            value="10/31/2014"
            disabled
          ></ids-date-picker>
          <ids-date-picker
            label="Date Field (dirty-tracker)"
            dirty-tracker="true"
            value="3/4/2016"
            mask
          ></ids-date-picker>
          <ids-date-picker
            label="Date Field (readonly)"
            value="2021-10-18"
            format="yyyy-MM-dd"
            readonly
            size="sm"
          ></ids-date-picker>
          <ids-date-picker
            ref={datePickerLegendRef}
            label="Date Field (legend)"
            value="12/15/2021"
            size="sm"
            mask
          ></ids-date-picker>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsDatePicker;
