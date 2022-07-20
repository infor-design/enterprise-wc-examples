<script lang="ts">
	const categories: Array<any> = [
		{ name: 'Form Inputs', icon: 'display', components: [] },
		{ name: 'Navigation and Interaction', icon: 'map', components: [] },
		{ name: 'Messages and Alerts', icon: 'success', components: [] },
		{ name: 'Lists', icon: 'spreadsheet', components: [] },
		{ name: 'Layouts', icon: 'project', components: [] },
		{ name: 'Patterns', icon: 'design-mode', components: [] },
		{ name: 'Charts and Visualizations', icon: 'line-bar-chart', components: [] },
		{ name: 'Typography', icon: '', components: [] }
	];

	// Form Inputs
	categories[0].components.push(
    {
      link: 'ids-checkbox',
      component: 'Checkbox',
      description: 'Checkbox Input Element'
    },
    {
      link: 'ids-dropdown',
      component: 'Dropdown',
      description: 'Select from a list of items'
    },
    {
      link: 'ids-input',
      component: 'Input',
      description: 'Input element and features'
    }
  );
  
  // Navigation & Interaction
  categories[1].components.push(
    {
      link: 'ids-button',
      component: 'Button',
      description: 'Simple HTMLButtonElement'
    },
    {
      link: 'ids-tag',
      component: 'Tag',
      description: 'UI Classification'
    }
  );

  // Layouts
  categories[4].components.push(
    {
      link: 'ids-list-box',
      component: 'List Box',
      description: 'List Item Markup'
    },
    {
      link: 'ids-popup',
      component: 'Popup',
      description: 'Displays a Popup Container'
    }
  );
</script>

<ids-layout-grid auto="true" gap="md">
  <ids-layout-grid-cell>

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
                      <ids-text
                        type="h2"
                        font-size="16"
                        font-weight="bold"
                        color="slate-100"
                        mode="light"
                        version="new">{component.component}</ids-text>
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

  </ids-layout-grid-cell>
</ids-layout-grid>