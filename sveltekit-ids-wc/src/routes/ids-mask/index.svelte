<script lang="ts">
  import IdsDemoListing from '../../components/demo/IdsDemoListing.svelte';

  const listingData = [
    {
      link: 'example',
      type: 'Main Example',
      description: 'Simple usage of an IDS Input within Svelte'
    },
    {
      link: 'localized-dates',
      type: 'Date Localization Example',
      description: 'IDS Date Masked Input using the current Locale'
    },
    {
      link: 'localized-numbers',
      type: 'Number Localization Example',
      description: 'IDS Number Masked Input using the current Locale'
    }
  ];
</script>

<IdsDemoListing data={listingData} componentName="Ids Mask" componentId="ids-mask"></IdsDemoListing>