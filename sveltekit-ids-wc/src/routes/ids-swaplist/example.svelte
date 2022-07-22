<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Writable } from 'svelte/store';

  let ref;
  let ajaxItems: Writable<Array<{ id: string, name: string }>> = writable([]);

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-swaplist/ids-swaplist');

    // Populates the AJAX Dropdown
    const res = await fetch('/data/periods');
    const json = await res.json();
    $ajaxItems = json;
  });

  // When loading an IdsSwaplist:
  // - Use a `bind:this={ref}` on the IdsSwaplist host element.
  // - Use `onMount` to populate from a data source.
  // - Use a reactive statement (below) to set both the template and data.  
  //   Using an inline template tag with variables may conflict with Svelte's template syntax.
  $: {
    if (ref) {
      ref.defaultTemplate = '<ids-swappable-item><ids-text>${city}</ids-text></ids-swappable-item>';
      if ($ajaxItems) {
        ref.data = $ajaxItems
      }
    }
  }
</script>

<ids-layout-grid>
  <ids-text font-size="12" type="h1">SwapList</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>

    <div id="status"></div>

    {#if $ajaxItems.length}
      <ids-swaplist id="swaplist-1" count="3" bind:this={ref}></ids-swaplist>
    {/if}

  </ids-layout-grid-cell>
</ids-layout-grid>