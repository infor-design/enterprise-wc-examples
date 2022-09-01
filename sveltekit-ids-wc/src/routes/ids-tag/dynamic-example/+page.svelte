<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  // Main Component
  import DynamicIdsTag from '../../../components/ids-tag/DynamicIdsTag.svelte';
  import type IdsTag from 'ids-enterprise-wc/components/ids-tag/ids-tag';
  import TAG_COLORS from '../../../components/ids-tag/colors';
  import { writableTagArray } from './+page';
  import type { TagStoreEntry } from './+page';
  import { dashCase, prettyFormat } from '../../../utils/string';

  // Supporting Components
  import DynamicIdsCheckbox from '../../../components/ids-checkbox/DynamicIdsCheckbox.svelte';
  import DynamicIdsDropdown from '../../../components/ids-dropdown/DynamicIdsDropdown.svelte';
  import DynamicIdsInput from '../../../components/ids-input/DynamicIdsInput.svelte';
  import DynamicIdsListBox from '../../../components/ids-list-box/DynamicIdsListBox.svelte';
  import DynamicIdsListBoxOption from '../../../components/ids-list-box/DynamicIdsListBoxOption.svelte';

  // `refs/selectedId/currentTag/currentTagStoreRecord` handle the target
  // of the form controls (either a new or existing tag)
  let refs: Array<DynamicIdsTag> = [];
  export let selectedId = -1;
  export let currentTag: IdsTag | null;
  export let currentTagRecord: TagStoreEntry | null;

  // Form Control Values
  export let text = 'This is a tag';
  export let color = TAG_COLORS[0].value;
  export let dismissible = true;
  export let clickable = true;

  // Adds the contents of the form as a new entry in the writable store.
  // This is automatically updated as new tag in the template below (see $writableTagArray) 
  const add = () => {
    writableTagArray.add({
      text,
      color,
      dismissible,
      clickable
    });
    deselect();
  };

  // Selects a tag by its ID
  const select = (id: number) => {
    const newRecord = $writableTagArray.find((item: TagStoreEntry) => { 
      return item.id === id;
    });
    if (newRecord) {
      currentTagRecord = newRecord;
      if (currentTag) {
        text = currentTag.textContent;
        color = currentTag.color || '';
        dismissible = currentTag.dismissible;
        clickable = currentTag.clickable;
      }
    }
  }

  const deselect = () => {
    currentTag = null;
    currentTagRecord = null;
    selectedId = -1;
  }

  // Resets the writeable store to have no contents, and clears the current tag
  const reset = () => {
    deselect();
    writableTagArray.reset();
    refs = [];
  }

  // Listens for the Svelte "Component Event" dispatched by the dynamic `<IdsTag>` svelte component
  const onBeforeTagRemove = (e: CustomEvent) => {
    const tagStoreId = parseInt(e.detail.nativeEvent.target.dataset.id);
    writableTagArray.remove(tagStoreId);
    deselect();
    console.log('svelte component\'s "beforetagremove" event captured');
  };

  // When clicking on an existing tag in the list, 
  // the form fields are updated to reflect its state.
  const setAsCurrentTag = (e: CustomEvent) => {
    // NOTE: `e.detail` is the Svelte Component's event detail, NOT the IDS component's.
    currentTag = e.detail.nativeEvent.target;
    if (currentTag) {
      selectedId = parseInt(currentTag.dataset.id);
      select(selectedId);
    }
  };

  // Runs on the <ids-input>'s 'input' event
  const handleInput = (e: CustomEvent) => {
    const inputEl = e.detail.nativeEvent.target;
    text = inputEl.value;
    return updateStoreValue(inputEl, 'text');
  }

  // Updates the writable tag array when a specified value changes
  const updateStoreValue = (targetEl: any, prop: string) => {
    let targetProp = 'value';
    if (['IDS-CHECKBOX', 'IDS-RADIO'].includes(targetEl.tagName)) {
      targetProp = 'checked';
    }

    if (selectedId > -1) {
      $writableTagArray = $writableTagArray.map((i: TagStoreEntry) => {
        if (i.id === selectedId) {
          if (targetEl[prop]) {
            i[prop] = targetEl[targetProp];
          }
        }
        return i;
      });
    }
  }

  const handleClickableChange = (e: Event) => {
    updateStoreValue(e.target, 'clickable')
  }

  const handleDismissibleChange = (e: Event) => {
    updateStoreValue(e.target, 'dismissible')
  }

  const handleTagColorChange = (e: Event) => {
    updateStoreValue(e.target, 'color');
  }

  // Makes the "Deselect" button in the template disabled/enabled based on whether or not a tag is selected
  $: hasNoCurrentTag = currentTag === null;

  // Lists all records in the writable store in an easily-read format
  $: tagStoreStringRecords = prettyFormat($writableTagArray); // prettyFormat($writableTagArray);
</script>

<style>
  /* 
  NOTE: these are not needed for the actual Tag component.
  These are only used for styling the block that displays the writable store,
  as well as the page controls
  */
  .pre {
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    white-space: pre;
  }

  .controls {
    margin-bottom: 20px;
  }
</style>

<ids-layout-grid auto="true">
  <ids-text font-size="12">Dynamic Tag (Svelte)</ids-text>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    {#if $writableTagArray.length > 0}
      {#each $writableTagArray as tag, i}
        <DynamicIdsTag
          bind:this={refs[i]}
          bind:id={tag.id}
          bind:text={tag.text}
          bind:color={tag.color}
          bind:dismissible={tag.dismissible}
          bind:clickable={tag.clickable}
          on:click={setAsCurrentTag}
          on:beforetagremove={onBeforeTagRemove} />
      {/each}
    {:else}
      <ids-text color="red">Use the form below to add a new tag</ids-text>
    {/if}
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid cols="2" auto="true">
  <ids-layout-grid-cell>
    <form class="controls">
      {#if selectedId > -1}
        <ids-text font-size="12">Update Dynamic Tag with ID "{selectedId}"</ids-text>
      {:else}
        <ids-text font-size="12">Create a New Dynamic Tag</ids-text>
      {/if}

      <p>
        <DynamicIdsInput
          label="Text Content"
          id="text-content"
          bind:value={text}
          on:input={handleInput}></DynamicIdsInput>
      </p>

      <p>
        <DynamicIdsDropdown id="style" bind:value={color} on:change={handleTagColorChange} label="Tag Color">
          <DynamicIdsListBox>
            {#each TAG_COLORS as option}
              <DynamicIdsListBoxOption id="color-{dashCase(option.name)}" value={option.value}>{option.name}</DynamicIdsListBoxOption>
            {/each}
          </DynamicIdsListBox>
        </DynamicIdsDropdown>
      </p>

      <p>
        <DynamicIdsCheckbox
          label="Make Clickable"
          id="use-clickable"
          bind:checked={clickable}
          on:change={handleClickableChange}></DynamicIdsCheckbox>
        <DynamicIdsCheckbox
          label="Make Dismissible"
          id="use-dismissible"
          bind:checked={dismissible}
          on:change={handleDismissibleChange}></DynamicIdsCheckbox>
      </p>

      <p>
        <ids-button id="add" type="secondary" on:click={add}>Add new tag</ids-button>
        <ids-button id="deselect"
          type="secondary"
          disabled={hasNoCurrentTag}
          on:click={deselect}>Deselect Current Tag</ids-button>
        <ids-button type="secondary" id="reset" on:click={reset}>Remove all tags</ids-button>
      </p>
    </form>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-layout-grid cols="2">
      <ids-layout-grid-cell>
        <ids-text font-size="12">Current Values in the Writable Store</ids-text>
        <code class="pre">{ tagStoreStringRecords }</code>
      </ids-layout-grid-cell>
      <ids-layout-grid-cell>
        <ids-text font-size="12">Store Value Representing Currently Selected Tag</ids-text>
        <code class="pre">{ prettyFormat(currentTagRecord) }</code>
      </ids-layout-grid-cell>
    </ids-layout-grid>
  </ids-layout-grid-cell>
</ids-layout-grid>