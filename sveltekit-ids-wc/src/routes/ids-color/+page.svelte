<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Shows color swatches'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Color" componentId="ids-color"></IdsDemoListing>