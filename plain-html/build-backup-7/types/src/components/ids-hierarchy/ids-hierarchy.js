var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement } from '../../core/ids-decorators';
import { attributes } from '../../core/ids-attributes';
import Base from './ids-hierarchy-base';
/**
 * IDS Hierarchy Component
 * @type {IdsHierarchy}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 */
let IdsHierarchy = class IdsHierarchy extends Base {
    constructor() {
        super();
    }
    /**
     * ids-hierarchy `connectedCallback` implementation
     * @returns {void}
     */
    connectedCallback() {
        super.connectedCallback();
        this.#selectItem();
    }
    template() {
        return `<slot></slot>`;
    }
    /**
     * Selects the current hierarchy item
     * and deselects all other items
     * @private
     * @returns {void}
     */
    #selectItem() {
        this.onEvent('itemselect', this, (e) => {
            e.stopPropagation();
            const items = this.querySelectorAll('ids-hierarchy-item');
            items.forEach((item) => {
                item.removeAttribute(attributes.SELECTED);
                item.setAttribute('aria-selected', false);
            });
            requestAnimationFrame(() => {
                e.target.setAttribute(attributes.SELECTED, true);
                e.target.setAttribute('aria-selected', true);
            });
        });
    }
};
IdsHierarchy = __decorate([
    customElement('ids-hierarchy'),
    __metadata("design:paramtypes", [])
], IdsHierarchy);
export default IdsHierarchy;
//# sourceMappingURL=ids-hierarchy.js.map