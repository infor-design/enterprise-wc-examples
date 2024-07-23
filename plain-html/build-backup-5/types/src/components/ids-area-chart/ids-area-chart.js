var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, scss } from '../../core/ids-decorators';
import '../ids-line-chart/ids-line-chart';
import Base from './ids-area-chart-base';
import styles from './ids-area-chart.scss';
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
let IdsAreaChart = class IdsAreaChart extends Base {
    constructor() {
        super();
        // Setup default values
        this.DEFAULT_SELECTABLE = false;
    }
    /**
     * Return the chart data for the internal svg
     * @private
     * @returns {object} The markers and areas and lines
     */
    chartTemplate() {
        return `
    <g class="marker-lines">
      ${this.lineMarkers().lines}
    </g>
    <g class="areas">
      ${this.#areas()}
    </g>
    <g class="markers">
      ${this.lineMarkers().markers}
    </g>`;
    }
    /**
     * Generate the svg markup for the area paths
     * @returns {string} The area markup
     * @private
     */
    #areas() {
        let areaHTML = '';
        this.markerData.points.forEach((pointGroup, groupIndex) => {
            let areas = '';
            pointGroup.forEach((point, index) => {
                if (pointGroup[index + 1]) {
                    areas += `M${point.left},${point.top}L${point.left},${this.markerData.gridBottom}L${pointGroup[index + 1]?.left},${this.markerData.gridBottom}L${pointGroup[index + 1]?.left},${pointGroup[index + 1]?.top}`;
                }
            });
            areaHTML += `<path class="color-${groupIndex + 1}${this.animated ? ' animate' : ''}" part="area" d="${areas}Z" fill="var(${this.color(groupIndex)})"} group-index="${groupIndex}">
      </path>`;
        });
        return areaHTML;
    }
    /**
     * Return chart elements that get selection
     * @returns {Array<SVGElement>} The elements
     */
    get selectionElements() {
        if (!this.selectable)
            return [];
        return [
            ...this.container?.querySelectorAll('.areas [part="area"]') ?? [],
            ...this.container?.querySelectorAll('.markers [part="marker"]') ?? [],
            ...this.container?.querySelectorAll('.marker-lines [part="line"]') ?? []
        ];
    }
};
IdsAreaChart = __decorate([
    customElement('ids-area-chart'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsAreaChart);
export default IdsAreaChart;
//# sourceMappingURL=ids-area-chart.js.map