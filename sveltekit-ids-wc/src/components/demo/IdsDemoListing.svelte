<script lang="ts">
  import { onMount } from 'svelte';
  import type IdsDataGrid from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';
  import type { IdsComponentData } from '../../app';

  export let data: Array<IdsComponentData>;
  export let componentId = 'ids-component';
  export let componentName = 'Ids Component';

  let dataGrid: IdsDataGrid;

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-data-grid/ids-data-grid');

    if (dataGrid) {
      dataGrid.columns = [
        {
          id: 'link',
          name: 'Example Name',
          field: 'link',
          href: `/${componentId}/{{value}}`,
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

<ids-layout-grid auto-fit="true" padding="md">
  <ids-text font-size="20" type="h1">{componentName} Examples</ids-text>
</ids-layout-grid>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    <ids-data-grid id="demo-listing" list-style="true" bind:this={dataGrid}></ids-data-grid>
  </ids-layout-grid-cell>
</ids-layout-grid>

