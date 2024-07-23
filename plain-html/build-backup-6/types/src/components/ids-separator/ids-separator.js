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
import Base from './ids-separator-base';
import styles from './ids-separator.scss';
/**
 * IDS Separator Component
 * @type {IdsSeparator}
 * @inherits IdsElement
 * @mixes IdsColorVariantMixin
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part separator - the menu separator element
 */
let IdsSeparator = class IdsSeparator extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
    }
    static get attributes() {
        return [
            ...super.attributes,
            attributes.VERTICAL
        ];
    }
    /**
     * Inherited from `IdsColorVariantMixin`
     * @returns {Array<string>} List of available color variants for this component
     */
    colorVariants = ['alternate-formatter'];
    /**
     * @returns {string} The components template
     */
    template() {
        let tagName = 'div';
        if (this.parentElement?.tagName === 'IDS-MENU-GROUP') {
            tagName = 'li';
        }
        return `<${tagName} part="separator" class="ids-separator${this.vertical ? ' vertical' : ''} "></${tagName}>`;
    }
    /**
     * Set the separator to be vertical
     */
    set vertical(val) {
        const current = this.vertical;
        const trueVal = stringToBool(val);
        if (current !== trueVal) {
            if (trueVal) {
                this.container?.classList.add(attributes.VERTICAL);
                this.setAttribute(attributes.VERTICAL, '');
            }
            else {
                this.container?.classList.remove(attributes.VERTICAL);
                this.removeAttribute(attributes.VERTICAL);
            }
        }
    }
    get vertical() {
        return stringToBool(this.getAttribute(attributes.VERTICAL));
    }
};
IdsSeparator = __decorate([
    customElement('ids-separator'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsSeparator);
export default IdsSeparator;
//# sourceMappingURL=ids-separator.js.map