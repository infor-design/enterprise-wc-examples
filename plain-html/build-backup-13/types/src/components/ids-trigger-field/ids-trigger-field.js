var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { attributes } from '../../core/ids-attributes';
import { customElement, scss } from '../../core/ids-decorators';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
import { stripHTML } from '../../utils/ids-xss-utils/ids-xss-utils';
import Base from './ids-trigger-field-base';
import './ids-trigger-button';
import styles from './ids-trigger-field.scss';
/**
 * IDS Trigger Field Component
 * @type {IdsTriggerField}
 * @inherits IdsInput
 * @part field - the field container
 * @part content - the content with trigger buttons and input element
 */
let IdsTriggerField = class IdsTriggerField extends Base {
    /**
     * Call the constructor and then initialize
     */
    constructor() {
        super();
    }
    /**
     * Get a list of element dependencies for this component
     * @returns {object} of elements
     */
    get elements() {
        return {
            content: this.container?.querySelector('.ids-trigger-field-content'),
            label: this.container?.querySelector('label'),
            text: this.container?.querySelector('ids-text'),
        };
    }
    /**
     * Custom Element `connectedCallback` implementation
     * @returns {void}
     */
    connectedCallback() {
        super.connectedCallback();
        this.#attachTriggerButtonEvents();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.FORMAT,
            attributes.TABBABLE
        ];
    }
    /**
     * Push color variant to the container element
     * @returns {void}
     */
    onColorVariantRefresh() {
        this.buttons.forEach((btn) => { btn.colorVariant = this.colorVariant; });
    }
    /**
     * Creates the Template for rendering an IdsTriggerField's contents
     * @returns {string} containing the template
     */
    template() {
        this.templateHostAttributes();
        const { ariaLabel, containerClass, inputClass, inputState, labelHtml, placeholder, type, value } = this.templateVariables();
        return `<div class="ids-trigger-field ${containerClass}" part="container">
      ${labelHtml}
      <div class="field-container" part="field-container">
        <slot name="trigger-start"></slot>
        <slot class="content-area" part="content-area"></slot>
        <input
          part="input"
          id="${this.id}-input"
          ${type}${inputClass}${placeholder}${inputState}
          ${ariaLabel}
          ${value}
          ></input>
        <slot name="trigger-end"></slot>
      </div>
      ${this.autocomplete ? `
        <ids-popup
          type="dropdown"
          align="bottom, left"
          align-target="#${this.id}-input"
          part="popup"
        >
          <ids-list-box slot="content" size="${this.size}"></ids-list-box>
        </ids-popup>` : ''}
    </div>`;
    }
    /**
     * @readonly
     * @returns {Array<HTMLElement>} containing references to slotted IdsTriggerButtons on this component
     */
    get buttons() {
        return [...this.querySelectorAll('ids-trigger-button')];
    }
    /**
     * @param {boolean | string} value true if this trigger field's buttons should be made accessible using the tab key
     */
    set tabbable(value) {
        const newValue = stringToBool(value);
        if (newValue) {
            this.setAttribute(attributes.TABBABLE, `${stripHTML(`${value}`)}`);
        }
        else {
            this.removeAttribute(attributes.TABBABLE);
        }
        this.buttons.forEach((button) => {
            button.tabbable = newValue;
        });
    }
    /**
     * @returns {boolean} true if this trigger field's buttons are accessible using the tab key
     */
    get tabbable() {
        return stringToBool(this.getAttribute(attributes.TABBABLE));
    }
    /**
     * Sets the disabled attribute
     * @param {boolean | string} d string value from the disabled attribute
     */
    set disabled(d) {
        super.disabled = d;
        if (stringToBool(d)) {
            this.readonly = false;
            super.readonly = false;
            this.buttons.forEach((btn) => {
                btn.setAttribute(attributes.DISABLED, '');
                btn.readonly = false;
            });
        }
        else {
            this.buttons.forEach((btn) => {
                btn.removeAttribute(attributes.DISABLED);
            });
        }
    }
    get disabled() {
        return super.disabled;
    }
    /**
     * Sets the readonly attribute
     * @param {string} r string value from the read only attribute
     */
    set readonly(r) {
        super.readonly = r;
        if (stringToBool(r)) {
            this.buttons.forEach((btn) => {
                btn.setAttribute(attributes.READONLY, '');
                btn.removeAttribute(attributes.DISABLED);
            });
        }
        else {
            this.buttons.forEach((btn) => {
                btn.removeAttribute(attributes.READONLY);
            });
        }
    }
    get readonly() {
        return super.readonly;
    }
    /**
     * Set format for date, time
     * @param {string} val date, time format
     */
    set format(val) {
        if (val) {
            this.setAttribute(attributes.FORMAT, val);
        }
        else {
            this.removeAttribute(attributes.FORMAT);
        }
    }
    /**
     * Return format
     * @returns {string} return date format
     */
    get format() {
        return this.getAttribute(attributes.FORMAT);
    }
    /**
     * Establish Internal Event Handlers
     * @private
     */
    #attachTriggerButtonEvents() {
        this.onEvent('click.trigger-button', this, (e) => {
            const btn = e.target;
            if (btn)
                this.trigger();
        });
    }
    /**
     * Updates trigger buttons when the trigger field's fieldHeight property is updated
     * @param {string} val the new field height setting
     */
    onFieldHeightChange(val) {
        this.buttons.forEach((btn) => {
            if (val) {
                const attr = val === 'compact' ? { name: 'compact', val: '' } : { name: 'field-height', val };
                btn.setAttribute(attr.name, attr.val);
            }
            else {
                btn.removeAttribute('compact');
                btn.removeAttribute('field-height');
            }
        });
    }
    /**
     * Fire the trigger event and action.
     */
    trigger() {
        let canTrigger = true;
        const response = (veto) => {
            canTrigger = !!veto;
        };
        this.triggerEvent('beforetriggerclicked', this, { detail: { elem: this, response } });
        if (!canTrigger) {
            return;
        }
        this.triggerEvent('triggerclicked', this, { detail: { elem: this } });
    }
};
IdsTriggerField = __decorate([
    customElement('ids-trigger-field'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsTriggerField);
export default IdsTriggerField;
//# sourceMappingURL=ids-trigger-field.js.map