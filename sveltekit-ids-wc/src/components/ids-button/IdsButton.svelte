<svelte:options accessors />

<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		await import('ids-enterprise-wc/components/ids-button/ids-button');
	});

	export let id = '';
	export let text = '';
	export let type: '';
  export let colorVariant: '';
  export let disabled = false;
</script>

<ids-button
  id={`dynamic-button-${id}`}
  data-id={id}
  color-variant={colorVariant}
  {disabled}
  {type}
  on:click>{text}</ids-button>
