<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await Promise.all([
      import('ids-enterprise-wc/components/ids-about/ids-about'),
      import('ids-enterprise-wc/components/ids-button/ids-button')
    ]);

    const triggerBtn: any = document.querySelector('#about-example-trigger');
    const about: any = document.querySelector('#about-example');

    if (!triggerBtn || !about) {
      return;
    }

    // Link the About to its trigger button
    about.target = triggerBtn;
    about.triggerType = 'click';

    // Disable the trigger button when showing the Modal.
    about.addEventListener('beforeshow', () => {
      triggerBtn.disabled = true;
      return true;
    });

    // After the modal is done hiding, re-enable its trigger button.
    about.addEventListener('hide', () => {
      triggerBtn.disabled = false;
    });
  });
</script>

<ids-about id="about-example" product-name="Controls Example Application" product-version="Version No. XX">
  <ids-icon slot="icon" icon="logo" viewbox="0 0 35 34" size="xxl"></ids-icon>
  <ids-text id="about-example-name" slot="appName" type="h1" font-size="24" font-weight="bold">IDS Enterprise</ids-text>
  <ids-text id="about-example-content" slot="content" type="p">Fashionable components for fashionable applications.</ids-text>
</ids-about>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">About</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    <ids-button appearance="secondary" id="about-example-trigger">Show About Screen</ids-button>
  </ids-layout-grid-cell>
</ids-layout-grid>