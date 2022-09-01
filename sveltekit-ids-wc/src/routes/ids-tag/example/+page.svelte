<script lang="ts">
  import TAG_COLORS from '../../../components/ids-tag/colors';
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-tag/ids-tag');
  });
</script>

<style></style>

<ids-layout-grid auto="true">
  <ids-text font-size="12">IDS Tag (Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    {#each TAG_COLORS as tag}
      <ids-tag color="{tag.value}">{tag.name}</ids-tag>
    {/each}
  </ids-layout-grid-cell>
</ids-layout-grid>