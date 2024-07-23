/**
 * Shared in between tree.
 * @private
 * @returns {void}
 */
declare const IdsTreeShared: {
    /**
     * Default settings
     */
    DEFAULTS: {
        collapseIcon: string;
        expandIcon: string;
        expanded: boolean;
        icon: string;
        selectable: string;
        useToggleTarget: boolean;
        toggleCollapseIcon: string;
        toggleExpandIcon: string;
        toggleIconRotate: boolean;
    };
    SELECTABLE: string[];
    EVENTS: {
        beforeselected: string;
        selected: string;
        beforeunselected: string;
        unselected: string;
        beforecollapsed: string;
        collapsed: string;
        beforeexpanded: string;
        expanded: string;
    };
    TOGGLE_CLASSES: {
        collapsed: string;
        expanded: string;
    };
    TREE_ARIA_LABEL: string;
    /**
     * Get the value for given attribute.
     * @param {HTMLElement} elem The element.
     * @param {string} attr The attribute name to get the value.
     * @returns {string|null} The value or default value
     */
    getVal(elem: any, attr: string): any;
    /**
     * Get the boolean value for given attribute.
     * @param {HTMLElement} elem The element.
     * @param {string} attr The attribute name to get the value.
     * @returns {boolean} The value
     */
    getBoolVal(elem: any, attr: string): any;
    /**
     * Check the given value is boolean.
     * @param {boolean|string} val The value.
     * @returns {boolean} true if the value boolean
     */
    isBool(val: boolean | string): boolean;
};
export default IdsTreeShared;
