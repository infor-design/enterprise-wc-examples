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
import { sizes } from '../ids-icon/ids-icon-attributes';
import IdsEventsMixin from '../../mixins/ids-events-mixin/ids-events-mixin';
import IdsThemeMixin from '../../mixins/ids-theme-mixin/ids-theme-mixin';
import IdsTooltipMixin from '../../mixins/ids-tooltip-mixin/ids-tooltip-mixin';
import IdsElement from '../../core/ids-element';
import '../ids-icon/ids-icon';
import styles from './ids-alert.scss';
/**
 * IDS Alert Component
 * @type {IdsAlert}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part icon - the icon element
 */
let IdsAlert = class IdsAlert extends IdsTooltipMixin(IdsThemeMixin(IdsEventsMixin(IdsElement))) {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
    }
    /**
     * Setup some special config for the tooltip
     * @param {any} tooltip the tooltip element
     */
    beforeTooltipShow(tooltip) {
        // Color the tooltip
        if (tooltip.popup) {
            tooltip.popup?.container?.classList.add(`${this.toolTipTarget.getAttribute('icon')}-color`);
            tooltip.popup.y = 12;
        }
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The propertires in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.DISABLED,
            attributes.ICON,
            attributes.TOOLTIP,
            attributes.SIZE
        ];
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        const cssClass = stringToBool(this.disabled) ? ' class="disabled"' : '';
        return `<ids-icon size="${this.size}"${cssClass} icon="${this.icon}" part="icon"></ids-icon>`;
    }
    /**
     * Sets to disabled
     * @param {boolean|string} value If true will set `disabled` attribute
     */
    set disabled(value) {
        const icon = this.shadowRoot?.querySelector('ids-icon');
        const val = stringToBool(value);
        if (val) {
            this.setAttribute(attributes.DISABLED, val.toString());
            icon?.classList.add(attributes.DISABLED);
        }
        else {
            this.removeAttribute(attributes.DISABLED);
            icon?.classList.remove(attributes.DISABLED);
        }
    }
    get disabled() {
        return stringToBool(this.getAttribute(attributes.DISABLED));
    }
    /**
     * Return the icon of the alert.
     * @returns {string | null} the path data
     */
    get icon() { return this.getAttribute(attributes.ICON); }
    /**
     * Set the icon
     * @param {string | null} value The Icon Type [success, info, error, warning]
     */
    set icon(value) {
        if (value) {
            this.setAttribute(attributes.ICON, value);
            this.shadowRoot?.querySelector('ids-icon')?.setAttribute(attributes.ICON, value);
        }
        else {
            this.removeAttribute(attributes.ICON);
        }
    }
    /**
     * Return the size. May be large, normal/medium or small
     * @returns {string} the size
     */
    get size() { return this.getAttribute(attributes.SIZE) || 'normal'; }
    set size(value) {
        if (value && sizes[value]) {
            this.setAttribute(attributes.SIZE, value);
            this.container?.querySelector('ids-icon')?.setAttribute(attributes.SIZE, value);
        }
        else {
            this.removeAttribute(attributes.SIZE);
            this.container?.querySelector('ids-icon')?.removeAttribute(attributes.SIZE);
        }
    }
};
IdsAlert = __decorate([
    customElement('ids-alert'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsAlert);
export default IdsAlert;
//# sourceMappingURL=ids-alert.js.map