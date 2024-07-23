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
import Base from './ids-modal-button-base';
import styles from '../ids-button/ids-button.scss';
/**
 * IDS Modal Button Component
 * @type {IdsModalButton}
 * @inherits IdsButton
 */
let IdsModalButton = class IdsModalButton extends Base {
    constructor() {
        super();
    }
    /**
     * Toggle-Button-level `connectedCallback` implementation (adds an icon refresh)
     */
    connectedCallback() {
        super.connectedCallback();
    }
    /**
     * @returns {Array} containing configurable properties on this component
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.CANCEL
        ];
    }
    /**
     * Figure out the classes
     * @private
     * @readonly
     * @returns {Array} containing classes used to identify this button prototype
     */
    get protoClasses() {
        return ['ids-modal-button'];
    }
    /**
     * @returns {boolean} true if the button is a cancel button
     */
    get cancel() {
        return this.hasAttribute(attributes.CANCEL);
    }
    /**
     * @param {boolean} val true if the button should be able to cancel the Modal
     */
    set cancel(val) {
        const isValueTruthy = stringToBool(val);
        if (isValueTruthy) {
            this.setAttribute(attributes.CANCEL, `${val}`);
        }
        else {
            this.removeAttribute(attributes.CANCEL);
        }
    }
};
IdsModalButton = __decorate([
    customElement('ids-modal-button'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsModalButton);
export default IdsModalButton;
//# sourceMappingURL=ids-modal-button.js.map