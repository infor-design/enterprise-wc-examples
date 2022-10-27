<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Axis Chart within Svelte'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Axis Chart" componentId="ids-axis-chart"></IdsDemoListing>