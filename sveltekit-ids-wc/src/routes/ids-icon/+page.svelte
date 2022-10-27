<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Shows icons'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Icon" componentId="ids-icon"></IdsDemoListing>