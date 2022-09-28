<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Dropdown within Svelte'
    },
    {
      link: 'dynamic-example',
      type: 'Dynamic Example',
      description: 'IDS Dropdown wrapped in a Svelte component, driven by a Svelte custom store'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Dropdown" componentId="ids-dropdown"></IdsDemoListing>