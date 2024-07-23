import '../ids-empty-message/ids-empty-message';
import type IdsEmptyMessage from '../ids-empty-message/ids-empty-message';
import type IdsText from '../ids-text/ids-text';
import type IdsVirtualScroll from '../ids-virtual-scroll/ids-virtual-scroll';
import type IdsDataGrid from './ids-data-grid';
/**
 * Empty message elements interface.
 */
export interface IdsDataGridEmptyMessageElements {
    em?: IdsEmptyMessage;
    emDesc?: IdsText;
    emIsSlotted?: boolean;
    emLabel?: IdsText;
    vs?: IdsVirtualScroll;
}
/**
 * Empty message template markup.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {string} The template
 */
export declare function emptyMessageTemplate(this: IdsDataGrid): string;
/**
 * Set empty message elements.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export declare function setEmptyMessageElements(this: IdsDataGrid): void;
/**
 * Reset empty message elements.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export declare function resetEmptyMessageElements(this: IdsDataGrid): void;
/**
 * Show the empty message.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export declare function showEmptyMessage(this: IdsDataGrid): void;
/**
 * Hide the empty message.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export declare function hideEmptyMessage(this: IdsDataGrid): void;
/**
 * Toggle the empty message.
 * @param {IdsDataGrid} this The data grid object.
 * @param {boolean | number} hide If true, will hide empty message.
 * @returns {void}
 */
export declare function IdsDataGridToggleEmptyMessage(this: IdsDataGrid, hide?: boolean | number): void;
/**
 * Set empty message.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export declare function setEmptyMessage(this: IdsDataGrid): void;
