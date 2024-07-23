import IdsElement from '../../core/ids-element';
import type IdsDataGrid from './ids-data-grid';
import type { IdsDataGridColumn } from './ids-data-grid-column';
export default class IdsDataGridRow extends IdsElement {
    #private;
    rootNode?: any;
    constructor();
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes(): string[];
    connectedCallback(): void;
    /**
     * Reference to the data grid parent
     * @returns {IdsDataGrid} the data grid parent
     */
    get dataGrid(): IdsDataGrid;
    get data(): Record<string, any>[];
    get columns(): IdsDataGridColumn[];
    get visibleColumns(): IdsDataGridColumn[];
    get dimensions(): DOMRect;
    /**
     * Set the row index. This index will be used to popuplate data from ids-data-grid.
     * @param {number} value the index
     */
    set rowIndex(value: number);
    get rowIndex(): number;
    /** Implements row cache */
    static rowCache: {
        [key: string]: string;
    };
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    /**
     * Render the row again from the cache or template.
     * @param {number} row the row index
     */
    renderRow(row: number): void;
    /**
     * Toggle Selection on the row element (via click/keyboard in the main dataGrid)
     */
    toggleSelection(): void;
    /**
     * Toggle Expand/Collpase on the row element
     */
    toggleExpandCollapse(): void;
    /**
     * Toggle activation on the row element
     */
    toggleRowActivation(): void;
    /**
     * Select/Deselect all child rows
     * @param {boolean} isSelect true or false to select or deselect
     * @private
     */
    toggleChildRowSelection(isSelect: boolean): void;
    /**
     * Select this row node
     */
    set selected(select: boolean);
    /**
     * Updates some attributes/classes on a single row's cells
     * @private
     * @param {number} index the row index
     */
    updateCells(index: number): void;
    /**
     * Return the row's markup
     * @param {Record<string, unknown>} row The row data object
     * @param {number} index The data row index
     * @param {number} ariaRowIndex The indexes for aria-rowindex
     * @param {IdsDataGrid} dataGrid The dataGrid instance
     * @returns {string} The html string for the row
     */
    static template(row: Record<string, unknown>, index: number, ariaRowIndex: number, dataGrid: IdsDataGrid): string;
    /**
     * Return the cells' markup
     * @returns {string} The html string for the row
     */
    cellsHTML(): string;
}
