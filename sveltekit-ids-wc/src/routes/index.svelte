<script lang="ts">
    const categories: Array<any> = [
        { name: 'Form Inputs', icon: 'display', components: [] },
        { name: 'Navigation and Interaction', icon: 'map', components: [] },
        { name: 'Messages and Alerts', icon: 'success', components: [] },
        { name: 'Lists', icon: 'spreadsheet', components: [] },
        { name: 'Layouts', icon: 'project', components: [] },
        { name: 'Patterns', icon: 'design-mode', components: [] },
        { name: 'Charts and Visualizations', icon: 'line-bar-chart', components: [] },
        { name: 'Typography', icon: '', components: [] },
    ];

    const addYaml = (yaml: any) => {
        const index = categories.findIndex((element: any) => element.name === yaml.category);
        categories[index].components.push(yaml);
    };

    // Temp (until we get YAML loading working)
    categories[0].components.push({
        component: 'Checkbox',
        description: 'Checkbox Input Element',
        link: 'ids-checkbox'
    })
</script>

{#each categories as category}
    {#if category.components.length}
        <ids-text type="h1" font-size="24">{category.name}</ids-text>
        <ids-layout-grid auto="true">
            <ids-layout-grid-cell>
                <ids-block-grid align="center">
                    {#each category.components as component}
                        <ids-block-grid-item>
                            <ids-card actionable="true" height="100" href="/{component.link}" target="_self">
                                <div slot="card-content" class="fixed-height">
                                    <ids-text type="h2" font-size="16" font-weight="bold" color="slate-100" mode="light" version="new">{component.component}</ids-text>
                                    <ids-text type="h2" font-size="16" color="slate-60" mode="light" version="new">{component.description}</ids-text>
                                </div>
                            </ids-card>
                        </ids-block-grid-item>
                    {/each}
                </ids-block-grid>
            </ids-layout-grid-cell>
        </ids-layout-grid>
    {/if}
{/each}