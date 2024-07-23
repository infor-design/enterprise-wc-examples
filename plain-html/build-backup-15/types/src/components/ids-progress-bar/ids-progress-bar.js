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
import Base from './ids-progress-bar-base';
import styles from './ids-progress-bar.scss';
// Defaults
const ID = 'ids-progress-bar-id';
const MAX = '100';
const VALUE = '0';
/**
 * IDS Progress Bar Component
 * @type {IdsProgressBar}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 */
let IdsProgressBar = class IdsProgressBar extends Base {
    constructor() {
        super();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            attributes.DISABLED,
            attributes.LABEL,
            attributes.LABEL_AUDIBLE,
            attributes.MAX,
            attributes.VALUE
        ];
    }
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template() {
        const audible = stringToBool(this.labelAudible) ? ' audible="true"' : '';
        let rootClass = stringToBool(this.disabled) ? ' disabled' : '';
        rootClass += stringToBool(this.labelAudible) ? ' label-audible' : '';
        return `
      <div class="ids-progress-bar${rootClass}">
        <label for="${ID}" class="progress-label">
          <ids-text${audible}>${this.label}</ids-text>
        </label>
        <progress class="progress-bar" id="${ID}" max="${this.max}" value="${this.value}">${this.completed}</progress>
      </div>`;
    }
    /**
     * Update value
     * @private
     * @param {string} val the value
     * @returns {void}
     */
    #updateValue(val) {
        const bar = this.shadowRoot?.querySelector('.progress-bar');
        if (bar) {
            const v = bar.getAttribute(attributes.VALUE);
            if (val !== null && v !== val.toString()) {
                bar.setAttribute(attributes.VALUE, val.toString());
                bar.innerHTML = this.completed;
                this.triggerEvent('updated', this, {
                    detail: {
                        elem: this,
                        completed: this.completed,
                        max: this.max,
                        value: this.value
                    }
                });
            }
        }
    }
    /**
     * Get calculated completed value
     * @returns {string} The completed value and percentage sign
     */
    get completed() {
        const partial = parseFloat(this.value);
        const total = parseFloat(this.max);
        return `${Math.round((100 * partial) / total)}%`;
    }
    /**
     * Sets the component to disabled
     * @param {boolean|string} value If true will set `disabled` attribute
     */
    set disabled(value) {
        const rootEl = this.shadowRoot?.querySelector('.ids-progress-bar');
        const val = stringToBool(value);
        if (val) {
            this.setAttribute(attributes.DISABLED, val.toString());
            rootEl?.classList.add(attributes.DISABLED);
        }
        else {
            this.removeAttribute(attributes.DISABLED);
            rootEl?.classList.remove(attributes.DISABLED);
        }
    }
    get disabled() {
        return this.getAttribute(attributes.DISABLED);
    }
    /**
     * Set the `label` text
     * @param {string} value of the `label` text property
     */
    set label(value) {
        if (value) {
            this.setAttribute(attributes.LABEL, value.toString());
        }
        else {
            this.removeAttribute(attributes.LABEL);
        }
        const labelText = this.shadowRoot?.querySelector('.progress-label ids-text');
        if (labelText) {
            labelText.innerHTML = value ? value.toString() : '';
        }
    }
    get label() { return this.getAttribute(attributes.LABEL) || ''; }
    /**
     * Sets to label text as audible
     * @param {boolean|string} value If true will set `label-audible` attribute
     */
    set labelAudible(value) {
        const rootEl = this.shadowRoot?.querySelector('.ids-progress-bar');
        const labelText = this.shadowRoot?.querySelector('.progress-label ids-text');
        const val = stringToBool(value);
        if (val) {
            this.setAttribute(attributes.LABEL_AUDIBLE, val.toString());
            rootEl?.classList.add(attributes.LABEL_AUDIBLE);
            labelText?.setAttribute(attributes.AUDIBLE, val.toString());
        }
        else {
            this.removeAttribute(attributes.LABEL_AUDIBLE);
            rootEl?.classList.remove(attributes.LABEL_AUDIBLE);
            labelText?.removeAttribute(attributes.AUDIBLE);
        }
    }
    get labelAudible() {
        return this.getAttribute(attributes.LABEL_AUDIBLE);
    }
    /**
     * Set the `max` attribute of progress
     * @param {string} value of the `max` property
     */
    set max(value) {
        const bar = this.shadowRoot?.querySelector('.progress-bar');
        const v = (value || MAX).toString();
        this.setAttribute(attributes.MAX, v);
        bar?.setAttribute(attributes.MAX, v);
    }
    get max() { return this.getAttribute(attributes.MAX) || MAX; }
    /**
     * Set the `value` attribute of progress
     * @param {string} val the value property
     */
    set value(val) {
        this.setAttribute(attributes.VALUE, (val || VALUE).toString());
        this.#updateValue(val);
    }
    get value() { return this.getAttribute(attributes.VALUE) || VALUE; }
};
IdsProgressBar = __decorate([
    customElement('ids-progress-bar'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsProgressBar);
export default IdsProgressBar;
//# sourceMappingURL=ids-progress-bar.js.map