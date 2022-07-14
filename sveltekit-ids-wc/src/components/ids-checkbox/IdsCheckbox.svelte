<svelte:options accessors />

<script lang="ts">
	import { onMount } from 'svelte';

  export let id = '';
	export let label = 'My Checkbox';
	export let color = 'emerald07';
	export let checked = true;
	export let disabled = false;
	export let trackDirty = true;

	onMount(async () => {
		await import('ids-enterprise-wc/components/ids-checkbox/ids-checkbox');
	});
</script>

<ids-checkbox
  {id}
  {checked} 
  {color} 
  {disabled} 
  {trackDirty}
  {label}
  on:change></ids-checkbox>
