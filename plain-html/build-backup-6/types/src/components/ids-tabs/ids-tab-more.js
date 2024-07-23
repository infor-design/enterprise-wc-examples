var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement } from '../../core/ids-decorators';
import { attributes } from '../../core/ids-attributes';
import { stringToBool, buildClassAttrib, removeNewLines } from '../../utils/ids-string-utils/ids-string-utils';
import Base from './ids-tab-more-base';
import '../ids-popup-menu/ids-popup-menu';
import '../ids-text/ids-text';
const MORE_ACTIONS_SELECTOR = `[${attributes.MORE_ACTIONS}]`;
/**
 * IDS Tab Component
 * @type {IdsTabMore}
 * @inherits IdsElement
 * @part container - the tab container itself
 * @mixes IdsEventsMixin
 * @private
 */
let IdsTabMore = class IdsTabMore extends Base {
    constructor() {
        super();
    }
    static get attributes() {
        return [
            ...super.attributes,
            attributes.OVERFLOW
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.#attachMoreMenuEvents();
        this.renderOverflowedItems();
        this.#configureMenu();
    }
    /**
     * Create the Template for the contents
     * @returns {string} the template to render
     */
    template() {
        const count = 4;
        const cssClassAttr = buildClassAttrib('ids-tab', 'more', this.selected, this.orientation);
        const selectedAttr = this.selected ? ' font-weight="bold"' : '';
        return `<div id="tab-more" ${cssClassAttr} tabindex="-1" part="container">
      <span class="tab-more-text">
        <ids-text id="count">${count}</ids-text>
        <ids-text id="more-text" size="22"${selectedAttr} translate-text="true">More</ids-text>
        <ids-icon icon="dropdown"></ids-icon>
      </span>
      <ids-popup-menu id="tab-more-menu" target="#tab-more">
        <slot></slot>
      </ids-popup-menu>
    </div>`;
    }
    /**
     * @readonly
     * @returns {HTMLElement} the inner popup menu
     */
    get menu() {
        return this.shadowRoot?.querySelector('ids-popup-menu');
    }
    get moreActionsGroup() {
        return this.querySelector(MORE_ACTIONS_SELECTOR);
    }
    /**
     * @readonly
     * @returns {Array<HTMLElement>} list of manually-defined menu items
     */
    get predefinedMenuItems() {
        return [...this.querySelectorAll(`:scope > ids-menu-group:not(${MORE_ACTIONS_SELECTOR}) > ids-menu-item`)];
    }
    /**
     * @readonly
     * @returns {Array<HTMLElement>} list of menu items that mirror Tabs
     */
    get overflowMenuItems() {
        const moreActionsGroup = this.moreActionsGroup;
        if (moreActionsGroup) {
            return [...moreActionsGroup.children];
        }
        return [];
    }
    /**
     * @readonly
     * @returns {Array<any>} array of IdsTab elements that can be placed in Overflow
     */
    get availableOverflowTabs() {
        return this.parentElement?.tabListElements;
    }
    /**
     * @private
     * @returns {string} the template for the More Actions Menu Group
     */
    #moreActionsMenuTemplate() {
        const childTabs = this.availableOverflowTabs;
        const renderedTabItems = childTabs?.map((i) => this.#moreActionsItemTemplate(i)).join('') || '';
        // Cycle through tabs, if present, and render a menu item that represents them
        return `<ids-menu-group ${attributes.MORE_ACTIONS}>
      ${renderedTabItems}
    </ids-menu-group>`;
    }
    /**
     * @private
     * @param {HTMLElement} item an element from inside the Tab List that will be mirrored in the More Actions menu
     * @param {boolean} isSubmenuItem true if the item provided is a submenu item
     * @returns {string} representing a single menu item
     */
    #moreActionsItemTemplate(item, isSubmenuItem = false) {
        let text = '';
        let icon = '';
        let hidden = '';
        let disabled = '';
        let submenu = '';
        let overflowed = '';
        let value = '';
        if (!isSubmenuItem) {
            overflowed = this.isOverflowed(item) ? '' : ' hidden';
        }
        // Handles regular tabs
        const handleTab = (thisItem) => {
            text = thisItem.textContent;
            if (thisItem.disabled)
                disabled = ' disabled';
            if (thisItem.value)
                value = ` value="${thisItem.value}"`;
            const tabIcon = thisItem.querySelector('ids-icon');
            if (tabIcon) {
                icon = ` icon="${tabIcon.icon}"`;
            }
        };
        // Top-level Menus/Submenus are handled by this same method
        const handleSubmenu = (thisItem) => {
            const menuProp = isSubmenuItem ? 'submenu' : 'menuEl';
            if (thisItem[menuProp]) {
                const thisSubItems = thisItem[menuProp].items;
                submenu = `<ids-popup-menu slot="submenu">
          ${thisSubItems.map((subItem) => this.#moreActionsItemTemplate(subItem, true)).join('') || ''}
        </ids-popup-menu>`;
            }
        };
        // These represent menu items in Dropdown Tabs, which can be hidden.
        const handleMenuItem = (thisItem) => {
            if (thisItem.disabled)
                disabled = ' disabled';
            if (thisItem.icon)
                icon = ` icon="${thisItem.icon}"`;
            if (thisItem.hidden)
                hidden = ` hidden`;
            text = thisItem.text;
            if (thisItem.submenu) {
                handleSubmenu(thisItem);
            }
        };
        switch (item.tagName) {
            case 'IDS-TAB-DROPDOWN':
                handleTab(item);
                handleSubmenu(item);
                break;
            case 'IDS-MENU-ITEM':
                handleMenuItem(item);
                break;
            case 'IDS-TAB':
                handleTab(item);
                break;
            default:
                text = item.textContent;
                break;
        }
        // Sanitize text from Tabs to fit menu items
        text = removeNewLines(text)?.trim();
        return `<ids-menu-item${disabled}${icon}${hidden || overflowed}${value}>
      ${text}
      ${submenu}
    </ids-menu-item>`;
    }
    /**
     * Refreshes the visible state of menu items representing "overflowed" elements,
     * and hides/shows this component from view
     * @returns {void}
     */
    refreshOverflowedItems() {
        let overflowed = 0;
        this.hidden = false;
        this.overflowMenuItems.forEach((item) => {
            const doHide = !this.isOverflowed(item.overflowTarget);
            item.hidden = doHide;
            if (doHide) {
                item.overflowTarget.removeAttribute(attributes.OVERFLOWED);
            }
            else {
                item.overflowTarget.setAttribute(attributes.OVERFLOWED, '');
                overflowed++;
            }
        });
        const countElem = this.container?.querySelector('#count');
        if (countElem)
            countElem.innerHTML = `${overflowed}`;
        this.hidden = !this.hasVisibleActions();
        if (!this.hasVisibleActions()) {
            this.menu?.hide();
        }
        this.disabled = !this.hasEnabledActions();
    }
    /**
     * Re-renders the overflowed items
     * @private
     */
    renderOverflowedItems() {
        // Render the "More Actions" area if it doesn't exist
        const el = this.querySelector(MORE_ACTIONS_SELECTOR);
        if (el && !this.overflow) {
            el.remove();
            return;
        }
        this.innerHTML = '';
        this.insertAdjacentHTML('afterbegin', this.#moreActionsMenuTemplate());
        // Connects Overflow Menu subitems with corresponding menu items in the Tab List
        // (generally by way of IdsMenuButtons or other menu-driven components)
        const handleSubmenu = (thisItem, overflowTargetMenu) => {
            if (!overflowTargetMenu)
                return;
            [...thisItem.submenu.children].forEach((item, i) => {
                item.overflowTarget = overflowTargetMenu.items[i];
                if (item.submenu) {
                    handleSubmenu(item, item.overflowTarget.submenu);
                }
            });
        };
        // Connect all "More Action" items generated from Tabs to their
        // real counterparts in the Tab List
        const moreActionsGroup = this.moreActionsGroup;
        const parentTabs = this.availableOverflowTabs;
        const overflowMenuItems = this.overflowMenuItems;
        if (parentTabs?.length) {
            parentTabs.forEach((tab, i) => {
                // Draws new "missing" menu items that may have
                // been added by a slotchange or other event
                let menuItem = overflowMenuItems[i];
                if (!menuItem) {
                    moreActionsGroup.insertAdjacentHTML('beforeend', this.#moreActionsItemTemplate(tab));
                    menuItem = moreActionsGroup[moreActionsGroup.length - 1];
                }
                menuItem.overflowTarget = tab;
                if (menuItem.submenu) {
                    handleSubmenu(menuItem, menuItem.overflowTarget.menuEl);
                }
            });
        }
    }
    /**
     * @param {boolean | string} val truthy if this More Actions menu should display overflowed Tabs from the Tab List
     */
    set overflow(val) {
        const newValue = stringToBool(val);
        const currentValue = this.overflow;
        if (newValue !== currentValue) {
            if (newValue) {
                this.setAttribute(attributes.OVERFLOW, '');
            }
            else {
                this.removeAttribute(attributes.OVERFLOW);
            }
        }
    }
    /**
     * @returns {boolean} true if this More Actions menu will display overflowed Tabs from the Tab List
     */
    get overflow() {
        return this.hasAttribute(attributes.OVERFLOW);
    }
    /**
     * @returns {boolean} true if there are currently visible actions in this menu
     */
    hasVisibleActions() {
        return this.querySelectorAll(':scope > ids-menu-group > ids-menu-item:not([hidden])').length > 0;
    }
    /**
     * @returns {boolean} true if there are currently enabled (read: not disabled) actions in this menu
     */
    hasEnabledActions() {
        return this.querySelectorAll(':scope > ids-menu-group > ids-menu-item:not([disabled])').length > 0;
    }
    /**
     * @param {HTMLElement} tab reference to the Tab to be checked for overflow
     * @returns {boolean} true if the Tab belongs to this Tab List and should be displayed by overflow
     */
    isOverflowed(tab) {
        if (!this.parentElement?.contains(tab)) {
            return false;
        }
        if (tab.isEqualNode(this)) {
            return false;
        }
        if (tab.hidden) {
            return false;
        }
        const tabRect = tab.getBoundingClientRect();
        const moreTabRect = this.parentElement?.moreContainer?.getBoundingClientRect();
        if (this.locale?.isRTL()) {
            // Beyond left edge
            return tabRect.left < moreTabRect.right - 1;
        }
        // Beyond right edge
        return tabRect.right > moreTabRect.left + 1;
    }
    #configureMenu() {
        this.menu.width = '100%';
        this.menu.popup.align = 'bottom, left';
        this.menu.popup.y = -10;
        this.menu.popup.alignTarget = this.container;
    }
    #attachMoreMenuEvents() {
        this.onEvent('beforeshow', this.menu, (e) => {
            // Reflect this event to the host element
            this.triggerEvent('beforeshow', this, {
                bubbles: e.bubbles,
                detail: e.detail
            });
            this.refreshOverflowedItems();
        });
        this.onEvent('click', this, () => {
            if (!this.menu.visible) {
                this.menu.show();
            }
            else {
                this.menu.hide();
            }
        });
        this.onEvent('selected', this.menu, (e) => {
            const elem = e.detail.elem;
            if (elem.overflowTarget) {
                elem.overflowTarget.click();
            }
        });
    }
};
IdsTabMore = __decorate([
    customElement('ids-tab-more'),
    __metadata("design:paramtypes", [])
], IdsTabMore);
export default IdsTabMore;
//# sourceMappingURL=ids-tab-more.js.map