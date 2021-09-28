<script>
    import 'ids-enterprise-wc/components/ids-tag/ids-tag.js';

    // Supporting Components
    import 'ids-enterprise-wc/components/ids-icon/ids-icon.js';
    import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid.js';
    import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell.js';
    import 'ids-enterprise-wc/components/ids-text/ids-text.js';

    const TAG_COLORS = [
        { name: 'Default', value: '' },
        { name: 'Secondary', value: 'secondary' },
        { name: 'Error', value: 'error' },
        { name: 'Success', value: 'success' },
        { name: 'Warning', value: 'caution' },
        { name: 'Custom Color 1', value: '#ede3fc' }
    ];
</script>

<style></style>

<ids-layout-grid>
    <ids-text font-size="12">Normal Tags (Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid>
    <ids-layout-grid-cell>
        {#each TAG_COLORS as tag}
            <ids-tag color="{tag.value}">{tag.name}</ids-tag>
        {/each}
    </ids-layout-grid-cell>
</ids-layout-grid>