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
import { stringToNumber } from '../../utils/ids-string-utils/ids-string-utils';
import Base from './ids-layout-flex-item-base';
import styles from './ids-layout-flex-item.scss';
// List of flex item options
export const FLEX_ITEM_OPTIONS = {
    alignSelf: ['auto', 'baseline', 'center', 'stretch', 'flex-start', 'flex-end'],
    grow: [0, 1],
    shrink: [0, 1]
};
/**
 * IDS Layout Flex Item Component
 * @type {IdsLayoutFlexItem}
 * @inherits IdsElement
 */
let IdsLayoutFlexItem = class IdsLayoutFlexItem extends Base {
    constructor() {
        super();
    }
    static get attributes() {
        return [
            ...super.attributes,
            attributes.ALIGN_SELF,
            attributes.GROW,
            attributes.SHRINK
        ];
    }
    connectedCallback() {
        super.connectedCallback();
    }
    template() {
        return `<slot></slot>`;
    }
    /**
     * Set the align self setting
     * @param {string} value The value
     */
    set alignSelf(value) {
        if (value && FLEX_ITEM_OPTIONS.alignSelf.includes(value)) {
            this.setAttribute(attributes.ALIGN_SELF, value);
        }
        else {
            this.removeAttribute(attributes.ALIGN_SELF);
        }
    }
    get alignSelf() { return this.getAttribute(attributes.ALIGN_SELF); }
    /**
     * Set the grow setting
     * @param {number|string} value The value
     */
    set grow(value) {
        const val = stringToNumber(value);
        if (!Number.isNaN(val) && FLEX_ITEM_OPTIONS.grow.includes(val)) {
            this.setAttribute(attributes.GROW, String(val));
        }
        else {
            this.removeAttribute(attributes.GROW);
        }
    }
    get grow() { return this.getAttribute(attributes.GROW); }
    /**
     * Set the shrink setting
     * @param {number|string} value The value
     */
    set shrink(value) {
        const val = stringToNumber(value);
        if (!Number.isNaN(val) && FLEX_ITEM_OPTIONS.shrink.includes(val)) {
            this.setAttribute(attributes.SHRINK, String(val));
        }
        else {
            this.removeAttribute(attributes.SHRINK);
        }
    }
    get shrink() { return this.getAttribute(attributes.SHRINK); }
};
IdsLayoutFlexItem = __decorate([
    customElement('ids-layout-flex-item'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsLayoutFlexItem);
export default IdsLayoutFlexItem;
//# sourceMappingURL=ids-layout-flex-item.js.map