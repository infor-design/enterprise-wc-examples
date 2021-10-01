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

    // Form Control Values
    export let text = 'This is a tag';
    export let color = TAG_COLORS[0].value;
    export let dismissible = true;
    export let clickable = true;

    const dashCase = (val = '') => {
        return val.toLowerCase().split(' ').join('-');
    };

    const add = () => {
        writableTagArray.add({
            text,
            color,
            dismissible,
            clickable
        });
    };

    const onBeforeTagRemove = (e) => {
        const tagStoreId = parseInt(e.detail.elem.dataset.id);
        writableTagArray.remove(tagStoreId);
        console.log('svelte component\'s "beforetagremove" event captured')
    };
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
        {#each $writableTagArray as tag}
            <IdsTag
                bind:id={tag.id}
                bind:text={tag.text}
                bind:color={tag.color}
                bind:dismissible={tag.dismissible}
                bind:clickable={tag.clickable}
                on:beforetagremove={onBeforeTagRemove} />
        {/each}
    </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid cols="2">
    <ids-layout-grid-cell>
        <ids-fieldset>
            <legend><ids-text font-size="12">Create New Dynamic Tag</ids-text></legend>

            <label for="text-contents">Text Contents:</label>
            <input bind:value={text} type="text" id="text-contents"/>

            <label for="style">Normal Dropdown with Dirty Tracker</label>
            <select id="style" bind:value="{color}">
                {#each TAG_COLORS as option}
                    <option id="color-{dashCase(option.name)}" value={option.value}>{option.name}</option>
                {/each}
            </select>

            <label for="use-clickable">Make Clickable</label>
            <input bind:checked={clickable} type="checkbox" id="use-clickable" />

            <label for="use-clickable">Make Dismissible</label>
            <input bind:checked={dismissible} type="checkbox" id="use-dismissible" />

            <button id="add" on:click={add}>Add new tag</button>
            <button id="reset" on:click={writableTagArray.reset}>Remove all tags</button>
        </ids-fieldset>
    </ids-layout-grid-cell>
    <ids-layout-grid-cell class="pre">
        { JSON.stringify( $writableTagArray, null, 2 ) }
    </ids-layout-grid-cell>
</ids-layout-grid>