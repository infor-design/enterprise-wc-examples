<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS HyperLink within Svelte'
    },
    {
      link: 'dynamic-example',
      type: 'Dynamic Example',
      description: 'IDS HyperLink wrapped in a Svelte component'
    }
  ];
</script>

<ids-layout-grid auto="true">
  <ids-text font-size="20" type="h1">Ids HyperLink Examples</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <IdsDemoListing data={listingData} componentName="ids-hyperlink"></IdsDemoListing>
  </ids-layout-grid-cell>
</ids-layout-grid>