<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-textarea/ids-textarea');

    const btnUpdateValue = document.querySelector('#btn-textarea-update-value');
    const btnResetValue = document.querySelector('#btn-textarea-reset-value');
    const textareaUpdateValue: any = document.querySelector('#textarea-update-value') || {};
    const orgVal = textareaUpdateValue?.value || '';
    const newVal = 'New value updated';

    // Update value
    btnUpdateValue?.addEventListener('click', () => {
      textareaUpdateValue.value = newVal;
    });

    // Reset value
    btnResetValue?.addEventListener('click', () => {
      textareaUpdateValue.value = orgVal;
    });

    const btnEnable = document.querySelector('#btn-textarea-enable');
    const btnDisable = document.querySelector('#btn-textarea-disable');
    const btnReadonly = document.querySelector('#btn-textarea-readonly');
    const textareaToggleState: any = document.querySelector('#textarea-toggle-state') || {};

    // Enable
    btnEnable?.addEventListener('click', () => {
      textareaToggleState.disabled = false;
      textareaToggleState.readonly = false;
    });

    // Disable
    btnDisable?.addEventListener('click', () => {
      textareaToggleState.disabled = true;
    });

    // Readonly
    btnReadonly?.addEventListener('click', () => {
      textareaToggleState.readonly = true;
    });
  });
</script>

<ids-layout-grid cols="3" gap="md">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">Ids Textarea (Imported into Svelte)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid cols="3" gap="md">
  <ids-layout-grid-cell>
    <ids-textarea label="Basic"></ids-textarea>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-textarea label="Disabled" disabled="true">Line One</ids-textarea>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-textarea label="Readonly" readonly="true">Line One</ids-textarea>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-textarea label="Autoselect" autoselect="true">Text select on focus</ids-textarea>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-textarea label="Required" validate="required">I will show an error if you clear the value and tab out.</ids-textarea>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-textarea label="Dirty Tracking" dirty-tracker="true">I will show a dirty indicator if change me and tab out.</ids-textarea>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-textarea label="Resizable" resizable="true" placeholder="Type your notes here..."></ids-textarea>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-textarea label="Toggle State" id="textarea-toggle-state">Line One</ids-textarea>
    <ids-button id="btn-textarea-enable" appearance="secondary">
      <span>Enable</span>
    </ids-button>
    <ids-button id="btn-textarea-disable" appearance="secondary">
      <span>Disable</span>
    </ids-button>
    <ids-button id="btn-textarea-readonly" appearance="secondary">
      <span>Readonly</span>
    </ids-button>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-textarea label="Update Value" id="textarea-update-value">Line One</ids-textarea>
    <ids-button id="btn-textarea-update-value" appearance="secondary">
      <span>Update Value</span>
    </ids-button>
    <ids-button id="btn-textarea-reset-value" appearance="secondary">
      <span>Reset Value</span>
    </ids-button>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid cols="3" gap="md">
  <ids-layout-grid-cell>
    <ids-textarea label="Max Length" maxlength="90">12345</ids-textarea>
    <ids-textarea label="Max Length (Custom Text)" maxlength="90" char-max-text="This text cannot exceed {0} characters." char-remaining-text="You can type {0} more characters.">Line One</ids-textarea>
    <ids-textarea label="Auto Grow" autogrow="true" placeholder="Type your notes here..."></ids-textarea>
    <ids-textarea label="Auto Grow (Max Height)" autogrow="true" autogrow-max-height="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ids-textarea>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-textarea label="Clearable" clearable="true" placeholder="Clearable textarea..."></ids-textarea>
    <ids-textarea label="Rows" rows="15">Line One</ids-textarea>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-textarea label="Default align (left)">Default align</ids-textarea>
    <ids-textarea label="Left align" text-align="start">Left align</ids-textarea>
    <ids-textarea label="Center align" text-align="center">Center align</ids-textarea>
    <ids-textarea label="Right align" text-align="end">Right align</ids-textarea>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    <ids-textarea label="Small" size="sm" placeholder="Type your notes here..."></ids-textarea>
    <ids-textarea label="Medium" size="md" placeholder="Type your notes here..."></ids-textarea>
    <ids-textarea label="Large" size="lg" placeholder="Type your notes here..."></ids-textarea>
    <ids-textarea label="Full" size="full" placeholder="Type your notes here..."></ids-textarea>
  </ids-layout-grid-cell>
</ids-layout-grid>