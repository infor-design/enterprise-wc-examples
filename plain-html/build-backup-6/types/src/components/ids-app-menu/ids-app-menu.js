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
import Base from './ids-app-base';
import '../ids-drawer/ids-drawer';
import '../ids-accordion/ids-accordion';
import '../ids-button/ids-button';
import '../ids-icon/ids-icon';
import '../ids-text/ids-text';
import '../ids-toolbar/ids-toolbar';
import { getClosest } from '../../utils/ids-dom-utils/ids-dom-utils';
import styles from './ids-app-menu.scss';
const CONTAINER_CLASS = 'app-menu';
const CONTAINER_OPEN_CLASS = 'app-menu-is-open';
/**
 * IDS App Menu Component
 * @type {IdsAppMenu}
 * @inherits IdsDrawer
 * @part avatar - the user avatar
 * @part accordion - the accordion root element
 */
let IdsAppMenu = class IdsAppMenu extends Base {
    globalKeydownListener;
    constructor() {
        super();
    }
    #container;
    connectedCallback() {
        super.connectedCallback();
        this.edge = 'start';
        this.type = 'app-menu';
        this.#connectSearchField();
        this.#refreshVariants();
        this.#setContainer();
        this.#attachEventHandlers();
    }
    disconnectedCallback() {
        super.disconnectedCallback?.();
        this.#detachEventHandlers();
        this.#clearContainer();
    }
    static get attributes() {
        return [...super.attributes];
    }
    // Slots:
    // - Avatar
    // - Roles (Accordion)
    // - Header Nav (Toolbar)
    // - Searchfield
    // - Content (Accordion)
    // - Footer Nav (Toolbar)
    template() {
        return `<div class="ids-drawer ids-app-menu type-app-menu">
      <div class="ids-app-menu-user">
        <slot name="avatar"></slot>
        <slot name="username"></slot>
      </div>
      <div class="ids-app-menu-header">
        <slot name="header"></slot>
      </div>
      <div class="ids-app-menu-search">
        <slot name="search"></slot>
      </div>
      <div class="ids-app-menu-content">
        <slot></slot>
      </div>
      <div class="ids-app-menu-footer">
        <slot name="footer"></slot>
      </div>
      <div class="ids-app-menu-branding">
        <slot name="icon"></slot>
      </div>
    </div>`;
    }
    /**
     * @readonly
     * @returns {IdsAccordion} reference to an optionally-slotted IdsAccordion element
     */
    get accordion() {
        return this.querySelector(`ids-accordion:not([slot])`);
    }
    /**
     * @readonly
     * @property {boolean} isFiltered true if the inner navigation accordion is currently being filtered
     */
    isFiltered = false;
    #refreshVariants() {
        const accordions = [...this.querySelectorAll('ids-accordion')];
        accordions.forEach((acc) => {
            acc.colorVariant = 'app-menu';
        });
        const btns = [...this.querySelectorAll('ids-button')];
        btns.forEach((btn) => {
            btn.colorVariant = 'alternate';
        });
    }
    #attachEventHandlers() {
        this.#detachEventHandlers();
        this.onEvent('show.app-menu-show', this, () => {
            this.#container?.classList.add(CONTAINER_OPEN_CLASS);
        });
        this.onEvent('hide.app-menu-hide', this, () => {
            this.#container?.classList.remove(CONTAINER_OPEN_CLASS);
        });
    }
    #detachEventHandlers() {
        this.offEvent('show.app-menu-show');
        this.offEvent('hide.app-menu-hide');
    }
    /**
     * Adds CSS class to ids-container for initial CSS rules
     */
    #setContainer() {
        this.#container = getClosest(this, 'ids-container');
        this.#container?.classList.add(CONTAINER_CLASS);
    }
    #clearContainer() {
        this.#container?.classList.remove(CONTAINER_CLASS, CONTAINER_OPEN_CLASS);
        this.#container = null;
    }
    /**
     * Attaches a slotted IdsSearchField component to the app menu
     */
    #connectSearchField() {
        const searchfield = this.querySelector('ids-search-field[slot="search"]');
        if (searchfield) {
            searchfield.onSearch = (value) => {
                if (value !== '') {
                    return this.filterAccordion(value);
                }
                this.clearFilterAccordion();
                return [];
            };
            this.offEvent('cleared.search');
            this.onEvent('cleared.search', searchfield, () => this.clearFilterAccordion());
        }
    }
    /**
     * Inherited from the Popup Open Events Mixin.
     * Runs when a click event is propagated to the window.
     * @returns {void}
     */
    onOutsideClick() {
        // Don't close the popup if md+ media query breakpoint
        if (window.innerWidth < 840) {
            this.hide();
        }
    }
    /**
     * Performs a filter operation on accordion panels
     * @param {string} value text value with which to filter accordion panels
     * @returns {Array<HTMLElement>} containing matching accordion panels
     */
    filterAccordion = (value = '') => {
        // Do nothing if there is no accordion, or there are no accordion panels
        if (!this.accordion) {
            return [];
        }
        const panels = [...this.accordion.querySelectorAll('ids-accordion-panel')];
        if (!panels.length) {
            return [];
        }
        // Always remove previous highlight before applying a new one
        this.clearFilterAccordion();
        // Check each accordion panel for a match.
        // Accordion panels are shown/hidden as needed
        const valueRegex = new RegExp(value, 'gi');
        const markParentPanel = (thisPanel) => {
            if (thisPanel.hasParentPanel) {
                const parentPanel = thisPanel.parentElement;
                const parentHeader = parentPanel.header;
                if (!parentPanel.expanded) {
                    parentPanel.expanded = true;
                }
                parentHeader.childFilterMatch = true;
                markParentPanel(parentPanel);
            }
        };
        return panels.filter((panel) => {
            const header = panel.header;
            const textContent = header.textContent.trim();
            const hasTextMatch = textContent.match(valueRegex);
            if (hasTextMatch) {
                // Highlight
                // NOTE: Apply text highlighter here (See #494)
                if (header.hiddenByFilter) {
                    header.hiddenByFilter = false;
                }
                markParentPanel(panel);
                this.isFiltered = true;
                return header;
            }
            // Unhighlight
            if (!header.hiddenByFilter) {
                header.hiddenByFilter = true;
            }
        });
    };
    /**
     * Clears a navigation accordion's previous filter result
     * @private
     */
    clearFilterAccordion() {
        const filteredHeaders = [...this.accordion?.querySelectorAll('ids-accordion-header[hidden-by-filter]') ?? []];
        filteredHeaders.map((header) => {
            header.hiddenByFilter = false;
            return header;
        });
        // NOTE: Clear text highlighter here (See #494)
        this.#clearChildFilter();
        this.isFiltered = false;
    }
    /**
     * Resets the "child-filter-match" attribute on any accordion headers who's children matched a previous filter result
     * @returns {void}
     */
    #clearChildFilter() {
        const childFilterMatches = [...this.accordion?.querySelectorAll('[child-filter-match]') ?? []];
        childFilterMatches.map((header) => {
            header.childFilterMatch = false;
            return header;
        });
    }
    /**
     * Overrides `addOpenEvents` from IdsPopupOpenEventsMixin to add a global handler
     * for App Menu keyboard events that can cause the menu to close
     */
    addOpenEvents() {
        super.addOpenEvents();
        this.globalKeydownListener = (e) => {
            if (e.key === 'Escape') {
                e.stopImmediatePropagation();
                this.hide();
            }
        };
        document.addEventListener('keydown', this.globalKeydownListener);
    }
    /**
     * Overrides `removeOpenEvents` from IdsPopupOpenEventsMixin
     */
    removeOpenEvents() {
        super.removeOpenEvents();
        if (this.globalKeydownListener)
            document.removeEventListener('keydown', this.globalKeydownListener);
    }
};
IdsAppMenu = __decorate([
    customElement('ids-app-menu'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsAppMenu);
export default IdsAppMenu;
//# sourceMappingURL=ids-app-menu.js.map