<script lang="ts">
  import { onMount } from 'svelte';
  import { deepClone } from '../../utils/deepClone';

  onMount(async () => {
    await import('ids-enterprise-wc/components/ids-input/ids-input');

    const pageContainer: any = document.querySelector('ids-container');
    // const dropdown: any = document.querySelector('ids-dropdown');

    // Uses the defined integer/decimal limits to create an IdsInput
    // `placeholder` definition based on the actual length of the mask.
    const createPlaceholder = (input: any) => {
      const ints = input.maskOptions.integerLimit;
      const decs = input.maskOptions.decimalLimit || 0;
      let placeholder = '';

      for (let i = 0; i < ints; i++) {
        placeholder += '1';
      }

      if (input.maskOptions.allowDecimal) {
        placeholder += input.maskOptions?.symbols?.decimal || '.';
        for (let i = 0; i < decs; i++) {
          placeholder += '1';
        }
      }

      // calling `input.mask()` directly doesn't include the locale,
      // since it's normally added by the IdsInput
      const opts = deepClone(input.maskOptions);
      opts.locale = input.locale;
      const maskArray = input.mask(placeholder, opts).mask;

      // Write a placeholder string based on a slightly-modified mask array
      // (removes "[]"" caret traps and replaces regex matchers with "#")
      input.placeholder = `${maskArray.map((el: any) => {
        if (typeof el !== 'string') {
          return '#';
        }
        if (el === '[]') {
          return '';
        }
        return el;
      }).join('')}`;
    };

    // ===================================================
    // Set basic rules on all input fields
    const allInputs: Array<any> = [...document.querySelectorAll('ids-input')];
    allInputs.forEach((input) => {
      input.textAlign = 'end';
      input.mask = 'number';
    });

    const allNegativeInputs: Array<any> = [...document.querySelectorAll('[id*="negative"]')];
    allNegativeInputs.forEach((input) => {
      input.maskOptions.allowNegative = true;
    });

    const allDecimalInputs: Array<any> = [...document.querySelectorAll('[id*="decimal"]')];
    allDecimalInputs.forEach((input) => {
      input.maskOptions.allowDecimal = true;
      input.maskOptions.decimalLimit = 2;
    });

    const allGroupInputs: Array<any> = [...document.querySelectorAll('[id*="group"]')];
    allGroupInputs.forEach((input) => {
      input.maskOptions.allowThousandsSeparator = true;
    });

    // ===================================================
    // Set limits on "thousands-length" inputs
    const allThousandsInputs: Array<any> = [...document.querySelectorAll('[id*="thousands"]')];
    allThousandsInputs.forEach((input) => {
      input.maskOptions.integerLimit = 4;
      createPlaceholder(input);
    });

    // Set limits on "millions-length" inputs
    const allMillionsInputs: Array<any> = [...document.querySelectorAll('[id*="millions"]')];
    allMillionsInputs.forEach((input) => {
      input.maskOptions.integerLimit = 7;
      createPlaceholder(input);
    });

    // Set limits on "billions-length" inputs
    const allBillionsInputs: Array<any> = [...document.querySelectorAll('[id*="billions"]')];
    allBillionsInputs.forEach((input) => {
      input.maskOptions.integerLimit = 10;
      createPlaceholder(input);
    });

    // Set limits on "quintillions-length" inputs
    const allQuintillionsInputs: Array<any> = [...document.querySelectorAll('[id*="quintillions"]')];
    allQuintillionsInputs.forEach((input) => {
      input.maskOptions.integerLimit = 18;
      if (input.id.includes('decimal')) {
        input.maskOptions.decimalLimit = 6;
      }
      createPlaceholder(input);
    });

    /*
    // ===================================================
    // Change the IdsContainer's locale setting when the dropdown is modified
    dropdown.addEventListener('change', async (e: any) => {
      await pageContainer.setLocale(e.target.value);
    });
    */

    // Change localized strings on all number inputs when the Page container's locale changes
    pageContainer.addEventListener('localechange', () => {
      allInputs.forEach((input) => {
        input.value = '';
        createPlaceholder(input);
      });
    });
  });
</script>

<ids-layout-grid cols="3" gap="md">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">Masked Inputs (Localized Numbers) (Imported into Svelte)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<!-- Thousands-length Inputs without groups -->
<ids-layout-grid cols="4" gap="md">
  <ids-layout-grid-cell>
    <ids-input id="mask-number-thousands" label="Thousands"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-thousands-negative" label="Thousands + Negative"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-thousands-decimal" label="Thousands + Decimal"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-thousands-decimal-negative" label="Thousands + Decimal + Negative"></ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>

<!-- Thousands-length Inputs with groups -->
<ids-layout-grid cols="4" gap="md">
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-thousands" label="Thousands + Groups"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-thousands-negative" label="Thousands + Groups + Negative"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-thousands-decimal" label="Thousands + Groups + Decimal"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-thousands-decimal-negative" label="Thousands + Groups + Decimal + Negative"></ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>

<!-- Millions-length Inputs without groups -->
<ids-layout-grid cols="4" gap="md">
  <ids-layout-grid-cell>
    <ids-input id="mask-number-millions" label="Millions"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-millions-negative" label="Millions + Negative"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-millions-decimal" label="Millions + Decimal"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-millions-decimal-negative" label="Millions + Decimal + Negative"></ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>

<!-- Millions-length Inputs with groups -->
<ids-layout-grid cols="4" gap="md">
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-millions" label="Millions + Groups"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-millions-negative" label="Millions + Groups + Negative"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-millions-decimal" label="Millions + Groups + Decimal"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-millions-decimal-negative" label="Millions + Groups + Decimal + Negative"></ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>

<!-- Billions-length Inputs without groups -->
<ids-layout-grid cols="4" gap="md">
  <ids-layout-grid-cell>
    <ids-input id="mask-number-billions" label="Billions"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-billions-negative" label="Billions + Negative"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-billions-decimal" label="Billions + Decimal"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-billions-decimal-negative" label="Billions + Decimal + Negative"></ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>

<!-- Billions-length Inputs with groups -->
<ids-layout-grid cols="4" gap="md">
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-billions" label="Billions + Groups"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-billions-negative" label="Billions + Groups + Negative"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-billions-decimal" label="Billions + Groups + Decimal"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-billions-decimal-negative" label="Billions + Groups + Decimal + Negative">
    </ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>

<!-- Quintillions-length Inputs without groups -->
<ids-layout-grid cols="4" gap="md">
  <ids-layout-grid-cell>
    <ids-input id="mask-number-quintillions" label="Quintillions"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-quintillions-negative" label="Quintillions + Negative"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-quintillions-decimal" label="Quintillions + Decimal"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-quintillions-decimal-negative" label="Quintillions + Decimal + Negative"></ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>

<!-- Quintillions-length Inputs with groups -->
<ids-layout-grid cols="4" gap="md">
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-quintillions" label="Quintillions + Groups"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-quintillions-negative" label="Quintillions + Groups + Negative"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-quintillions-decimal" label="Quintillions + Groups + Decimal"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number-groups-quintillions-decimal-negative" label="Quintillions + Groups + Decimal + Negative">
    </ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>