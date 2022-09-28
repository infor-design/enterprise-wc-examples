<script lang="ts">
  import { onMount } from 'svelte';
  import { appStore } from '../app.store';
  
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

<ids-container padding="8">
  {#if $appStore.allowThemeSwitcher}
    <ids-theme-switcher mode="light" version="new"></ids-theme-switcher>
  {/if}
  <slot></slot>
</ids-container>