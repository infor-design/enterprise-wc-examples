<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-button/ids-button');
    await import('ids-enterprise-wc/components/ids-icon/ids-icon');
  });

  const log = (e: MouseEvent) => {
    const target = (e.target as HTMLElement);
    if (target !== null) {
      console.info(`"${target.textContent?.trim()}" was clicked.`, `ID: #${target.id}`);
    }
  }
</script>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h1">IDS Button (Imported into Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h2">Normal Buttons</ids-text>
</ids-layout-grid>

<ids-layout-grid cols="4">
  <ids-layout-grid-cell>
    <ids-button id="normal-default-button" on:click={log}>Default Button</ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="normal-primary-button" type="primary" on:click={log}>Primary Button</ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="normal-secondary-button" type="secondary" on:click={log}>Secondary Button</ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="normal-tertiary-button" type="tertiary" on:click={log}>Tertiary Button</ids-button>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h2">Disabled Buttons</ids-text>
</ids-layout-grid>

<ids-layout-grid cols="4">
  <ids-layout-grid-cell>
    <ids-button id="disabled-default-button" disabled on:click={log}>Default Button</ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="disabled-primary-button" disabled type="primary" on:click={log}>Primary Button</ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="disabled-secondary-button" disabled type="secondary" on:click={log}>Secondary Button</ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="disabled-tertiary-button" disabled type="tertiary" on:click={log}>Tertiary Button</ids-button>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h2">Icon-only Buttons</ids-text>
</ids-layout-grid>

<ids-layout-grid cols="4">
  <ids-layout-grid-cell>
    <ids-button id="icon-default-button" on:click={log}>
      <span class="audible">Default Button</span>
      <ids-icon slot="icon" icon="settings"></ids-icon>
    </ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="icon-primary-button" type="primary" on:click={log}>
      <span class="audible">Primary Button</span>
      <ids-icon slot="icon" icon="settings"></ids-icon>
    </ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="icon-secondary-button" type="secondary" on:click={log}>
      <span class="audible">Secondary Button</span>
      <ids-icon slot="icon" icon="settings"></ids-icon>
    </ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="icon-tertiary-button" type="tertiary" on:click={log}>
      <span class="audible">Tertiary Button</span>
      <ids-icon slot="icon" icon="settings"></ids-icon>
    </ids-button>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h2">Icon + Text Buttons</ids-text>
</ids-layout-grid>

<ids-layout-grid cols="4">
  <ids-layout-grid-cell>
    <ids-button id="icon-text-default-button" on:click={log}>
      <ids-icon icon="settings"></ids-icon>
      <span>Default Button</span>
    </ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="icon-text-primary-button" type="primary" on:click={log}>
      <ids-icon icon="settings"></ids-icon>
      <span>Primary Button</span>
    </ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="icon-text-secondary-button" type="secondary" on:click={log}>
      <ids-icon icon="settings"></ids-icon>
      <span>Secondary Button</span>
    </ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="icon-text-tertiary-button" type="tertiary" on:click={log}>
      <ids-icon icon="settings"></ids-icon>
      <span>Tertiary Button</span>
    </ids-button>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h2">Text + Icon Buttons</ids-text>
</ids-layout-grid>

<ids-layout-grid cols="4">
  <ids-layout-grid-cell>
    <ids-button id="text-icon-default-button" on:click={log}>
      <span>Default Button</span>
      <ids-icon icon="settings"></ids-icon>
    </ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="text-icon-primary-button" type="primary" on:click={log}>
      <span>Primary Button</span>
      <ids-icon icon="settings"></ids-icon>
    </ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="text-icon-secondary-button" type="secondary" on:click={log}>
      <span>Secondary Button</span>
      <ids-icon icon="settings"></ids-icon>
    </ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-button id="text-icon-tertiary-button" type="tertiary" on:click={log}>
      <span>Tertiary Button</span>
      <ids-icon icon="settings"></ids-icon>
    </ids-button>
  </ids-layout-grid-cell>
</ids-layout-grid>