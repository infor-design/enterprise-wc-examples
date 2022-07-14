<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	onMount(async () => {
		await import('ids-enterprise-wc/components/ids-input/ids-input');
	});

	const dispatch = createEventDispatcher();

	// Log the `<ids-input>` element when clicked
	const onInput = (e: CustomEvent): void => {
		if (e.target?.tagName === 'IDS-INPUT') {
			console.dir(e.target.value);
			dispatch('input', { nativeEvent: e });
		}
	};

	export let id = '';
	export let label = '';
	export let value: string;
</script>

<ids-input 
  id={`dynamic-input-${id}`} 
  data-id={id} 
  {label} 
  {value} 
  on:input={onInput}></ids-input>
