<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Area Chart within Svelte'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Area Chart" componentId="ids-area-chart"></IdsDemoListing>