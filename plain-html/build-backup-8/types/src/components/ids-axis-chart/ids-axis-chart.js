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
import { injectTemplate, stringToBool, stringToNumber } from '../../utils/ids-string-utils/ids-string-utils';
import { calculateTextRenderWidth } from '../../utils/ids-object-utils/ids-object-utils';
import { QUALITATIVE_COLORS } from './ids-chart-colors';
import { patternData } from './ids-pattern-data';
import NiceScale from './ids-nice-scale';
import debounce from '../../utils/ids-debounce-utils/ids-debounce-utils';
import Base from './ids-axis-chart-base';
import IdsDataSource from '../../core/ids-data-source';
import '../ids-tooltip/ids-tooltip';
import '../ids-empty-message/ids-empty-message';
import styles from './ids-axis-chart.scss';
/**
 * IDS Axis Chart Component
 * @type {IdsAxisChart}
 * @inherits IdsElement
 * @mixes IdsChartSelectionMixin
 * @mixes IdsEventsMixin
 * @part container - the outside container element
 * @part chart - the svg outer element
 */
let IdsAxisChart = class IdsAxisChart extends Base {
    constructor() {
        super();
        // Setup the default values
        this.state = this.state || {};
        this.state.horizontal = false;
        this.state.yAxisFormatter = {
            notation: 'compact',
            compactDisplay: 'short'
        };
    }
    svg;
    canvas;
    emptyMessage;
    legend;
    sectionWidths = [];
    sectionWidth = NaN;
    sectionHeights = [];
    sectionHeight = NaN;
    resizeToParentHeight;
    resizeToParentWidth;
    parentWidth = NaN;
    parentHeight = NaN;
    /** Reference to datasource API */
    datasource = new IdsDataSource();
    /**
     * @returns {Array<string>} Drawer vetoable events
     */
    vetoableEventTypes = [
        'beforeselected',
        'beforedeselected'
    ];
    /**
     * On selectable change
     */
    onSelectableChange() {
        this.legendsClickable?.(this.selectable);
    }
    /**
     * Invoked each time the custom element is appended
     */
    connectedCallback() {
        super.connectedCallback?.();
        this.svg = this.shadowRoot?.querySelector('svg');
        this.emptyMessage = this.querySelector('ids-empty-message') || this.shadowRoot?.querySelector('ids-empty-message');
        this.legend = this.shadowRoot?.querySelector('[name="legend"]');
        if (this.getAttribute(attributes.WIDTH))
            this.width = this.getAttribute(attributes.WIDTH);
        if (this.getAttribute(attributes.HEIGHT))
            this.height = this.getAttribute(attributes.HEIGHT);
        this.#resetAxisLabelsText();
        this.#attachEventHandlers();
        // TODO: Is this still needed?
        this.redraw();
    }
    /**
     * Invoked each time the custom element is removed
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.#resizeObserver?.disconnect();
        this.#resizeObserver = undefined;
        this.emptyMessage?.remove();
        this.emptyMessage = undefined;
        this.svg?.remove();
        this.svg = undefined;
        this.legend?.remove();
        this.legend = undefined;
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.ANIMATED,
            attributes.ALIGN_X_LABELS,
            attributes.AXIS_LABEL_BOTTOM,
            attributes.AXIS_LABEL_END,
            attributes.AXIS_LABEL_MARGIN,
            attributes.AXIS_LABEL_START,
            attributes.AXIS_LABEL_TOP,
            attributes.DATA,
            attributes.HEIGHT,
            attributes.HORIZONTAL,
            attributes.MARGINS,
            attributes.SHOW_HORIZONTAL_GRID_LINES,
            attributes.SHOW_VERTICAL_GRID_LINES,
            attributes.ROTATE_NAME_LABELS,
            attributes.STACKED,
            attributes.TITLE,
            attributes.WIDTH
        ];
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        const horizontal = this.horizontal ? ' horizontal' : '';
        return `<div class="ids-chart-container" part="container">
      <svg class="ids-axis-chart${horizontal}" part="chart" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
      </svg>
      <slot name="legend">
      </slot>
      <slot name="empty-message">
        <ids-empty-message icon="empty-no-data" hidden>
          <ids-text type="h2" font-size="20" label="true" slot="label">${this.locale?.translate('NoData') || 'No Data Available'}</ids-text>
        </ids-empty-message>
      </slot>
      <slot name="tooltip">
        <ids-tooltip id="tooltip"></ids-tooltip>
      </slot>
    </div>`;
    }
    /**
     * Setup the Event Handling
     * @private
     */
    #attachEventHandlers() {
        this.onEvent('localechange.about-container', this.closest('ids-container'), async () => {
            this.redraw();
            const textElem = this.shadowRoot?.querySelector('ids-empty-message ids-text');
            if (textElem)
                textElem.textContent = this.locale?.translate('NoData');
        });
        this.onEvent('languagechange.about-container', this.closest('ids-container'), async () => {
            const textElem = this.shadowRoot?.querySelector('ids-empty-message ids-text');
            if (textElem)
                textElem.textContent = this.locale?.translate('NoData');
        });
    }
    /** Max width for x-labels text */
    #xMaxTextWidth = 0;
    /** Max width for y-labels text */
    #yMaxTextWidth = 0;
    /** Holds the resize observer object */
    #resizeObserver = undefined;
    /**
     * Attach the resize observer
     * @private
     */
    #attachResizeObserver() {
        // Set observer for resize
        if ((this.resizeToParentHeight || this.resizeToParentWidth) && !this.#resizeObserver) {
            this.parentWidth = this.parentElement?.offsetWidth;
            this.parentHeight = this.parentElement?.offsetHeight;
            this.#resizeObserver = new ResizeObserver(debounce((entries) => {
                this.resize(entries);
            }, 350));
            this.#resizeObserver.disconnect();
            this.#resizeObserver.observe(this.parentElement);
        }
    }
    isGrouped = false;
    /**
     * Handle Resizing
     * @private
     * @param {object} entries The resize observer entries
     */
    resize(entries) {
        if (!this.initialized) {
            return;
        }
        if ((entries[0].contentRect.width !== this.parentWidth && this.resizeToParentWidth && this.parentWidth > 0)
            || (entries[0].contentRect.height !== this.parentHeight && this.resizeToParentHeight && this.parentHeight > 0)) {
            this.initialized = false;
            if (this.resizeToParentHeight) {
                this.height = 'inherit';
            }
            if (this.resizeToParentWidth) {
                this.width = 'inherit';
            }
            this.initialized = true;
            this.redraw();
            this.reanimate();
        }
        this.parentWidth = this.parentElement?.offsetWidth;
        this.parentHeight = this.parentElement?.offsetHeight;
    }
    /**
     * Redraw the chart
     * @private
     */
    redraw() {
        if (!this.initialized) {
            return;
        }
        if (this.data && this.data.length === 0 && this.initialized) {
            this.#showEmptyMessage();
            if (this.legend)
                this.legend.innerHTML = this.legendTemplate();
            return;
        }
        this.#calculate();
        this.afterCalculateCallback?.();
        this.#addColorVariables();
        if (this.svg)
            this.svg.innerHTML = this.#axisTemplate();
        if (this.legend)
            this.legend.innerHTML = this.legendTemplate();
        this.adjustLabels();
        this.#adjustRTL();
        this.legendsClickable?.(this.selectable);
        // Completed Event and Callback
        this.triggerEvent('rendered', this, {
            detail: {
                svg: this.svg,
                data: this.data,
                markerData: this.markerData
            }
        });
        if (this.afterConnectedCallback) {
            this.afterConnectedCallback();
        }
    }
    /**
     * Adjust RTL
     * @private
     */
    #adjustRTL() {
        if (!this.locale?.isRTL())
            return;
        const labels = {
            x: [...this.svg?.querySelectorAll('.labels.x-labels text') ?? []],
            y: [...this.svg?.querySelectorAll('.labels.y-labels text') ?? []]
        };
        // Adjust y-max text width
        const extra = this.#yMaxTextWidth + this.margins.left;
        // X-labels
        let calcX = (x) => {
            let val = stringToNumber(x) - extra;
            val += this.horizontal ? (this.margins.leftInner + this.margins.rightInner) : 0;
            return val;
        };
        const newX = labels.x.map((label) => calcX(label.getAttribute('x'))).reverse();
        labels.x.forEach((label, i) => {
            if (!this.horizontal) {
                label.setAttribute('transform', `rotate(${this.rotateNameLabels}, ${newX[i]}, ${label.getAttribute('y')})`);
            }
            label.setAttribute('x', newX[i]);
            label.setAttribute('text-anchor', 'start');
            if (this.alignXLabels === 'middle')
                label.setAttribute('transform-origin', '0 -4px');
        });
        // Y-labels
        calcX = (x) => `-${stringToNumber(x) + extra}px`;
        labels.y.forEach((label) => {
            if (this.horizontal) {
                const trans = label.getAttribute('transform')?.split(',');
                if (trans?.length === 3) {
                    const transX = stringToNumber(trans[1]);
                    const transY = stringToNumber(trans[2]);
                    label.setAttribute('transform-origin', `${transX}px ${transY}px`);
                    label.setAttribute('transform', `rotate(${this.rotateNameLabels}) scale(-1, 1)`);
                }
                else {
                    const calX = calcX(label.getAttribute('x'));
                    const transStr = `scale(-1, 1) translate(${calX}, 0)`;
                    label.style.setProperty('transform', transStr);
                }
            }
            else {
                const calX = calcX(label.getAttribute('x'));
                label.style.setProperty('--ids-axis-chart-ylabels-x', calX);
            }
        });
    }
    /** The marker data to use to draw the chart */
    markerData = {
        markerCount: 0,
        groupCount: 0,
        min: 0,
        max: 0,
        scale: new NiceScale(this.yAxisMin, 0),
        gridTop: 0,
        gridBottom: 0,
        gridLeft: 0,
        gridRight: 0,
        groupTotals: [0],
    };
    /**
     * Get the min/max points and calculate the scale
     * @private
     */
    #calculate() {
        let groupCount = 0;
        let markerCount = 0;
        this.markerData = {
            markerCount: 0,
            groupCount: 0,
            min: 0,
            max: 0,
            scale: new NiceScale(this.yAxisMin, 0),
            gridTop: 0,
            gridBottom: 0,
            gridLeft: 0,
            gridRight: 0,
            groupTotals: [0],
        };
        // Get the Min and Max and Totals in one sequence
        this.data?.forEach((group, index) => {
            groupCount++;
            markerCount = 0;
            this.markerData.groupTotals[index] = 0;
            group.data?.forEach((data) => {
                if (data.value > this.markerData.max) {
                    this.markerData.max = data.value;
                }
                this.markerData.groupTotals[index] += data.value;
                if (data.value < this.markerData.min) {
                    this.markerData.min = data.value;
                }
                if (this.markerData.min === undefined) {
                    this.markerData.min = data.value;
                }
                markerCount++;
            });
            if (markerCount > this.markerData.markerCount) {
                this.markerData.markerCount = markerCount;
            }
            this.markerData.groupCount = groupCount;
        });
        // Calculate a Nice Scale
        const groupMax = Math.max(...this.markerData.groupTotals);
        const scale = new NiceScale(this.yAxisMin, this.stacked ? groupMax : this.markerData.max);
        this.markerData.scale = scale;
        this.markerData.scaleValues = [];
        for (let i = (scale.niceMin || 0); i <= (scale.niceMax); i += (Number(scale.tickSpacing))) {
            this.markerData.scaleValues.push(i);
        }
        // Set max text width for labels
        this.xMaxTextWidth();
        this.yMaxTextWidth();
        this.markerData.gridTop = this.margins.top + this.textWidths.top;
        this.markerData.gridBottom = this.height - this.margins.bottom - this.textWidths.bottom;
        this.markerData.gridLeft = this.textWidths.left + this.margins.left
            + (this.margins.leftInner * 2) + this.margins.rightInner;
        this.markerData.gridRight = this.width - this.margins.right - this.textWidths.right;
        // Set the data points / locations
        if (this.horizontal) {
            this.#horizontalPoints();
            this.#sectionHeights();
        }
        else {
            this.#verticalPoints();
            this.#sectionWidths();
        }
    }
    /**
     * Set horizontal data points / locations
     * @private
     * @returns {void}
     */
    #horizontalPoints() {
        this.markerData.points = [];
        this.data?.forEach((dataPoints) => {
            let top = this.textWidths.top + this.margins.top + this.margins.topInner;
            const points = [];
            for (let index = 0; index < this.markerData.markerCount; index++) {
                // y = (value - min) / (max - min)
                const value = dataPoints.data?.[index]?.value || 0;
                const cyPerc = ((value - (this.markerData.scale.niceMin || 0))
                    / (this.markerData.scale.niceMax - this.markerData.scale.niceMin));
                const cyWidth = (cyPerc * (this.markerData.gridRight - this.markerData.gridLeft));
                points.push({ top, left: this.markerData.gridRight - cyWidth, value });
                top += this.#namesLineGap();
            }
            this.markerData.points?.push(points);
        });
    }
    /**
     * Set vertical data points / locations
     * @private
     * @returns {void}
     */
    #verticalPoints() {
        this.markerData.points = [];
        this.data?.forEach((dataPoints) => {
            let left = this.textWidths.left + this.margins.left + (this.margins.leftInner * 2);
            const points = [];
            for (let index = 0; index < this.markerData.markerCount; index++) {
                // y = (value - min) / (max - min)
                const value = dataPoints.data?.[index]?.value || 0;
                const cyPerc = ((value - (this.markerData.scale.niceMin || 0))
                    / (this.markerData.scale.niceMax - this.markerData.scale.niceMin));
                const cyHeight = (cyPerc * (this.markerData.gridBottom - this.markerData.gridTop));
                points.push({ left, top: this.markerData.gridBottom - cyHeight, value });
                left += this.#namesLineGap();
            }
            this.markerData.points?.push(points);
        });
    }
    /**
     * Set the widths of each category section (used in other places)
     * @private
     * @returns {void}
     */
    #sectionWidths() {
        this.sectionWidth = (this.markerData.gridRight - this.markerData.gridLeft) / this.markerData.markerCount;
        let left = this.textWidths.left + this.margins.left + (this.margins.leftInner * 2);
        this.sectionWidths = [];
        for (let index = 0; index < this.markerData.markerCount + 1; index++) {
            this.sectionWidths.push({ left, width: this.sectionWidth });
            left += this.sectionWidth;
        }
    }
    /**
     * Set the heights of each category section (used in other places)
     * @private
     * @returns {void}
     */
    #sectionHeights() {
        this.sectionHeight = (this.markerData.gridBottom - this.markerData.gridTop) / this.markerData.markerCount;
        let top = this.textWidths.top + this.margins.top + this.margins.topInner;
        if (this.isGrouped)
            top -= (this.markerData.groupCount || 0) % 2;
        this.sectionHeights = [];
        for (let index = 0; index < this.markerData.markerCount; index++) {
            this.sectionHeights.push({ top, height: this.sectionHeight });
            top += this.sectionHeight;
        }
    }
    /**
     * Add colors in a style sheet to the root so the variables can be used
     * @private
     */
    #addColorVariables() {
        let colorSheet = '';
        if (!this.shadowRoot?.styleSheets) {
            return;
        }
        this.data?.forEach((group, index) => {
            const data = group;
            let color = data.patternColor;
            if (!color && data.color && data.color.substr(0, 1) === '#') {
                color = data.color;
            }
            if (!color && data.color && data.color.substr(0, 1) !== '#') {
                color = `var(--ids-color-palette-${data.color})`;
            }
            if (!color) {
                color = `var(${this.colors[index]})`;
            }
            colorSheet += `--ids-chart-color-${index + 1}: ${color} !important;`;
        });
        const styleSheet = this.shadowRoot.styleSheets[0];
        if (styleSheet.cssRules && styleSheet.cssRules[0].selectorText === ':host') {
            styleSheet.deleteRule(0);
        }
        styleSheet.insertRule(`:host {
      ${colorSheet}
    }`);
    }
    /**
     * Return the insider part of the SVG
     * @private
     * @returns {string} The SVG markup
     */
    #axisTemplate() {
        return `<title></title>
    <title>${this.title}</title>
    <defs>
      ${this.#patterns()}
    </defs>
    <g class="grid vertical-lines${!this.showVerticalGridLines ? ' hidden' : ''}">
      ${this.#verticalLines()}
    </g>
    <g class="grid horizontal-lines${!this.showHorizontalGridLines ? ' hidden' : ''}">
      ${this.#horizontalLines()}
    </g>
    ${this.chartTemplate()}
    <g class="labels x-labels">
      ${this.#xLabels()}
    </g>
    <g class="labels y-labels">
      ${this.#yLabels()}
    </g>
    <g class="labels axis-labels">
      ${this.#axisLabels()}
    </g>
    `;
    }
    /**
     * Overridable method to draw the markers
     * @returns {string} The SVG Marker Markup
     */
    chartTemplate() {
        return '';
    }
    /**
     * Child Chart elements that get tooltips
     * @private
     * @returns {Array<SVGElement>} The elements
     */
    tooltipElements() {
        return [];
    }
    /**
     * Overridable method to draw to get the tooltip template
     * @returns {string} The tooltip template
     */
    tooltipTemplate() {
        // eslint-disable-next-line no-template-curly-in-string
        return '<b>${label}</b> ${value}';
    }
    /**
     * Setup handlers on tooltip elements
     */
    attachTooltipEvents() {
        // Need one event per bar due to the nature of the events for tooltip
        this.tooltipElements().forEach((element) => {
            this.onEvent('hoverend', element, async () => {
                const tooltip = this.container?.querySelector('ids-tooltip');
                if (tooltip) {
                    tooltip.innerHTML = this.#tooltipContent(element);
                    tooltip.target = element;
                    tooltip.placement = 'top';
                    tooltip.visible = true;
                }
            });
        });
    }
    /**
     * Return the data for a tooltip accessible by index
     * @param {number} index the data groupIndex
     * @param {number} groupIndex the data index
     * @returns {Array<string>} The elements
     */
    tooltipData(index, groupIndex = 0) {
        const data = this.data[groupIndex]?.data;
        return {
            label: data[index]?.name || this.data[0].data[index].name,
            value: data[index]?.value || 0,
            tooltip: data[index]?.tooltip
        };
    }
    /**
     * Return the tooltip content
     * @param {SVGElement} elem The svg element we will inspect for content
     * @private
     * @returns {string} The tooltip content
     */
    #tooltipContent(elem) {
        const group = Number(elem.getAttribute('group-index'));
        const index = Number(elem.getAttribute('index'));
        const data = this.tooltipData(index, group);
        if (data.tooltip) {
            // eslint-disable-next-line no-template-curly-in-string
            return data.tooltip.replace('${value}', data.value).replace('${label}', data.label);
        }
        if (this.stacked || this.isGrouped) {
            let html = `<div class="tooltip-center"><b>${data.label}</b></div><div class="tooltip chart-legend">`;
            for (let i = 0; i < this.data.length; i++) {
                const dataGroup = this.data[i];
                const label = dataGroup.name;
                const value = this.data[i].data[index]?.value;
                const colorClass = dataGroup.pattern ? '' : ` color-${i + 1}`;
                const patternSvg = dataGroup.pattern ? `<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><rect width="12" height="12" fill="url(#${dataGroup.pattern})"></rect></svg>` : '';
                if (label && value) {
                    html += `<div class="tooltip-row">
            <div class="swatch${colorClass}">${patternSvg}</div>
            <span>${this.data[i].name}</span>
            <b>${this.data[i].data[index].value}</b></div>`;
                }
            }
            return `${html}</div>`;
        }
        return injectTemplate(this.tooltipTemplate(), data);
    }
    /**
     * Holds the axis labels text object
     * @private
     */
    #axisLabelsText;
    /**
     * Reset the axis labels
     * @private
     * @returns {void}
     */
    #resetAxisLabelsText() {
        this.#axisLabelsText = {
            bottom: '',
            end: '',
            start: '',
            top: ''
        };
    }
    /**
     * Set the axis labels
     * @private
     * @param {'bottom'|'end'|'start'|'top'} opt The option
     * @returns {void}
     */
    #setAxisLabels(opt) {
        if (this.#axisLabelsText) {
            const current = this.#axisLabelsText[opt];
            const labels = {
                bottom: this.axisLabelBottom,
                end: this.axisLabelEnd,
                start: this.axisLabelStart,
                top: this.axisLabelTop
            };
            if (typeof current !== 'undefined' && current !== labels[opt]) {
                this.#axisLabelsText[opt] = labels[opt] || '';
                if (this.initialized)
                    this.redraw();
            }
        }
    }
    /**
     * Return the axis label for the svg
     * @private
     * @returns {string} The axis label markup
     */
    #axisLabels() {
        let html = '';
        if (this.#axisLabelsText) {
            // Size
            const gap = 12;
            const inline = { start: gap, mid: this.width / 2, end: this.width - gap };
            const block = { start: gap, mid: this.height / 2, end: this.height - gap };
            // Position
            const isRTL = this.locale?.isRTL();
            const scale = isRTL ? ' scale(-1, 1)' : '';
            const transform = {
                top: `translate(${inline.mid}, ${block.start})${scale}`,
                bottom: `translate(${inline.mid}, ${block.end})${scale}`,
                start: `translate(${inline.start}, ${block.mid}) rotate(-90)${scale}`,
                end: `translate(${inline.end}, ${block.mid}) rotate(90)${scale}`
            };
            // HTML
            ['top', 'bottom', 'start', 'end'].forEach((type) => {
                if (this.#axisLabelsText[type]) {
                    html += `<text
          class="axis-label-${type}"
          transform="${transform[type]}"
        >${this.#axisLabelsText[type]}</text>`;
                }
            });
        }
        return html;
    }
    /**
     * Return the horizontal line data for the svg
     * @private
     * @returns {string} The horizontal line markup
     */
    #horizontalLines() {
        let lineHtml = '';
        let top = this.margins.top + this.margins.topInner;
        const start = this.textWidths.left + this.margins.left + this.margins.leftInner;
        const end = this.width - this.margins.right;
        // Max number of lines
        const { markerCount, scaleValues } = this.markerData;
        const max = this.horizontal ? (markerCount + 1) : (scaleValues?.length || 0);
        for (let i = 0; i < max; i++) {
            lineHtml += `<line x1="${start}" x2="${end}" y1="${top}" y2="${top}"></line>`;
            top += this.horizontal ? this.#namesLineGap() : this.#valuesLineGap();
        }
        return lineHtml;
    }
    /**
     * Return the vertical line data for the svg
     * @private
     * @returns {string} The vertical line markup
     */
    #verticalLines() {
        let lineHtml = '';
        let left = this.textWidths.left + this.margins.left;
        left += this.margins.leftInner * (this.horizontal ? 1 : 2);
        const top = this.margins.top;
        const bottom = this.height - this.margins.bottom - this.textWidths.bottom;
        // Max number of lines
        const { markerCount, scaleValues } = this.markerData;
        const max = this.horizontal ? (scaleValues?.length || 0) : markerCount;
        for (let i = 0; i < max; i++) {
            lineHtml += `<line x1="${left}" x2="${left}" y1="${top}" y2="${bottom}"></line>`;
            left += this.horizontal ? this.#valuesLineGap() : this.#namesLineGap();
        }
        return lineHtml;
    }
    /**
     * Format the value for the x label in a variety of ways
     * @param {string|Function} value The value to format value
     * @returns {string} The formatted value
     * @private
     */
    #formatXLabel(value) {
        if (!this.xAxisFormatter)
            return value;
        if (typeof this.xAxisFormatter === 'function') {
            return this.xAxisFormatter(value, this.data, this);
        }
        return '';
    }
    /**
     * Format the value for the y label in a variety of ways
     * @param {string|Function} value The value to format value
     * @returns {string} The formatted value
     * @private
     */
    formatYLabel(value) {
        if (!this.yAxisFormatter)
            return value;
        if (typeof this.yAxisFormatter === 'function') {
            return this.yAxisFormatter(value, this.data, this);
        }
        return new Intl.NumberFormat(this.locale?.locale?.name || 'en', this.yAxisFormatter).format(value);
    }
    #nameLabels() {
        let labelHtml = '';
        let left = 0;
        let top = 0;
        const gap = this.#namesLineGap();
        if (this.horizontal) {
            // 3 is the half height of the text - could figure this out based on font size?
            const textSize = 3;
            left = this.textWidths.left + this.margins.left;
            top = this.margins.top + this.margins.topInner + textSize + (gap / 2);
            if (this.axisLabelTop)
                top += this.axisLabelMargin;
            for (let index = 0; index < this.markerData.markerCount; index++) {
                const transform = this.rotateNameLabels !== 0
                    ? ` transform="rotate(${this.rotateNameLabels}, ${left}, ${top})"` : '';
                const value = this.#formatXLabel(this.data[0]?.data[index]?.name);
                labelHtml += `<text x="${left}" y="${top}" aria-hidden="true"${transform}>${value}</text>`;
                top += gap;
            }
        }
        else {
            left = this.textWidths.left + this.margins.left + (this.margins.leftInner * 2);
            top = this.height - this.margins.top - this.margins.bottom + this.margins.bottomInner;
            if (this.axisLabelTop)
                top += this.axisLabelMargin;
            for (let index = 0; index < this.markerData.markerCount; index++) {
                const value = this.#formatXLabel(this.data[0]?.data[index]?.name);
                let transform;
                if (this.alignXLabels === 'middle') {
                    const x = left + (this.sectionWidths[index].width / 2);
                    transform = this.rotateNameLabels !== 0 ? ` transform="rotate(${this.rotateNameLabels}, ${x}, ${top})" transform-origin="8px 8px"` : '';
                    labelHtml += `<text x="${x}" y="${top}" alignment-baseline="middle" text-anchor="middle" aria-hidden="true"${transform}>${value}</text>`;
                }
                else {
                    transform = this.rotateNameLabels !== 0 ? ` transform="rotate(${this.rotateNameLabels}, ${left}, ${top})" text-anchor="end"` : '';
                    labelHtml += `<text x="${left}" y="${top}" aria-hidden="true"${transform}>${value}</text>`;
                }
                left += this.alignXLabels === 'middle' ? this.sectionWidths[index].width : gap;
            }
        }
        return labelHtml;
    }
    /**
     * Return the value labels data
     * @private
     * @returns {string} The value labels markup
     */
    #valueLabels() {
        let lineHtml = '';
        let left = 0;
        let top = 0;
        if (this.horizontal) {
            left = this.textWidths.left + this.margins.left + this.margins.leftInner;
            top = this.height - this.margins.top - this.margins.bottom + this.margins.bottomInner;
            if (this.axisLabelTop)
                top += this.axisLabelMargin;
            this.markerData.scaleValues?.slice().forEach((value) => {
                lineHtml += `<text x="${left}" y="${top}" aria-hidden="true">${this.formatYLabel(value)}</text>`;
                left += this.#valuesLineGap();
            });
        }
        else {
            // 3 is the half height of the text - could figure this out based on font size?
            const textSize = 3;
            left = this.textWidths.left + this.margins.left;
            top = this.margins.top + textSize;
            this.markerData.scaleValues?.slice().reverse().forEach((value) => {
                lineHtml += `<text x="${left}" y="${top}" aria-hidden="true">${this.formatYLabel(value)}</text>`;
                top += this.#valuesLineGap();
            });
        }
        return lineHtml;
    }
    #namesLineGap() {
        if (this.horizontal) {
            const { gridTop, gridBottom, markerCount } = this.markerData;
            return (gridBottom - gridTop) / markerCount;
        }
        const left = this.textWidths.left + this.margins.left + this.margins.leftInner;
        const width = this.width - this.margins.right - (this.margins.rightInner * 2);
        return ((width - left) / (this.markerData.markerCount - 1));
    }
    #valuesLineGap() {
        const len = this.markerData.scaleValues?.length || 0;
        let v = 0;
        if (this.horizontal) {
            v += this.margins.left + this.margins.right;
            v += this.textWidths.left + this.textWidths.right;
            v += (this.margins.leftInner * 2) + this.margins.rightInner;
            v = this.width - v;
        }
        else {
            v += this.margins.top + this.margins.bottom;
            v += this.textWidths.top + this.textWidths.bottom;
            v = this.height - v;
        }
        return (v / (len - 1));
    }
    /**
     * Return the x label data for the svg
     * @private
     * @returns {string} The x label markup
     */
    #xLabels() {
        return this.horizontal ? this.#valueLabels() : this.#nameLabels();
    }
    /**
     * Return the y label data for the svg
     * @private
     * @returns {string} The y label markup
     */
    #yLabels() {
        return this.horizontal ? this.#nameLabels() : this.#valueLabels();
    }
    /**
     * Show an empty message with settings configuration
     * @private
     */
    #showEmptyMessage() {
        this.svg?.classList.add('hidden');
        this.emptyMessage?.style.setProperty('height', `${this.height}px`);
        this.emptyMessage?.removeAttribute('hidden');
    }
    /**
     * Hide the empty message
     * @private
     */
    #hideEmptyMessage() {
        this.svg?.classList.remove('hidden');
        this.emptyMessage?.style.setProperty('height', '');
        this.emptyMessage?.setAttribute('hidden', '');
    }
    /**
     * Return the def markup for svg patterns
     * @private
     * @returns {string} The string with all the patterns being used
     */
    #patterns() {
        let patternHtml = '';
        this.data?.forEach((group, i) => {
            let pattern = patternData[group.pattern];
            if (pattern) {
                const color = `${this.color(i)}` || '#000000';
                pattern = pattern.replace('fill="#000000"', `fill="${color}"`);
                patternHtml += pattern;
            }
        });
        return patternHtml;
    }
    /**
     * Handles chart title attribute changes
     * @param {string} value The title value
     */
    onTitleChange(value = '') {
        const titleElem = this.container?.querySelector(attributes.TITLE);
        if (titleElem) {
            titleElem.textContent = value;
        }
    }
    /**
     * The width of the chart (in pixels) or 'inherit' from the parent
     * @param {number | string} value The height value
     */
    set height(value) {
        let height = value;
        if (value === 'inherit') {
            height = this.#getParentDimensions().height;
            this.resizeToParentHeight = true;
            this.#attachResizeObserver();
        }
        this.setAttribute(attributes.HEIGHT, String(height));
        this.svg?.setAttribute(attributes.HEIGHT, String(height));
        this.redraw();
    }
    get height() {
        const value = stringToNumber(this.getAttribute(attributes.HEIGHT));
        return !Number.isNaN(value) ? value : 500;
    }
    /**
     * Flips the orientation to horizontal
     * supported `Axis` and `Bar` type charts
     * @param {boolean | string} value If true will set `horizontal` attribute
     */
    set horizontal(value) {
        if (!(/^ids-(axis|bar)-chart$/gi.test(this.nodeName)))
            return;
        const val = stringToBool(value);
        if (val !== this.state.horizontal) {
            this.state.horizontal = val;
            if (val) {
                this.setAttribute(attributes.HORIZONTAL, '');
                this.svg?.classList.add(attributes.HORIZONTAL);
            }
            else {
                this.removeAttribute(attributes.HORIZONTAL);
                this.svg?.classList.remove(attributes.HORIZONTAL);
            }
            this.redraw();
        }
    }
    get horizontal() {
        return this.state.horizontal;
    }
    /**
     * The width of the chart (in pixels) or 'inherit' from the parent
     * @param {number | string} value The width value
     */
    set width(value) {
        let width = value;
        if (value === 'inherit') {
            width = this.#getParentDimensions().width;
            this.resizeToParentWidth = true;
            this.#attachResizeObserver();
        }
        this.setAttribute(attributes.WIDTH, String(width));
        this.svg?.setAttribute(attributes.WIDTH, String(width));
        this.#setContainerWidth(Number(width));
        this.redraw();
    }
    get width() {
        const value = stringToNumber(this.getAttribute(attributes.WIDTH));
        return !Number.isNaN(value) ? value : 700;
    }
    /**
     * Get the parent element's width and height
     * @returns {object} The height and width of the parent element
     */
    #getParentDimensions() {
        const container = document.querySelector('ids-container');
        let isHidden = false;
        if (container.hidden) {
            container.hidden = false;
            isHidden = true;
        }
        const dims = {
            width: this.parentElement?.offsetWidth || parseInt(this.parentElement?.style.width),
            height: this.parentElement?.offsetHeight || parseInt(this.parentElement?.style.height)
        };
        if (isHidden) {
            container.hidden = true;
        }
        return dims;
    }
    /**
     * Set the container width (for correct legend and sizing)
     * @param {number} value The width value
     */
    #setContainerWidth(value) {
        const container = this.container;
        if (!container)
            return;
        if (container.classList.contains('ids-chart-container')) {
            container.style.width = `${value}px`;
            return;
        }
        container.parentNode?.style.setProperty('width', `${value}px`);
    }
    /**
     * Get the max width to render names axis
     * @private
     * @returns {number} Calculated width
     */
    #maxTextWidthForNames() {
        let maxWidth = 0;
        for (let index = 0; index < this.markerData.markerCount; index++) {
            const v = this.#formatXLabel(this.data[0]?.data[index]?.name);
            const w = calculateTextRenderWidth(this, v);
            if (w > maxWidth)
                maxWidth = w;
        }
        return maxWidth;
    }
    /**
     * Get the max width to render values axis
     * @private
     * @returns {number} Calculated width
     */
    #maxTextWidthForValues() {
        let maxWidth = 0;
        this.markerData.scaleValues?.slice().forEach((value) => {
            const v = this.formatYLabel(value);
            const w = calculateTextRenderWidth(this, v);
            if (w > maxWidth)
                maxWidth = w;
        });
        return maxWidth;
    }
    /**
     * Set the max width to render the x-axis
     * @private
     * @returns {void}
     */
    xMaxTextWidth() {
        this.#xMaxTextWidth = this.horizontal
            ? this.#maxTextWidthForValues()
            : this.#maxTextWidthForNames();
    }
    /**
     * Set the max width to render the y-axis
     * @private
     * @returns {void}
     */
    yMaxTextWidth() {
        this.#yMaxTextWidth = this.horizontal
            ? this.#maxTextWidthForNames()
            : this.#maxTextWidthForValues();
    }
    /**
     * Set the left, right, top, bottom margins
     * @param {object} value The margin values
     */
    set margins(value) {
        this.state.margins = value;
        this.redraw();
    }
    get margins() {
        return this.state?.margins || {
            left: this.axisLabelsMargin.start,
            right: (this.legendPlacement === 'right' ? 150 : 4) + this.axisLabelsMargin.end,
            top: 16 + this.axisLabelsMargin.top,
            bottom: 12 + this.axisLabelsMargin.bottom + this.bottomRotateMargin,
            leftInner: 8,
            rightInner: 8,
            topInner: 0,
            bottomInner: 12
        };
    }
    /**
     * Get bottom rotate margin
     * @returns {number} The calc value
     */
    get bottomRotateMargin() {
        if (!this.rotateNameLabels)
            return 0;
        const angle = this.rotateNameLabels % 90;
        const total = this.#xMaxTextWidth - 12;
        const part = total / 90;
        return (Math.abs(angle) === 0) ? total : (part * Math.abs(angle));
    }
    /**
     * Get axis labels margin
     * @returns {{ bottom: number, end: number, start: number, top: number }} The calc values
     */
    get axisLabelsMargin() {
        const margin = this.axisLabelMargin;
        return {
            bottom: this.axisLabelBottom ? margin : 0,
            end: this.axisLabelEnd ? margin : 0,
            start: this.axisLabelStart ? margin : 0,
            top: this.axisLabelTop ? margin : 0
        };
    }
    /**
     * Set the width the text labels/axes take up on each side.
     * @param {object} value The margin values
     */
    set textWidths(value) {
        this.state.textWidths = value;
        this.redraw();
    }
    get textWidths() {
        return this.state.textWidths || {
            left: this.legendPlacement === 'left' ? 34 : (this.#yMaxTextWidth || 4),
            right: 0,
            top: 0,
            bottom: 24
        };
    }
    /**
     * Set the data array of the chart
     * @param {Array<unknown>} value The array to use
     */
    set data(value) {
        if (value) {
            this.#hideEmptyMessage();
            this.datasource.data = value;
            this.initialized = true;
            this.redraw();
            this.reanimate();
            return;
        }
        this.datasource.data = [];
    }
    get data() { return this?.datasource?.data || []; }
    /**
     * Set the minimum value on the y axis
     * @param {number} value The value to use
     */
    set yAxisMin(value) {
        this.setAttribute(attributes.Y_AXIS_MIN, String(value));
        this.redraw();
    }
    get yAxisMin() {
        return parseInt(this.getAttribute(attributes.Y_AXIS_MIN) ?? '') || 0;
    }
    /**
     * Show the vertical axis grid lines
     * @param {boolean} value True or false to show the grid lines
     */
    set showVerticalGridLines(value) {
        this.setAttribute(attributes.SHOW_VERTICAL_GRID_LINES, String(value));
        this.redraw();
    }
    get showVerticalGridLines() {
        const value = this.getAttribute(attributes.SHOW_VERTICAL_GRID_LINES);
        return value !== null ? stringToBool(value) : this.horizontal;
    }
    /**
     * Show the horizontal axis grid lines
     * @param {boolean} value True or false to show the grid lines
     */
    set showHorizontalGridLines(value) {
        this.setAttribute(attributes.SHOW_HORIZONTAL_GRID_LINES, String(value));
        this.redraw();
    }
    get showHorizontalGridLines() {
        const value = this.getAttribute(attributes.SHOW_HORIZONTAL_GRID_LINES);
        return value !== null ? stringToBool(value) : !this.horizontal;
    }
    /**
     * Utility function to get the colors series being used in this chart
     * @returns {Array} The colors being used on this instance.
     */
    get colors() {
        return QUALITATIVE_COLORS;
    }
    /**
     * Get the color to use based on the index for sequential and custom colors
     * @param {number} index The current index
     * @returns {string} The color to use
     * @private
     */
    color(index) {
        if (this.data[index].patternColor) {
            return this.data[index].patternColor;
        }
        return `var(${this.data[index].color ? `color-${index + 1}` : this.colors[index]})`;
    }
    /**
     * Set the format on the x axis items
     * @param {Function} value A string with the formatting routine or a function for more customization.
     */
    set xAxisFormatter(value) {
        this.state.xAxisFormatter = value;
        this.redraw();
    }
    get xAxisFormatter() {
        return this.state.xAxisFormatter;
    }
    /**
     * Set the format on the y axis items
     * @param {string|Function} value A string with the formatting routine or a function for more customization.
     */
    set yAxisFormatter(value) {
        this.state.yAxisFormatter = value;
        this.redraw();
    }
    get yAxisFormatter() {
        return this.state.yAxisFormatter;
    }
    /**
     * Reanimate the chart
     */
    reanimate() {
        if (!this.animated || !this.initialized) {
            return;
        }
        requestAnimationFrame(() => {
            this.container?.querySelectorAll('animate').forEach((elem) => {
                if (elem.beginElement) {
                    elem.beginElement();
                }
            });
            this.container?.querySelectorAll('animateTransform').forEach((elem) => {
                if (elem.beginElement) {
                    elem.beginElement();
                }
            });
        });
    }
    /**
     * Get a reusable snippet to ease the animation
     * @private
     * @returns {string} The reusable snippet
     */
    get cubicBezier() {
        return `calcMode="spline" keyTimes="0; 1" keySplines="0.17, 0.04, 0.03, 0.94" begin="0s" dur="${this.animationSpeed}s"`;
    }
    /**
     * Set the animation on/off
     * @param {boolean} value True if animation is on
     */
    set animated(value) {
        const animated = stringToBool(this.animated);
        this.setAttribute(attributes.ANIMATED, String(value));
        this.redraw();
        if (animated) {
            this.reanimate();
        }
    }
    get animated() {
        const animated = this.getAttribute(attributes.ANIMATED);
        if (animated === null) {
            return true;
        }
        return stringToBool(this.getAttribute(attributes.ANIMATED));
    }
    /**
     * Set the animation speed in s
     * @param {number} value The speed in s
     */
    set animationSpeed(value) {
        this.setAttribute(attributes.ANIMATION_SPEED, String(value));
        if (this.animated) {
            this.reanimate();
        }
    }
    get animationSpeed() {
        return parseFloat(this.getAttribute(attributes.ANIMATION_SPEED) ?? '') || 0.8;
    }
    /**
     * Set the x axis label alignment between start, middle and end
     * @param {string} value start, middle or end
     */
    set alignXLabels(value) {
        this.setAttribute(attributes.ALIGN_X_LABELS, value);
        this.redraw();
    }
    get alignXLabels() {
        return this.getAttribute(attributes.ALIGN_X_LABELS) || 'start';
    }
    /**
     * Stack the data forming a stacked bar chart
     * @param {boolean} value True to stack the data
     */
    set stacked(value) {
        this.setAttribute(attributes.STACKED, String(value));
        this.redraw();
    }
    get stacked() {
        return stringToBool(this.getAttribute(attributes.STACKED)) || false;
    }
    /**
     * Set the bottom axis label text
     * @param {string} value of the text
     */
    set axisLabelBottom(value) {
        if (value) {
            this.setAttribute(attributes.AXIS_LABEL_BOTTOM, value);
        }
        else {
            this.removeAttribute(attributes.AXIS_LABEL_BOTTOM);
        }
        this.#setAxisLabels('bottom');
    }
    get axisLabelBottom() {
        return this.getAttribute(attributes.AXIS_LABEL_BOTTOM);
    }
    /**
     * Set the end axis label text
     * @param {string} value of the text
     */
    set axisLabelEnd(value) {
        if (value) {
            this.setAttribute(attributes.AXIS_LABEL_END, value);
        }
        else {
            this.removeAttribute(attributes.AXIS_LABEL_END);
        }
        this.#setAxisLabels('end');
    }
    get axisLabelEnd() {
        return this.getAttribute(attributes.AXIS_LABEL_END);
    }
    /**
     * Set the margin for axis label text
     * @param {string|number} value of the margin
     */
    set axisLabelMargin(value) {
        const val = stringToNumber(this.getAttribute(attributes.AXIS_LABEL_MARGIN));
        if (!Number.isNaN(val)) {
            this.setAttribute(attributes.AXIS_LABEL_MARGIN, String(val));
        }
        else {
            this.removeAttribute(attributes.AXIS_LABEL_MARGIN);
        }
        this.#setAxisLabels('end');
    }
    get axisLabelMargin() {
        const value = stringToNumber(this.getAttribute(attributes.AXIS_LABEL_MARGIN));
        return !Number.isNaN(value) ? value : 16;
    }
    /**
     * Set the start axis label text
     * @param {string} value of the text
     */
    set axisLabelStart(value) {
        if (value) {
            this.setAttribute(attributes.AXIS_LABEL_START, value);
        }
        else {
            this.removeAttribute(attributes.AXIS_LABEL_START);
        }
        this.#setAxisLabels('start');
    }
    get axisLabelStart() {
        return this.getAttribute(attributes.AXIS_LABEL_START);
    }
    /**
     * Set the top axis label text
     * @param {string} value of the text
     */
    set axisLabelTop(value) {
        if (value) {
            this.setAttribute(attributes.AXIS_LABEL_TOP, value);
        }
        else {
            this.removeAttribute(attributes.AXIS_LABEL_TOP);
        }
        this.#setAxisLabels('top');
    }
    get axisLabelTop() {
        return this.getAttribute(attributes.AXIS_LABEL_TOP);
    }
    /**
     * Set the rotation for the axis name label text (eg 45deg)
     * @param {number} value the number of degrees to rotate the text
     */
    set rotateNameLabels(value) {
        if (value) {
            this.setAttribute(attributes.ROTATE_NAME_LABELS, String(value));
        }
        else {
            this.removeAttribute(attributes.ROTATE_NAME_LABELS);
        }
        if (this.initialized)
            this.redraw();
    }
    get rotateNameLabels() {
        return Number(this.getAttribute(attributes.ROTATE_NAME_LABELS)) || 0;
    }
};
IdsAxisChart = __decorate([
    customElement('ids-axis-chart'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsAxisChart);
export default IdsAxisChart;
//# sourceMappingURL=ids-axis-chart.js.map