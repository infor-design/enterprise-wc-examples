<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-color/ids-color');
  });
</script>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Color Swatch</ids-text>
</ids-layout-grid>

<ids-layout-grid>
  <ids-color hex=""></ids-color>
  <ids-color hex="#000000"></ids-color>
  <ids-color hex="#C2A1F1" class="light" checked></ids-color>
  <ids-color hex="#3B1470" class="dark" checked></ids-color>
</ids-layout-grid>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Color Swatch Outlined</ids-text>
</ids-layout-grid>

<ids-layout-grid>
  <ids-color hex="" class="outlined"></ids-color>
  <ids-color hex="#000000" class="outlined"></ids-color>
  <ids-color hex="#C2A1F1" class="outlined light" checked></ids-color>
  <ids-color hex="#3B1470" class="outlined dark" checked></ids-color>
</ids-layout-grid>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Disabled Color Swatch with Tooltip</ids-text>
</ids-layout-grid>

<ids-layout-grid>
  <ids-color hex="" tooltip="black" disabled></ids-color>
  <ids-color hex="#000000" tooltip="black" disabled></ids-color>
  <ids-color hex="#C2A1F1" tooltip="black" class="light" disabled checked></ids-color>
  <ids-color hex="#3B1470" tooltip="black" class="dark" disabled checked></ids-color>
</ids-layout-grid>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Color Swatch with Tooltip</ids-text>
</ids-layout-grid>

<ids-layout-grid>
  <ids-color hex="" tooltip="black"></ids-color>
  <ids-color hex="#000000" tooltip="black"></ids-color>
  <ids-color hex="#C2A1F1" tooltip="black" class="light" checked></ids-color>
  <ids-color hex="#3B1470" tooltip="black" class="dark" checked></ids-color>
</ids-layout-grid>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Outlined Color Swatch with Tooltip</ids-text>
</ids-layout-grid>

<ids-layout-grid>
  <ids-color hex="" tooltip="black" class="outlined"></ids-color>
  <ids-color hex="#000000" tooltip="black" class="outlined"></ids-color>
  <ids-color hex="#C2A1F1" tooltip="black" class="outlined light" checked></ids-color>
  <ids-color hex="#3B1470" tooltip="black" class="outlined dark" checked></ids-color>
</ids-layout-grid>


<!-- Color Picker Sizes -->
<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Color Swatch - Extra Small</ids-text>
</ids-layout-grid>

<ids-layout-grid>
  <ids-color hex="" class="outlined" size="xs"></ids-color>
  <ids-color hex="#941E1E" class="outlined" size="xs"></ids-color>
  <ids-color hex="#C2A1F1" class="outlined light" checked size="xs"></ids-color>
  <ids-color hex="#3B1470" class="outlined dark" checked size="xs"></ids-color>
</ids-layout-grid>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Color Swatch - Small</ids-text>
</ids-layout-grid>

<ids-layout-grid>
  <ids-color hex="" class="outlined" size="sm"></ids-color>
  <ids-color hex="#941E1E" class="outlined" size="sm"></ids-color>
  <ids-color hex="#C2A1F1" class="outlined light" checked size="sm"></ids-color>
  <ids-color hex="#3B1470" class="outlined dark" checked size="sm"></ids-color>
</ids-layout-grid>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Color Swatch - Small-Medium</ids-text>
</ids-layout-grid>

<ids-layout-grid>
  <ids-color hex="" class="outlined" size="mm"></ids-color>
  <ids-color hex="#941E1E" class="outlined" size="mm"></ids-color>
  <ids-color hex="#C2A1F1" class="outlined light" checked size="mm"></ids-color>
  <ids-color hex="#3B1470" class="outlined dark" checked size="mm"></ids-color>
</ids-layout-grid>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Color Swatch - Medium</ids-text>
</ids-layout-grid>

<ids-layout-grid>
  <ids-color hex="" class="outlined" size="md"></ids-color>
  <ids-color hex="#941E1E" class="outlined" size="md"></ids-color>
  <ids-color hex="#C2A1F1" class="outlined light" checked size="md"></ids-color>
  <ids-color hex="#3B1470" class="outlined dark" checked size="md"></ids-color>
</ids-layout-grid>

<ids-layout-grid auto-fit="true">
  <ids-text font-size="12" type="h1">Color Swatch - Large</ids-text>
</ids-layout-grid>

<ids-layout-grid>
  <ids-color hex="" class="outlined" size="lg"></ids-color>
  <ids-color hex="#941E1E" class="outlined" size="lg"></ids-color>
  <ids-color hex="#C2A1F1" class="outlined light" checked size="lg"></ids-color>
  <ids-color hex="#3B1470" class="outlined dark" checked size="lg"></ids-color>
</ids-layout-grid>