import { ExcelConfig } from './ids-worksheet-templates';
/**
 * Export to CSV format
 * @param {Array<Record<string, any>>} data excel data
 * @param {ExcelConfig} config excel config
 */
export declare function exportToCSV(data: Array<Record<string, any>>, config: ExcelConfig): void;
/**
 * Export to XLSX format
 * @param {Array<Record<string, any>>} data excel data
 * @param {ExcelConfig} config excel config
 */
export declare function exportToXLSX(data: Array<Record<string, any>>, config: ExcelConfig): void;
