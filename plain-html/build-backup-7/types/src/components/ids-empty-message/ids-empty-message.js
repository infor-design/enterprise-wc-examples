var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import Base and Decorators
import pathData from 'ids-identity/dist/theme-new/icons/empty/path-data.json';
import { customElement, scss } from '../../core/ids-decorators';
import { attributes } from '../../core/ids-attributes';
import Base from './ids-empty-message-base';
import '../ids-icon/ids-icon';
import '../ids-text/ids-text';
import styles from './ids-empty-message.scss';
/**
 * IDS Empty Message Component
 * @type {IdsEmptyMessage}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part container - the container element
 */
let IdsEmptyMessage = class IdsEmptyMessage extends Base {
    constructor() {
        super();
    }
    /**
     * Invoked each time the custom element is add into a document-connected element
     */
    connectedCallback() {
        super.connectedCallback();
        this.#attachEventHandlers();
    }
    /**
     * Return the attributes we handle as getters and setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.ICON
        ];
    }
    iconData() {
        return pathData[this.icon];
    }
    /**
     * Create the template for the contents
     * @returns {string} The template
     */
    template() {
        return `<div class="ids-empty-message" part="container">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" aria-hidden="true">${this.iconData()}</svg>
        <div class="label">
          <slot name="label"></slot>
        </div>
        <div class="description">
          <slot name="description"></slot>
        </div>
        <div class="button">
          <slot name="button"></slot>
        </div>
      </div>
    </div>`;
    }
    /**
     * Establish internal event handlers
     * @private
     * @returns {object} The object for chaining
     */
    #attachEventHandlers() {
        return this;
    }
    get icon() { return this.getAttribute(attributes.ICON); }
    set icon(value) {
        const svgIcon = this.shadowRoot?.querySelector('svg');
        const iconData = pathData[value];
        if (value && iconData) {
            svgIcon?.style.setProperty('display', '');
            this.setAttribute(attributes.ICON, value);
            if (svgIcon)
                svgIcon.innerHTML = iconData;
        }
        else {
            this.removeAttribute(attributes.ICON);
            svgIcon?.style.setProperty('display', 'none');
        }
    }
};
IdsEmptyMessage = __decorate([
    customElement('ids-empty-message'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsEmptyMessage);
export default IdsEmptyMessage;
//# sourceMappingURL=ids-empty-message.js.map