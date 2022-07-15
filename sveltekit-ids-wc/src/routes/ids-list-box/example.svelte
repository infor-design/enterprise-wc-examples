<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-list-box/ids-list-box');
    await import('ids-enterprise-wc/components/ids-list-box/ids-list-box-option');
  });

  const handleClick = (e: MouseEvent) => {
    if (e.target && e.target.tagName === 'IDS-LIST-BOX-OPTION') {
      console.info(`Clicked on "${e.target?.textContent}"`);
    }
  };
</script>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h1">IDS List Box (Imported into Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>

    <ids-list-box on:click={handleClick}>
      <ids-list-box-option>Option One</ids-list-box-option>
      <ids-list-box-option>Option Two</ids-list-box-option>
      <ids-list-box-option>Option Three</ids-list-box-option>
    </ids-list-box>

  </ids-layout-grid-cell>
</ids-layout-grid>

