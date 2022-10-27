<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Writable } from 'svelte/store';

  let ajaxItems: Writable<Array<{ id: string, name: string }>> = writable([]);

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-axis-chart/ids-axis-chart');

    // Populates store that populates the chart
    const res = await fetch('/data/components');
    const json = await res.json();
    $ajaxItems = json;
  });
</script>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h1">Axis Chart (Imported into Svelte)</ids-text>
</ids-layout-grid>
<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <ids-axis-chart 
      title="A line chart showing component usage" 
      width="700" 
      height="400" 
      id="index-example"
      data={$ajaxItems}></ids-axis-chart>
  </ids-layout-grid-cell>
</ids-layout-grid>