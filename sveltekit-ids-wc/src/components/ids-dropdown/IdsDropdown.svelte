<svelte:options accessors />

<script lang="ts">
  import { onMount } from 'svelte';

  export let dirtyTracker = false;
  export let id = '';
  export let label = '';
  export let value = '';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-dropdown/ids-dropdown');
  });
</script>

<ids-dropdown
  dirty-tracker={dirtyTracker}
  {id}
  {label}
  {value}
  on:change>
  <slot></slot>
</ids-dropdown>
