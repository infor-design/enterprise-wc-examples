import React, { useRef, useEffect, useState } from 'react';
import 'ids-enterprise-wc/components/ids-form/ids-form';
import 'ids-enterprise-wc/components/ids-dropdown/ids-dropdown';
import 'ids-enterprise-wc/components/ids-lookup/ids-lookup';
import 'ids-enterprise-wc/components/ids-color-picker/ids-color-picker';
import 'ids-enterprise-wc/components/ids-upload/ids-upload';
import 'ids-enterprise-wc/components/ids-textarea/ids-textarea';
import 'ids-enterprise-wc/components/ids-spinbox/ids-spinbox';
import 'ids-enterprise-wc/components/ids-radio/ids-radio';
import 'ids-enterprise-wc/components/ids-switch/ids-switch';
import 'ids-enterprise-wc/components/ids-modal/ids-modal';
import 'ids-enterprise-wc/components/ids-data-label/ids-data-label';

const IdsForm = () => {
  const formRef = useRef();
  const sizeRef = useRef();
  const heightRef = useRef();
  const compactRef = useRef();
  const modalRef = useRef();
  const [size, setSize] = useState('md');
  const [height, setHeight] = useState('md');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Adding ref current elements to variable to be able cleanup event listeners on unmount
    const form = formRef.current;
    const sizeDropdown = sizeRef.current;
    const heightDropdown = heightRef.current;
    const compactCheckbox = compactRef.current;

    // Event handlers to be used in attach and cleanup event listener
    const handleSubmit = e => {
      form.checkValidation();
      if (form.isValid) {
        modalRef.current.visible = true;
        setResults(e.detail.components);
      }
      console.info(`Form Submitted`, e.detail, form.isValid);
    };

    const handleSize = e => {
      setSize(e.detail.value);
    };

    const handleHeight = e => {
      setHeight(e.detail.value);
    };

    const handleCompact = e => {
      form.compact = e.detail.checked;
    };

    // Attach event listeners
    form.addEventListener('submit', handleSubmit);
    sizeDropdown.addEventListener('change', handleSize);
    heightDropdown.addEventListener('change', handleHeight);
    compactCheckbox.addEventListener('change', handleCompact);

    // Cleanup event listener on React component unmount
    return () => {
      form.removeEventListener('submit', handleSubmit);
      sizeDropdown.removeEventListener('change', handleSize);
      heightDropdown.removeEventListener('change', handleHeight);
      compactCheckbox.removeEventListener('change', handleCompact);
    };
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Ids Form
        </ids-text>
      </ids-layout-grid>

      <ids-form ref={formRef} submit-button="btn-submit" id="sample-form">
        <ids-layout-grid cols="2" gap="md">
          <ids-layout-grid-cell>
            <ids-dropdown
              id="company-name"
              label="Company Name"
              value="none"
              dirty-tracker
              validate="required"
              size={size}
              field-height={height}
              allow-blank="true"
            >
              <ids-list-box>
                <ids-list-box-option value="none" selected>
                  None
                </ids-list-box-option>
                <ids-list-box-option value="acme">
                  Acme, Inc.
                </ids-list-box-option>
                <ids-list-box-option value="infor">
                  Widget Corp
                </ids-list-box-option>
              </ids-list-box>
            </ids-dropdown>
            <ids-input
              id="purchase-form"
              label="Purchase Form"
              value="3567"
              dirty-tracker
              validate="required"
              size={size}
              field-height={height}
            ></ids-input>
            <ids-lookup
              id="issue-methods"
              label="Issue Methods"
              title="Select an Item"
              field="description"
              value="102,103"
              dirty-tracker
              validate="required"
              size={size}
              field-height={height}
            ></ids-lookup>
            <ids-upload
              label="Attachments"
              id="attachments"
              dirty-tracker
              validate="required"
              size={size}
              field-height={height}
            ></ids-upload>
            <ids-checkbox
              id="freight"
              label="Freight"
              checked
              dirty-tracker
              validate="required"
              no-margin
            ></ids-checkbox>
            <ids-textarea
              id="notes"
              label="Notes"
              dirty-tracker
              validate="required"
              size={size}
              field-height={height}
            ></ids-textarea>
            <ids-button id="btn-submit" type="primary">
              <span slot="text">Submit</span>
            </ids-button>
          </ids-layout-grid-cell>
          <ids-layout-grid-cell>
            <ids-color-picker
              id="ship-color"
              label="Ship Color"
              value="ruby-80"
              clearable
              dirty-tracker
              validate="required"
              size={size}
              field-height={height}
            ></ids-color-picker>
            <ids-date-picker
              id="ship-date"
              label="Ship Date"
              value="3/4/2023"
              mask
              dirty-tracker
              validate="required"
              size={size}
              field-height={height}
            ></ids-date-picker>
            <ids-time-picker
              label="Ship Time"
              id="ship-time"
              mask="true"
              dirty-tracker
              validate="required"
              size={size}
              field-height={height}
            ></ids-time-picker>

            <ids-spinbox
              id="product-quantity"
              label="Quantity"
              dirty-tracker
              validate="required"
              value="0"
              size={size}
              field-height={height}
            ></ids-spinbox>
            <ids-radio-group
              label="Ship Type"
              dirty-tracker
              validate="required"
              id="ship-type"
            >
              <ids-radio value="opt1" label="Boat"></ids-radio>
              <ids-radio value="opt2" label="Truck" checked="true"></ids-radio>
            </ids-radio-group>
            <ids-switch
              id="send-notifications"
              label="Send notifications"
              checked="true"
            ></ids-switch>
          </ids-layout-grid-cell>
        </ids-layout-grid>
      </ids-form>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-dropdown ref={sizeRef} label="Size" value={size} size="md">
            <ids-list-box>
              <ids-list-box-option value="xs" selected={size === 'xs'}>
                Extra Small
              </ids-list-box-option>
              <ids-list-box-option value="sm" selected={size === 'sm'}>
                Small
              </ids-list-box-option>
              <ids-list-box-option value="mm" selected={size === 'mm'}>
                Small - Medium
              </ids-list-box-option>
              <ids-list-box-option value="md" selected={size === 'md'}>
                Medium
              </ids-list-box-option>
              <ids-list-box-option value="lg" selected={size === 'lg'}>
                Large
              </ids-list-box-option>
              <ids-list-box-option value="full" selected={size === 'full'}>
                Full
              </ids-list-box-option>
            </ids-list-box>
          </ids-dropdown>
          <ids-dropdown
            ref={heightRef}
            label="Field Height"
            value={height}
            size="md"
          >
            <ids-list-box>
              <ids-list-box-option value="xs" selected={height === 'xs'}>
                Extra Small
              </ids-list-box-option>
              <ids-list-box-option value="sm" selected={height === 'sm'}>
                Small
              </ids-list-box-option>
              <ids-list-box-option value="md" selected={height === 'md'}>
                Medium
              </ids-list-box-option>
              <ids-list-box-option value="lg" selected={height === 'lg'}>
                Large
              </ids-list-box-option>
            </ids-list-box>
          </ids-dropdown>
          <ids-checkbox ref={compactRef} label="Compact"></ids-checkbox>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-modal ref={modalRef} aria-labelledby="submitted-results">
        <ids-text slot="title" font-size="24" type="h2" id="submitted-results">
          Submitted Results
        </ids-text>
        {results.map(item => (
          <ids-data-label label-position="left" key={item.id} label={document.getElementById(item.id)?.label || ''}>
            {(item.name === 'ids-checkbox' || item.name === 'ids-switch')
              ? `${item.value}`
              : item.value}
          </ids-data-label>
        ))}
        <ids-modal-button
          slot="buttons"
          type="primary"
          onClick={() => {
            modalRef.current?.hide();
          }}
        >
          <span slot="text">OK</span>
        </ids-modal-button>
      </ids-modal>
    </>
  );
};

export default IdsForm;
