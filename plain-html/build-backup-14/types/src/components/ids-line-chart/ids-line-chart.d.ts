import IdsAxisChart from '../ids-axis-chart/ids-axis-chart';
type IdsLineChartMarkers = {
    markers?: string;
    lines?: string;
};
type IdsLineChartSelected = {
    data?: any;
    groupIndex?: number | string;
    index?: number | string;
    selectionElem?: SVGElement;
};
type IdsLineChartSelectedBy = {
    groupIndex?: number | string;
    index?: number | string;
};
/**
 * IDS Line Chart Component
 * @type {IdsLineChart}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @part svg - the outside svg element
 * @part marker - the dots/markers in the chart
 * @part line - the lines in the chart
 */
export default class IdsLineChart extends IdsAxisChart {
    #private;
    constructor();
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes(): string[];
    afterConnectedCallback(): void;
    /**
     * Return the chart data for the internal svg
     * @returns {object} The markers and lines
     */
    chartTemplate(): string;
    /**
     * Get currently selected
     * @returns {IdsLineChartSelected} selected.
     */
    getSelected(): IdsLineChartSelected;
    /**
     * Set selected by give indexes
     * @param {IdsLineChartSelectedBy} opt The in comeing options
     * @returns {void}
     */
    setSelected(opt: IdsLineChartSelectedBy): void;
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
     * Return the marker data for the svg
     * @private
     * @returns {object} The markers and lines
     */
    lineMarkers(): IdsLineChartMarkers;
    /**
     * Set the size of the markers (aka dots/ticks) in the chart
     * @param {number} value The value to use (in pixels)
     */
    set markerSize(value: number);
    get markerSize(): number;
}
export {};
