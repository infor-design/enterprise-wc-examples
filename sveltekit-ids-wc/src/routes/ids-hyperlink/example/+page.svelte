<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-hyperlink/ids-hyperlink');
  });
</script>

<style></style>

<ids-layout-grid auto="true">
  <ids-text type="h1" font-size="12">IDS Hyperlink (Imported into Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h2">Hyperlink</ids-text>
</ids-layout-grid>
<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <ids-hyperlink href="http://www.example.com" target="_blank">Normal Link</ids-hyperlink>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h2">Hyperlink (disabled)</ids-text>
</ids-layout-grid>
<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <ids-hyperlink href="http://www.example.com" disabled="true" target="_blank">Disabled Link</ids-hyperlink>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h2">Hyperlink (tabindex)</ids-text>
</ids-layout-grid>
<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <ids-hyperlink href="http://www.example.com" tabindex="-1">Not Tabbable Link</ids-hyperlink>
  </ids-layout-grid-cell>
</ids-layout-grid>