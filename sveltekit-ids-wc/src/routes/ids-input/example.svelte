<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-input/ids-input');
  });
</script>

<style></style>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h1">IDS Input (Imported into Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <ids-input
      id="static-input"
      label="My Normal Input"
      type="text"
      value="I have contents"></ids-input>
  </ids-layout-grid-cell>
</ids-layout-grid>