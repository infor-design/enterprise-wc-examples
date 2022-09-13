<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS SwapList within Svelte'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids SwapList" componentId="ids-swaplist"></IdsDemoListing>