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
import '../ids-hyperlink/ids-hyperlink';
import Base from './ids-skip-link-base';
import styles from './ids-skip-link.scss';
/**
 * IDS IdsSkipLink Component
 * @type {IdsSkiplink}
 * @inherits IdsElement
 * @mixes IdsThemeMixin
 * @mixes IdsEventsMixin
 * @part link - the link element
 */
let IdsSkiplink = class IdsSkiplink extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            attributes.HREF,
            attributes.MODE
        ];
    }
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template() {
        return `<a href="${this.href}" class="ids-skip-link ids-hyperlink" part="link"><slot></slot></a>`;
    }
    /**
     * Set the link href
     * @param {string} value Set the link's href to some link
     */
    set href(value) {
        if (value) {
            this.setAttribute(attributes.HREF, value);
            this.container?.setAttribute(attributes.HREF, value);
            return;
        }
        this.removeAttribute(attributes.HREF);
        this.container?.removeAttribute(attributes.HREF);
    }
    get href() { return this.getAttribute(attributes.HREF); }
};
IdsSkiplink = __decorate([
    customElement('ids-skip-link'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsSkiplink);
export default IdsSkiplink;
//# sourceMappingURL=ids-skip-link.js.map