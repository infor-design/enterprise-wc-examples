<script>
    import IdsTag from '../../components/ids-tag/IdsTag.svelte';

    const TAG_COLORS = [
        { name: 'Default', value: '' },
        { name: 'Secondary', value: 'secondary' },
        { name: 'Error', value: 'error' },
        { name: 'Success', value: 'success' },
        { name: 'Warning', value: 'warning' },
        { name: 'Custom Color 1', value: '#ede3fc' }
    ];

    const dashCase = (val = '') => {
        return val.toLowerCase().split(' ').join('-');
    };

    export let text = 'This is a tag';
    export let color = TAG_COLORS[0].value;
    export let dismissible = true;
    export let clickable = true;
</script>

<style></style>

<ids-layout-grid>
    <ids-text font-size="12">Dynamic Tag (Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid>
    <ids-layout-grid-cell>
        <IdsTag 
            bind:text={text}
            bind:color={color}
            bind:dismissible={dismissible} 
            bind:clickable={clickable} />
    </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid>
    <ids-layout-grid-cell>
        <label for="text-contents">Text Contents:</label>
        <input bind:value={text} type="text" id="text-contents"/>

        <select id="style" label="Normal Dropdown with Dirty Tracker" bind:value="{color}">
            {#each TAG_COLORS as option}
                <option id="color-{dashCase(option.name)}" value={option.value}>{option.name}</option>
            {/each}
        </select>

        <label for="use-clickable">Make Clickable</label>
        <input bind:checked={clickable} type="checkbox" id="use-clickable" />

        <label for="use-clickable">Make Dismissible</label>
        <input bind:checked={dismissible} type="checkbox" id="use-dismissible" />
    </ids-layout-grid-cell>
</ids-layout-grid>