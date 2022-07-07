<script>
    import { createEventDispatcher, onMount } from 'svelte';

    export let label = 'My Checkbox';
    export let color = 'emerald07';
    export let checked = true;
    export let disabled = false;
    export let trackDirty = true;

    const dispatch = createEventDispatcher();

    onMount(async () => {
        await import('ids-enterprise-wc/components/ids-checkbox/ids-checkbox');
    });

    // Fires a Svelte event when IdsCheckbox's custom `change` event is fired
    const onChange = ((e) => {
        console.log('IdsCheckbox change event occured: ', e.target.checked ? 'checked' : 'unchecked');
        dispatch('change', { nativeEvent: e });
    });
</script>

<svelte:options accessors/>

<ids-checkbox
    checked={checked}
    color={color}
    disabled={disabled}
    trackDirty={trackDirty}
    label={label}
    on:change={onChange}></ids-checkbox>