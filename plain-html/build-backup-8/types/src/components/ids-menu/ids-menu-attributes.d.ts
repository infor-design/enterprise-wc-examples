export type IdsMenuItemData = {
    id?: string;
    comment?: string;
    disabled?: boolean;
    icon?: string;
    selected?: boolean;
    shortcutKeys?: string;
    submenu?: IdsMenuData;
    text: string;
    type: 'item';
    value?: string | null;
};
export type IdsMenuHeaderData = {
    for?: string;
    text: string;
    type: 'header';
};
export type IdsMenuSeparatorData = {
    type: 'separator';
};
export type IdsMenuContentsData = Array<IdsMenuGroupData | IdsMenuSeparatorData | IdsMenuHeaderData>;
export type IdsMenuGroupData = {
    id?: string;
    items: Array<IdsMenuItemData | IdsMenuSeparatorData | IdsMenuHeaderData>;
    select?: 'none' | 'single' | 'multiple';
    type?: 'group';
};
export type IdsMenuObjectData = {
    id?: string;
    contents?: IdsMenuContentsData;
    length?: number;
};
export type IdsMenuData = IdsMenuObjectData | IdsMenuContentsData;
declare const MENU_GROUP_SELECT_TYPES: string[];
declare const MENU_ITEM_ICON_SIZE = "small";
declare const MENU_DEFAULTS: any;
/**
 * Determines if a menu item's stored value can safely be described by its attribute inside the DOM.
 * @param {any} value the value to be checked
 * @returns {boolean} true if the value can be "stringified" safely for the DOM attribute
 */
declare function safeForAttribute(value: any): boolean;
/**
 * @private
 * @param {string|HTMLElement} menuGroup the group to search for
 * @param {HTMLElement} idsMenu the parent menu element
 * @returns {HTMLElement|undefined} if valid, a reference to the menu group.
 * Otherwise, returns undefined.
 */
declare function isValidGroup(menuGroup: any, idsMenu: any): undefined;
/**
 * @private
 * @param {HTMLElement} item the element to be checked
 * @param {HTMLElement} idsMenu the parent menu element
 * @returns {boolean} true if the provided element is a "currently-usable" IdsMenuItem type.
 */
declare function isUsableItem(item: any, idsMenu: any): any;
export { MENU_GROUP_SELECT_TYPES, MENU_ITEM_ICON_SIZE, MENU_DEFAULTS, safeForAttribute, isValidGroup, isUsableItem };
