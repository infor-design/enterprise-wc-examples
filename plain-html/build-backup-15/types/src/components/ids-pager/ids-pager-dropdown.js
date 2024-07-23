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
import { stringToNumber } from '../../utils/ids-string-utils/ids-string-utils';
// Import Utils
import Base from './ids-pager-dropdown-base';
import './ids-pager-button';
import './ids-pager-input';
import './ids-pager-number-list';
import styles from './ids-pager.scss';
/**
 * IDS Pager Component
 * @type {IdsPagerDropdown}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part container the overall ids-pager-dropdown container
 */
let IdsPagerDropdown = class IdsPagerDropdown extends Base {
    rootNode;
    DEFAULT_PAGE_SIZE = 10;
    constructor() {
        super();
    }
    /**
     * Reference to the pager parent
     * @returns {IdsPager} the parent element
     */
    get pager() {
        if (!this.rootNode)
            this.rootNode = this.getRootNode?.()?.host;
        if (this.rootNode?.nodeName !== 'IDS-PAGER')
            this.rootNode = this.closest('ids-pager');
        return this.rootNode;
    }
    /**
     * Reference to ids-menu-button#pager-size-menu-button
     * @returns {HTMLElement} <ids-menu-button>
     */
    get menuButton() { return this.container?.querySelector('ids-menu-button'); }
    /**
     * Reference to ids-popup-menu#pager-size-menu
     * @returns {HTMLElement} <ids-popup-menu>
     */
    get popupMenu() { return this.container?.querySelector('ids-popup-menu'); }
    static get attributes() {
        return [
            attributes.DISABLED,
            attributes.LABEL,
            attributes.MODE,
            attributes.TOTAL,
            attributes.PAGE_SIZE,
            attributes.PAGE_NUMBER,
        ];
    }
    template() {
        return `
      <div class="ids-pager-dropdown">
        <ids-menu-button id="pager-size-menu-button" menu="pager-size-menu" role="button" dropdown-icon>
          <span>${this.pageSize} ${this.label}</span>
        </ids-menu-button>
        <ids-popup-menu id="pager-size-menu" target="#pager-size-menu-button" trigger-type="click">
          ${this.#itemsTemplate()}
        </ids-popup-menu>
      </div>
    `;
    }
    /**
     * Get items template
     * @private
     * @param {number} pageSize The page size value
     * @returns {string} items template
     */
    #itemsTemplate(pageSize) {
        pageSize = pageSize ?? this.pageSize;
        const sizes = [5, 10, 25, 50, 100];
        const uniqueSizes = [...new Set([pageSize, ...sizes])].sort((a, b) => a - b);
        const items = uniqueSizes.map((size) => {
            const selected = size === pageSize ? ' selected' : '';
            return `<ids-menu-item value="${size}"${selected}>${size}</ids-menu-item>`;
        }).join('');
        return `<ids-menu-group select="single">${items}</ids-menu-group>`;
    }
    /**
     * Set the label for the pager-dropdown button
     * @param {string} value - the pager-dropdown's button label
     */
    set label(value) { this.setAttribute(attributes.LABEL, value); }
    /**
     * Get the label for the pager-dropdown button
     * @returns {string} - the pager-dropdown's button label
     */
    get label() {
        const labelText = this.pageSize > 1 ? 'Records per page' : 'Record per page';
        return this.getAttribute(attributes.LABEL) || labelText;
    }
    /**
     * Set the page-size attribute
     * @param {number} value - new the page-size
     */
    set pageSize(value) {
        const val = this.#validPageSize(value);
        if (this.menuButton?.menuEl?.items) {
            this.menuButton.querySelector('span').textContent = `${val} ${this.label}`;
            const item = this.menuButton.menuEl.items.filter((itm) => itm.value === String(val))[0];
            if (item)
                this.menuButton.menuEl.selectItem(item);
            else
                this.menuButton.menuEl.innerHTML = this.#itemsTemplate(val);
        }
        this.setAttribute(attributes.PAGE_SIZE, String(val));
    }
    /**
     * Get the page-size attribute
     * @returns {number} - the current page-size
     */
    get pageSize() {
        return this.pager?.pageSize
            ?? this.#validPageSize(this.getAttribute(attributes.PAGE_SIZE));
    }
    /**
     * Check given page size value, if not a number return default
     * @private
     * @param {number | string | null} value The value
     * @returns {number} Given value or default
     */
    #validPageSize(value) {
        const val = stringToNumber(value);
        return !Number.isNaN(val) && val > 0 ? val : this.DEFAULT_PAGE_SIZE;
    }
    /**
     * React to attributes changing on the web-component
     * @param {string} name The property name
     * @param {string} oldValue The property old value
     * @param {string} newValue The property new value
     */
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (oldValue === newValue)
            return;
        const shouldRerender = [
            attributes.DISABLED,
            attributes.LABEL,
            attributes.MODE,
            attributes.TOTAL,
            attributes.PAGE_SIZE,
            attributes.PAGE_NUMBER
        ].includes(name);
        if (shouldRerender) {
            this.connectedCallback();
        }
    }
    connectedCallback() {
        super.connectedCallback?.();
        const pageSize = this.pager?.pageSize ?? this.pageSize;
        if (this.pager)
            this.pageSize = pageSize;
        const popupMenu = this.popupMenu;
        if (popupMenu) {
            popupMenu.style.position = 'relative';
            if (popupMenu.popup) {
                popupMenu.popup.type = 'menu';
            }
        }
        const popupMenuGroup = popupMenu?.querySelector('ids-menu-group');
        if (popupMenuGroup) {
            popupMenuGroup.style.minWidth = '175px';
            popupMenuGroup.style.textAlign = 'left';
            const sel = stringToNumber(popupMenu?.getSelectedValues?.()?.[0]);
            if (!Number.isNaN(sel) && sel !== pageSize) {
                popupMenu?.setSelectedValues?.(String(pageSize), popupMenuGroup);
            }
        }
        this.#attachEventListeners();
    }
    #attachEventListeners() {
        const popupMenu = this.popupMenu;
        if (popupMenu) {
            this.offEvent('selected', popupMenu);
            this.onEvent('selected', popupMenu, (evt) => {
                const oldPageSize = this.pageSize;
                const newPageSize = stringToNumber(evt.detail?.value || oldPageSize);
                if (newPageSize !== oldPageSize) {
                    this.triggerEvent('pagesizechange', this, {
                        bubbles: true,
                        composed: true,
                        detail: { elem: this, value: newPageSize }
                    });
                }
            });
        }
    }
};
IdsPagerDropdown = __decorate([
    customElement('ids-pager-dropdown'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsPagerDropdown);
export default IdsPagerDropdown;
//# sourceMappingURL=ids-pager-dropdown.js.map