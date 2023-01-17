<script lang="ts">
  import { onMount } from 'svelte';
  import avatarImg from '$lib/img/avatar-placeholder.jpg';

  const userName = 'Richard Fairbanks';

  onMount(async (): Promise<void> => {
    await Promise.all([
      import('ids-enterprise-wc/components/ids-app-menu/ids-app-menu'),
      import('ids-enterprise-wc/components/ids-accordion/ids-accordion'),
      import('ids-enterprise-wc/components/ids-button/ids-button'),
      import('ids-enterprise-wc/components/ids-menu-button/ids-menu-button'),
      import('ids-enterprise-wc/components/ids-popup-menu/ids-popup-menu'),
      import('ids-enterprise-wc/components/ids-search-field/ids-search-field')
    ]);

    const appMenuDrawer: any = document.querySelector('#app-menu');
    const appMenuTriggerBtn: any = document.querySelector('#app-menu-trigger');

    appMenuDrawer.target = appMenuTriggerBtn;
    appMenuTriggerBtn.addEventListener('click', () => {
      appMenuTriggerBtn.disabled = true;
    });

    appMenuDrawer.addEventListener('hide', () => {
      appMenuTriggerBtn.disabled = false;
    });

    appMenuDrawer.addEventListener('selected', (e: CustomEvent) => {
      console.info(`Header "${(e.target as any).textContent.trim()}" was selected.`);
    });
  });
</script>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h1">Ids App Menu (Imported into Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid>
  <ids-layout-grid-cell>
    <ids-button id="app-menu-trigger" icon="menu">
      <span class="audible">Open App Menu</span>
    </ids-button>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-app-menu id="app-menu">
  <!-- Avatar/Username Area -->
  <img slot="avatar" id="avatar" alt={userName} src={avatarImg}/>
  <ids-text slot="username" font-size="24" font-weight="bold">{userName}</ids-text>

  <!-- Header Toolbar -->
  <ids-toolbar slot="header">
    <ids-toolbar-section align="center-even" type="fluid">
      <ids-button id="header-btn-download" icon="download">
        <ids-text audible>Download</ids-text>
      </ids-button>
      <ids-button id="header-btn-print" icon="print">
        <ids-text audible>Print</ids-text>
      </ids-button>
      <ids-button id="header-btn-purchasing" icon="purchasing">
        <ids-text audible>Purchasing</ids-text>
      </ids-button>
      <ids-button id="header-btn-notification" icon="notification">
        <ids-text audible>Notification</ids-text>
      </ids-button>
      <ids-button id="header-btn-inventory" icon="inventory">
        <ids-text audible>Inventory</ids-text>
      </ids-button>
    </ids-toolbar-section>
  </ids-toolbar>

  <ids-search-field id="search" clearable color-variant="app-menu" label="Application Menu Search" label-state="collapsed" no-margins slot="search"></ids-search-field>

  <!-- Main Content (Accordion Navigation) -->
  <ids-accordion>
    <ids-accordion-panel>
      <ids-accordion-header slot="header" icon="user">
        <ids-text font-size="16">Employee</ids-text>
      </ids-accordion-header>
      <ids-accordion-panel slot="content">
        <ids-accordion-header slot="header">
          <ids-text font-size="14">My Profile</ids-text>
        </ids-accordion-header>
      </ids-accordion-panel>
      <ids-accordion-panel slot="content">
        <ids-accordion-header slot="header">
          <ids-text font-size="14">Talent Profile</ids-text>
        </ids-accordion-header>
      </ids-accordion-panel>
      <ids-accordion-panel slot="content">
        <ids-accordion-header slot="header">
          <ids-text font-size="14">View Compensation</ids-text>
        </ids-accordion-header>
      </ids-accordion-panel>
      <ids-accordion-panel slot="content">
        <ids-accordion-header slot="header">
          <ids-text font-size="14">RAVE</ids-text>
        </ids-accordion-header>
      </ids-accordion-panel>
      <ids-accordion-panel slot="content">
        <ids-accordion-header slot="header">
          <ids-text font-size="14">Request Time Off</ids-text>
        </ids-accordion-header>
      </ids-accordion-panel>
      <ids-accordion-panel slot="content">
        <ids-accordion-header slot="header">
          <ids-text font-size="14">Benefits</ids-text>
        </ids-accordion-header>
        <ids-accordion-panel slot="content">
          <ids-accordion-header slot="header">
            <ids-text font-size="14">My Benefits</ids-text>
          </ids-accordion-header>
        </ids-accordion-panel>
        <ids-accordion-panel slot="content">
          <ids-accordion-header slot="header">
            <ids-text font-size="14">Dependents and Beneficiaries</ids-text>
          </ids-accordion-header>
        </ids-accordion-panel>
        <ids-accordion-panel slot="content">
          <ids-accordion-header slot="header">
            <ids-text font-size="14">Life Events</ids-text>
          </ids-accordion-header>
        </ids-accordion-panel>
        <ids-accordion-panel slot="content">
          <ids-accordion-header slot="header">
            <ids-text font-size="14">Benefits Information</ids-text>
          </ids-accordion-header>
        </ids-accordion-panel>
      </ids-accordion-panel>
      <ids-accordion-panel slot="content">
        <ids-accordion-header slot="header">
          <ids-text font-size="14">My Rewards</ids-text>
        </ids-accordion-header>
      </ids-accordion-panel>
      <ids-accordion-panel slot="content">
        <ids-accordion-header slot="header">
          <ids-text font-size="14">Find a Coworker</ids-text>
        </ids-accordion-header>
      </ids-accordion-panel>
      <ids-accordion-panel slot="content">
        <ids-accordion-header slot="header">
          <ids-text font-size="14">My Growth</ids-text>
        </ids-accordion-header>
      </ids-accordion-panel>
    </ids-accordion-panel>
    <ids-accordion-panel>
      <ids-accordion-header slot="header" icon="distribution">
        <ids-text font-size="16">Manager</ids-text>
      </ids-accordion-header>
    </ids-accordion-panel>
    <ids-accordion-panel>
      <ids-accordion-header slot="header" icon="roles">
        <ids-text font-size="16">Recruiter</ids-text>
      </ids-accordion-header>
    </ids-accordion-panel>
  </ids-accordion>
</ids-app-menu>