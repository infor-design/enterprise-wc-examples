<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Writable } from 'svelte/store';
  import type { IdsComponentCategory } from '../app';

  const DEFAULT_CATEGORIES: Array<IdsComponentCategory> = [];
  let categories: Writable<Array<IdsComponentCategory>> = writable(DEFAULT_CATEGORIES);

  onMount(async (): Promise<void> => {
    const res = await fetch('/data/_components');
    const json = await res.json();
    $categories = json;
  });
</script>

<ids-layout-grid auto-fit="true" gap="md">
  <ids-layout-grid-cell>

    {#if $categories.length}
      {#each $categories as category}
        {#if category.components.length}
          <ids-text type="h1" font-size="24">{category.name}</ids-text>
          <ids-layout-grid auto-fit="true">
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
                          version="new">{component.type}</ids-text>
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
    {/if}

  </ids-layout-grid-cell>
</ids-layout-grid>