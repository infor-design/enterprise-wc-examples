<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Text within Svelte'
    }
  ];
</script>

<ids-layout-grid auto="true">
  <ids-text font-size="20" type="h1">Ids Text Examples</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <IdsDemoListing data={listingData} componentId="ids-text"></IdsDemoListing>
  </ids-layout-grid-cell>
</ids-layout-grid>