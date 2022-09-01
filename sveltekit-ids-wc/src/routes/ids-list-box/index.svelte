<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS List Box within Svelte'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids List Box" componentId="ids-list-box"></IdsDemoListing>