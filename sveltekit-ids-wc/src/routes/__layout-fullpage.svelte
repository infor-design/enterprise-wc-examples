<script lang="ts">
  import { onMount } from 'svelte';
  
  // IDS Components are rendered client-side.
  // This example demonstrates how dynamic imports can load IDS Components client-side while still allowing for Svelte SSR
  onMount(async (): Promise<void> => {
    Promise.all([
      await import('ids-enterprise-wc/components/ids-text/ids-text'),
      await import('ids-enterprise-wc/components/ids-hyperlink/ids-hyperlink'),
      await import('ids-enterprise-wc/components/ids-card/ids-card'),
      await import('ids-enterprise-wc/components/ids-theme-switcher/ids-theme-switcher'),
      await import('ids-enterprise-wc/components/ids-block-grid/ids-block-grid'),
      await import('ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid'),
      await import('ids-enterprise-wc/components/ids-container/ids-container')
    ]);
  });
</script>

<ids-container padding="0">
  <slot></slot>
</ids-container>