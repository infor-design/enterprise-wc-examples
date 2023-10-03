<script lang="ts">
  import { onMount } from 'svelte';
  import { appStore } from '../../../../app.store';

  onMount(async (): Promise<void> => {
    await Promise.all([
      import('ids-enterprise-wc/components/ids-header/ids-header'),
      import('ids-enterprise-wc/components/ids-toolbar/ids-toolbar'),
      import('ids-enterprise-wc/components/ids-toolbar/ids-toolbar-section'),
      import('ids-enterprise-wc/components/ids-tabs/ids-tab'),
      import('ids-enterprise-wc/components/ids-tabs/ids-tab-content'),
      import('ids-enterprise-wc/components/ids-tabs/ids-tabs'),
      import('ids-enterprise-wc/components/ids-tabs/ids-tabs-context')
    ]);
  });

  const handleChange = (e: Event | CustomEvent | any) => {
    console.info(`ids-tabs.on('change') =>`, e.target?.value);
  };
</script>

<ids-tabs-context>
  <ids-header>
    <ids-toolbar>
      <ids-toolbar-section>
        <ids-toolbar-section type="title">
          <ids-text font-size="20" color-variant="alternate">Header Tabs</ids-text>
          <ids-text font-size="14" color-variant="alternate">ids-tabs for an overall app header</ids-text>
        </ids-toolbar-section>
      </ids-toolbar-section>
      <ids-toolbar-section type="buttonset" align="end">
        {#if $appStore.allowThemeSwitcher}
          <ids-theme-switcher mode="light" self-managed color-variant="alternate"></ids-theme-switcher>
        {/if}
      </ids-toolbar-section>
    </ids-toolbar>
    <ids-tabs value="opportunities" color-variant="alternate">
      <ids-tab value="contracts" on:change={handleChange}>Contracts</ids-tab>
      <ids-tab value="opportunities" on:change={handleChange}>Opportunities</ids-tab>
      <ids-tab value="attachments" disabled on:change={handleChange}>Attachments</ids-tab>
      <ids-tab value="notes" on:change={handleChange}>Notes</ids-tab>
    </ids-tabs>
  </ids-header>
  <div class="ids-tabs-content">
    <ids-tab-content value="contracts">
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="16" type="p">Facilitate cultivate monetize, seize e-services peer-to-peer content integrateAJAX-enabled user-centric strategize. Mindshare; repurpose integrate global addelivery leading-edge frictionless, harness real-time plug-and-play standards-compliant 24/7 enterprise strategize robust infomediaries: functionalities back-end. Killer disintermediate web-enabled ubiquitous empower relationships, solutions, metrics architectures.</ids-text>
      </ids-layout-grid>
    </ids-tab-content>
    <ids-tab-content value="opportunities">
      <div class="tab-content">
        <ids-layout-grid auto-fit="true" padding="md">
          <ids-text font-size="16" type="p">
            Bricks-and-clicks? Evolve ubiquitous matrix B2B 24/365 vertical 24/365 platforms standards-compliant global leverage dynamic 24/365 intuitive ROI seamless rss-capable. Cutting-edge grow morph web services leverage; ROI, unleash reinvent innovative podcasts citizen-media networking.
          </ids-text>
        </ids-layout-grid>
      </div>
    </ids-tab-content>
    <ids-tab-content value="attachments">
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="16" type="p">
          Frictionless webservices, killer open-source innovate, best-of-breed, whiteboard interactive back-end optimize capture dynamic front-end. Initiatives ubiquitous 24/7 enhance channels B2B drive frictionless web-readiness generate recontextualize widgets applications. Sexy sticky matrix, user-centred, rich user-centric: peer-to-peer podcasting networking addelivery optimize streamline integrated proactive: granular morph.
        </ids-text>
      </ids-layout-grid>
    </ids-tab-content>
    <ids-tab-content value="notes">
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="16" type="p">
          Evolve ubiquitous matrix B2B 24/365 vertical 24/365 platforms standards-compliant global leverage dynamic 24/365 intuitive ROI seamless rss-capable. Cutting-edge grow morph web services leverage; ROI, unleash reinvent innovative podcasts citizen-media networking.
        </ids-text>
      </ids-layout-grid>
    </ids-tab-content>
  </div>
</ids-tabs-context>