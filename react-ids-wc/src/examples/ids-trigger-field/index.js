import React from 'react';
import 'ids-enterprise-wc/components/ids-trigger-field/ids-trigger-field';


const IdsTriggerField = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Trigger Field
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
        <ids-trigger-field
          id="trigger-field-1"
          size="sm"
          tabbable="false"
          label="Date Field"
        >
          <ids-trigger-button slot="trigger-end">
            <ids-text audible="true">Date Field trigger</ids-text>
            <ids-icon icon="schedule"></ids-icon>
          </ids-trigger-button>
        </ids-trigger-field>

        <ids-layout-grid-cell>
          <ids-trigger-field id="trigger-field-2" size="md" label="Timepicker">
            <ids-trigger-button slot="trigger-end">
              <ids-text audible="true">Timepicker trigger</ids-text>
              <ids-icon icon="clock"></ids-icon>
            </ids-trigger-button>
          </ids-trigger-field>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-trigger-field
            id="trigger-field-3"
            label="Products"
            disable-native-events="true"
            validate="required"
          >
            <ids-trigger-button slot="trigger-end">
              <ids-text audible="true">Products trigger</ids-text>
              <ids-icon icon="search-list"></ids-icon>
            </ids-trigger-button>
          </ids-trigger-field>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-trigger-field
            id="trigger-field-4"
            size="md"
            label="Disabled Trigger Field"
            disabled
            placeholder="Enter Album Name"
          >
            <ids-trigger-button disabled slot="trigger-end">
              <ids-text audible="true">Products trigger</ids-text>
              <ids-icon icon="search-list"></ids-icon>
            </ids-trigger-button>
          </ids-trigger-field>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-trigger-field
            id="trigger-field-5"
            size="md"
            label="Two Trigger Buttons"
            placeholder="Enter Product"
          >
            <ids-trigger-button slot="trigger-start">
              <ids-text audible="true">Products trigger</ids-text>
              <ids-icon icon="caret-down"></ids-icon>
            </ids-trigger-button>
            <ids-trigger-button slot="trigger-end">
              <ids-text audible="true">Products trigger</ids-text>
              <ids-icon icon="caret-down"></ids-icon>
            </ids-trigger-button>
          </ids-trigger-field>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-trigger-field
            id="trigger-field-6"
            size="md"
            label="Search Field"
          >
            <ids-trigger-button>
              <ids-text audible="true">Search trigger</ids-text>
              <ids-icon icon="search"></ids-icon>
            </ids-trigger-button>
          </ids-trigger-field>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsTriggerField;
