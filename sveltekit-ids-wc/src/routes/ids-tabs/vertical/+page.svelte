<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await Promise.all([
      import('ids-enterprise-wc/components/ids-tabs/ids-tab'),
      import('ids-enterprise-wc/components/ids-tabs/ids-tabs')
    ]);
  });

  const handleChange = (e: Event | CustomEvent | any) => {
    console.info(`ids-tabs.on('change') =>`, e.target?.value);
  };
</script>

<ids-tabs value="notes" orientation="vertical" id="ids-tabs-vertical">
  <ids-tab value="contracts" on:change={handleChange}>Contracts</ids-tab>
  <ids-tab value="opportunities" on:change={handleChange}>Opportunities</ids-tab>
  <ids-tab value="attachments" disabled on:change={handleChange}>Attachments</ids-tab>
  <ids-tab value="notes" on:change={handleChange}>Notes</ids-tab>
</ids-tabs>