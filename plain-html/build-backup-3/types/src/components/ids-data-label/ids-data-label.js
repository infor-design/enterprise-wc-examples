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
import styles from './ids-data-label.scss';
import IdsThemeMixin from '../../mixins/ids-theme-mixin/ids-theme-mixin';
import IdsEventsMixin from '../../mixins/ids-events-mixin/ids-events-mixin';
import IdsElement from '../../core/ids-element';
import '../ids-text/ids-text';
/**
 * IDS Data Label Component
 * @type {IdsDataLabel}
 * @inherits IdsElement
 * @mixes IdsThemeMixin
 */
let IdsDataLabel = class IdsDataLabel extends IdsThemeMixin(IdsEventsMixin(IdsElement)) {
    constructor() {
        super();
        this.state = {
            labelClass: 'top-positioned',
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.offEvent('languagechange');
        this.onEvent('languagechange', this.closest('ids-container'), (e) => {
            this.language = e.detail.language.name;
        });
        this.language = this.closest('ids-container')?.getAttribute('language');
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The propertires in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.LABEL,
            attributes.LABEL_POSITION,
            attributes.LANGUAGE,
            attributes.MODE
        ];
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        return `<div class="${this.labelClass}">
        <ids-text class="label" font-size="16">${this.label}<span class="colon">${this.colon}</span></ids-text>
        <ids-text class="description" font-size="16"><slot></slot></ids-text>
      </div>`;
    }
    /**
     * Sets to label
     * @param {string} value label string
     */
    set label(value) {
        if (value) {
            this.setAttribute(attributes.LABEL, value);
        }
        else {
            this.removeAttribute(attributes.LABEL);
        }
        const label = this.container?.querySelector('.label');
        if (label) {
            label.innerHTML = `${value ?? ''}<span class="colon">${this.colon}</span>`;
        }
    }
    get label() {
        return this.getAttribute(attributes.LABEL) ?? '';
    }
    /**
     * Sets to label
     * @param {string} value label string
     */
    set labelPosition(value) {
        if (value) {
            this.setAttribute(attributes.LABEL_POSITION, value);
            if (this.container) {
                this.container.className = `${value}-positioned`;
            }
        }
    }
    get labelPosition() {
        return this.getAttribute(attributes.LABEL_POSITION);
    }
    /**
     * @returns {string} css class for data-label
     */
    get labelClass() {
        if (this.labelPosition) {
            return `${this.labelPosition}-positioned`;
        }
        return 'top-positioned';
    }
    /**
     * @returns {string} css class for data-label
     */
    get colon() {
        return this.labelPosition === 'left' ? ':' : '';
    }
    set language(value) {
        if (value) {
            this.setAttribute('language', value);
        }
    }
};
IdsDataLabel = __decorate([
    customElement('ids-data-label'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsDataLabel);
export default IdsDataLabel;
//# sourceMappingURL=ids-data-label.js.map