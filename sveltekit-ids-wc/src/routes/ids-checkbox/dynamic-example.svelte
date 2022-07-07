<script>
    import IdsCheckbox from '../../components/ids-checkbox/IdsCheckbox.svelte';

    let ref;

    const colors = [
        { id: 'azure07', name: 'AZURE' }, 
        { id: 'emerald07', name: 'EMERALD' },
        { id: 'ruby07', name: 'RUBY' }, 
        { id: 'amber07', name: 'AMBER' }, 
        { id: 'amethyst07', name: 'AMETHYST' },
        { id: 'turquoise07', name: 'TURQUOISE' }
    ];

    const handleChange = () => {
        const colorDef = colors[Math.floor(Math.random() * 6)];
        ref.color = colorDef.id;
        ref.label = `My ${colorDef.name} checkbox`
    }
</script>

<ids-layout-grid auto="true">
    <ids-layout-grid-cell>
        <ids-text font-size="12" type="h1">IdsCheckbox (Svelte Component)</ids-text>
    </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
    <ids-layout-grid-cell>
        <IdsCheckbox 
            label="My GREEN checkbox"
            bind:this={ref}
            on:change={handleChange}></IdsCheckbox>
    </ids-layout-grid-cell>
</ids-layout-grid>