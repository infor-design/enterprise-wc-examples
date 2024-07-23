import '../ids-hyperlink/ids-hyperlink';
import '../ids-button/ids-button';
import '../ids-alert/ids-alert';
import '../ids-badge/ids-badge';
import '../ids-card/ids-card';
import '../ids-color/ids-color';
import '../ids-counts/ids-counts';
import '../ids-icon/ids-icon';
import '../ids-image/ids-image';
import '../ids-progress-bar/ids-progress-bar';
import '../ids-rating/ids-rating';
import '../ids-slider/ids-slider';
import '../ids-step-chart/ids-step-chart';
import '../ids-tag/ids-tag';
import type { IdsDataGridColumn } from './ids-data-grid-column';
import type IdsDataGrid from './ids-data-grid';
export default class IdsDataGridFormatters {
    #private;
    /** Displays a Text String */
    text(rowData: Record<string, unknown>, columnData: IdsDataGridColumn): string;
    /** Masks text with stars */
    password(rowData: Record<string, unknown>, columnData: IdsDataGridColumn): string;
    /** Formats a sequencing running count of rows */
    rowNumber(_rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    /** Formats date data as a date string in the desired format */
    date(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number, api: IdsDataGrid): string;
    /** Formats date data as a time string in the desired format */
    time(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number, api: IdsDataGrid): string;
    /** Formats number data as a decimal string in the specific localeAPI */
    decimal(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number, api: IdsDataGrid): string;
    /** Formats number data as a integer string in the specific locale */
    integer(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number, api: IdsDataGrid): string;
    /** Formats number data as a ids-hyperlink */
    hyperlink(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    /** Shows a selection checkbox column */
    selectionCheckbox(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    /** Shows a checkbox column */
    checkbox(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    /** Shows a selection radio column */
    selectionRadio(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    /** Shows an ids-button */
    button(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    /** Shows an ids-badge */
    badge(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    /** Shows an Tree */
    tree(rowData: Record<string, unknown>, columnData: IdsDataGridColumn): string;
    /** Shows an expander button */
    expander(rowData: Record<string, unknown>, columnData: IdsDataGridColumn): string;
    /** Shows a dropdown list */
    dropdown(rowData: Record<string, unknown>, columnData: IdsDataGridColumn): string;
    alert(rowData: Record<string, unknown>, columnData: IdsDataGridColumn): string;
    color(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    icon(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    favorite(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    tag(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    progress(rowData: Record<string, unknown>, columnData: IdsDataGridColumn): string;
    rating(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    slider(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    stepChart(rowData: Record<string, unknown>, columnData: IdsDataGridColumn, index: number): string;
    image(rowData: Record<string, unknown>, columnData: IdsDataGridColumn): string;
    card(rowData: Record<string, unknown>, columnData: IdsDataGridColumn): string;
}
