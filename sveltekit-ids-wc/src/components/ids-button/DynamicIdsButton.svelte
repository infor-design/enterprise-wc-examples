<svelte:options accessors />

<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		await import('ids-enterprise-wc/components/ids-button/ids-button');
	});

	export let id: string = '';
	export let text: string = '';
	export let type: string = '';
  export let colorVariant: string = '';
  export let disabled = false;
</script>

<ids-button
  id={`dynamic-button-${id}`}
  data-id={id}
  color-variant={colorVariant}
  {disabled}
  {type}
  on:click>{text}</ids-button>
