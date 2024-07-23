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
import Base from './ids-hierarchy-legend-item-base';
import styles from './ids-hierarchy-legend-item.scss';
/**
 * IDS Hierarchy Legend Item Component
 * @type {IdsHierarchyLegendItem}
 * @inherits IdsElement
 * @mixes IdsColorVariantMixin
 */
let IdsHierarchyLegendItem = class IdsHierarchyLegendItem extends Base {
    constructor() {
        super();
    }
    /**
     * ids-hierarchy-legend `connectedCallback` implementation
     * @returns {void}
     */
    connectedCallback() {
        super.connectedCallback();
        this.#setColor();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            attributes.COLOR,
            attributes.TEXT
        ];
    }
    template() {
        return `
      <div class="ids-hierarchy-legend-item">
        <ids-text>${this.text}</ids-text>
      </div>
    `;
    }
    /**
     * Set the value of the text attribute
     * @param {string} value the value of the attribute
     */
    set text(value) {
        if (value) {
            this.setAttribute('text', value);
        }
        else {
            this.removeAttribute('text');
        }
    }
    /**
     * @returns {string|null} containing value of the text attribute
     */
    get text() {
        return this.getAttribute('text');
    }
    get color() {
        return this.getAttribute(attributes.COLOR);
    }
    /**
     * Set the color of the bar
     * @param {string} value The color value, this can be a hex code with the #
     */
    set color(value) {
        this.setAttribute(attributes.COLOR, String(value));
        this.#setColor();
    }
    #setColor() {
        let color = this.color;
        if (this.color?.substring(0, 1) !== '#') {
            color = `var(--ids-color-palette-${this.color})`;
        }
        this.container?.style.setProperty('--background', color);
    }
};
IdsHierarchyLegendItem = __decorate([
    customElement('ids-hierarchy-legend-item'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsHierarchyLegendItem);
export default IdsHierarchyLegendItem;
//# sourceMappingURL=ids-hierarchy-legend-item.js.map