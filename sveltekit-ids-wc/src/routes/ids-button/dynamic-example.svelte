<script lang="ts">
  import { onMount } from 'svelte';

  import IdsButton from '../../components/ids-button/IdsButton.svelte';

  let ref: IdsButton;
  let text: 'My default button';
  let type: 'default';
  let colorVariant: '';

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

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">IdsButton (Svelte Component)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    {#if ref}
      {@debug ref}
    {/if}

    <IdsButton
      {text}
      {type}
      bind:this={ref}
      on:click={handleClick}></IdsButton>
  </ids-layout-grid-cell>
</ids-layout-grid>