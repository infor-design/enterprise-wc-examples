<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS App Menu within Svelte'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids App Menu" componentId="ids-app-menu"></IdsDemoListing>