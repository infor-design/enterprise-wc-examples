<svelte:options accessors />

<script>
    import { createEventDispatcher } from 'svelte';
    import TAG_COLORS from './colors';
    import 'ids-enterprise-wc/components/ids-tag/ids-tag.js';
    
    const dispatch = createEventDispatcher();

    // @TODO Native IDS WebComponents attempt to manually remove the Tag during the
    // `dismiss()` lifecycle.  Svelte bindings require that it manages the DOM, so we
    // hook into the `beforetagremove` event and prevent it from continuing.
    const onBeforeTagRemove = (e) => {
        console.log('webcomponent\'s "beforetagremove" event captured');
        e.detail.response(false);
        dispatch('beforetagremove', { nativeEvent: e });
    }

    // Pass the native custom event to a Svelte Component Event
    // (This won't occur unless you return `true` in the response from the `onBeforeTagRemove` handler)
    const onAfterTagRemove = (e) => {
        console.log('webcomponent\'s "aftertagremove" event captured');
        dispatch('aftertagremove', { nativeEvent: e });
    };

    // Log the `<ids-tag>` element when clicked
    const testClick = (e) => {
        if (e.target.tagName === 'IDS-TAG') {
            console.dir(e.target);
            dispatch('click', { nativeEvent: e });
        }
    }

    export let id = '';
    export let text = '';
    export let color = TAG_COLORS[0].value;
    export let dismissible = true;
    export let clickable = true;
</script>

<ids-tag
    id={`dynamic-tag-${id}`}
    data-id={id}
    clickable={clickable}
    color={color}
    dismissible={dismissible}
    on:click={testClick}
    on:beforetagremove={onBeforeTagRemove}
    on:aftertagremove={onAfterTagRemove}>{text}</ids-tag>