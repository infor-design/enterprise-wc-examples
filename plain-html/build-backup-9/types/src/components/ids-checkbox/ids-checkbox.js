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
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
import Base from './ids-checkbox-base';
import '../ids-text/ids-text';
import styles from './ids-checkbox.scss';
/**
 * IDS Checkbox Component
 * @type {IdsCheckbox}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsDirtyTrackerMixin
 * @mixes IdsHitboxMixin
 * @mixes IdsLabelStateMixin
 * @mixes IdsLocaleMixin
 * @mixes IdsThemeMixin
 * @mixes IdsValidationMixin
 * @part label - the label element
 * @part input - the checkbox input element
 * @part label-checkbox - the label text element
 */
let IdsCheckbox = class IdsCheckbox extends Base {
    /**
     * Call the constructor and then initialize
     */
    constructor() {
        super();
    }
    labelAudible;
    isFormComponent = true;
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.NO_ANIMATION,
            attributes.CHECKED,
            attributes.COLOR,
            attributes.DISABLED,
            attributes.HORIZONTAL,
            attributes.INDETERMINATE,
            attributes.VALUE,
            attributes.MODE
        ];
    }
    /**
     * Internal change event detection trigger.
     * @private
     * @type {boolean}
     */
    #triggeredChange = false;
    /**
     * Custom Element `connectedCallback` implementation
     * @returns {void}
     */
    connectedCallback() {
        super.connectedCallback();
        this.#attachEventHandlers();
        if (this.dirtyTracker) {
            this.handleDirtyTracker();
        }
    }
    /**
     * Create the Template for the contents.
     * @returns {string} The template.
     */
    template() {
        // Checkbox
        const color = this.color ? ` color="${this.color}"` : '';
        const audible = stringToBool(this.labelAudible) ? ' audible="true"' : '';
        const disabled = stringToBool(this.disabled) ? ' disabled' : '';
        const horizontal = stringToBool(this.horizontal) ? ' horizontal' : '';
        const checked = stringToBool(this.checked) ? ' checked' : '';
        const noAnimation = stringToBool(this.noAnimation) ? ' no-animation' : '';
        const rootClass = ` class="ids-checkbox${disabled}${horizontal}${noAnimation}"`;
        let checkboxClass = 'checkbox';
        checkboxClass += stringToBool(this.indeterminate) ? ' indeterminate' : '';
        checkboxClass = ` class="${checkboxClass}"`;
        const rInd = !(stringToBool(this.labelRequired) || this.labelRequired === null);
        const hiddenLabelCss = !this.label.length || this.labelState === 'hidden' ? ' empty' : '';
        const requiredLabelCss = rInd ? ' no-required-indicator' : '';
        return `
      <div${rootClass}${color} part="root">
        <label class="ids-label-text${requiredLabelCss}${hiddenLabelCss}" part="label">
          <input part="input" type="checkbox"${checkboxClass}${disabled}${checked}>
          <span class="checkmark${checked}" part="checkmark"></span>
          <ids-text${audible} class="label-checkbox" part="label-checkbox">${this.label}</ids-text>
        </label>
      </div>
    `;
    }
    /**
     * Attach checkbox change event
     * @private
     * @returns {void}
     */
    attachCheckboxChangeEvent() {
        this.onEvent('change', this.input, (e) => {
            this.indeterminate = false;
            this.#triggeredChange = true;
            this.checked = !!this.input?.checked;
            this.triggerEvent(e.type, this, {
                detail: {
                    elem: this,
                    nativeEvent: e,
                    value: this.value,
                    checked: this.input?.checked
                },
                bubbles: true
            });
        });
    }
    /**
     * Establish Internal Event Handlers
     * @private
     * @returns {void}
     */
    attachNativeEvents() {
        const events = ['focus', 'keydown', 'keypress', 'keyup', 'click', 'dbclick'];
        events.forEach((evt) => {
            this.onEvent(evt, this.input, (e) => {
                this.triggerEvent(e.type, this, {
                    detail: {
                        elem: this,
                        nativeEvent: e,
                        value: this.value,
                        checked: !!this.input?.checked
                    }
                });
            });
        });
    }
    /**
     * Handle events
     * @private
     * @returns {void}
     */
    #attachEventHandlers() {
        this.attachCheckboxChangeEvent();
        this.attachNativeEvents();
    }
    /**
     * @readonly
     * @returns {HTMLInputElement} the inner `input` element
     */
    get input() {
        return this.container?.querySelector('input[type="checkbox"]');
    }
    /**
     * @readonly
     * @returns {HTMLLabelElement} the inner `labelEl` element
     */
    get labelEl() {
        return this.container?.querySelector('label');
    }
    /**
     * Sets the checked state to true or false
     * @param {boolean|string} value If true will set `checked` attribute
     */
    set checked(value) {
        const val = stringToBool(value);
        const checkmark = this.shadowRoot?.querySelector('.checkmark');
        if (this.checked === val)
            return;
        if (val) {
            this.setAttribute(attributes.CHECKED, String(val));
            checkmark?.classList.add(attributes.CHECKED);
        }
        else {
            this.removeAttribute(attributes.CHECKED);
            checkmark?.classList.remove(attributes.CHECKED);
        }
        if (this.input)
            this.input.checked = val;
        if (!this.#triggeredChange && this.input) {
            this.triggerEvent('change', this.input, { bubbles: true });
        }
        this.#triggeredChange = false;
    }
    get checked() { return stringToBool(this.getAttribute(attributes.CHECKED)); }
    /**
     *  Sets the checkbox color to one of the colors in our color palette for example emerald07
     * @param {boolean|string} value If true will set `color` attribute
     */
    set color(value) {
        const rootEl = this.shadowRoot?.querySelector('.ids-checkbox');
        if (value) {
            this.setAttribute(attributes.COLOR, value.toString());
            rootEl?.setAttribute(attributes.COLOR, value.toString());
        }
        else {
            this.removeAttribute(attributes.COLOR);
            rootEl?.removeAttribute(attributes.COLOR);
        }
    }
    get color() { return this.getAttribute(attributes.COLOR); }
    /**
     * Sets input to disabled
     * @param {boolean|string} value If true will set `disabled` attribute
     */
    set disabled(value) {
        const rootEl = this.shadowRoot?.querySelector('.ids-checkbox');
        const val = stringToBool(value);
        if (val) {
            this.setAttribute(attributes.DISABLED, val.toString());
            this.input?.setAttribute(attributes.DISABLED, val.toString());
            rootEl?.classList.add(attributes.DISABLED);
            this.labelEl?.querySelector('.label-checkbox')?.setAttribute(attributes.DISABLED, val.toString());
        }
        else {
            this.removeAttribute(attributes.DISABLED);
            this.input?.removeAttribute(attributes.DISABLED);
            rootEl?.classList.remove(attributes.DISABLED);
            this.labelEl?.querySelector('.label-checkbox')?.removeAttribute(attributes.DISABLED);
        }
    }
    get disabled() { return this.getAttribute(attributes.DISABLED); }
    /**
     * Flips the checkbox orientation to horizontal
     * @param {boolean|string} value If true will set `horizontal` attribute
     */
    set horizontal(value) {
        const rootEl = this.shadowRoot?.querySelector('.ids-checkbox');
        const val = stringToBool(value);
        if (val) {
            this.setAttribute(attributes.HORIZONTAL, val.toString());
            rootEl?.classList.add(attributes.HORIZONTAL);
        }
        else {
            this.removeAttribute(attributes.HORIZONTAL);
            rootEl?.classList.remove(attributes.HORIZONTAL);
        }
    }
    get horizontal() { return this.getAttribute(attributes.HORIZONTAL); }
    /**
     * Sets the checkbox to the indeterminate state
     * @param {string|boolean} value The `indeterminate` attribute
     */
    set indeterminate(value) {
        const val = stringToBool(value);
        if (val) {
            this.setAttribute(attributes.INDETERMINATE, val.toString());
        }
        else {
            this.removeAttribute(attributes.INDETERMINATE);
        }
        if (this.input) {
            if (val) {
                this.input.classList.add(attributes.INDETERMINATE);
                this.input.indeterminate = true;
            }
            else {
                this.input.classList.remove(attributes.INDETERMINATE);
                this.input.indeterminate = false;
            }
        }
    }
    get indeterminate() { return this.getAttribute(attributes.INDETERMINATE); }
    /**
     * Set the checkbox `value` attribute
     * @param {string | boolean} val the value property
     */
    set value(val) {
        if (val) {
            this.setAttribute(attributes.VALUE, String(val));
            this.input?.setAttribute(attributes.VALUE, String(val));
        }
        else {
            this.removeAttribute(attributes.VALUE);
            this.input?.removeAttribute(attributes.VALUE);
        }
    }
    get value() { return this.getAttribute(attributes.VALUE); }
    /**
     * Disable the check animation
     * @param {string | boolean} value the value property
     */
    set noAnimation(value) {
        const val = stringToBool(value);
        if (val) {
            this.setAttribute(attributes.NO_ANIMATION, String(val));
            this.container?.classList.add('no-animation');
        }
        else {
            this.removeAttribute(attributes.NO_ANIMATION);
            this.container?.classList.remove('no-animation');
        }
    }
    get noAnimation() { return stringToBool(this.getAttribute(attributes.NO_ANIMATION)) || false; }
    /**
     * Overrides the standard "focus" behavior to instead pass focus to the inner HTMLInput element.
     */
    focus() {
        this.input?.focus();
    }
};
IdsCheckbox = __decorate([
    customElement('ids-checkbox'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsCheckbox);
export default IdsCheckbox;
//# sourceMappingURL=ids-checkbox.js.map