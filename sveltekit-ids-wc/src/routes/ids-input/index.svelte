<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Input within Svelte'
    },
    {
      link: 'dynamic-example',
      type: 'Dynamic Example',
      description: 'IDS Input wrapped in a Svelte component'
    },
    {
      link: 'masks',
      type: 'Mask Example',
      description: 'Demonstrates masked fields when used with Svelte'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Input" componentId="ids-input"></IdsDemoListing>