<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await Promise.all([
      import('ids-enterprise-wc/components/ids-modal/ids-modal'),
      import('ids-enterprise-wc/components/ids-modal-button/ids-modal-button')
    ]);

    const triggerId = '#modal-trigger-btn';
    const triggerBtn: any = document.querySelector(triggerId);
    const modal: any = document.querySelector('ids-modal');

    // Links the Modal to its trigger button (sets up click/focus events)
    modal.target = triggerBtn;
    modal.trigger = 'click';

    // Disable the trigger button when showing the Modal.
    modal.addEventListener('beforeshow', () => {
      triggerBtn.disabled = true;
      return true;
    });

    // Close the modal when its inner button is clicked.
    modal.onButtonClick = () => {
      modal.hide();
    };

    // After the modal is done hiding, re-enable its trigger button.
    modal.addEventListener('hide', () => {
      triggerBtn.disabled = false;
    });
  });
</script>

<ids-modal id="my-modal" aria-labelledby="my-modal-title">
  <ids-text slot="title" font-size="24" type="h2" id="my-modal-title">Active IDS Modal</ids-text>
  <ids-modal-button slot="buttons" id="modal-close-btn" appearance="primary">
    <span>OK</span>
  </ids-modal-button>
  <ids-text text-align="start">This is an active IDS Modal component</ids-text>
</ids-modal>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">IDS Modal (Imported into Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid auto-fit="true">
  <ids-layout-grid-cell>
    <ids-button id="modal-trigger-btn" appearance="secondary">
      <span>Trigger a Modal</span>
    </ids-button>
  </ids-layout-grid-cell>
</ids-layout-grid>