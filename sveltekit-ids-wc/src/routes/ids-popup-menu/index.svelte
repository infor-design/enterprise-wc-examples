<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Popup Menu within Svelte'
    },
    {
      link: 'dynamic-example',
      type: 'Dynamic Example',
      description: 'IDS Popup Menu wrapped in a Svelte component, driven by a Svelte custom store'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Popup Menu" componentId="ids-popup-menu"></IdsDemoListing>