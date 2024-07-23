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
import Base from './ids-list-box-base';
import './ids-list-box-option';
import styles from './ids-list-box.scss';
/**
 * IDS List Box Component
 * @type {IdsListBox}
 * @inherits IdsElement
 */
let IdsListBox = class IdsListBox extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'listbox');
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        return `<slot></slot>`;
    }
};
IdsListBox = __decorate([
    customElement('ids-list-box'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsListBox);
export default IdsListBox;
//# sourceMappingURL=ids-list-box.js.map