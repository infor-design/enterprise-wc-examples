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
import Base from './ids-hierarchy-legend-base';
import styles from './ids-hierarchy-legend.scss';
/**
 * IDS Hierarchy Legend Component
 * @type {IdsHierarchyLegend}
 * @inherits IdsElement
 */
let IdsHierarchyLegend = class IdsHierarchyLegend extends Base {
    constructor() {
        super();
    }
    /**
     * ids-hierarchy-legend `connectedCallback` implementation
     * @returns {void}
     */
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    template() {
        return `
      <div class="ids-hierarchy-legend">
        <slot class="legend" part="legend"></slot>
      </div>
    `;
    }
};
IdsHierarchyLegend = __decorate([
    customElement('ids-hierarchy-legend'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsHierarchyLegend);
export default IdsHierarchyLegend;
//# sourceMappingURL=ids-hierarchy-legend.js.map