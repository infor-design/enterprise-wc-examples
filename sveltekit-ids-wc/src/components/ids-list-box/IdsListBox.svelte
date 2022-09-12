<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-list-box/ids-list-box');
  });
</script>

<ids-list-box>
  <slot></slot>
</ids-list-box>