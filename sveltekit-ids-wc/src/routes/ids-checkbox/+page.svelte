<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Checkbox within Svelte'
    },
    {
      link: 'dynamic-example',
      type: 'Dynamic Example',
      description: 'IDS Checkbox wrapped in a Svelte component'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Checkbox" componentId="ids-checkbox"></IdsDemoListing>