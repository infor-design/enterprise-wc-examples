<script>
    import 'ids-enterprise-wc/components/ids-button';
    import 'ids-enterprise-wc/components/ids-icon';
    import 'ids-enterprise-wc/components/ids-text';

    // Supporting Components
    import 'ids-enterprise-wc/components/ids-layout-grid';

    const BUTTON_DEFS = [
        { text: 'Default Button', id: 'test-button-default' },
        { text: 'Primary Button', id: 'test-button-primary', type: 'primary' },
        { text: 'Secondary Button', id: 'test-button-secondary', type: 'secondary' },
        { text: 'Tertiary Button', id: 'test-button-tertiary', type: 'tertiary' }
    ];

    let lastClicked;
    const handleClick = (e) => {
        lastClicked = e.target;
        console.info(`clicked on button with ID "#${lastClicked.id}"`);
    };
</script>

<style></style>

<ids-layout-grid>
    {#if lastClicked}
        <ids-text>Last Clicked: <b>#{lastClicked.id}</b></ids-text>
    {:else}
        <ids-text>None of the buttons have been clicked yet</ids-text>
    {/if}
</ids-layout-grid>

<ids-layout-grid>
    <ids-text font-size="12">Button (Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid cols="4">
    {#each BUTTON_DEFS as btn}
        <ids-layout-grid-cell>
            <ids-button
                id={btn.id}
                type={btn.type}
                on:click={handleClick}>{btn.text}</ids-button>
        </ids-layout-grid-cell>
    {/each}
</ids-layout-grid>

<ids-layout-grid>
    <ids-text font-size="12">Disabled Button (Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid cols="4">
    {#each BUTTON_DEFS as btn}
        <ids-layout-grid-cell>
            <ids-button
                disabled=true
                id="{btn.id}-disabled"
                type={btn.type}
                on:click={handleClick}>{btn.text}</ids-button>
        </ids-layout-grid-cell>
    {/each}
</ids-layout-grid>

<ids-layout-grid>
    <ids-text font-size="12">Icon Button (Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid cols="4">
    {#each BUTTON_DEFS as btn}
        <ids-layout-grid-cell>
            <ids-button
                disabled={btn.disabled}
                id="{btn.id}-icon"
                type={btn.type}
                on:click={handleClick}>
                <span slot="text" class="audible">{btn.text}</span>
                <ids-icon slot="icon" icon="settings"></ids-icon>
            </ids-button>
        </ids-layout-grid-cell>
    {/each}
</ids-layout-grid>

<ids-layout-grid>
    <ids-text font-size="12">Text + Icon Button (Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid cols="4">
    {#each BUTTON_DEFS as btn}
        <ids-layout-grid-cell>
            <ids-button
                disabled={btn.disabled}
                id="{btn.id}-text-icon"
                type={btn.type}
                on:click={handleClick}>
                <span slot="text">{btn.text}</span>
                <ids-icon slot="icon" icon="settings"></ids-icon>
            </ids-button>
        </ids-layout-grid-cell>
    {/each}
</ids-layout-grid>

<ids-layout-grid>
    <ids-text font-size="12">Icon + Text Button (Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid cols="4">
    {#each BUTTON_DEFS as btn}
        <ids-layout-grid-cell>
            <ids-button
                disabled={btn.disabled}
                id="{btn.id}-icon-text"
                type={btn.type}
                on:click={handleClick}>
                <ids-icon slot="icon" icon="settings"></ids-icon>
                <span slot="text">{btn.text}</span>
            </ids-button>
        </ids-layout-grid-cell>
    {/each}
</ids-layout-grid>