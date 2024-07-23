import IdsLineChart from '../ids-line-chart/ids-line-chart';
/**
 * IDS Area Chart Component
 * @type {IdsAreaChart}
 * @inherits IdsLineChart
 * @mixes IdsEventsMixin
 * @part svg - the outside svg element
 * @part marker - the dots/markers in the chart
 * @part line - the lines in the chart
 * @part area - each area element in the chart
 */
export default class IdsAreaChart extends IdsLineChart {
    #private;
    constructor();
    /**
     * Return the chart data for the internal svg
     * @private
     * @returns {object} The markers and areas and lines
     */
    chartTemplate(): string;
    /**
     * Return chart elements that get selection
     * @returns {Array<SVGElement>} The elements
     */
    get selectionElements(): Array<SVGElement>;
}
