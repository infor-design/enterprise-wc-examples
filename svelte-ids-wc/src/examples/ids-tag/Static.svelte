<script>
    import 'ids-enterprise-wc/components/ids-tag/ids-tag.js';
    import TAG_COLORS from '../../components/ids-tag/colors';

    // Supporting Components
    import 'ids-enterprise-wc/components/ids-icon/ids-icon.js';
    import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid.js';
    import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell.js';
    import 'ids-enterprise-wc/components/ids-text/ids-text.js';
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