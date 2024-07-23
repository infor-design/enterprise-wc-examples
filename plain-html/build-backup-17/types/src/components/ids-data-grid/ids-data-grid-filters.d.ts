import type { IdsDataGridColumn } from './ids-data-grid-column';
import '../ids-menu-button/ids-menu-button';
import '../ids-popup-menu/ids-popup-menu';
import '../ids-popup/ids-popup';
import '../ids-menu/ids-menu';
import '../ids-menu/ids-menu-item';
import '../ids-input/ids-input';
import '../ids-dropdown/ids-dropdown';
import '../ids-dropdown/ids-dropdown-list';
import '../ids-icon/ids-icon';
import '../ids-trigger-field/ids-trigger-button';
import '../ids-trigger-field/ids-trigger-field';
import '../ids-date-picker/ids-date-picker-popup';
import '../ids-time-picker/ids-time-picker-popup';
export interface IdsDataGridFilterConditions {
    /** The filter element */
    filterElem?: any;
    /** The id of the column */
    columnId?: string;
    /** The value filter */
    value?: string;
    /** The filter operator */
    operator?: 'equals' | 'does-not-equal' | 'contains' | 'does-not-contain' | 'end-with' | 'start-with' | 'does-not-end-with' | 'does-not-start-with' | 'is-empty' | 'is-not-empty' | 'in-range' | 'less-than' | 'less-equals' | 'greater-than' | 'greater-equals' | 'selected' | 'not-selected' | 'selected-notselected';
}
/**
 * IDS Data Grid Filters
 * @type {object}
 */
export default class IdsDataGridFilters {
    #private;
    constructor(root: any);
    root: any;
    /**
     * Filter defaults.
     * @type {object}
     */
    DEFAULTS: {
        disableClientFilter: boolean;
        filterable: boolean;
        filterWhenTyping: boolean;
        filterRowDisabled: boolean;
    };
    /**
     * Focused element use with rerender filter.
     * @private
     * @type {HTMLElement|null}
     */
    focused: any;
    /**
     * Text filter markup.
     * @param {IdsDataGridColumn} column The column info
     * @returns {string} The resulting template
     */
    text(column: IdsDataGridColumn): string;
    /**
     * Integer filter markup.
     * @param {IdsDataGridColumn} column The column info
     * @returns {string} The resulting template
     */
    integer(column: IdsDataGridColumn): string;
    /**
     * Decimal filter markup.
     * @param {IdsDataGridColumn} column The column info
     * @returns {string} The resulting template
     */
    decimal(column: IdsDataGridColumn): string;
    /**
     * Contents filter markup.
     * @param {IdsDataGridColumn} column The column info
     * @returns {string} The resulting template
     */
    contents(column: IdsDataGridColumn): string;
    /**
     * Dropdown filter markup.
     * @param {IdsDataGridColumn} column The column info
     * @returns {string} The resulting template
     */
    dropdown(column: IdsDataGridColumn): string;
    /**
     * Checkbox filter markup.
     * @param {IdsDataGridColumn} column The column info
     * @returns {string} The resulting template
     */
    checkbox(column: IdsDataGridColumn): string;
    /**
     * Date filter markup.
     * @param {IdsDataGridColumn} column The column info
     * @returns {string} The resulting template
     */
    date(column: IdsDataGridColumn): string;
    /**
     * Time filter markup.
     * @param {IdsDataGridColumn} column The column info
     * @returns {string} The resulting template
     */
    time(column: IdsDataGridColumn): string;
    /**
     * Get filter wrapper element by given column id
     * @param {string} columnId The column id
     * @returns {HTMLElement|undefined} The filter wrapper element
     */
    filterWrapperById(columnId: string | undefined): any;
    /**
     * Returns markup for a header cell filter in data grid.
     * @param {IdsDataGridColumn} column The column info
     * @returns {string} The resulting template
     */
    filterTemplate(column: IdsDataGridColumn): any;
    /**
     * Reset all filters as initial state.
     * @returns {void}
     */
    resetFilters(): void;
    /**
     * Set filter conditions on the UI Only.
     * @param {Array<IdsDataGridFilterConditions>} conditions An array of objects with the filter conditions.
     * @returns {Array<object>} An array of currently showing filter conditions.
     */
    setFilterConditions(conditions: Array<IdsDataGridFilterConditions>): IdsDataGridFilterConditions[];
    /**
     * Get filter conditions in array from whats set in the UI.
     * @returns {Array<object>} An array of currently showing filter conditions.
     */
    filterConditions(): any;
    /**
     * Apply the Filter with the currently selected conditions, or the ones passed in.
     * @param {Array} conditions An array of objects with the filter conditions
     * @returns {void}
     */
    applyFilter(conditions?: any): void;
    /**
     * Set disabled filter row
     * @returns {void}
     */
    setFilterRowDisabled(): void;
    /**
     * Attach filters setting after data grid render
     * @returns {void}
     */
    attachFilterSettings(): void;
    /**
     * Handle all triggering and handling of events
     * @returns {void}
     */
    attachFilterEventHandlers(): void;
    /**
     * Set filter event when typing for all filter inputs
     * @returns {void}
     */
    setFilterWhenTyping(): void;
    /**
     * Get list of filter wrapper elements
     * @returns {Array<HTMLElement>} List of filter wrapper elements
     */
    get filterNodes(): any;
}
