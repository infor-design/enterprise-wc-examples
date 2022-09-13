<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Button within Svelte'
    },
    {
      link: 'dynamic-example',
      type: 'Dynamic Example',
      description: 'IDS Button wrapped in a Svelte component'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Button" componentId="ids-button"></IdsDemoListing>