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
import Base from './ids-color-base';
import styles from './ids-color.scss';
const SwatchSizes = ['xs', 'sm', 'mm', 'md', 'lg'];
/**
 * IDS Color
 * @type {IdsColor}
 * @inherits IdsElement
 * @part color - the color swatch element
 * @part check - the checkbox element
 */
let IdsColor = class IdsColor extends Base {
    swatch = null;
    icon = null;
    popup = null;
    constructor() {
        super();
    }
    /** Invoked each time the custom element is added to the DOM */
    connectedCallback() {
        super.connectedCallback();
        this.#attachEventHandlers();
        const shadowRoot = this.shadowRoot;
        this.swatch = shadowRoot.querySelector('.ids-color');
        this.icon = shadowRoot.querySelector('ids-icon');
        this.popup = shadowRoot.querySelector('ids-tooltip');
        if (this.hex)
            this.hex = this.getAttribute(attributes.HEX);
    }
    /** Invoked each time the custom element is removed from the DOM */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.#detachEventHandlers();
    }
    /** @returns {string[]} this component's observable attributes */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.DISABLED,
            attributes.HEX,
            attributes.MODE,
            attributes.SIZE,
            attributes.TOOLTIP
        ];
    }
    /**
     * HTML for IdsColor.shadowRoot
     * @returns {string} - html for the template
     */
    template() {
        return `
      <ids-tooltip>${this.tooltip} ${this.hex}</ids-tooltip>
      <div class="ids-color ${this.size} no-color" tabindex="0" part="color">
        <ids-icon class="color-check" icon="check" size="small" part="hex"></ids-icon>
      </div>
    `;
    }
    /**
     * Sets the disabled attribute
     * @param {boolean | string} value - true if color-swatch is disabled
     */
    set disabled(value) {
        if (stringToBool(value)) {
            this.setAttribute(attributes.DISABLED, '');
        }
        else {
            this.removeAttribute(attributes.DISABLED);
        }
    }
    /**
     * Gets the disabled attribute
     * @returns {boolean} - true if color-swatch disabled should show
     */
    get disabled() {
        return this.hasAttribute(attributes.DISABLED);
    }
    /** @param {string} value The hex code color to use */
    set hex(value) {
        this.setAttribute(attributes.HEX, value?.trim());
        this.container?.classList.remove('no-color');
        if (!value || value.toLowerCase() === 'transparent') {
            value = '';
            this.container?.classList.add('no-color');
            this.container?.style.setProperty('background-color', 'transparent');
        }
        else {
            this.container?.style.setProperty('background-color', value?.trim());
        }
    }
    /** @returns {string} The hex code being used */
    get hex() {
        return this.getAttribute(attributes.HEX) || '';
    }
    /** @param {string} value Text for this color swatch's label */
    set label(value) {
        this.setAttribute(attributes.LABEL, value);
    }
    /** @returns {string} The label for this color swatch */
    get label() {
        return this.getAttribute(attributes.LABEL) || this.hex;
    }
    /** @param {string} value Text for this color swatch's tooltip */
    set tooltip(value) {
        this.setAttribute(attributes.TOOLTIP, value);
    }
    /** @returns {string} The tooltip for this color swatch */
    get tooltip() {
        if (this.disabled) {
            return '';
        }
        return String(this.getAttribute(attributes.TOOLTIP) ?? '').trim();
    }
    /** @param {SwatchSizesType} value The color swatch's size (xs, sm, mm, md, lg) */
    set size(value) {
        this.swatch?.classList.remove(...SwatchSizes);
        if (SwatchSizes.includes(value)) {
            this.swatch?.classList.add(value);
            this.setAttribute(attributes.SIZE, value);
        }
    }
    /** @returns {SwatchSizesType} The size of this color swatch (xs, sm, mm, md, lg) */
    get size() {
        return this.getAttribute(attributes.SIZE) ?? '';
    }
    /** Show this color swatch's tooltip */
    showTooltip() {
        if (this.disabled || !this.popup || !this.tooltip)
            return;
        this.popup.target = this;
        this.popup.innerText = String(this.tooltip).toLowerCase();
        if (this.popup.popup) {
            this.popup.popup.positionStyle = 'fixed';
        }
        this.popup.innerText = String(this.tooltip).trim();
        this.popup.visible = true;
    }
    /** Hide this color swatch's tooltip */
    hideTooltip() {
        if (this.popup)
            this.popup.visible = false;
    }
    /** Handle events */
    #attachEventHandlers() {
        this.#detachEventHandlers();
        this.onEvent('mouseenter.ids-color-tooltip', this, this.showTooltip);
        this.onEvent('mouseover.ids-color-tooltip', this, this.showTooltip);
        this.onEvent('mouseout.ids-color-tooltip', this, this.hideTooltip);
        this.onEvent('mouseleave.ids-color-tooltip', this, this.hideTooltip);
        this.onEvent('click.ids-color-tooltip', this, this.hideTooltip);
    }
    /** Detach event handlers */
    #detachEventHandlers() {
        this.offEvent('mouseenter.ids-color-tooltip', this);
        this.offEvent('mouseover.ids-color-tooltip', this);
        this.offEvent('mouseout.ids-color-tooltip', this);
        this.offEvent('mouseleave.ids-color-tooltip', this);
    }
};
IdsColor = __decorate([
    customElement('ids-color'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsColor);
export default IdsColor;
//# sourceMappingURL=ids-color.js.map