import { ExcelColumn } from './ids-worksheet-templates';
/**
 * Class used to format data collection into Office Open XML format for .xlsx files
 * Link below provides a PDF (Part 1) of OOXML documentation
 * @see {@link https://www.ecma-international.org/publications-and-standards/standards/ecma-376/}
 */
export declare class XLSXFormatter {
    private columns;
    /**
     * Generate worksheet xml string from data
     * @param {Record<string, any>} data user data
     * @param {Array<ExcelColumn>} columnConfig column configuration
     * @returns {string} xlsx formatted worksheet string
     */
    generateWorksheet(data: Array<Record<string, any>>, columnConfig?: Array<ExcelColumn>): string;
    /**
     * Prepares column configuration referenced in worksheet creation
     * @param {Array<ExcelColumn>} columnConfig column configuration
     */
    private prepareColumnConfig;
    /**
     * Generates <cols> section of worksheet
     * Width is determined by max char length of data column
     * @param {Array<XLSXColumn>} columns column config
     * @returns {string} <cols> worksheet string
     */
    private generateColWidths;
    /**
     * Recursively creates Excel column letter by column index
     * @param {number} colIndex zero-based column index
     * @returns {string} Excel Column letter
     */
    private generateColumnLetter;
    /**
     * Escapes special characters for excel string cells
     * @param {string} str cell string
     * @returns {string} escaped, trimmed cell string
     */
    private escapeExcelString;
    /**
     * Create formatted string cell
     * @param {string} value string value
     * @param {string} cellRef cell ref location
     * @returns {string} xlsx xml string cell
     */
    private formatStringCell;
    /**
     * Create a cell with a certain type
     * @param {any} value cell value
     * @param {string} cellRef cell ref location
     * @param {string} type cell type
     * @returns {string} xlsx xml number cell
     */
    private formatTypedCell;
    /**
     * Convert JS Date object to excel date value
     * Excel date is number of days since Jan 1 1900
     * @see {@link https://support.microsoft.com/en-us/office/datetime-function-812ad674-f7dd-4f31-9245-e79cfa358a4e}
     * @see {@link https://www.flyaga.info/converting-a-javascript-date-object-to-an-excel-date-time-serial-value/}
     * @param {Date} date JS Date Object
     * @returns {number} excel date value
     */
    private createExcelDate;
    /**
     * Creates time cell string
     * Defaults to en_US formatting of time
     * @param {string} dateStr parseable Date string
     * @param {string} cellRef cell reference string
     * @returns {string} cell time string
     */
    private formatTimeCell;
    /**
     * Creates date cell string
     * Defaults to en_US formatting of dates
     * @param {string} dateStr parseable Date string
     * @param {string} cellRef cell reference string
     * @returns {string} cell date string
     */
    private formatDateCell;
    /**
     * Factory function to format cells of different types
     * @param {XLSXColumn} col column
     * @param {any} value field value
     * @param {number} cellIndex column number
     * @param {number} rowIndex row number
     * @returns {string} xlsx xml formatted cell
     */
    private formatCell;
    private canCastAsNumber;
    /**
     * Create xlsx xml formatted row
     * @param {Record<string, any>} row row data
     * @param {number} rowIndex row index
     * @returns {string} xlsx xml formatted row
     */
    private formatRow;
    /**
     * Create header row for excel sheet
     * @param {Array<XLSXColumn>} columns columns config
     * @returns {string} header excel string
     */
    private generateHeaderRow;
    /**
     * Creates xlsx formatted rows
     * @param {Array<Record<string, any>>} rows array of row data
     * @returns {string} xml formatted rows
     */
    private generateRows;
    /**
     * Clean up any references
     */
    destroy(): void;
}
