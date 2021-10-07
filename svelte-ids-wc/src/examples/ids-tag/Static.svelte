<script>
    import 'ids-enterprise-wc/components/ids-tag';
    import TAG_COLORS from '../../components/ids-tag/colors';

    // Supporting Components
    import 'ids-enterprise-wc/components/ids-icon';
    import 'ids-enterprise-wc/components/ids-layout-grid';
    import 'ids-enterprise-wc/components/ids-text';
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