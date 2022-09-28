<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Action Sheet within Svelte'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Action Sheet" componentId="ids-action-sheet"></IdsDemoListing>