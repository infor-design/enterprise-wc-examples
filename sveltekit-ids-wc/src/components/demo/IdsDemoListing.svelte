<script lang="ts">
  import { onMount } from 'svelte';

  export let data;
  export let componentName = 'ids-component';

  let dataGrid;

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-data-grid/ids-data-grid');

    if (dataGrid) {
      dataGrid.columns = [
        {
          id: 'link',
          name: 'Example Name',
          field: 'link',
          href: `/${componentName}/{{value}}`,
          sortable: true,
          formatter: dataGrid.formatters.hyperlink
        },
        {
          id: 'type',
          name: 'Example Type',
          field: 'type',
          sortable: true,
          formatter: dataGrid.formatters.text
        },
        {
          id: 'description',
          name: 'Description',
          field: 'description',
          sortable: true,
          formatter: dataGrid.formatters.text
        }
      ];

      if (data) {
        dataGrid.data = data;
      }
    }
  });
</script>

<ids-data-grid id="demo-listing" list-style="true" bind:this={dataGrid}></ids-data-grid>