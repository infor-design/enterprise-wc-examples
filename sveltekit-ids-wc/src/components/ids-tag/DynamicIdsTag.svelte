<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import TAG_COLORS from './colors';
  import type IdsTag from 'ids-enterprise-wc/components/ids-tag/ids-tag';

	onMount(async (): Promise<void> => {
		await import('ids-enterprise-wc/components/ids-tag/ids-tag');
	});

	const dispatch = createEventDispatcher();

	// @TODO Native IDS WebComponents attempt to manually remove the Tag during the
	// `dismiss()` lifecycle.  Svelte bindings require that it manages the DOM, so we
	// hook into the `beforetagremove` event and prevent it from continuing.
	const onBeforeTagRemove = (e: CustomEvent) => {
		console.log('webcomponent\'s "beforetagremove" event captured');
		e.detail.response(false);
		dispatch('beforetagremove', { nativeEvent: e });
	};

	// Pass the native custom event to a Svelte Component Event
	// (This won't occur unless you return `true` in the response from the `onBeforeTagRemove` handler)
	const onAfterTagRemove = (e: CustomEvent) => {
		console.log('webcomponent\'s "aftertagremove" event captured');
		dispatch('aftertagremove', { nativeEvent: e });
	};

	// Log the `<ids-tag>` element when clicked
	const testClick = (e: Event) => {
    const target = (e.target as unknown as IdsTag);
		if (target && target.tagName === 'IDS-TAG') {
			console.dir(target);
			dispatch('click', { nativeEvent: e });
		}
	};

	export let id = '';
	export let text = '';
	export let color = TAG_COLORS[0].value;
	export let dismissible = true;
	export let clickable = true;
</script>

<ids-tag
	id={`dynamic-tag-${id}`}
	data-id={id}
	{clickable}
	{color}
	{dismissible}
	on:click={testClick}
	on:beforetagremove={onBeforeTagRemove}
	on:aftertagremove={onAfterTagRemove}>{text}</ids-tag>
