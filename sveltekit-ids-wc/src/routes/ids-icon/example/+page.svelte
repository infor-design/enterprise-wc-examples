<script lang="ts">
  import { onMount } from 'svelte';

  const iconData = [
    'alert-solid',
    'back-color',
    'filter',
    'settings',
    'update-preview'
  ];

  const emptyMessageIconData = [
    'empty-error-loading',
    'empty-generic',
    'empty-new-project'
  ];

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-icon/ids-icon');
  });
</script>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Icons</ids-text>
</ids-layout-grid>
<ids-layout-grid class="ids-icon-list" auto="true" gap="md">
  {#each iconData as icon}
    <span class="ids-icon-container">
      <ids-text font-size="10">icon-{icon}</ids-text>
      <br />
      <ids-icon icon={icon} size="large"></ids-icon>
      <ids-icon icon={icon}></ids-icon>
      <ids-icon icon={icon} size="xsmall"></ids-icon>
    </span>
  {/each}
</ids-layout-grid>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Empty Message Icons</ids-text>
</ids-layout-grid>
<ids-layout-grid class="ids-empty-icon-list" auto="true" gap="md">
  {#each emptyMessageIconData as icon}
    <span class="ids-icon-container">
      <ids-text font-size="10">icon-{icon}</ids-text>
      <br />
      <ids-icon icon={icon} height="80" width="80" viewBox="0 0 80 80"></ids-icon>
    </span>
  {/each}
</ids-layout-grid>