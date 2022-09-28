<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async () => {
    await import('ids-enterprise-wc/components/ids-input/ids-input');

    const pageContainer: any = document.querySelector('ids-container');
    let calendar = pageContainer.locale.calendar();

    // Configure Short Date input
    const dateInputShort: any = document.querySelector('#mask-date-short');
    dateInputShort.mask = 'date';
    dateInputShort.placeholder = dateInputShort.maskOptions.format;

    // The default date format absorbed by the Mask Mixin from IdsLocale is "short".
    // For the timestamp field, we have to manually override the format set by the mixin.
    const dateInputTime: any = document.querySelector('#mask-date-time');
    dateInputTime.mask = 'date';
    dateInputTime.maskOptions = {
      format: calendar.dateFormat.timestamp
    };
    dateInputTime.placeholder = dateInputTime.maskOptions.format;

    // Change locale on the date input when the Page container's locale changes
    pageContainer.addEventListener('localechange', () => {
      calendar = pageContainer.locale.calendar();
      const shortFormat = calendar.dateFormat.short;
      const timeFormat = calendar.dateFormat.timestamp;

      dateInputShort.value = '';
      dateInputShort.maskOptions.format = shortFormat;
      dateInputShort.placeholder = dateInputShort.maskOptions.format;

      dateInputTime.value = '';
      dateInputTime.maskOptions.format = timeFormat;
      dateInputTime.placeholder = dateInputTime.maskOptions.format;
    });
  });
</script>

<ids-layout-grid cols="3" gap="md">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">Masked Inputs (Localized Dates)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid cols="3" gap="md">
  <ids-layout-grid-cell>
    <ids-input id="mask-date-short" size="sm" label="Short Date"></ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid cols="3" gap="md">
  <ids-layout-grid-cell>
    <ids-input id="mask-date-time" size="sm" label="Timestamp"></ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>