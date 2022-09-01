<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Tabs within Svelte'
    },
    {
      link: 'header-tabs',
      type: 'Example',
      description: 'Shows header tabs'
    },
    {
      link: 'module',
      type: 'Example',
      description: 'Shows module tabs'
    },
    {
      link: 'vertical',
      type: 'Example',
      description: 'Shows vertical tabs'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Tabs" componentId="ids-tabs"></IdsDemoListing>