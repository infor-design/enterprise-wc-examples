import IdsAxisChart from '../ids-axis-chart/ids-axis-chart';
type IdsBarChartSelected = {
    data?: any;
    groupIndex?: number | string;
    index?: number | string;
    bars?: any[];
    indexes?: any[];
};
type IdsBarChartSelectedBy = {
    groupIndex?: number | string;
    index?: number | string;
};
/**
 * IDS Bar Chart Component
 * @type {IdsBarChart}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @part svg - the outside svg element
 * @part marker - the dots/markers in the chart
 * @part line - the lines in the chart
 * @part bars - each bars element in the chart
 */
export default class IdsBarChart extends IdsAxisChart {
    #private;
    constructor();
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes(): string[];
    connectedCallback(): void;
    /**
     * Callback for after connected.
     * @returns {void}
     */
    afterConnectedCallback(): void;
    /**
     * Callback for after calculate.
     * @returns {void}
     */
    afterCalculateCallback(): void;
    /**
     * Return the chart data for the internal svg
     * @private
     * @returns {object} The markers and areas and lines
     */
    chartTemplate(): string;
    /**
     * Get currently selected
     * @returns {IdsBarChartSelected} selected.
     */
    getSelected(): IdsBarChartSelected;
    /**
     * Set selected by give indexes
     * @param {IdsBarChartSelectedBy} opt The in comeing options
     * @returns {void}
     */
    setSelected(opt: IdsBarChartSelectedBy): void;
    /**
     * Set the selection for given index
     * @private
     * @param {number|string} index The index value
     * @param {boolean} isLegendClick True if legend clicked
     * @returns {boolean} False, if veto.
     */
    setSelection(index: any, isLegendClick?: boolean): boolean;
    /**
     * Return chart elements that get selection
     * @returns {Array<SVGElement>} The elements
     */
    get selectionElements(): Array<SVGElement>;
    /**
     * Return the elements that get tooltip events
     * @returns {Array<string>} The elements
     */
    tooltipElements(): Array<SVGElement>;
    /**
     * Number of groups count
     * @returns {number} count of groups
     */
    get groupCount(): number;
    /**
     * Adjust the default for the x labels
     * @returns {number} value The value to use (in pixels)
     */
    get alignXLabels(): string;
    /**
     * Percent (0-1) of the available width each bar should be within the category width.
     * 1.0 will take the whole category width and put the bars right next to each other.
     * if `isGrouped` this value, will use as whole group percentage.
     * @param {number} value Percent (0-1)
     */
    set barPercentage(value: number);
    get barPercentage(): number;
    /**
     * Percent (0-1) of the available width each category (group) section.
     * @param {number} value Percent (0-1)
     */
    set categoryPercentage(value: number);
    get categoryPercentage(): number;
}
export {};
