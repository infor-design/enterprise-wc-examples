<script lang="ts">
  import { onMount } from 'svelte';
  import { dropdownStatesStore } from './+page.server'; 

  import DynamicIdsDropdown from '../../../components/ids-dropdown/DynamicIdsDropdown.svelte';
  import DynamicIdsListBox from '../../../components/ids-list-box/DynamicIdsListBox.svelte';
  import DynamicIdsListBoxOption from '../../../components/ids-list-box/DynamicIdsListBoxOption.svelte';

  let ref: DynamicIdsDropdown;

  onMount(async () => {
    // Highlights "California" in the Listbox
    ref.value = $dropdownStatesStore[5].id;
  });
</script>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">IDS Dropdown (Imported into Svelte)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <DynamicIdsDropdown bind:this={ref} label="My Dropdown">
      <DynamicIdsListBox>
        {#each $dropdownStatesStore as state}
          <DynamicIdsListBoxOption id={state.id} value={state.id}>{state.name}</DynamicIdsListBoxOption>
        {/each}
      </DynamicIdsListBox>
    </DynamicIdsDropdown>
  </ids-layout-grid-cell>
</ids-layout-grid>