var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { attributes } from '../../core/ids-attributes';
import { customElement, scss } from '../../core/ids-decorators';
import { stringToBool, stringToNumber } from '../../utils/ids-string-utils/ids-string-utils';
import Base from './ids-line-chart-base';
import styles from './ids-line-chart.scss';
/**
 * IDS Line Chart Component
 * @type {IdsLineChart}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @part svg - the outside svg element
 * @part marker - the dots/markers in the chart
 * @part line - the lines in the chart
 */
let IdsLineChart = class IdsLineChart extends Base {
    constructor() {
        super();
        // Setup default values
        this.DEFAULT_SELECTABLE = false;
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.MARKER_SIZE
        ];
    }
    afterConnectedCallback() {
        this.#preSelected();
        this.attachTooltipEvents();
    }
    /**
     * Return the chart data for the internal svg
     * @returns {object} The markers and lines
     */
    chartTemplate() {
        return `<g class="marker-lines">
      ${this.lineMarkers().lines}
    </g>
    <g class="markers">
      ${this.lineMarkers().markers}
    </g>`;
    }
    /**
     * Set initially selected
     * @private
     * @returns {void}
     */
    #preSelected() {
        if (!this.initialized || !this.selectable || !this.data?.length || !this.selectionElements?.length)
            return;
        const gIndex = this.data.findIndex((n) => n.selected);
        const isValid = (n) => typeof n === 'number' && n > -1;
        if (isValid(gIndex)) {
            this.selectionElements.forEach((el) => {
                if (el.getAttribute('group-index') === `${gIndex}`) {
                    if (el.getAttribute('part') === 'line')
                        el.setAttribute('selected', '');
                    el.classList.add('selected');
                }
                else
                    el.classList.add('not-selected');
            });
            return;
        }
        const indexes = {};
        for (let i = 0, l = this.data.length; i < l; i++) {
            indexes.index = this.data[i].data?.findIndex((n) => n.selected);
            indexes.gIndex = i;
            if (isValid(indexes.index))
                break;
        }
        if (isValid(indexes.index)) {
            this.selectionElements.forEach((el) => {
                if (el.getAttribute('group-index') === `${indexes.gIndex}`) {
                    if (el.getAttribute('part') === 'marker'
                        && el.getAttribute('index') === `${indexes.index}`) {
                        el.setAttribute('selected', '');
                    }
                    el.classList.add('selected');
                }
                else
                    el.classList.add('not-selected');
            });
        }
    }
    /**
     * Get currently selected
     * @returns {IdsLineChartSelected} selected.
     */
    getSelected() {
        const selected = this.selectionElements.filter((el) => el.hasAttribute('selected'))[0];
        if (!selected)
            return {};
        const g = selected.getAttribute('group-index');
        const i = selected.getAttribute('index');
        if (i === null) { // grouped
            const data = this.data[g];
            return { data, groupIndex: g, selectionElem: selected };
        }
        const data = this.data[g].data[i];
        return { data, groupIndex: g, index: i, selectionElem: selected }; // eslint-disable-line
    }
    /**
     * Set selected by give indexes
     * @param {IdsLineChartSelectedBy} opt The in comeing options
     * @returns {void}
     */
    setSelected(opt) {
        if (!this.initialized || !this.selectable || !this.data?.length || !this.selectionElements?.length)
            return;
        const gIndex = stringToNumber(opt.groupIndex);
        const index = stringToNumber(opt.index);
        if (Number.isNaN(gIndex))
            return;
        if (Number.isNaN(index))
            this.setSelection(gIndex, true);
        else {
            const idx = this.selectionElements.findIndex((el) => el.getAttribute('part') === 'marker'
                && el.getAttribute('group-index') === `${gIndex}`
                && el.getAttribute('index') === `${index}`);
            if (typeof idx === 'number' && idx > -1)
                this.setSelection(idx);
        }
    }
    /**
     * Set the selection for given index
     * @private
     * @param {number|string} index The index value
     * @param {boolean} isLegendClick True if legend clicked
     * @returns {boolean} False, if veto.
     */
    setSelection(index, isLegendClick) {
        if (Number.isNaN(index) || !this.selectionElements?.[0])
            return false;
        // Set type of elements
        const extract = (cb) => this.selectionElements.filter((a) => cb(a));
        const elems = { selected: extract((el) => el.hasAttribute('selected'))[0] };
        if (isLegendClick) {
            elems.target = extract((el) => el.getAttribute('group-index') === `${index}`);
            elems.inverse = extract((el) => el.getAttribute('group-index') !== `${index}`);
            elems.targetSelect = extract((el) => el.getAttribute('part') === 'line'
                && el.getAttribute('group-index') === `${index}`)[0];
        }
        else {
            const elem = this.selectionElements?.[index];
            const idx = elem?.getAttribute('group-index');
            elems.target = extract((el) => el.getAttribute('group-index') === `${idx}`);
            elems.inverse = extract((el) => el.getAttribute('group-index') !== `${idx}`);
            elems.targetSelect = elem?.getAttribute('part') === 'marker'
                ? elem : extract((el) => el.getAttribute('part') === 'line'
                && el.getAttribute('group-index') === `${idx}`)[0];
        }
        // Get data and indexes for given element
        const args = (el) => {
            const g = el.getAttribute('group-index');
            const i = el.getAttribute('index');
            if (i === null) { // grouped
                const data = this.data[g];
                return { data, groupIndex: g, selectionElem: el };
            }
            const data = this.data[g].data[i];
            return { data, groupIndex: g, index: i, selectionElem: el }; // eslint-disable-line
        };
        // Deselect
        const deselect = () => {
            const argsSelected = args(elems.selected);
            if (!this.triggerVetoableEvent('beforedeselected', argsSelected)) {
                return false;
            }
            this.selectionElements.forEach((el) => el.classList.remove('selected', 'not-selected'));
            delete argsSelected.data.selected;
            argsSelected.selectionElem.removeAttribute('selected');
            this.triggerEvent('deselected', this, { bubbles: true, detail: { elem: this, ...argsSelected } });
            return true;
        };
        // Previously selected
        if (elems.selected) {
            const gIndex = (el) => el.getAttribute('group-index');
            const targetSelected = gIndex(elems.targetSelect) === gIndex(elems.selected);
            if (targetSelected)
                return deselect();
            if (!deselect())
                return false;
        }
        // Traget data and indexes
        const argsTarget = args(elems.targetSelect);
        if (!this.triggerVetoableEvent('beforeselected', argsTarget)) {
            return false;
        }
        elems.targetSelect.setAttribute('selected', '');
        elems.target.forEach((el) => el.classList.add('selected'));
        elems.inverse.forEach((el) => el.classList.add('not-selected'));
        argsTarget.data.selected = true;
        this.triggerEvent('selected', this, { bubbles: true, detail: { elem: this, ...argsTarget } });
        return true;
    }
    /**
     * Return chart elements that get selection
     * @returns {Array<SVGElement>} The elements
     */
    get selectionElements() {
        if (!this.selectable)
            return [];
        return [
            ...this.container?.querySelectorAll('.markers [part="marker"]') ?? [],
            ...this.container?.querySelectorAll('.marker-lines [part="line"]') ?? []
        ];
    }
    /**
     * Return the elements that get tooltip events
     * @returns {Array<string>} The elements
     */
    tooltipElements() {
        return [...this.container?.querySelectorAll('.markers circle') ?? []];
    }
    /**
     * Return the marker data for the svg
     * @private
     * @returns {object} The markers and lines
     */
    lineMarkers() {
        let markerHTML = '';
        let lineHTML = '';
        this.markerData.points?.forEach((pointGroup, groupIndex) => {
            let points = '';
            let animationPoints = '';
            markerHTML += '<g class="marker-set">';
            pointGroup.forEach((point, index) => {
                points += `${point.left},${point.top} `;
                animationPoints += `${point.left},${this.markerData.gridBottom} `;
                markerHTML += `<circle part="marker" group-index="${groupIndex}" index="${index}" class="color-${groupIndex + 1}" cx="${point.left}" cy="${point.top}" data-value="${point.value}" r="${this.markerSize}">
        ${stringToBool(this.animated) ? `<animate attributeName="cy" ${this.cubicBezier} from="${this.markerData.gridBottom}" to="${point.top}"/>` : ''}
        </circle>`;
            });
            markerHTML += '</g>';
            lineHTML += `<polyline part="line" class="data-line color-${groupIndex + 1}" points="${points}" stroke="var(${this.color(groupIndex)}" group-index="${groupIndex}">
      ${stringToBool(this.animated) ? `<animate attributeName="points" ${this.cubicBezier} from="${animationPoints}" to="${points}" />` : ''}
      </polyline>`;
        });
        return {
            markers: markerHTML,
            lines: lineHTML
        };
    }
    /**
     * Set the size of the markers (aka dots/ticks) in the chart
     * @param {number} value The value to use (in pixels)
     */
    set markerSize(value) {
        this.setAttribute(attributes.MARKER_SIZE, String(value));
        this.redraw();
    }
    get markerSize() {
        return parseFloat(this.getAttribute(attributes.MARKER_SIZE) ?? '') || 5;
    }
};
IdsLineChart = __decorate([
    customElement('ids-line-chart'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsLineChart);
export default IdsLineChart;
//# sourceMappingURL=ids-line-chart.js.map