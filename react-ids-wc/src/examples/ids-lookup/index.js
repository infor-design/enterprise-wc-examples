import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-lookup/ids-lookup';

const IdsLookup = () => {
  const lookupRef = useRef();
  const lookupRequiredRef = useRef();
  const lookupAutocompleteRef = useRef();

  useEffect(() => {
    const lookup = lookupRef.current;
    const lookupRequired = lookupRequiredRef.current;
    const lookupAutocomplete = lookupAutocompleteRef.current;
    const columns = [
      {
        id: 'selectionCheckbox',
        name: 'selection',
        sortable: false,
        resizable: false,
        formatter: lookup.dataGrid.formatters.selectionCheckbox,
        align: 'center'
      },
      {
        id: 'rowNumber',
        name: '#',
        formatter: lookup.dataGrid.formatters.rowNumber,
        sortable: false,
        readonly: true,
        width: 65
      },
      {
        id: 'description',
        name: 'Description',
        field: 'description',
        sortable: true,
        formatter: lookup.dataGrid.formatters.text
      },
      {
        id: 'ledger',
        name: 'Ledger',
        field: 'ledger',
        formatter: lookup.dataGrid.formatters.text
      },
      {
        id: 'price',
        name: 'Price',
        field: 'price',
        formatter: lookup.dataGrid.formatters.decimal,
        formatOptions: { locale: 'en-US' } // Data Values are in en-US
      },
      {
        id: 'bookCurrency',
        name: 'Currency',
        field: 'bookCurrency',
        formatter: lookup.dataGrid.formatters.text
      }
    ];

    // Set up columns
    lookup.columns = columns;
    lookupRequired.columns = columns;
    lookupAutocomplete.columns = columns;

    async function fetchData() {
      // Do an ajax request
      const response = await fetch('/data/books.json');
      const data = await response.json();
      // Set data
      lookup.data = data;
      lookupRequired.data = data;
      lookupAutocomplete.data = data;
      lookupAutocomplete.triggerField.data = data;
    }
    fetchData();
  }, []);

  return (
    <>
      <ids-layout-grid>
        <ids-text font-size="12" type="h1">
          Lookup
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-lookup
            ref={lookupRef}
            label="Lookup Field"
            title="Select an Item"
            field="description"
            value="102,103"
            dirty-tracker="true"
          ></ids-lookup>
          <ids-lookup
            readonly="true"
            label="Readonly Lookup"
            value="102"
          ></ids-lookup>
          <ids-lookup
            disabled="true"
            label="Disabled Lookup"
            value="103"
          ></ids-lookup>
          <ids-lookup
            ref={lookupRequiredRef}
            label="Required Lookup"
            validate="required"
          ></ids-lookup>
          {/* Comment out since it doesn't work */}
          {/* <ids-lookup id="lookup-5" label="Custom Lookup">
            <ids-modal
              slot="lookup-modal"
              id="custom-lookup-modal"
              visible="false"
              aria-labelledby="custom-lookup-modal-title"
            >
              <ids-text
                slot="title"
                font-size="24"
                type="h2"
                id="lookup-modal-title"
              >
                Custom Lookup Modal
              </ids-text>
              <ids-modal-button
                slot="buttons"
                id="modal-cancel-btn"
                type="primary"
              >
                <span>Apply</span>
              </ids-modal-button>
            </ids-modal>
          </ids-lookup> */}
          <ids-lookup
            ref={lookupAutocompleteRef}
            label="Autocomplete Lookup"
            title="Select an Item"
            autocomplete
            field="description"
          ></ids-lookup>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsLookup;
