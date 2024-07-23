import IdsButton from '../ids-button/ids-button';
import '../ids-icon/ids-icon';
import '../ids-popup-menu/ids-popup-menu';
import '../ids-menu/ids-menu-group';
import '../ids-menu/ids-menu-item';
import type IdsIcon from '../ids-icon/ids-icon';
/**
 * IDS Menu Button Component
 * @type {IdsMenuButton}
 * @inherits IdsButton
 */
export default class IdsMenuButton extends IdsButton {
    #private;
    constructor();
    /**
     * @returns {Array} containing configurable attributes on this component
     */
    static get attributes(): string[];
    /**
     * Toggle-Button-level `connectedCallback` implementation (adds an icon refresh)
     * @returns {void}
     */
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * @returns {string[]} containing CSS classes that will be added to the buttons
     */
    get protoClasses(): string[];
    /**
     * @param {boolean | string} val true if the component should be disabledd
     */
    set disabled(val: boolean | string);
    /**
     * @returns {boolean} true if the component is disabled
     */
    get disabled(): boolean;
    /**
     * @param {boolean | string} val true if the menu button should adopt a selected menu item's text content when chosen
     */
    set displaySelectedText(val: boolean | string);
    /**
     * @returns {string} true if the menu button will adopt a selected menu item's text content when chosen
     */
    get displaySelectedText(): boolean | string;
    /**
     * @param {string|undefined} val referencing an icon string name to use
     */
    set dropdownIcon(val: string | null);
    /**
     * @returns {string|undefined} containing the type of icon being displayed as the Dropdown Icon
     */
    get dropdownIcon(): string | null;
    /**
     * @returns {HTMLElement|null} the decorative dropdown icon element
     */
    get dropdownIconEl(): IdsIcon | null | undefined;
    /**
     * @returns {string|null} an ID selector string matching a menu
     */
    get menu(): string | null;
    /**
     * @param {string|null} val an ID selector string
     */
    set menu(val: string | null);
    /**
     * Retrieves a list of selected items from menu.
     * @returns {Array<any>} list of the values contained by selected menu items
     */
    get value(): any;
    /**
     * Set menu's selected items by value
     * @param {Array<any>|string} values array|string of value(s) contained in menu items
     * @returns {void}
     */
    set value(values: any);
    /**
     * @readonly
     * @returns {HTMLElement | null} element if one is present
     */
    get menuEl(): any;
    /**
     * @returns {void}
     */
    configureMenu(): void;
    /**
     * Set button's active state
     * @param {boolean} isActive true when menu is open
     */
    setActiveState(isActive: boolean): void;
    /**
     * @returns {void}
     */
    resizeMenu(): void;
    /**
     * @returns {void}
     */
    setPopupArrow(): void;
    /**
     * Set the formatter width for menu button
     * @param {string | number} value The formatter width value
     */
    set formatterWidth(value: string | number);
}
