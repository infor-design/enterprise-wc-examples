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
import Base from './ids-list-box-option-base';
import styles from './ids-list-box-option.scss';
/**
 * IDS List Box Option Component
 * @type {IdsListBoxOption}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @mixes IdsTooltipMixin
 * @part option - the option element
 */
let IdsListBoxOption = class IdsListBoxOption extends Base {
    constructor() {
        super();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array<any>} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.GROUP_LABEL,
            attributes.TOOLTIP
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', this.hasAttribute(attributes.GROUP_LABEL) ? 'none' : 'option');
        this.setAttribute('tabindex', '-1');
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        return `<slot></slot>`;
    }
};
IdsListBoxOption = __decorate([
    customElement('ids-list-box-option'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsListBoxOption);
export default IdsListBoxOption;
//# sourceMappingURL=ids-list-box-option.js.map