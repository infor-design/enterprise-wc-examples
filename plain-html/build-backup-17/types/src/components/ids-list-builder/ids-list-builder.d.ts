import '../ids-toolbar/ids-toolbar';
import IdsListView from '../ids-list-view/ids-list-view';
import IdsSwappableItem from '../ids-swappable/ids-swappable-item';
import type IdsToolbar from '../ids-toolbar/ids-toolbar';
import type IdsSwappable from '../ids-swappable/ids-swappable';
/**
 * IDS ListBuilder Component
 * @type {IdsListBuilder}
 * @inherits IdsListView
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part container - the container element
 */
export default class IdsListBuilder extends IdsListView {
    #private;
    /**
     * Call the constructor and then initialize
     */
    constructor();
    /**
     * A clone of the list item being dragged,
     * it appears during drag to help visualize where the dragged item's position
     */
    placeholder: any;
    /**
     * List of actions can be performed
     */
    actions: {
        ADD: string;
        EDIT: string;
        DELETE: string;
        MOVE_UP: string;
        MOVE_DOWN: string;
    };
    connectedCallback(): void;
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array<string>} The attributes in an array
     */
    static get attributes(): Array<string>;
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template(): string;
    /**
     * Get toolbar template
     * @returns {string} The template
     */
    toolbarTemplate(): string;
    /**
     * Get toolbar button template
     * @param {object} [options] The button options
     * @param {string} [options.action] The button action
     * @param {string} [options.icon] The button icon
     * @param {string} [options.text] The button text
     * @returns {string} The template
     */
    buttonTemplate(options: {
        action: string;
        icon: string;
        text: string;
    }): string;
    /**
     * Get the parent element
     * @returns {IdsToolbar|null} the parent element
     */
    get parentEl(): IdsSwappable | null | undefined;
    /**
     * Get the toolbar element
     * @returns {IdsToolbar|null} the toolbar element
     */
    get toolbar(): IdsToolbar | null;
    /**
     * Set the selection mode of the listview
     * @param {string} value true to use virtual scrolling
     */
    set selectable(value: string | null);
    get selectable(): string | null;
    get dataKeys(): Array<any>;
    set dataKeys(val: Array<any>);
    get data(): Array<any>;
    /**
     * Set the data set of the list
     * @param {Array<any>} val The list of items
     */
    set data(val: Array<any>);
    get selectedLi(): IdsSwappableItem | null | undefined;
    get allSelectedLi(): NodeListOf<IdsSwappableItem> | undefined;
    /**
     * Helper function for swapping nodes in the list item -- used when dragging list items or clicking the up/down arrows
     * @param {Node} nodeA the first node
     * @param {Node} nodeB the second node
     */
    swap(nodeA: Node, nodeB: Node): void;
    /**
     * Add new item
     * @returns {void}
     */
    add(): void;
    /**
     * Delete selected
     * @returns {void}
     */
    delete(): void;
    /**
     * Edit selected item
     * @returns {void}
     */
    edit(): void;
    /**
     * Move up selected
     * @returns {void}
     */
    moveUp(): void;
    /**
     * Move down selected
     * @returns {void}
     */
    moveDown(): void;
    /**
     * Get focused Li
     * @returns {any} focused Li
     */
    getFocusedLi(): any;
    /**
     * Reset indices
     * @returns {void}
     */
    resetIndices(): void;
    set virtualScroll(value: string | boolean);
    /**
     * List builder does not support VS
     * @returns {boolean} false
     */
    get virtualScroll(): boolean;
}
