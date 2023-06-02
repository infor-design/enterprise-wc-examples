<script lang="ts">
  import DynamicIdsCheckbox from '../../../components/ids-checkbox/DynamicIdsCheckbox.svelte';
  import type IdsCheckbox from 'ids-enterprise-wc/components/ids-checkbox/ids-checkbox';

  let ref: DynamicIdsCheckbox;

  const colors = [
    { id: 'azure07', name: 'AZURE' }, 
    { id: 'emerald07', name: 'EMERALD' },
    { id: 'ruby07', name: 'RUBY' }, 
    { id: 'amber07', name: 'AMBER' }, 
    { id: 'amethyst07', name: 'AMETHYST' },
    { id: 'turquoise07', name: 'TURQUOISE' }
  ];

  const handleChange = (e: Event): void => {
    const target = (e.target as unknown as IdsCheckbox);
    if (target) {
      console.log('IdsCheckbox change event occured: ', target.checked ? 'checked' : 'unchecked');
      const colorDef = colors[Math.floor(Math.random() * 6)];
      ref.color = colorDef.id;
      ref.label = `My ${colorDef.name} checkbox`;
    }
  }
</script>

<ids-layout-grid auto-fit="true">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">IdsCheckbox (Svelte Component)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto-fit="true">
  <ids-layout-grid-cell>
    <DynamicIdsCheckbox 
      label="My GREEN checkbox"
      bind:this={ref}
      on:change={handleChange}></DynamicIdsCheckbox>
  </ids-layout-grid-cell>
</ids-layout-grid>