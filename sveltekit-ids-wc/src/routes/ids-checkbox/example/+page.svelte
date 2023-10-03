<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-checkbox/ids-checkbox');
  });
</script>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">IdsCheckbox (Imported into Svelte)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    <ids-checkbox label="My Checkbox" checked track-dirty="true"></ids-checkbox>
  </ids-layout-grid-cell>
</ids-layout-grid>