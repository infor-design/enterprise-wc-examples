<script lang="ts">
  import { onMount } from 'svelte';
  import type IdsPopupMenu from 'ids-enterprise-wc/components/ids-popup-menu/ids-popup-menu';

  let ref: IdsPopupMenu;

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-popup-menu/ids-popup-menu');
    if (ref && ref.popupEl) {
      console.dir(ref.popupEl)
      ref.popupEl.align = 'top, left';
    }
  });

  const handleSelected = (e: CustomEvent) => {
    console.info(`Item "${e.detail.elem.text}" was selected`);
  };

  $: {
    // Set defaults on the ref
    if (ref && ref.popupEl) {
      ref.popupEl.align = 'top, left';
    }
  }
</script>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">Popup Menu (Imported into Svelte)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    <ids-text>Right click anywhere to open the Popupmenu</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-popup-menu
  id="popupmenu" 
  bind:this={ref}
  on:selected={handleSelected}>
  <ids-menu-group>
    <ids-menu-item>Item One</ids-menu-item>
    <ids-menu-item>Item Two</ids-menu-item>
    <ids-menu-item>Item Three</ids-menu-item>
    <ids-menu-item>Item Four</ids-menu-item>
    <ids-separator></ids-separator>
    <ids-menu-item id="item-five">
      More Actions
      <ids-popup-menu>
        <ids-menu-group>
          <ids-menu-item>Sub-item One</ids-menu-item>
          <ids-menu-item>Sub-item Two</ids-menu-item>
          <ids-menu-item>Sub-item Three</ids-menu-item>
        </ids-menu-group>
      </ids-popup-menu>
    </ids-menu-item>
    <ids-menu-item id="item-six">
      Even More Actions
      <ids-popup-menu>
        <ids-menu-group>
          <ids-menu-item icon="settings">
            Change Settings
            <ids-popup-menu>
              <ids-menu-group>
                <ids-menu-item>Setting One</ids-menu-item>
                <ids-menu-item>Setting Two</ids-menu-item>
                <ids-menu-item>Setting Three</ids-menu-item>
                <ids-menu-item>REAAAAALLLLY Long Setting Number Four</ids-menu-item>
              </ids-menu-group>
            </ids-popup-menu>
          </ids-menu-item>
          <ids-menu-item icon="mail">Send Mail</ids-menu-item>
          <ids-menu-item icon="filter">Filter Content</ids-menu-item>
        </ids-menu-group>
      </ids-popup-menu>
    </ids-menu-item>
  </ids-menu-group>
</ids-popup-menu>