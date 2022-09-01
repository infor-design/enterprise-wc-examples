<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Badge within Svelte'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Badge" componentId="ids-badge"></IdsDemoListing>