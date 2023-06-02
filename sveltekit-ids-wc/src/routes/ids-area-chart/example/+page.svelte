<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Writable } from 'svelte/store';

  let ajaxItems: Writable<Array<{ id: string, name: string }>> = writable([]);

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-area-chart/ids-area-chart');

    // Populates store that populates the chart
    const res = await fetch('/data/components');
    const json = await res.json();
    $ajaxItems = json;
  });
</script>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Area Chart (Imported into Svelte)</ids-text>
</ids-layout-grid>
<ids-layout-grid auto-fit="true">
  <ids-layout-grid-cell>
    <ids-area-chart 
      title="An area chart showing component usage" 
      width="800" 
      height="500" 
      id="index-example"
      data={$ajaxItems}></ids-area-chart>
  </ids-layout-grid-cell>
</ids-layout-grid>