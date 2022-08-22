<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Input within Svelte'
    },
    {
      link: 'localized-dates',
      type: 'Date Localization Example',
      description: 'IDS Date Masked Input using the current Locale'
    },
    {
      link: 'localized-numbers',
      type: 'Number Localization Example',
      description: 'IDS Number Masked Input using the current Locale'
    }
  ];
</script>

<ids-layout-grid auto="true">
  <ids-text font-size="20" type="h1">Ids Mask Examples</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <IdsDemoListing data={listingData} componentName="ids-mask"></IdsDemoListing>
  </ids-layout-grid-cell>
</ids-layout-grid>