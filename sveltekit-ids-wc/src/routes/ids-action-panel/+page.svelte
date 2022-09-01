<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Action Panel within Svelte'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Action Panel" componentId="ids-action-panel"></IdsDemoListing>