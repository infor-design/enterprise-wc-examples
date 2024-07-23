import IdsElement from '../../core/ids-element';
/**
 * IDS Layout Grid Component
 * @type {IdsLayoutGrid}
 * @inherits IdsElement
 */
export default class IdsLayoutGrid extends IdsElement {
    /**
     * Set the grid align-content
     * @param {string | null} value The align-content [null, start, end, between, around, evenly]
     */
    set alignContent(value: string | null);
    /**
     * Get the grid align-content setting
     * @returns {string | null} The align-content [null, start, end, between, around, evenly]
     */
    get alignContent(): string | null;
    /**
     * Set auto-fit attribute
     * @param {boolean | string | null} value boolean
     */
    set autoFit(value: string | boolean | null);
    /**
     * Get auto-fit attribute
     * @readonly
     * @returns {boolean} Indicates whether the auto-fit is enabled
     */
    get autoFit(): string | boolean | null;
    /**
     * Set auto-fill attribute
     * @param {boolean | string | null} value boolean
     */
    set autoFill(value: string | boolean | null);
    /**
     * Get auto-fill attribute
     * @readonly
     * @returns {string | boolean | null} Indicates whether the auto-fill is enabled
     */
    get autoFill(): string | boolean | null;
    /**
     * Set columns attribute
     * @param {boolean | string | null} value sets the number of columns
     */
    set cols(value: string | null);
    /**
     * Get columns attribute
     * @readonly
     * @returns {string | null} The number of columns of the grid
     */
    get cols(): string | null;
    /**
     * Set XS columns attribute
     * @param {boolean | string | null} value sets the number of columns at the XS breakpoint
     */
    set colsXs(value: string | null);
    /**
     * Get XS columns attribute
     * @readonly
     * @returns {string | null} The number of columns of the grid at the XS breakpoint
     */
    get colsXs(): string | null;
    /**
     * Set SM columns attribute
     * @param {boolean | string | null} value sets the number of columns at the SM breakpoint
     */
    set colsSm(value: string | null);
    /**
     * Get SM columns attribute
     * @readonly
     * @returns {string | null} The number of columns of the grid at the SM breakpoint
     */
    get colsSm(): string | null;
    /**
     * Set MD columns attribute
     * @param {boolean | string | null} value sets the number of columns at the MD breakpoint
     */
    set colsMd(value: string | null);
    /**
     * Get MD columns attribute
     * @readonly
     * @returns {string | null} The number of columns of the grid at the MD breakpoint
     */
    get colsMd(): string | null;
    /**
     * Set LG columns attribute
     * @param {boolean | string | null} value sets the number of columns at the LG breakpoint
     */
    set colsLg(value: string | null);
    /**
     * Get LG columns attribute
     * @readonly
     * @returns {string | null} The number of columns of the grid at the LG breakpoint
     */
    get colsLg(): string | null;
    /**
     * Set XL columns attribute
     * @param {boolean | string | null} value sets the number of columns at the XL breakpoint
     */
    set colsXl(value: string | null);
    /**
     * Get XL columns attribute
     * @readonly
     * @returns {string | null} The number of columns of the grid at the XL breakpoint
     */
    get colsXl(): string | null;
    /**
     * Set XXL columns attribute
     * @param {boolean | string | null} value sets the number of columns at the XXL breakpoint
     */
    set colsXxl(value: string | null);
    /**
     * Get XXL columns attribute
     * @readonly
     * @returns {string | null} The number of columns of the grid at the XXL breakpoint
     */
    get colsXxl(): string | null;
    /**
     * Set the minColWidth attribute
     * @param {string | null} value Number value that sets the min-width of the grid columns
     */
    set minColWidth(value: string | null);
    /**
     * Get the minColWidth attribute
     * @readonly
     * @returns {string | null} The number value that represents the min-height of the grid columns
     */
    get minColWidth(): string | null;
    /**
     * Set the minRowHeight attribute
     * @param {string | null} value Number value that sets the height of the grid rows
     * @memberof IdsGrid
     */
    set minRowHeight(value: string | null);
    /**
     * Get the minRowHeight attribute
     * @readonly
     * @returns {string | null} The number value that represents the min-height of the grid rows
     */
    get minRowHeight(): string | null;
    /**
     * Set the maxColWidth attribute
     * @param {string | null} value Number value that sets the max-width of the grid columns
     * @memberof IdsGrid
     */
    set maxColWidth(value: string | null);
    /**
     * Get the maxColWidth attribute
     * @readonly
     * @returns {string | null} The number value that represents the max-width of the grid columns
     */
    get maxColWidth(): string | null;
    /**
     * Set the maxRowHeight attribute
     * @param {string | null} value Number value that sets the max-height of the grid rows
     */
    set maxRowHeight(value: string | null);
    /**
     * Get the maxRowHeight attribute
     * @returns {string | null} The number value that represents the max-height of the grid rows
     */
    get maxRowHeight(): string | null;
    /**
     * Set the grid gap
     * @param {string | null} value The Gap [undefined, none, sm, md, lg, xl]
     */
    set gap(value: string | null);
    /**
     * Handle The Gap Setting
     * @returns {string | null} The Gap [null, sm, md, lg, xl]
     */
    get gap(): string | null;
    /**
     * Set the margin attribute
     * @param {string | null} value The value of the margin [null, 'sm', 'md', 'lg', 'xl']
     */
    set margin(value: string | null);
    /**
     * Get the margin attribute
     * @returns {string | null} The number value that represents the margin of the grid
     */
    get margin(): string | null;
    /**
     * Set the marginY attribute
     * @param {string | null} value The value of the margin-y [null, 'sm', 'md', 'lg', 'xl']
     */
    set marginY(value: string | null);
    /**
     * Get the margin attribute
     * @returns {string | null} The number value that represents the margin of the grid
     */
    get marginY(): string | null;
    /**
     * Set the padding attribute
     * @param {string | null} value The value of the padding attribute
     */
    set padding(value: string | null);
    /**
     * Get the padding attribute
     * @returns {string | null} The number value that represents the padding of the grid
     */
    get padding(): string | null;
    /**
     * Set the paddingX attribute
     * @param {string | null} value The value of the paddingX attribute
     */
    set paddingX(value: string | null);
    /**
     * Get the paddingX attribute
     * @returns {string | null} The number value that represents the paddingX of the grid
     */
    get paddingX(): string | null;
    /**
     * Set the paddingY attribute
     * @param {string | null} value The value of the paddingY attribute
     */
    set paddingY(value: string | null);
    /**
     * Get the paddingY attribute
     * @returns {string | null} The number value that represents the paddingY of the grid
     */
    get paddingY(): string | null;
    /**
     * Set the grid justify
     * @param {string | null} value The justify [null, start, end, between, around, evenly]
     */
    set justifyContent(value: string | null);
    /**
     * Get the grid justify setting
     * @returns {string | null} The justify [null, start, end, between, around, evenly]
     */
    get justifyContent(): string | null;
    /**
     * Set the flow attribute of the grid
     * @param { string | null } value Flow [undefined, row, column, dense, row-dense, column-dense]
     */
    set flow(value: string | null);
    /**
     * Get the flow attribute
     * @returns { string | null } value Flow [undefined, row, column, dense, row-dense, column-dense]
     */
    get flow(): string | null;
    /**
     * Set the row attribute
     * @param { string | null } value The amount of rows in the grid
     */
    set rows(value: string | null);
    /**
     * Get the row attribute
     * @returns { string | null } The amount of rows in the grid
     */
    get rows(): string | null;
    /**
     * Set the rowXs attribute
     * @param { string | null } value The amount of rows at xs breakpoint in the grid
     */
    set rowsXs(value: string | null);
    /**
     * Get the rowXs attribute
     * @returns { string | null } The amount of rows at xs breakpoint in the grid
     */
    get rowsXs(): string | null;
    /**
     * Set the rowSm attribute
     * @param { string | null } value The amount of rows at sm breakpoint in the grid
     */
    set rowsSm(value: string | null);
    /**
     * Get the rowSm attribute
     * @returns { string | null } The amount of rows at sm breakpoint in the grid
     */
    get rowsSm(): string | null;
    /**
     * Set the rowMd attribute
     * @param { string | null } value The amount of rows at md breakpoint in the grid
     */
    set rowsMd(value: string | null);
    /**
     * Get the rowMd attribute
     * @returns { string | null } The amount of rows at md breakpoint in the grid
     */
    get rowsMd(): string | null;
    /**
     * Set the rowLg attribute
     * @param { string | null } value The amount of rows at lg breakpoint in the grid
     */
    set rowsLg(value: string | null);
    /**
     * Get the rowLg attribute
     * @returns { string | null } The amount of rows at lg breakpoint in the grid
     */
    get rowsLg(): string | null;
    /**
     * Set the rowXl attribute
     * @param { string | null } value The amount of rows at xl breakpoint in the grid
     */
    set rowsXl(value: string | null);
    /**
     * Get the rowXl attribute
     * @returns { string | null } The amount of rows at xl breakpoint in the grid
     */
    get rowsXl(): string | null;
    /**
     * Set the rowXxl attribute
     * @param { string | null } value The amount of rows at xxl breakpoint in the grid
     */
    set rowsXxl(value: string | null);
    /**
     * Get the rowXxl attribute
     * @returns { string | null } The amount of rows at xxl breakpoint in the grid
     */
    get rowsXxl(): string | null;
    /**
     * Set the rowHeight attribute
     * @param { string | null } value The height of the rows in the grid
     */
    set rowHeight(value: string | null);
    /**
     * Get the rowHeight attribute
     * @returns { string | null } The height of the rows in the grid
     */
    get rowHeight(): string | null;
    constructor();
    static get attributes(): any;
    connectedCallback(): void;
    private initialSettings;
    template(): string;
}
