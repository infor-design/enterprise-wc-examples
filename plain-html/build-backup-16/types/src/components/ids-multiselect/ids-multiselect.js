var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, scss } from '../../core/ids-decorators';
import { attributes } from '../../core/ids-attributes';
import '../ids-checkbox/ids-checkbox';
import '../ids-dropdown/ids-dropdown';
import Base from './ids-multiselect-base';
import '../ids-tag/ids-tag';
import '../ids-text/ids-text';
// Import Sass to be encapsulated in the component shadowRoot
import styles from './ids-multiselect.scss';
import { stringToBool, stringToNumber, buildClassAttrib } from '../../utils/ids-string-utils/ids-string-utils';
/**
 * IDS Multiselect Component
 * @type {IdsMultiselect}
 * @inherits IdsDropdown
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part container - the container element
 */
let IdsMultiselect = class IdsMultiselect extends Base {
    constructor() {
        super();
    }
    /**
     * Invoked each time the custom element is add into a document-connected element
     */
    connectedCallback() {
        super.connectedCallback();
        this.resetDirtyTracker();
        this.#attachKeyboardListeners();
        this.#setOptionsData();
        this.#populateSelected();
    }
    #selectedList = [];
    #optionsData = [];
    /**
     * Return the attributes we handle as getters and setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.TAGS,
            attributes.MAX
        ];
    }
    /**
     * Sets the disabled attribute
     * @param {string|boolean} value string value from the disabled attribute
     */
    set disabled(value) {
        if (this.tags) {
            this.input?.querySelectorAll('ids-tag')?.forEach((element) => {
                element.setAttribute('disabled', 'true');
            });
        }
        super.disabled = value;
    }
    /**
     * Gets the value of the disabled property
     * @returns {boolean} a boolean indicating the elements disabled status
     */
    get disabled() {
        return super.disabled;
    }
    /**
     * Sets the tags attribute which determines if selected options are displayed as tags
     * @param {string|boolean} value string or boolean that sets the use of tag attribute
     */
    set tags(value) {
        const valueSafe = stringToBool(value);
        if (valueSafe !== this.tags) {
            if (valueSafe) {
                this.setAttribute(attributes.TAGS, 'true');
            }
            else {
                this.offEvent('beforetagremove.multiselect-tag');
                this.setAttribute(attributes.TAGS, 'false');
            }
        }
    }
    /**
     * returns whether the multiselect is set to display selections as tags
     * @returns {boolean} a boolean indicating tags setting
     */
    get tags() {
        return stringToBool(this.getAttribute(attributes.TAGS));
    }
    /**
     * sets the max possible selections for multiselect
     * @param {string|number} value the max number of selections allowed
     */
    set max(value) {
        const valueSafe = stringToNumber(value);
        if (valueSafe !== this.max) {
            if (valueSafe) {
                this.setAttribute(attributes.MAX, value);
            }
            else {
                this.removeAttribute(attributes.MAX);
            }
        }
    }
    /**
     * returns the maximum number of allowed selections
     * @returns {number} the maximum number of selectable options
     */
    get max() {
        return stringToNumber(this.getAttribute(attributes.MAX));
    }
    /**
     * Set the selected values of the multiselect using the provided array
     * @param {Array} value the array of values to set as selected
     */
    set value(value) {
        let matched = true;
        if (!value) {
            return;
        }
        value.forEach((selectedValue) => {
            const existingOption = this.querySelector(`ids-list-box-option[value="${selectedValue}"]`);
            if (!existingOption) {
                matched = false;
            }
        });
        if (!matched) {
            return;
        }
        this.#selectedList = value;
        this.container.value = '';
        this.#updateDisplay();
        this.#updateList();
        // Send the change event
        if (this.value === value) {
            this.triggerEvent('change', this, {
                bubbles: true,
                detail: {
                    elem: this,
                    value: this.value
                }
            });
        }
        this.#selectedList = value;
        this.container?.classList.toggle('has-value', value.length > 0);
    }
    /**
     * returns an array of the values that have been selected
     * @returns {Array} the array of values
     */
    get value() { return this.#selectedList; }
    /**
     * Rewriting dropdown click events
     */
    attachClickEvent() {
        this.offEvent('click.multiselect-list-box');
        this.onEvent('click.multiselect-list-box', this.listBox, (e) => {
            e.preventDefault();
            const option = e.target.nodeName === 'IDS-LIST-BOX-OPTION'
                || e.target.closest('ids-list-box-option')
                ? e.target.closest('ids-list-box-option') ?? e.target
                : null;
            this.#optionChecked(option);
        });
        this.offEvent('click.multiselect-input');
        this.onEvent('click.multiselect-input', this.input?.fieldContainer, (e) => {
            // Don't open/close popup on tag removal
            if (!e.target?.closest('ids-tag')) {
                this.toggle();
            }
        });
        // Should not open if clicked on label
        this.offEvent('click.multiselect-label');
        this.onEvent('click.multiselect-label', this.labelEl, (e) => {
            e.preventDefault();
            this.input?.focus();
        });
        this.offEvent('click.multiselect-trigger');
        this.onEvent('click.multiselect-trigger', this.trigger, (e) => {
            e.stopPropagation();
            this.toggle();
        });
        if (this.tags) {
            this.offEvent('beforetagremove.multiselect-tag');
            this.onEvent('beforetagremove.multiselect-tag', this.input, (e) => {
                this.#handleTagRemove(e);
            });
        }
    }
    /**
     * Establish Internal Keyboard shortcuts
     * @returns {object} This API object for chaining
     */
    #attachKeyboardListeners() {
        this.listen([' ', 'Enter'], this, () => {
            if (!this.popup?.visible) {
                this.open();
                return;
            }
            this.#optionChecked(this.selected);
        });
        return this;
    }
    /**
     * Close the dropdown popup
     * Rewriting it to add multiselect value update
     * @param {boolean} noFocus if true do not focus on close
     */
    close(noFocus) {
        if (this.popup && this.input) {
            this.popup.visible = false;
            this.input.active = false;
        }
        this.setAttribute('aria-expanded', 'false');
        this.listBox?.removeAttribute('tabindex');
        if (this.selected) {
            this.deselectOption(this.selected);
        }
        this.removeOpenEvents();
        if (!noFocus) {
            this.input?.focus();
        }
        this.value = this.#selectedList;
        this.container?.classList.remove('is-open');
    }
    /**
     * Triggers when dismissible tag is removed
     * @param {MouseEvent} e click event
     */
    #handleTagRemove(e) {
        this.value = this.#selectedList.filter((value) => value !== e.target?.dataset.value);
        this.popup?.place();
    }
    /**
     * Check option checkbox and update selected list
     * @param {HTMLElement} option selected ids-list-box-option element
     */
    #optionChecked(option) {
        if (!option || option?.hasAttribute(attributes.GROUP_LABEL))
            return;
        const value = option.getAttribute('value');
        const isSelected = this.#selectedList.some((item) => value === item);
        const checkbox = option.querySelector('ids-checkbox');
        const canSelect = this.max !== this.value.length;
        if (isSelected || canSelect) {
            this.#selectedList = isSelected
                ? this.#selectedList.filter((item) => item !== value)
                : [...this.#selectedList, value];
            if (checkbox) {
                checkbox.checked = !isSelected;
            }
            if (this.tags) {
                this.#updateDisplay();
                this.popup?.place();
                this.container?.classList.toggle('has-value', this.#selectedList.length > 0);
            }
        }
        this.clearSelected();
        this.selectOption(option);
    }
    /**
     * Update value in the input visually
     */
    #updateDisplay() {
        const selected = this.#optionsData.filter((item) => this.#selectedList.includes(item.value));
        const newValue = selected.map((item) => item.label).join(', ');
        // Clear tags/text before rerender
        this.input?.querySelectorAll('ids-tag').forEach((item) => item.remove());
        this.input?.querySelector('ids-text')?.remove();
        if (this.tags) {
            const tags = selected.map((item) => {
                const disabled = this.disabled ? ` disabled="true"` : ``;
                return `<ids-tag
          class="multiselect-tag"
          data-value="${item.value}"
          dismissible="true"
          ${disabled}
        >${item.label}</ids-tag>`;
            }).join('');
            this.input?.insertAdjacentHTML('afterbegin', tags);
        }
        else {
            this.input?.insertAdjacentHTML('afterbegin', `<ids-text overflow="ellipsis" tooltip="true">${newValue}</ids-text>`);
            const text = this.input?.querySelector('ids-text');
            const fieldContainer = this.input?.fieldContainer;
            // Adjust settings for the tooltip
            if (text?.beforeTooltipShow) {
                text.beforeTooltipShow = (tooltip) => {
                    tooltip.popup.align = 'top, left';
                    tooltip.popup.alignTarget = fieldContainer;
                    tooltip.target = fieldContainer;
                    tooltip.popup.style?.setProperty('text-align', 'center');
                    if (fieldContainer?.clientWidth) {
                        tooltip.popup.width = `${fieldContainer.clientWidth - 14}px`;
                    }
                };
            }
        }
        if (this.input)
            this.input.value = newValue;
    }
    /**
     * Render dropdown list with selected options on top
     */
    #updateList() {
        if (!this.listBox)
            return;
        const selected = this.#optionsData.filter((item) => this.#selectedList.includes(item.value))
            .map((item) => ({
            ...item,
            selected: true
        }));
        const options = this.#optionsData.filter((item) => !this.#selectedList.includes(item.value))
            .map((item, index) => ({
            ...item,
            border: index === 0 && selected.length !== 0,
            selected: false
        }))
            .sort((first, second) => first.index - second.index);
        this.listBox.innerHTML = '';
        const html = [...selected, ...options]
            // Exclude empty groups
            .filter((option, index, list) => {
            const emptyGroup = option.groupLabel && (list[index + 1]?.groupLabel || !list[index + 1]);
            return !emptyGroup;
        })
            .map((option) => this.#templatelistBoxOption(option))
            .join('');
        this.listBox.insertAdjacentHTML('afterbegin', html);
    }
    /**
     * Create the list box option template.
     * @param {IdsDropdownOption} option id, value, label object
     * @returns {string} ids-list-box-option template
     */
    #templatelistBoxOption(option) {
        const classAttr = buildClassAttrib(!option.groupLabel && 'multiselect-option', option.border && 'multiselect-border');
        return `
      <ids-list-box-option
        ${classAttr}
        ${option.id ? `id=${option.id}` : ''}
        ${option.value ? `value="${option.value}"` : ''}
        ${option.groupLabel ? 'group-label' : ''}
      >${option.icon ? `<ids-icon icon="${option.icon}"></ids-icon>` : ''}${!option.groupLabel ? `
        <ids-checkbox
          no-margin
          class="justify-center multiselect-checkbox"
          label="${option.label}"
          checked="${option.selected}"
        ></ids-checkbox>
      ` : option.label}</ids-list-box-option>`;
    }
    /**
     * Update options list on the component mount with classes/attributes
     */
    #populateSelected() {
        this.options.forEach((item) => {
            const checkbox = item.querySelector('ids-checkbox');
            if (item.hasAttribute('selected')) {
                this.#selectedList.push(item.getAttribute('value'));
                if (checkbox) {
                    checkbox.checked = true;
                }
            }
            checkbox?.setAttribute('no-margin', '');
            checkbox?.classList.add('justify-center', 'multiselect-checkbox');
            item.classList.add('multiselect-option');
        });
        this.value = this.#selectedList;
    }
    /**
     * Map slotted ids-list-box-option elements to the dataset
     */
    #setOptionsData() {
        this.#optionsData = [...this.options].map((item, index) => ({
            id: item?.id,
            label: item?.textContent?.trim() || item?.querySelector('ids-checkbox')?.label || '',
            value: item?.getAttribute(attributes.VALUE) ?? '',
            groupLabel: item?.hasAttribute(attributes.GROUP_LABEL),
            selected: item?.hasAttribute('selected'),
            icon: item?.querySelector('ids-icon')?.icon,
            index
        }));
    }
};
IdsMultiselect = __decorate([
    customElement('ids-multiselect'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsMultiselect);
export default IdsMultiselect;
//# sourceMappingURL=ids-multiselect.js.map