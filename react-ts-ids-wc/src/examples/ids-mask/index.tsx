import React, { useRef, useEffect } from 'react';
import type IdsInputType from 'ids-enterprise-wc/components/ids-input/ids-input';
import 'ids-enterprise-wc/components/ids-mask/ids-masks';


const IdsMask = () => {
  const maskPhoneRef = useRef<IdsInputType>();
  const maskDateRef = useRef<IdsInputType>();
  const maskNumberRef = useRef<IdsInputType>();

  useEffect(() => {
    // Phone Number Input - standard pattern mask
    if (maskPhoneRef.current) {
      maskPhoneRef.current.mask = [
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ];
    }

    if (maskDateRef.current) {
      // Date Input - use `date` string to pre-configure the internal Date Mask
      maskDateRef.current.mask = 'date';
      maskDateRef.current.maskOptions = {
        format: 'M/d/yyyy HH:mm a'
      };
    }

    if (maskNumberRef.current) {
      // Number Input - use `number` string to pre-configure the internal Number Mask
      maskNumberRef.current.mask = 'number';
      maskNumberRef.current.maskOptions = {
        allowDecimal: true,
        allowNegative: true,
        allowThousandsSeparator: true,
        decimalLimit: 2,
        integerLimit: 7
      };
    }
    
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
