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
import { breakpoints } from '../../utils/ids-breakpoint-utils/ids-breakpoint-utils';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
import Base from './ids-action-sheet-base';
import '../ids-modal/ids-overlay';
import '../ids-popup-menu/ids-popup-menu';
import styles from './ids-action-sheet.scss';
/**
 * IDS Action Sheet Component
 * @type {IdsActionSheet}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 */
let IdsActionSheet = class IdsActionSheet extends Base {
    overlay;
    cancelBtn;
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.overlay = this.shadowRoot?.querySelector('ids-overlay');
        this.cancelBtn = this.shadowRoot?.querySelector('[part="cancel-btn"]');
        if (!this.hasAttribute(attributes.CANCEL_BTN_TEXT)) {
            this.setAttribute(attributes.CANCEL_BTN_TEXT, 'Cancel');
        }
        this.#attachEventHandlers();
        this.#hideOnDesktop();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            attributes.CANCEL_BTN_TEXT,
            attributes.VISIBLE
        ];
    }
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template() {
        return `
      <div class="ids-action-sheet">
        <ids-overlay opacity=".5"></ids-overlay>
        <div class="ids-action-sheet-inner">
          <slot></slot>
          <ids-button type="secondary" part="cancel-btn">
            <span>${this.cancelBtnText}</span>
          </ids-button>
        </div>
      </div>
    `;
    }
    /**
     * Set the visible attribute
     * @param {boolean | string} val true if the action sheet should appear
     */
    set visible(val) {
        const isValTruthy = stringToBool(val);
        if (isValTruthy && !this.hidden) {
            this.setAttribute(attributes.VISIBLE, 'true');
            this.overlay?.setAttribute(attributes.VISIBLE, 'true');
        }
        else {
            this.removeAttribute(attributes.VISIBLE);
            this.overlay?.removeAttribute(attributes.VISIBLE);
        }
    }
    /**
     * @returns {boolean} the current visible state
     */
    get visible() {
        return stringToBool(this.getAttribute(attributes.VISIBLE));
    }
    /**
     * Set the btn text attribute
     * @param {string} val the inner text of the cancel btn
     */
    set cancelBtnText(val) {
        if (val) {
            this.setAttribute(attributes.CANCEL_BTN_TEXT, val);
        }
        else {
            this.removeAttribute(attributes.CANCEL_BTN_TEXT);
        }
        const idsButton = this.shadowRoot?.querySelector('ids-button');
        if (idsButton) {
            idsButton.style.display = val ? 'inline-flex' : 'none';
            idsButton.innerText = val || '';
        }
    }
    /**
     * @returns {string} the inner text of the cancel btn
     */
    get cancelBtnText() {
        return this.getAttribute(attributes.CANCEL_BTN_TEXT);
    }
    /**
     * Handle `onOutsideClick` on overlay
     */
    onOutsideClick() {
        this.onEvent('click', this.overlay, () => this.dismiss());
        this.onEvent('touchstart', this.overlay, () => this.dismiss(), { passive: true });
    }
    /**
     * Handle cancel btn click
     */
    onCancelClick() {
        this.onEvent('click', this.cancelBtn, () => this.dismiss());
        this.onEvent('touchstart', this.cancelBtn, () => this.dismiss(), { passive: true });
    }
    /**
     * Remove the action sheet from the page
     */
    dismiss() {
        this.removeAttribute(attributes.VISIBLE);
        this.overlay?.removeAttribute(attributes.VISIBLE);
    }
    /**
     * Hide the action sheet on desktop devices
     */
    #hideOnDesktop() {
        const mq = window.matchMedia(`(min-width: ${breakpoints.sm})`);
        mq.addEventListener('change', () => {
            this.#setVisibility(mq);
        });
        this.#setVisibility(mq);
    }
    /**
     * Set the action and overlay to hidden is media query is hit
     * @param {object} mq the media query to check
     */
    #setVisibility(mq) {
        if (mq.matches) {
            this.hidden = true;
            // TODO - do we need this?
            // this.overlay?.hidden = true;
            this.removeAttribute('visible');
            this.overlay?.removeAttribute(attributes.VISIBLE);
        }
        else {
            this.removeAttribute('hidden');
            this.overlay?.removeAttribute('hidden');
        }
    }
    /**
     * Sets up event listeners
     * @private
     * @returns {void}
     */
    #attachEventHandlers() {
        this.onOutsideClick();
        this.onCancelClick();
    }
};
IdsActionSheet = __decorate([
    customElement('ids-action-sheet'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsActionSheet);
export default IdsActionSheet;
//# sourceMappingURL=ids-action-sheet.js.map