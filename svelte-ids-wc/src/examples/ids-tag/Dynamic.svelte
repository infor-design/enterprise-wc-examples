<script>
    // Our stuff
    import IdsTag from '../../components/ids-tag/IdsTag.svelte';
    import TAG_COLORS from '../../components/ids-tag/colors';
    import { writableTagArray } from './stores';

    // Supporting IDS components
    import 'ids-enterprise-wc/components/ids-fieldset/ids-fieldset.js';
    import 'ids-enterprise-wc/components/ids-input/ids-input.js';
    import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid.js';
    import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell.js';
    import 'ids-enterprise-wc/components/ids-text/ids-text.js';

    // `refs/selectedId/currentTag/currentTagStoreRecord` handle the target
    // of the form controls (eitehr a new or existing tag)
    let refs = [];
    export let selectedId = -1;
    export let currentTag;
    export let currentTagRecord;

    // Form Control Values
    export let text = 'This is a tag';
    export let color = TAG_COLORS[0].value;
    export let dismissible = true;
    export let clickable = true;

    const dashCase = (val = '') => {
        return val.toLowerCase().split(' ').join('-');
    };

    // Adds the contents of the form as a new entry in the writable store.
    // This is automatically updated as new tag in the template below (see $writableTagArray) 
    const add = () => {
        writableTagArray.add({
            text,
            color,
            dismissible,
            clickable
        });
        deselect();
    };

    // Selects a tag by its ID
    const select = (id) => {
        currentTagRecord = $writableTagArray.find((item) => { 
            return item.id === id;
        });

        text = currentTag.textContent;
        color = currentTag.color || '';
        dismissible = currentTag.dismissible;
        clickable = currentTag.clickable;
    }

    const deselect = () => {
        currentTag = undefined;
        currentTagRecord = undefined;
        selectedId = -1;
    }

    // Resets the writeable store to have no contents, and clears the current tag
    const reset = () => {
        deselect();
        writableTagArray.reset();
        refs = [];
    }

    // Allows pretty-looking data formatting in the template
    const prettyFormat = (str) => JSON.stringify( str, null, 2 );

    // Listens for the Svelte "Component Event" dispatched by the dynamic `<IdsTag>` svelte component
    const onBeforeTagRemove = (e) => {
        const tagStoreId = parseInt(e.detail.nativeEvent.target.dataset.id);
        writableTagArray.remove(tagStoreId);
        deselect();
        console.log('svelte component\'s "beforetagremove" event captured')
    };

    // When clicking on an existing tag in the list, 
    // the form fields are updated to reflect its state.
    const setAsCurrentTag = (e) => {
        // NOTE: `e.detail` is the Svelte Component's event detail, NOT the IDS component's.
        currentTag = e.detail.nativeEvent.target;
        selectedId = parseInt(currentTag.dataset.id);
        select(selectedId);
    };

    // Updates the writable tag array when a specified value changes
    const updateStoreValue = (targetEl, prop) => {
        let targetProp = 'value';
        if (['checkbox', 'radio'].includes(targetEl.type)) {
            targetProp = 'checked';
        }

        if (selectedId > -1) {
            const index = $writableTagArray.findIndex(i => i.id === selectedId)
            $writableTagArray[index][prop] = targetEl[targetProp];
        }
    }

    // Makes the "Deselect" button in the template disabled/enabled based on whether or not a tag is selected
    $: hasNoCurrentTag = currentTag === undefined;

    // Lists all records in the writable store in an easily-read format
    $: tagStoreStringRecords = prettyFormat($writableTagArray);
</script>

<style>
    /* 
    NOTE: this is not needed for the actual Tag component.
    This is only used for styling the block that displays the writable store.
    */
    .pre {
        font-family: 'Fira Code', monospace;
        font-size: 12px;
        white-space: pre;
    }
</style>

<ids-layout-grid>
    <ids-text font-size="12">Dynamic Tag (Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid>
    <ids-layout-grid-cell>
        {#each $writableTagArray as tag, i}
            <IdsTag
                bind:this={refs[i]}
                bind:id={tag.id}
                bind:text={tag.text}
                bind:color={tag.color}
                bind:dismissible={tag.dismissible}
                bind:clickable={tag.clickable}
                on:click={setAsCurrentTag}
                on:beforetagremove={onBeforeTagRemove} />
        {/each}
    </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid cols="2">
    <ids-layout-grid-cell>
        <ids-fieldset>
            <legend>
            {#if selectedId > -1}
                <ids-text font-size="12">Update Dynamic Tag with ID "{selectedId}"</ids-text>
            {:else}
                <ids-text font-size="12">Create a New Dynamic Tag</ids-text>
            {/if}
            </legend>

            <label for="text-contents">Text Contents:</label>
            <input
                type="text" 
                id="text-contents"
                bind:value={text}
                on:input={(e) => updateStoreValue(e.target, 'text')} />

            <label for="style">Normal Dropdown with Dirty Tracker</label>
            <select id="style" bind:value="{color}" on:change={(e) => updateStoreValue(e.target, 'color')}>
                {#each TAG_COLORS as option}
                    <option id="color-{dashCase(option.name)}" value={option.value}>{option.name}</option>
                {/each}
            </select>

            <label for="use-clickable">Make Clickable</label>
            <input bind:checked={clickable} type="checkbox" id="use-clickable" on:change={(e) => updateStoreValue(e.target, 'clickable')}>

            <label for="use-clickable">Make Dismissible</label>
            <input bind:checked={dismissible} type="checkbox" id="use-dismissible" on:change={(e) => updateStoreValue(e.target, 'dismissible')} />

            <button id="add" on:click={add}>Add new tag</button>
            <button id="deselect"
                disabled={hasNoCurrentTag}
                on:click={deselect}>Deselect Current Tag</button>
            <button id="reset" on:click={reset}>Remove all tags</button>

        </ids-fieldset>
    </ids-layout-grid-cell>
    <ids-layout-grid-cell>
        <ids-layout-grid cols="3">
            <ids-layout-grid-cell>
                <ids-text font-size="12">Current Values in the Writable Store</ids-text>
                <code class="pre">{tagStoreStringRecords}</code>
            </ids-layout-grid-cell>
            <ids-layout-grid-cell>
                <ids-text font-size="12">Store Value Representing Currently Selected Tag</ids-text>
                <code class="pre">{prettyFormat($writableTagArray[selectedId])}</code>
            </ids-layout-grid-cell>
            <ids-layout-grid-cell>
                <ids-text font-size="12">Svelte Component Refs</ids-text>
                {#each refs as ref, i}
                    <p><b>{i}:</b>{prettyFormat(ref)}</p>
                {/each}
            </ids-layout-grid-cell>
        </ids-layout-grid>
    </ids-layout-grid-cell>
</ids-layout-grid>