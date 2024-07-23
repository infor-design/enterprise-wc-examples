var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { attributes } from '../../core/ids-attributes';
import { customElement, scss } from '../../core/ids-decorators';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
import Base from './ids-tag-base';
import styles from './ids-tag.scss';
/**
 * IDS Tag Component
 * @type {IdsTag}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsKeyboardMixin
 * @mixes IdsThemeMixin
 * @part tag - the tag element
 * @part icon - the icon element
 */
let IdsTag = class IdsTag extends Base {
    constructor() {
        super();
    }
    /**
     * Invoked each time the custom element is appended into a document-connected element.
     */
    connectedCallback() {
        super.connectedCallback();
        this.#attachEventHandlers();
        this.#attachKeyboardListeners();
        this.#setContainerColor(this.color || '');
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            attributes.COLOR,
            attributes.CLICKABLE,
            attributes.DISMISSIBLE,
            attributes.DISABLED,
            attributes.MODE
        ];
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        return '<span class="ids-tag" part="tag"><slot></slot></span>';
    }
    /**
     * Set the tag color
     * @param {string|null} value The color value, this can be not provided,
     * secondary (white), error, success, danger, caution or a hex code with the #
     */
    set color(value) {
        if (value) {
            this.setAttribute(attributes.COLOR, value);
        }
        else {
            this.removeAttribute(attributes.COLOR);
        }
        this.#setContainerColor(value || '');
        this.#addDimissibleIcon();
    }
    get color() {
        return this.getAttribute(attributes.COLOR);
    }
    /**
     * Set the tag color on the element style
     * @param {string} value The color value
     */
    #setContainerColor(value) {
        if (this.container) {
            this.container?.classList.remove('secondary', 'info', 'success', 'warning', 'error');
            this.container.style.backgroundColor = '';
            this.container.style.borderColor = '';
            this.container.style.color = '';
            if (value) {
                if (value.substring(0, 1) === '#') {
                    this.container.style.backgroundColor = value;
                    this.container.style.borderColor = value;
                }
                else {
                    this.container.classList.add(value);
                    if (value !== 'secondary' && value !== 'caution') {
                        this.container.classList.add('ids-white');
                    }
                }
            }
        }
    }
    /**
     * Check if an icon exists if not add it
     * @param {string} iconName The icon name to check
     * @private
     */
    #appendIcon(iconName) {
        const icon = this.querySelector(`[icon="${iconName}"]`);
        if (!icon) {
            this.insertAdjacentHTML('beforeend', `<ids-icon part="icon" icon="${iconName}" size="xsmall" class="ids-icon"></ids-icon>`);
            this.#attachEventHandlers();
        }
    }
    /**
     * Check if an icon exists if so, remove it
     * @param {string} iconName The icon name to check
     * @private
     */
    #removeIcon(iconName) {
        const icon = this.querySelector(`[icon="${iconName}"]`);
        if (icon) {
            icon.remove();
        }
    }
    /**
     * If set to true the tag has an x to dismiss
     * @param {boolean|string} value true of false depending if the tag is dismissed
     */
    set dismissible(value) {
        const isDismissible = stringToBool(value);
        if (isDismissible) {
            this.setAttribute(attributes.DISMISSIBLE, value.toString());
        }
        else {
            this.removeAttribute(attributes.DISMISSIBLE);
        }
        this.#addDimissibleIcon();
    }
    get dismissible() {
        return stringToBool(this.getAttribute(attributes.DISMISSIBLE));
    }
    set disabled(value) {
        if (stringToBool(value)) {
            this.setAttribute(attributes.DISABLED, '');
        }
        else {
            this.removeAttribute(attributes.DISABLED);
        }
    }
    get disabled() {
        return this.hasAttribute('disabled');
    }
    /**
     * Add the dismissible icon if the tag is dismissible
     * @private
     */
    #addDimissibleIcon() {
        if (this.container) {
            if (this.dismissible) {
                this.container.classList.add(attributes.FOCUSABLE);
                this.#appendIcon('close');
                this.#attachKeyboardListeners();
            }
            else {
                this.#removeIcon('close');
                this.container.classList.remove(attributes.FOCUSABLE);
            }
        }
    }
    /**
     * If set to true the tag has focus state and becomes a clickable link
     * @param {boolean} value true or false depending if the tag is clickable
     */
    set clickable(value) {
        const isClickable = stringToBool(value);
        if (isClickable) {
            this.setAttribute(attributes.CLICKABLE, value.toString());
        }
        else {
            this.removeAttribute(attributes.CLICKABLE);
        }
        const clickableContainer = this.container || this;
        if (clickableContainer) {
            if (isClickable) {
                this.#appendIcon('caret-right');
                clickableContainer.classList.add(attributes.FOCUSABLE);
                clickableContainer.setAttribute(attributes.TABINDEX, '0');
                this.#attachKeyboardListeners();
            }
            else {
                this.#removeIcon('caret-right');
                clickableContainer.removeAttribute(attributes.TABINDEX);
                clickableContainer.classList.remove(attributes.FOCUSABLE);
            }
        }
    }
    /**
     * Gets clickable state
     * @returns {boolean} true or false depending if the tag is clickable
     */
    get clickable() {
        return stringToBool(this.getAttribute(attributes.CLICKABLE));
    }
    /**
     * Establish Internal Event Handlers
     * @private
     * @returns {object} The object for chaining.
     */
    #attachEventHandlers() {
        // Handle Clicking the x for dismissible
        const closeIcon = this.querySelector('ids-icon[icon="close"]');
        if (closeIcon) {
            this.offEvent('click', closeIcon);
            this.onEvent('click', closeIcon, () => {
                if (!this.disabled) {
                    this.dismiss();
                }
            });
        }
        // Ensure icon is always last
        let isChanging = false;
        this.offEvent('slotchange', this.shadowRoot?.querySelector('slot'));
        this.onEvent('slotchange', this.shadowRoot?.querySelector('slot'), () => {
            if (this.dismissible && !isChanging && this.lastElementChild?.nodeName !== 'IDS-ICON') {
                isChanging = true;
                this.#removeIcon('close');
                this.#appendIcon('close');
                isChanging = false;
            }
        });
        return this;
    }
    /**
     * Establish Internal Keyboard shortcuts
     * @private
     * @returns {object} This API object for chaining
     */
    #attachKeyboardListeners() {
        if (this.dismissible) {
            this.listen(['Delete', 'Backspace'], this, () => {
                this.dismiss();
            });
        }
        if (this.clickable) {
            this.listen('Enter', this, () => {
                this.click();
            });
        }
        return this;
    }
    /**
     * Remove the tag from the page
     */
    dismiss() {
        if (!this.dismissible) {
            return;
        }
        let canDismiss = true;
        const response = (veto) => {
            canDismiss = !!veto;
        };
        this.triggerEvent('beforetagremove', this, { bubbles: true, detail: { elem: this, response } });
        if (!canDismiss) {
            return;
        }
        this.triggerEvent('tagremove', this, { bubbles: true, detail: { elem: this } });
        this.remove();
        this.triggerEvent('aftertagremove', this, { detail: { elem: this } });
    }
};
IdsTag = __decorate([
    customElement('ids-tag'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsTag);
export default IdsTag;
//# sourceMappingURL=ids-tag.js.map