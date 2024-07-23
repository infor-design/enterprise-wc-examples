var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { attributes } from '../../core/ids-attributes';
import { customElement, scss } from '../../core/ids-decorators';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
import Base from './ids-tab-content-base';
import styles from './ids-tab-content.scss';
/**
 * IDS TabContent Component
 * @type {IdsTabContent}
 * @inherits IdsElement
 * @mixes IdsThemeMixin
 * @mixes IdsEventsMixin
 * @mixes IdsKeyboardMixin
 * @mixes IdsThemeMixin
 */
let IdsTabContent = class IdsTabContent extends Base {
    constructor() {
        super();
    }
    /** @returns {Array} The attributes we handle as getters/setters */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.VALUE,
            attributes.ACTIVE
        ];
    }
    template() {
        return `<slot></slot>`;
    }
    /** @param {string} value representing associated tab */
    set value(value) {
        if (this.getAttribute(attributes.VALUE) === value) {
            return;
        }
        this.setAttribute(attributes.VALUE, String(value));
    }
    /** @returns {string} Value representing associated tab */
    get value() {
        return this.getAttribute(attributes.VALUE);
    }
    /** @param {boolean|string} value Whether or not this tab will be flagged as active/visible */
    set active(value) {
        const isTruthy = stringToBool(value);
        if (isTruthy && !this.hasAttribute(attributes.ACTIVE)) {
            this.setAttribute(attributes.ACTIVE, '');
        }
        if (!isTruthy && this.hasAttribute(attributes.ACTIVE)) {
            this.removeAttribute(attributes.ACTIVE);
        }
    }
    /** @returns {boolean|string} Whether or not this tab will be flagged as active/visible */
    get active() {
        return this.hasAttribute(attributes.ACTIVE);
    }
};
IdsTabContent = __decorate([
    customElement('ids-tab-content'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsTabContent);
export default IdsTabContent;
//# sourceMappingURL=ids-tab-content.js.map