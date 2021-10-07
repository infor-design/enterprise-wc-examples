<script>
    // @TODO: We currently can't import this component from `ids-enterprise-wc`
    // without causing a custom element error.
    import 'ids-enterprise-wc/components/ids-input';

    // Supporting Components
    import 'ids-enterprise-wc/components/ids-layout-grid';
    import 'ids-enterprise-wc/components/ids-text';
</script>

<style></style>

<ids-layout-grid>
    <ids-text font-size="12">Normal Input (Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid>
    <ids-layout-grid-cell>
        <ids-input
            id="static-input"
            label="My Normal Input"
            type="text"
            value="I have contents"></ids-input>
    </ids-layout-grid-cell>
</ids-layout-grid>