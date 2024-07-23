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
import Base from './ids-process-indicator-step-base';
import styles from './ids-process-indicator-step.scss';
const statuses = ['cancelled', 'started', 'done'];
const DEFAULT_LABEL = 'empty label';
/**
 * IDS Process Step Component
 * @type {IdsProcessStep}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part label
 */
let IdsProcessStep = class IdsProcessStep extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        requestAnimationFrame(() => {
            const parentElement = this.parentElement;
            if (parentElement.tagName === 'IDS-PROCESS-INDICATOR') {
                const steps = parentElement.querySelectorAll('ids-process-indicator-step');
                const stepAmount = steps.length;
                const line = this.container?.querySelector('.line');
                if (steps[stepAmount - 1] === this) {
                    // reponsive styling for last step
                    this.classList.add('last');
                    // don't render the line for the last step
                    line?.setAttribute('hidden', '');
                }
                else if (this.status === 'started' || this.status === 'done') {
                    // render the line, conditionally color it based on status
                    line?.style.setProperty('background-color', 'var(--ids-color-palette-azure-70)');
                }
            }
            this.#updateLabelVisibility();
        });
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.LABEL,
            attributes.STATUS,
        ];
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        return `
      <div class="ids-process-indicator-step">
        <div class="line"></div>
        <ids-text part="label" hidden class="label">
          ${this.label}
        </ids-text>
        <span class="step">
          ${this.#getStatusIcon(this.status)}
        </span>
        <div class="details">
          <slot name="detail"></slot>
        </div>
      </div>
    `;
    }
    /**
     * Set the string attribute
     * @param {string} attribute attribute name
     * @param {string} value attribute value
     * @private
     * @returns {void}
     */
    #setString(attribute, value) {
        if (value) {
            this.setAttribute(attribute, value);
        }
    }
    /**
     * Hide the step
     * @param {HTMLElement} element html element
     * @private
     * @returns {void}
     */
    #hide(element) {
        element.style.setProperty('visibility', 'hidden');
    }
    /**
     * show the step
     * @param {HTMLElement} element html element
     * @private
     * @returns {void}
     */
    #show(element) {
        element.style.removeProperty('visibility');
    }
    /**
     * Set the step label visibility
     * @private
     * @returns {void}
     */
    #updateLabelVisibility() {
        const labelEl = this.#getLabelElement();
        if (!labelEl)
            return;
        if (this.label === DEFAULT_LABEL) {
            this.#hide(labelEl);
        }
        else {
            this.#show(labelEl);
        }
    }
    /**
     * Get the label element
     * @returns {HTMLElement} the element
     * @private
     */
    #getLabelElement() {
        return this.container?.querySelector('.label');
    }
    /**
     * Get step icon based on status
     * @param {string} status step status
     * @returns {string} icon template
     */
    #getStatusIcon(status) {
        if (status === 'cancelled') {
            return `<ids-icon icon="close" size="xsmall"></ids-icon>`;
        }
        return '';
    }
    /**
     * Sets the label for the step
     * @param {string} value The step name
     */
    set label(value) {
        const val = value || DEFAULT_LABEL;
        const labelElem = this.#getLabelElement();
        this.#setString(attributes.LABEL, val);
        if (labelElem)
            labelElem.innerHTML = val;
        this.#updateLabelVisibility();
    }
    get label() {
        return this.getAttribute(attributes.LABEL) || (DEFAULT_LABEL ?? '');
    }
    /**
     * Sets the status for the step which determines the icon
     * @param {string} value The step status
     */
    set status(value) {
        const val = value.toLowerCase();
        if (statuses.includes(val)) {
            this.#setString(attributes.STATUS, val);
            this.container
                ?.querySelectorAll('ids-icon')
                ?.forEach((icon) => icon.remove());
            const statusIcon = this.#getStatusIcon(val);
            if (statusIcon) {
                this.container
                    ?.querySelector('.step')
                    ?.insertAdjacentHTML('beforeend', `<ids-icon icon="close" size="xsmall"></ids-icon>`);
            }
        }
    }
    get status() {
        const status = this.getAttribute(attributes.STATUS);
        return status && statuses.includes(status) ? status : '';
    }
};
IdsProcessStep = __decorate([
    customElement('ids-process-indicator-step'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsProcessStep);
export default IdsProcessStep;
//# sourceMappingURL=ids-process-indicator-step.js.map