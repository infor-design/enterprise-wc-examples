import IdsElement from '../../core/ids-element';
import type IdsDataGrid from './ids-data-grid';
import type { IdsDataGridColumn } from './ids-data-grid-column';
import { IdsDataGridEditor } from './ids-data-grid-editors';
export default class IdsDataGridCell extends IdsElement {
    #private;
    rootNode?: any;
    isInValid: boolean;
    constructor();
    connectedCallback(): void;
    /**
     * Reference to the data grid parent
     * @returns {IdsDataGrid} the data grid parent
     */
    get dataGrid(): IdsDataGrid;
    /**
     * Get the column definition
     * @returns {IdsDataGridColumn} the current cells column
     */
    get column(): IdsDataGridColumn;
    /**
     * Get row of table cell
     * @returns {number} table row index
     */
    get row(): number;
    /**
     * Rerender a cell - may be used later
     */
    renderCell(): void;
    /**
     * Set the active cell for focus
     * @param {boolean} nofocus If true, do not focus the cell
     * @returns {object} the current active cell
     */
    activate(nofocus: boolean): Record<string, any>;
    /** Previous Value before Editing */
    originalValue: unknown;
    /** Previous Invalid state before reseting */
    previousInvalidState: string;
    /** The editor element */
    editor?: IdsDataGridEditor;
    /** If currently in edit mode */
    isEditing?: boolean;
    /**
     * Start Edit Mode
     * @param {MouseEvent} clickEvent event passed if activated by click (vs keyboard)
     */
    startCellEdit(clickEvent?: MouseEvent): void;
    /** End Cell Edit */
    endCellEdit(): void;
    /** Cancel Cell Edit */
    cancelCellEdit(): void;
    static cellCache: {
        [key: string]: string;
    };
    /**
     * Return the Template for the cell contents
     * @param {object} row The data item for the row
     * @param {object} column The column data for the row
     * @param {object} rowIndex The running row-index
     * @param {IdsDataGrid} dataGrid The dataGrid instance
     * @returns {string} The template to display
     */
    static template(row: Record<string, unknown>, column: IdsDataGridColumn, rowIndex: number, dataGrid: IdsDataGrid): string;
}
