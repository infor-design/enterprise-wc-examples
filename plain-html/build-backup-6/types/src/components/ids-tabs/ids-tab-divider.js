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
import Base from './ids-tab-divider-base';
import styles from './ids-tab-divider.scss';
/**
 * IDS Tab Divider Component
 * @type {IdsTabDivider}
 * @inherits IdsElement
 * @part divider - the tab divider
 */
let IdsTabDivider = class IdsTabDivider extends Base {
    constructor() {
        super();
    }
    /**
     * Create the Template for the contents
     * @returns {string} the template to render
     */
    template() {
        return `<div class="ids-tab-divider" part="divider"></div>`;
    }
    connectedCallback() {
        this.setAttribute('role', 'separator');
    }
};
IdsTabDivider = __decorate([
    customElement('ids-tab-divider'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsTabDivider);
export default IdsTabDivider;
//# sourceMappingURL=ids-tab-divider.js.map