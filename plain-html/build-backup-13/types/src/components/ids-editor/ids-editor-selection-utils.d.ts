export interface IdsEditorBlockElem {
    /** The block element */
    el: HTMLElement;
    /** The value filter */
    tagName: string;
}
/**
 * Get block element and tagName for given node
 * @param {Selection} sel The selection.
 * @returns {IdsEditorBlockElem} The element and tagname
 */
export declare function blockElem(sel: Selection): IdsEditorBlockElem;
/**
 * Get list of block elements for selection
 * @param {Selection} sel The selection.
 * @param {HTMLElement} elem The element.
 * @returns {Array<HTMLElement>} List of selection block elements
 */
export declare function selectionBlockElems(sel: Selection, elem: HTMLElement): Array<HTMLElement>;
/**
 * Save current selection.
 * @param {Selection} sel The selection.
 * @returns {Array<Range>|null} The selection ranges.
 */
export declare function saveSelection(sel: Selection): Array<Range> | null;
/**
 * Restore selection.
 * @param {Selection} sel The selection.
 * @param {Array<Range>|null} savedSel Saved selection ranges.
 * @returns {void}
 */
export declare function restoreSelection(sel: Selection, savedSel: Array<Range> | null): void;
/**
 * Get all selection parents.
 * @param {Selection} sel The selection.
 * @param {HTMLElement} elem The element.
 * @returns {object} List of selection parents.
 */
export declare function selectionParents(sel: Selection, elem: HTMLElement): object;
/**
 * Find element within the selection
 * http://stackoverflow.com/questions/6052870/how-to-know-if-there-is-a-link-element-within-the-selection
 * @param {Selection} sel The selection.
 * @param {HTMLElement} container The editor container element.
 * @param {string} tagname The tagname to find.
 * @returns {HTMLElement|null} The found element.
 */
export declare function findElementInSelection(sel: Selection, container: HTMLElement, tagname: string): HTMLElement | null;
