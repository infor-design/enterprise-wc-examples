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
import Base from './ids-checkbox-group-base';
import styles from './ids-checkbox-group.scss';
/**
 * IDS Checkbox Group Component
 * @type {IdsCheckboxGroup}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part checkbox-group - the checkbox-group element
 */
let IdsCheckboxGroup = class IdsCheckboxGroup extends Base {
    constructor() {
        super();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.LABEL,
        ];
    }
    /**
     * Create the Template for the contents
     * @returns {string} The Template
     */
    template() {
        return `
      <div class="ids-checkbox-group" part="checkbox-group">
        <ids-text font-size="16" type="span">${this.label}</ids-text>
        <slot></slot>
      </div>
    `;
    }
    /**
     * Return the label of checkbox-group
     * @returns {string} label
     */
    get label() { return this.getAttribute('label') || ''; }
    /**
     * Set the label of checkbox-group
     * @param {string} value label
     */
    set label(value) {
        if (value) {
            this.setAttribute('label', value.toString());
        }
        else {
            this.removeAttribute('label');
        }
        const textElem = this.container?.querySelector('ids-text');
        if (textElem)
            textElem.innerHTML = value;
    }
};
IdsCheckboxGroup = __decorate([
    customElement('ids-checkbox-group'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsCheckboxGroup);
export default IdsCheckboxGroup;
//# sourceMappingURL=ids-checkbox-group.js.map