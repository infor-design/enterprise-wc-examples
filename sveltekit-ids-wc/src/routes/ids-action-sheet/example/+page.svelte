<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await Promise.all([
      import('ids-enterprise-wc/components/ids-action-sheet/ids-action-sheet'),
      import('ids-enterprise-wc/components/ids-menu-button/ids-menu-button'),
      import('ids-enterprise-wc/components/ids-popup-menu/ids-popup-menu')
    ]);

    const menuBtnEl: any = document.querySelector('ids-menu-button');
    const actionSheet: any = document.querySelector('ids-action-sheet');
    const menuItems: any = document.querySelectorAll('ids-menu-item');

    // Toggle the Popup/Actionsheet
    menuBtnEl.addEventListener('click', () => {
      actionSheet.visible = !actionSheet.visible;
    });

    menuItems.forEach((menuItem: any) => {
      menuItem.addEventListener('click', () => {
        actionSheet.dismiss();
      });
    });
  });
</script>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">Action Sheet (Imported into Svelte)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto-fit="true" gap="md" padding-x="md">
  <ids-layout-grid-cell>

    <ids-menu-button id="icon-button" menu="icon-menu">
      <ids-icon icon="more"></ids-icon>
      <span class="audible">Icon Only Button</span>
    </ids-menu-button>

    <ids-popup-menu id="icon-menu" class="hide-sm-down" target="icon-button" trigger-type="click">
      <ids-menu-group>
        <ids-menu-item icon="mail">Option One</ids-menu-item>
        <ids-menu-item icon="filter">Option Two</ids-menu-item>
        <ids-menu-item icon="profile">Option Three</ids-menu-item>
      </ids-menu-group>
    </ids-popup-menu>

    <ids-action-sheet>
      <ids-menu>
        <ids-menu-group>
          <ids-menu-item icon="mail" text-align="center">Option One</ids-menu-item>
          <ids-menu-item icon="filter" text-align="center">Option Two</ids-menu-item>
          <ids-menu-item icon="profile" text-align="center">Option Three</ids-menu-item>
        </ids-menu-group>
      </ids-menu>
    </ids-action-sheet>

  </ids-layout-grid-cell>
</ids-layout-grid>