<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-input/ids-input');

    // Phone Number Input - standard pattern mask
    const phoneInput: any = document.querySelector('#mask-phone-number');
    if (!phoneInput) return;
    phoneInput.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    // Date Input - use `date` string to pre-configure the internal Date Mask
    const dateInput: any = document.querySelector('#mask-date');
    dateInput.mask = 'date';
    dateInput.maskOptions = {
      format: 'M/d/yyyy hh:mm a'
    };

    // Number Input - use `number` string to pre-configure the internal Number Mask
    const numberInput: any = document.querySelector('#mask-number');
    numberInput.mask = 'number';
    numberInput.maskOptions = {
      allowDecimal: true,
      allowNegative: true,
      allowThousandsSeparator: true,
      decimalLimit: 2,
      integerLimit: 7
    };
  });
</script>

<style></style>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">IDS Inputs with Masks (Imported into Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid cols="3" gap="md">
  <ids-layout-grid-cell>
    <ids-input id="mask-phone-number" label="Phone Number"
      placeholder="(###) ###-####"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-date" label="Date/Time"
      placeholder="M/d/yyyy hh:mm a"></ids-input>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-input id="mask-number" label="Formatted Number"
      placeholder="-1,000,000.00" text-align="end"></ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>