<script>
    import { createEventDispatcher, onMount } from 'svelte';

    onMount(async () => {
        await import('ids-enterprise-wc/components/ids-input/ids-input');
    });
    
    const dispatch = createEventDispatcher();

    // Log the `<ids-input>` element when clicked
    const onInput = (e) => {
        if (e.target.tagName === 'IDS-INPUT') {
            console.dir(e.target.value);
            dispatch('input', { nativeEvent: e });
        }
    }

    export let id = '';
    export let label = '';
    export let value;
</script>

<ids-input
    id={`dynamic-input-${id}`}
    data-id={id}
    label={label}
    value={value}
    on:input={onInput}></ids-input>