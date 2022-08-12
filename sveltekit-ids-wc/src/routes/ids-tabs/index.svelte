<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Tabs within Svelte'
    },
    {
      link: 'header-tabs',
      type: 'Example',
      description: 'Shows header tabs'
    },
    {
      link: 'module',
      type: 'Example',
      description: 'Shows module tabs'
    },
    {
      link: 'vertical',
      type: 'Example',
      description: 'Shows vertical tabs'
    }
  ];
</script>

<ids-layout-grid auto="true">
  <ids-text font-size="20" type="h1">Ids Tabs Examples</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <IdsDemoListing data={listingData} componentName="ids-text"></IdsDemoListing>
  </ids-layout-grid-cell>
</ids-layout-grid>