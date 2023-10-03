<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-alert/ids-alert');
  });
</script>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">Alerts (Imported into Svelte)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>
<ids-layout-grid auto-fit="true" id="ids-alert-list" gap="md">
  <ids-layout-grid-cell><ids-alert icon="alert"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="success"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="empty-circle"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="half-empty-circle"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="error"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="info"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="alert"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="new"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="in-progress"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="error"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="success-solid"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="alert-solid"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="error-solid"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="info-solid"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="alert-solid"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="new-solid"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="in-progress-solid"></ids-alert></ids-layout-grid-cell>
  <ids-layout-grid-cell><ids-alert icon="info-field-solid"></ids-alert></ids-layout-grid-cell>
</ids-layout-grid>