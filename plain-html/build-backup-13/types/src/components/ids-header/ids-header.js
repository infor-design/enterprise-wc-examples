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
import { stripHTML } from '../../utils/ids-xss-utils/ids-xss-utils';
import Base from './ids-header-base';
import '../ids-input/ids-input';
import styles from './ids-header.scss';
/**
 * IDS Header Component
 * @type {IdsHeader}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsKeyboardMixin
 * @mixes IdsThemeMixin
 */
let IdsHeader = class IdsHeader extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.#refreshVariants();
        // Set initial color
        const initialColor = this.getAttribute('color');
        if (initialColor)
            this.color = initialColor;
    }
    static get attributes() {
        return [
            ...super.attributes,
            attributes.COLOR,
            attributes.MODE
        ];
    }
    /**
     * Create the template for the header contents
     * @returns {string} The template
     */
    template() {
        return `
    <div class="ids-header">
      <slot></slot>
    </div>`;
    }
    /**
     * Refresh the color variants on all elements
     * @private
     */
    #refreshVariants() {
        const elementNames = ['ids-button', 'ids-breadcrumb', 'ids-search-field', 'ids-text', 'ids-theme-switcher'];
        for (const element of elementNames) {
            const idsElements = [...this.querySelectorAll(element)];
            idsElements.forEach((elem) => {
                elem.colorVariant = 'alternate';
            });
        }
    }
    /**
     * Sets the color attribute
     * @param {string} c string value for color
     */
    set color(c) {
        if (typeof c !== 'string' || !c.length) {
            return;
        }
        const sanitzedVal = stripHTML(c);
        // TODO Use Css Variables to set the color
        if (this.container)
            this.container.style.backgroundColor = sanitzedVal;
        this.setAttribute('color', sanitzedVal);
    }
    get color() {
        return this.getAttribute('color') || '#0072ed';
    }
};
IdsHeader = __decorate([
    customElement('ids-header'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsHeader);
export default IdsHeader;
//# sourceMappingURL=ids-header.js.map