import IdsInput from '../ids-input/ids-input';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
const applySettings = (elem, settings) => {
    // eslint-disable-next-line guard-for-in
    for (const setting in settings) {
        elem[setting] = settings[setting];
    }
};
export class InputEditor {
    /** The type of editor (i.e. input, dropdown, checkbox ect) */
    type = 'input';
    /** Holds the Editor */
    input;
    /**
     * Create an input and set the value and focus states
     * @param {IdsDataGridCell} cell the cell element
     */
    init(cell) {
        const isInline = cell?.column.editor?.inline;
        this.input = document.createElement('ids-input');
        this.input.colorVariant = isInline ? 'in-cell' : 'borderless';
        this.input.size = isInline ? 'full' : '';
        this.input.fieldHeight = String(cell?.dataGrid?.rowHeight);
        this.input.labelState = 'collapsed';
        // Clear cell and set value
        const value = cell?.innerText;
        cell.innerHTML = '';
        cell?.appendChild(this.input);
        this.input.value = value;
        if (this.input instanceof IdsInput && cell) {
            if (!isInline)
                this.input.shadowRoot?.querySelector('input')?.style.setProperty('width', `${cell.offsetWidth - 5}px`);
            applySettings(this.input, cell?.column.editor?.editorSettings);
        }
        this.input.focus();
    }
    /* Transform the value */
    save() {
        return { value: this.input?.value };
    }
    /* Destroy the editor */
    destroy() {
        this.input = undefined;
    }
}
export class CheckboxEditor {
    /** The type of editor (i.e. input, dropdown, checkbox ect) */
    type = 'checkbox';
    /** Holds the Editor */
    input;
    /** Indicates if keyboard was used to init the editor */
    isClick;
    /**
     * Create an input and set the value and focus states
     * @param {IdsDataGridCell} cell the cell element
     */
    init(cell) {
        // const isInline = cell?.column.editor?.inline;
        this.input = document.createElement('ids-checkbox');
        // Clear cell and set value
        const value = stringToBool(cell?.querySelector('[aria-checked]')?.getAttribute('aria-checked'));
        cell.innerHTML = '';
        if (!this.isClick)
            this.input.noAnimation = true;
        this.input.checked = this.isClick ? !value : value;
        cell?.appendChild(this.input);
        this.input.focus();
        if (this.isClick) {
            requestAnimationFrame(() => {
                cell?.endCellEdit();
                cell?.focus();
            });
        }
    }
    /* Transform the value */
    save() {
        return { value: this.input?.checked };
    }
    /* Destroy the editor */
    destroy() {
        this.input?.offEvent('keydown');
        this.input = undefined;
    }
}
export class DropdownEditor {
    /** The type of editor (i.e. input, dropdown, checkbox ect) */
    type = 'dropdown';
    /** Holds the Editor */
    input;
    /** Cache dropdown value */
    #value;
    /** Callback reference to handle blur event propagation */
    #stopPropagationCb = this.stopPropagation.bind(this);
    /** Indicates if keyboard was used to init the editor */
    isClick;
    init(cell) {
        this.#value = cell?.querySelector('[data-value]')?.getAttribute('data-value') ?? null;
        const isInline = cell?.column.editor?.inline;
        const settings = { ...cell?.column?.editor?.editorSettings };
        const dataset = settings?.options ?? [];
        this.input = document.createElement('ids-dropdown');
        this.input.insertAdjacentHTML('beforeend', '<ids-list-box></ids-list-box>');
        this.input.loadDataSet(dataset);
        // apply user settings
        delete settings.options;
        applySettings(this.input, settings);
        this.input.typeahead = false;
        cell.innerHTML = '';
        cell.appendChild(this.input);
        this.input.value = this.#value;
        this.input.size = 'full';
        this.input.labelState = 'collapsed';
        this.input.colorVariant = isInline ? 'in-cell' : 'borderless';
        this.input.fieldHeight = String(cell?.dataGrid?.rowHeight);
        this.input.container?.querySelector('ids-trigger-field')?.focus();
        this.#attchEventListeners();
        this.input.open();
    }
    /**
     * Overrides data grid cell's focusout event handling
     * @param {FocusEvent} evt focus event
     */
    stopPropagation(evt) {
        const tagName = evt.relatedTarget instanceof HTMLElement ? evt.relatedTarget.tagName : evt.relatedTarget;
        if (tagName === 'IDS-DROPDOWN' || tagName === 'IDS-LIST-BOX-OPTION') {
            evt.stopPropagation();
            evt.stopImmediatePropagation();
        }
    }
    /**
     * Attach dropdown event handlers
     */
    #attchEventListeners() {
        this.input?.onEvent('change', this.input, (evt) => { this.#value = evt.detail.value; });
        this.input?.onEvent('focusout', this.input, this.#stopPropagationCb);
    }
    /* Save selected dropdown value */
    save() {
        return { value: this.#value, dirtyCheckValue: this.input?.input?.value };
    }
    /**
     * Destroy dropdown editor
     */
    destroy() {
        this.input?.offEvent('change');
        this.input?.offEvent('focusout', this.input, this.#stopPropagationCb);
        this.#value = undefined;
    }
}
export const editors = [];
editors.push({
    type: 'input',
    editor: new InputEditor()
});
editors.push({
    type: 'checkbox',
    editor: new CheckboxEditor()
});
editors.push({
    type: 'dropdown',
    editor: new DropdownEditor()
});
//# sourceMappingURL=ids-data-grid-editors.js.map