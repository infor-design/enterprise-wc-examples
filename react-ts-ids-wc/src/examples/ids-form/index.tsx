import React, { useRef, useState } from 'react';
import useEvent from '../../hooks/useEvent';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsFormType from 'ids-enterprise-wc/components/ids-form/ids-form';
import type IdsDataLabelType from 'ids-enterprise-wc/components/ids-data-label/ids-data-label';
import type IdsDropdownType from 'ids-enterprise-wc/components/ids-dropdown/ids-dropdown';
import type IdsCheckboxType from 'ids-enterprise-wc/components/ids-checkbox/ids-checkbox';
import type IdsModalType from 'ids-enterprise-wc/components/ids-modal/ids-modal';
import 'ids-enterprise-wc/components/ids-form/ids-form';
import 'ids-enterprise-wc/components/ids-checkbox/ids-checkbox';
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
  const formRef = useRef<IdsFormType>();
  const sizeRef = useRef<IdsDropdownType>();
  const heightRef = useRef<IdsDropdownType>();
  const compactRef = useRef<IdsCheckboxType>();
  const modalRef = useRef<IdsModalType>();

  const [size, setSize] = useState('md');
  const [height, setHeight] = useState('md');
  const [results, setResults] = useState([]);

  // Event handlers to be used in attach and cleanup event listener
  const handleSubmit = (e: any) => {
    const form = formRef.current;

    form?.checkValidation();
    if (form?.isValid) {
      if (modalRef.current) modalRef.current.visible = true;
      setResults(e?.detail?.components);
    }
    console.info(`Form Submitted`, e?.detail, form?.isValid);
  };

  const handleSize = (e: any) => setSize(e?.detail?.value);
  const handleHeight = (e: any) => setHeight(e?.detail?.value);

  const handleCompact = (e: any) => {
    const form = formRef.current;
    if (form) form.compact = e?.detail?.checked;
  };

  // Attach event listeners
  useEvent('submit', handleSubmit, formRef);
  useEvent('change', handleSize, sizeRef);
  useEvent('change', handleHeight, heightRef);
  useEvent('change', handleCompact, compactRef);

  return (
    <>
      <IdsTitle>Ids Form Example</IdsTitle>

      <ids-form ref={formRef} submit-button="btn-submit" id="sample-form">
        <IdsGrid cols="2" gap="md">
          <IdsGridCell>
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
            <ids-button id="btn-submit" appearance="primary">
              <span>Submit</span>
            </ids-button>
          </IdsGridCell>
          <IdsGridCell>
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
          </IdsGridCell>
        </IdsGrid>
      </ids-form>

      <IdsGrid auto-fit>
        <IdsGridCell>
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
        </IdsGridCell>
      </IdsGrid>

      <ids-modal ref={modalRef} aria-labelledby="submitted-results">
        <ids-text slot="title" font-size="24" type="h2" id="submitted-results">
          Submitted Results
        </ids-text>
        {results.map((item: any) => (
          <ids-data-label
            label-position="left"
            key={item?.id}
            label={(document.getElementById(item?.id) as IdsDataLabelType)?.label || ''}
          >
            {(item?.name === 'ids-checkbox' || item?.name === 'ids-switch')
              ? `${item.value}`
              : item.value}
          </ids-data-label>
        ))}
        <ids-modal-button
          slot="buttons"
          appearance="primary"
          onClick={() => {
            modalRef.current?.hide();
          }}
        >
          <span>OK</span>
        </ids-modal-button>
      </ids-modal>
    </>
  );
};

export default IdsForm;
