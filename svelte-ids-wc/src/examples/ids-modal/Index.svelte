<script>
    import { onMount } from 'svelte';
    import 'ids-enterprise-wc/components/ids-modal';
    
    // Supporting Components
    import 'ids-enterprise-wc/components/ids-button';
    import 'ids-enterprise-wc/components/ids-icon';
    import 'ids-enterprise-wc/components/ids-text';
    import 'ids-enterprise-wc/components/ids-layout-grid';

    let modal;
    let triggerBtn;

    onMount(() => {
        // Connect the Modal and its Button when the Svelte component is mounted (sets up click/focus events)
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

<style></style>

<ids-layout-grid>
    <ids-text font-size="12">Modal (Svelte)</ids-text>
</ids-layout-grid>

<ids-modal
    id="test-modal"
    bind:this={modal}>
    <ids-text slot="title" font-size="24" type="h2" id="my-modal-title">Active IDS Modal</ids-text>
    <ids-modal-button slot="buttons" id="modal-close-btn" type="primary">
        <span slot="text">OK</span>
    </ids-modal-button>
    <p align="left">This is an active IDS Modal component</p>
</ids-modal>

<ids-layout-grid>
    <ids-layout-grid-cell>
        <ids-button
            id="test-modal-trigger-btn"
            type="secondary"
            bind:this={triggerBtn}>Show Modal</ids-button>
    </ids-layout-grid-cell>
</ids-layout-grid>