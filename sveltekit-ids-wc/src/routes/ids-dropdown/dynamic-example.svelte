<script lang="ts">
  import { onMount } from 'svelte';
  import { dropdownStatesStore } from './dynamic-example.stores'; 

  import IdsDropdown from '../../components/ids-dropdown/IdsDropdown.svelte';
  import IdsListBox from '../../components/ids-list-box/IdsListBox.svelte';
  import IdsListBoxOption from '../../components/ids-list-box/IdsListBoxOption.svelte';

  let ref: IdsDropdown;

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
    <IdsDropdown bind:this={ref} label="My Dropdown">
      <IdsListBox>
        {#each $dropdownStatesStore as state}
          <IdsListBoxOption id={state.id} value={state.id}>{state.name}</IdsListBoxOption>
        {/each}
      </IdsListBox>
    </IdsDropdown>
  </ids-layout-grid-cell>
</ids-layout-grid>