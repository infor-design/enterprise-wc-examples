import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text'
import 'ids-enterprise-wc/components/ids-input'

const IdsMask = () => {
  const maskPhoneRef = useRef();
  const maskDateRef = useRef();
  const maskNumberRef = useRef();

  useEffect(() => {
    // Phone Number Input - standard pattern mask
    maskPhoneRef.current.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    // Date Input - use `date` string to pre-configure the internal Date Mask
    maskDateRef.current.mask = 'date';
    maskDateRef.current.maskOptions = {
      format: 'M/d/yyyy HH:mm a'
    };

    // Number Input - use `number` string to pre-configure the internal Number Mask
    maskNumberRef.current.mask = 'number';
    maskNumberRef.current.maskOptions = {
      allowDecimal: true,
      allowNegative: true,
      allowThousandsSeparator: true,
      decimalLimit: 2,
      integerLimit: 7
    };
  }, []);

  return (
    <>
      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Ids Input (Masked)
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-input
            ref={maskPhoneRef}
            label="Phone Number"
            placeholder="(###) ###-####"
          ></ids-input>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-input
            ref={maskDateRef}
            label="Date/Time"
            placeholder="M/d/yyyy HH:mm a"
          ></ids-input>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-input
            ref={maskNumberRef}
            label="Formatted Number"
            placeholder="-1,000,000.00"
          ></ids-input>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsMask;
