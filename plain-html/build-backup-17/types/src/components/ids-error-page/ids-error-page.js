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
import Base from './ids-error-page-base';
import '../ids-modal/ids-modal';
import '../ids-empty-message/ids-empty-message';
import '../ids-icon/ids-icon';
import styles from './ids-error-page.scss';
const DEFAULT_ICON = 'empty-error-loading';
/**
 * IDS Error Page Component
 * @type {IdsErrorPage}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsKeyboardMixin
 * @mixes IdsThemeMixin
 */
let IdsErrorPage = class IdsErrorPage extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.#attachEventHandlers();
    }
    static get attributes() {
        return [
            ...super.attributes,
            attributes.BUTTON_TEXT,
            attributes.DESCRIPTION,
            attributes.ICON,
            attributes.LABEL
        ];
    }
    template() {
        return `<ids-popup part="modal" class="ids-modal ids-error" type="modal" position-style="viewport">
      <div class="ids-modal-container" slot="content">
        <ids-empty-message icon="${this.icon ?? DEFAULT_ICON}">
          <ids-text
            type="h2"
            font-size="24"
            font-weight="bold"
            label="true"
            slot="label"
          >
          ${this.label ?? 'Add Label'}
          </ids-text>
          <ids-text label="true" slot="description">
            ${this.description ?? 'Add Description'}
          </ids-text>
          <ids-button class="action-button" slot="button" type="primary">
            <span>${this.buttonText ?? 'Action'}</span>
          </ids-button>
        </ids-empty-message>
      </div>
    </ids-popup>`;
    }
    /**
     * Set the icon
     * @param {string} value icon id
     * @memberof IdsErrorPage
     */
    set icon(value) {
        if (value) {
            this.setAttribute(attributes.ICON, value);
        }
        else {
            this.removeAttribute(attributes.ICON);
        }
        if (!this.container)
            return;
        const emptyMessage = this.container.querySelector('ids-empty-message');
        if (emptyMessage) {
            emptyMessage.icon = value;
        }
    }
    /**
     * Get the icon
     * @returns {string} the icon attribute
     * @readonly
     * @memberof IdsErrorPage
     */
    get icon() {
        return this.getAttribute(attributes.ICON);
    }
    /**
     * Set the label
     * @param {string} value label text
     * @memberof IdsErrorPage
     */
    set label(value) {
        if (value) {
            this.setAttribute(attributes.LABEL, value);
        }
        else {
            this.removeAttribute(attributes.LABEL);
        }
        this.#refreshText('[slot="label"]', value);
    }
    /**
     * Get the label
     * @returns {string} the label text
     * @readonly
     * @memberof IdsErrorPage
     */
    get label() {
        return this.getAttribute(attributes.LABEL);
    }
    /**
     * Set the description text
     * @param {string} value description text
     * @memberof IdsErrorPage
     */
    set description(value) {
        if (value) {
            this.setAttribute(attributes.DESCRIPTION, value);
        }
        else {
            this.removeAttribute(attributes.DESCRIPTION);
        }
        this.#refreshText('[slot="description"]', value);
    }
    /**
     * Get the description text
     * @returns {string} the description text
     * @readonly
     * @memberof IdsErrorPage
     */
    get description() {
        return this.getAttribute(attributes.DESCRIPTION);
    }
    /**
     * Set the button text
     * @param {string} value button text
     * @memberof IdsErrorPage
     */
    set buttonText(value) {
        if (value) {
            this.setAttribute(attributes.BUTTON_TEXT, value);
        }
        else {
            this.removeAttribute(attributes.BUTTON_TEXT);
        }
        this.#refreshText('[slot="button"]', value);
    }
    /**
     * Get the button text
     * @returns {string} button text
     * @readonly
     * @memberof IdsErrorPage
     */
    get buttonText() {
        return this.getAttribute(attributes.BUTTON_TEXT);
    }
    /**
     * Attach the error page event handlers
     * @private
     */
    #attachEventHandlers() {
        const button = this.container?.querySelector('.action-button');
        const actionBtnEvent = 'action-button';
        this.onEvent('click', button, (e) => {
            this.triggerEvent(actionBtnEvent, this, {
                detail: {
                    elem: this,
                    nativeEvent: e,
                }
            });
        });
        this.onEvent('touchend', button, (e) => {
            this.triggerEvent(actionBtnEvent, this, {
                detail: {
                    elem: this,
                    nativeEvent: e,
                }
            });
        });
    }
    /**
     * Used for ARIA Labels and other content
     * @readonly
     * @returns {string} concatenating the label and description.
     */
    get ariaLabelContent() {
        const label = this.querySelector('[slot="label"')?.innerText;
        return `${label || ''} ${this.label || ''} ${this.description || ''}`;
    }
    /**
     * Refresh the text attributes
     * @param {string} el dom element selector to query
     * @param {string} value attribute value
     * @private
     */
    #refreshText(el, value) {
        if (!this.container)
            return;
        const elText = this.container.querySelector(el);
        if (elText) {
            elText.innerHTML = value ? value.toString() : '';
        }
    }
};
IdsErrorPage = __decorate([
    customElement('ids-error-page'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsErrorPage);
export default IdsErrorPage;
//# sourceMappingURL=ids-error-page.js.map