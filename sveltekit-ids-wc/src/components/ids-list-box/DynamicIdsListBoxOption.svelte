<script lang="ts">
  import { onMount } from 'svelte';

  export let id = '';
  export let tooltip = '';
  export let value = '';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-list-box/ids-list-box-option');
  });
</script>

<ids-list-box-option {id} {tooltip} {value}>
  <slot></slot>
</ids-list-box-option>