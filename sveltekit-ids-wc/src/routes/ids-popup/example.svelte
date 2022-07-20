<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-popup/ids-popup');
    await import('ids-enterprise-wc/components/ids-button/ids-button');

    // Connect Popup to its Trigger Button
    const triggerId = '#popup-trigger-btn';
    const triggerBtn = document.querySelector(triggerId);
    const popup: any = document.querySelector('#popup-1');
    if (!popup) {
      return;
    }
    popup.arrow = 'right';

    // Toggle the Popup
    triggerBtn?.addEventListener('click', () => {
      popup.visible = !popup.visible;
    });
  });
</script>

<style>
  .demo-popup {
    padding: 50px;
  }
</style>

<ids-layout-grid auto="true">
  <ids-text font-size="12" type="h1">IDS Popup (Imported into Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <ids-button id="popup-trigger-btn" type="secondary">
      <span slot="text">Trigger a Popup</span>
    </ids-button>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-popup x="15" y="0" align-target="#popup-trigger-btn" align="right" animated="true" type="menu" id="popup-1">
  <div slot="content">
    <div class="demo-popup">
      <ids-text font-size="12" type="span">My Popup Content</ids-text>
    </div>
  </div>
</ids-popup>