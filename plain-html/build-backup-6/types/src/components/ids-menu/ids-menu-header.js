var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import Core
import { customElement, scss } from '../../core/ids-decorators';
import { htmlAttributes } from '../../core/ids-attributes';
// Import Base and Mixins
import Base from './ids-menu-header-base';
// Import Styles
import styles from './ids-menu-header.scss';
/**
 * IDS Menu Header Component
 * @type {IdsMenuHeader}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part header - the menu header element
 */
let IdsMenuHeader = class IdsMenuHeader extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute(htmlAttributes.ROLE, 'none');
        if (this.menu)
            this.decorateForIcon(this.menu.hasIcons);
    }
    static get attributes() {
        return [
            ...super.attributes
        ];
    }
    /**
     * @readonly
     * @returns {HTMLElement} the `IdsMenu` or `IdsPopupMenu` parent node.
     */
    get menu() {
        return this.parentElement;
    }
    template() {
        return `<div class="ids-menu-header" part="header" role="none"><slot></slot></div>`;
    }
    decorateForIcon(doShow) {
        this.container?.classList[doShow ? 'add' : 'remove']('align-for-icons');
    }
};
IdsMenuHeader = __decorate([
    customElement('ids-menu-header'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsMenuHeader);
export default IdsMenuHeader;
//# sourceMappingURL=ids-menu-header.js.map