import type IdsDataGrid from './ids-data-grid';
/**
 * Container arguments interface.
 */
export interface IdsDataGridContainerArgs {
    columnId?: string;
    columnData?: any;
    columnIndex?: number;
    columnGroupId?: string;
    columnGroupData?: any;
    columnGroupIndex?: number;
    fieldData?: any;
    grid?: IdsDataGrid;
    isHeaderGroup?: boolean;
    rowData?: any;
    rowIndex?: number;
    type?: string;
}
/**
 * Types for container target element.
 */
export declare const containerTypes: {
    BODY_CELL: string;
    BODY_CELL_EDITOR: string;
    HEADER_TITLE: string;
    HEADER_ICON: string;
    HEADER_FILTER: string;
    HEADER_FILTER_BUTTON: string;
};
/**
 * Get header arguments.
 * @private
 * @param {IdsDataGrid} this The data grid object.
 * @param  {HTMLElement[]} path List of path element.
 * @param  {HTMLElement} columnheader The column header element.
 * @returns {IdsDataGridContainerArgs} The header arguments.
 */
export declare function containerHeaderArgs(this: IdsDataGrid, path: HTMLElement[], columnheader: HTMLElement): IdsDataGridContainerArgs;
/**
 * Get body cell callback arguments.
 * @private
 * @param {IdsDataGrid} this The data grid object.
 * @param  {HTMLElement[]} path List of path element.
 * @param  {HTMLElement} cellEl The cell element.
 * @returns {void}
 */
export declare function containerBodyCellArgs(this: IdsDataGrid, path: HTMLElement[], cellEl: HTMLElement): IdsDataGridContainerArgs;
/**
 * Get container arguments.
 * @param {IdsDataGrid} this The data grid object.
 * @param {MouseEvent} e The event.
 * @returns {IdsDataGridContainerArgs} The callback arguments.
 */
export declare function containerArguments(this: IdsDataGrid, e: MouseEvent): IdsDataGridContainerArgs;
