<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
  import type IdsInput from 'ids-enterprise-wc/components/ids-input/ids-input';

	onMount(async () => {
		await import('ids-enterprise-wc/components/ids-input/ids-input');
	});

	const dispatch = createEventDispatcher();

	// Log the `<ids-input>` element when clicked
	const onInput = (e: InputEvent): void => {
    const target = (e.target as unknown as IdsInput);
    if (target && target.tagName === 'IDS-INPUT') {
			console.dir(target.value);
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
