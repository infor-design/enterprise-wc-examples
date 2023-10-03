<script lang="ts">
  import { onMount } from 'svelte';
  import DynamicIdsButton from '../../../components/ids-button/DynamicIdsButton.svelte';

  let ref: DynamicIdsButton;
  let text: 'My default button';
  let type: 'default';

  const types = [
    '',
    'primary',
    'secondary',
    'tertiary'
  ];

  const colorVariants = [
    '',
    'alternate'
  ];

  const setRefs = () => {
    ref.colorVariant = colorVariants[Math.floor(Math.random() * 2)];
    ref.type = types[Math.floor(Math.random() * 4)];
    
    const colorVariantStatus = !ref.colorVariant.length ? ' normal' : ` ${ref.colorVariant}`;
    const typeStatus = !ref.type.length ? ' default' : ` ${ref.type}`;

    ref.text = `My${typeStatus}${colorVariantStatus} button`;
  }

  onMount(() => {
    setRefs();
  });

  const handleClick = (e: Event): any => {
    console.log('IdsButton click event occured');
    setRefs();
  }
</script>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">IdsButton (Svelte Component)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto-fit="true" padding="md">
  <ids-layout-grid-cell>
    {#if ref}
      {@debug ref}
    {/if}

    <DynamicIdsButton
      {text}
      {type}
      bind:this={ref}
      on:click={handleClick}></DynamicIdsButton>
  </ids-layout-grid-cell>
</ids-layout-grid>