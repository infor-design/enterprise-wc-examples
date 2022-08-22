<svelte:options accessors />

<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	onMount(async () => {
		await import('ids-enterprise-wc/components/ids-hyperlink/ids-hyperlink');
	});

	const dispatch = createEventDispatcher();

  type IdsTextFontWeight = null | 'bold' | 'lighter';
  type IdsTextFontSize = null;

  export let disabled: boolean = false;
  export let fontWeight: IdsTextFontWeight = null;
  export let fontSize: IdsTextFontSize = null;
	export let id: string | null = '';
	export let href: string | null = null;
	export let target: string | null = null;
  export let textDecoration: string | null = '';
</script>

<ids-hyperlink 
  id={`dynamic-hyperlink-${id}`} 
  data-id={id}
  {disabled}
  {fontWeight}
  {fontSize}
  {href} 
  {target}
  text-decoration={textDecoration}
  on:click>
  <slot></slot>
</ids-hyperlink>
