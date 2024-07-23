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
import { QUALITATIVE_COLORS } from '../ids-axis-chart/ids-chart-colors';
import { patternData } from '../ids-axis-chart/ids-pattern-data';
import { injectTemplate, stringToBool, stringToNumber, kebabCase } from '../../utils/ids-string-utils/ids-string-utils';
import Base from './ids-pie-chart-base';
import IdsDataSource from '../../core/ids-data-source';
import '../ids-tooltip/ids-tooltip';
import '../ids-empty-message/ids-empty-message';
import styles from './ids-pie-chart.scss';
/**
 * IDS Pie Chart Component
 * @type {IdsPieChart}
 * @inherits IdsElement
 * @mixes IdsChartLegendMixin
 * @mixes IdsChartSelectionMixin
 * @mixes IdsLocaleMixin
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part container - the outside container element
 * @part chart - the svg outer element
 */
let IdsPieChart = class IdsPieChart extends Base {
    constructor() {
        super();
        // Setup default values
        if (!this.state)
            this.state = {};
        this.DEFAULT_SELECTABLE = false;
    }
    svg;
    svgContainer;
    emptyMessage;
    legend;
    percents = [];
    totals = 0;
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
     * Invoked each time the custom element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback?.();
        this.legendPlacement = 'right';
        this.svg = this.shadowRoot?.querySelector('svg');
        this.svgContainer = this.shadowRoot?.querySelector('.ids-chart-svg-container');
        this.emptyMessage = this.querySelector('ids-empty-message') || this.shadowRoot?.querySelector('ids-empty-message');
        this.legend = this.shadowRoot?.querySelector('[name="legend"]');
        this.redraw();
        this.legendsClickable?.(this.selectable);
        this.#attachEventHandlers();
    }
    /**
     * On selectable change
     */
    onSelectableChange() {
        this.legendsClickable?.(this.selectable);
    }
    /**
     * Invoked when redrawing the chart
     * @private
     */
    redraw() {
        if (!this.initialized) {
            return;
        }
        if (this.data && this.data.length === 0 && this.initialized) {
            this.#showEmptyMessage();
            return;
        }
        this.#calculate();
        this.#addColorVariables();
        this.#setSliceAngles();
        if (this.legend)
            this.legend.innerHTML = this.legendTemplate();
        if (this.svg)
            this.svg.innerHTML = this.chartTemplate();
        this.#attachTooltipEvents();
        this.#preSelected();
        // Completed Event and Callback
        this.triggerEvent('rendered', this, {
            detail: {
                svg: this.svg,
                data: this.data
            }
        });
    }
    /**
     * Return the attributes handled as getters/setters
     * @returns {Array} the list of attributes
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.ANIMATED,
            attributes.DATA,
            attributes.DONUT,
            attributes.DONUT_TEXT,
            attributes.HEIGHT,
            attributes.SUPPRESS_TOOLTIPS,
            attributes.TITLE,
            attributes.WIDTH
        ];
    }
    /**
     * Create the template chart
     * @returns {string} The template
     */
    template() {
        return `<div class="ids-chart-container" part="container">
      <div class="ids-chart-svg-container">
        <svg class="ids-pie-chart" part="chart"${this.width ? ` width="${this.width}"` : ''}${this.height ? ` height="${this.height}"` : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.viewBoxSize} ${this.viewBoxSize}">
        </svg>
      </div>
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
     * Setup event handling
     * @private
     */
    #attachEventHandlers() {
        this.onEvent('localechange.pie', this.closest('ids-container'), async () => {
            this.redraw();
            const textElem = this.shadowRoot?.querySelector('ids-empty-message ids-text');
            if (textElem)
                textElem.textContent = this.locale?.translate('NoData');
        });
        this.onEvent('languagechange.pie', this.closest('ids-container'), async () => {
            const textElem = this.shadowRoot?.querySelector('ids-empty-message ids-text');
            if (textElem)
                textElem.textContent = this.locale?.translate('NoData');
        });
    }
    /**
     * Get the percentages as rounded and total
     * @private
     */
    #calculate() {
        this.totals = 0;
        this.percents = [];
        const data = this.data[0].data;
        data?.forEach((element) => {
            this.totals += element.value || 0;
        });
        data?.forEach((element) => {
            const total = ((element.value || 0) / (this.totals)) * 100;
            this.percents.push({ total, rounded: Math.round(total) });
        });
    }
    /**
     * Calculate the legend markup and return it
     * @returns {string} The legend markup.
     */
    legendTemplate() {
        let legend = `<div class="chart-legend">`;
        this.data[0].data?.forEach((slice, index) => {
            const colorClass = slice.pattern ? '' : ` color-${index + 1}`;
            const patternSvg = slice.pattern ? `<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><rect width="12" height="12" fill="url(#${slice.pattern})"></rect></svg>` : '';
            let legendValue = `${slice.name} (${this.percents[index].rounded}${this.locale?.numbers().percentSign || '%'})`;
            if (typeof this.legendFormatter === 'function') {
                legendValue = this.legendFormatter(slice, this.percents[index], this);
            }
            legend += `<a href="#legend-${kebabCase(slice.name || index)}" data-index="${index}" class="chart-legend-item">
        <div class="swatch${colorClass}">${patternSvg}</div>
        ${legendValue}
        </a>`;
        });
        legend += `</div>`;
        return legend;
    }
    /**
     * Set the format on the legend items
     * @param {Function} value A function for legend customization
     */
    set legendFormatter(value) {
        this.state.legendFormatter = value;
        this.redraw();
    }
    get legendFormatter() {
        return this.state.legendFormatter;
    }
    /**
     * Add colors in a style sheet to the root so the css variables can be used
     * @private
     */
    #addColorVariables() {
        let colorSheet = '';
        if (!this.shadowRoot?.styleSheets) {
            return;
        }
        const data = this.data[0].data;
        data?.forEach((group, index) => {
            const slice = group;
            let color = slice.patternColor;
            if (!color && slice.color && slice.color.substr(0, 1) === '#') {
                color = slice.color;
            }
            if (!color && slice.color && slice.color.substr(0, 1) !== '#') {
                color = `var(--ids-color-palette-${slice.color})`;
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
     * Return the inner chart template
     * @returns {string} The pie inner template
     */
    chartTemplate() {
        let circles = '';
        let filled = 0;
        const radius = this.donut ? 40 : 25;
        const strokeWidth = this.donut ? 15 : 50;
        const cx = this.viewBoxSize / 2;
        const cy = this.viewBoxSize / 2;
        this.percents.forEach((percent, index) => {
            const startAngle = -90;
            const dashArray = 2 * Math.PI * radius;
            const dashOffset = dashArray - ((dashArray * percent.total) / 100);
            const angle = ((filled * 360) / 100) + startAngle;
            const data = this.data[0].data;
            const colorClass = data?.[index].pattern ? '' : ` color-${index + 1}`;
            const stroke = data?.[index].pattern ? `url(#${data?.[index].pattern})` : this.color(index);
            circles += `<g role="listitem">
        <circle class="slice${colorClass}" part="circle" stroke="${stroke}" stroke-width="${strokeWidth}" index="${index}" percent="${percent.total}" r="${radius}" cx="${cx}" cy="${cy}" stroke-dasharray="${dashArray}" stroke-dashoffset="${this.animated ? dashArray : dashOffset}" transform="rotate(${angle} ${cx} ${cy})" pointer-events="stroke"></circle>
        <text class="audible">${data?.[index].name}  ${percent.rounded}%</text>
        </g>`;
            filled += percent.total;
            if (this.animated) {
                // Kick Off an Animation
                const animationDuration = 380;
                const currentDuration = (animationDuration * percent.total) / 100;
                const delay = (animationDuration * filled) / 100;
                requestAnimationFrame(() => {
                    this.container?.querySelector(`circle.slice[index="${index}"]`)?.style.setProperty('transition', `stroke-dashoffset ${currentDuration}ms cubic-bezier(0.17, 0.04, 0.03, 0.94) ${delay}ms`);
                    requestAnimationFrame(() => {
                        this.container?.querySelector(`circle.slice[index="${index}"]`)?.setAttribute('stroke-dashoffset', String(dashOffset));
                    });
                });
            }
        });
        return `<title></title>
      <title>${this.title}</title>
      <defs>
        ${this.#patterns()}
      </defs>
      <g role="list">
        ${circles}
      </g>
      <circle class="donut-hole" r="${radius}" cx="${cx}" cy="${cy}" fill="transparent" stroke-width="0"></circle>
      <text class="donut-text" x="50%" y="50%" dy=".3em">${this.donutText}</text>
      `;
    }
    /**
     * Return the definition markup for svg patterns
     * @private
     * @returns {string} The string with all the patterns being used
     */
    #patterns() {
        let patternHtml = '';
        this.data[0].data?.forEach((slice, i) => {
            let pattern = patternData[slice.pattern];
            if (pattern) {
                const color = `${this.color(i)}`;
                pattern = pattern.replace('fill="#000000"', `fill="${color}"`);
                patternHtml += pattern;
            }
        });
        return patternHtml;
    }
    /**
     * Viewbox size (square)
     * @returns {number} the viewbox width/height
     */
    get viewBoxSize() {
        return 100;
    }
    /**
     * Return chart elements that get selection
     * @returns {Array<SVGElement>} The elements
     */
    get selectionElements() {
        if (!this.selectable)
            return [];
        return [...this.container?.querySelectorAll('.slice') ?? []];
    }
    /**
     * Return chart elements that get tooltips
     * @private
     * @returns {Array<SVGElement>} The elements
     */
    tooltipElements() {
        return [...this.container?.querySelectorAll('.slice') ?? []];
    }
    /**
     * Return the tooltip template
     * @returns {string} The tooltip template
     */
    tooltipTemplate() {
        // eslint-disable-next-line no-template-curly-in-string
        return '<b>${label}</b> ${value}';
    }
    /**
     * Convert angle degree to radians
     * @private
     * @param {number} degree The degree
     * @returns {number} calculated radians value
     */
    #degreeToRadians(degree) {
        return (degree * (Math.PI / 180));
    }
    /**
     * Hold the angles for each slice
     * @private
     */
    #sliceAngles = [];
    /**
     * Set the angles for each slice
     * @private
     * @returns {void}
     */
    #setSliceAngles() {
        this.#sliceAngles = [];
        const totals = this.totals;
        let startAngle = this.#degreeToRadians(-90);
        this.data?.[0]?.data?.forEach((d) => {
            const endAngle = ((d.value / totals) * Math.PI * 2) + startAngle;
            const midAngle = (startAngle + endAngle) / 2;
            this.#sliceAngles.push({ startAngle, midAngle, endAngle });
            startAngle = endAngle;
        });
    }
    /**
     * Get the midpoint position for given slice index
     * @private
     * @param {number} index The slice index
     * @param {number} extra Any extra desired padding
     * @returns {{ x: number, y: number, midAngle: number }} The calculated position
     */
    #midPosition(index, extra = 0) {
        const width = this.svg?.clientWidth ?? NaN;
        const height = this.svg?.clientHeight ?? NaN;
        const radius = (Math.min(width, height) / 2) - (this.donut ? 8 : 0);
        // Center position
        const { x: offsetX, y: offsetY } = this.svgContainer?.getBoundingClientRect() ?? { x: NaN, y: NaN };
        const cx = (width / 2) + offsetX - this.#tooltipDotSize;
        const cy = (height / 2) + offsetY - this.#tooltipDotSize;
        const { midAngle } = this.#sliceAngles[index];
        return {
            x: cx + (Math.cos(midAngle) * (radius + extra)),
            y: cy + (Math.sin(midAngle) * (radius + extra)),
            midAngle
        };
    }
    /**
     * Hold the size for tooltip dot
     * @private
     */
    #tooltipDotSize = 2;
    /**
     * Hold the tooltip dots
     * @private
     */
    #tooltipDots = [];
    /**
     * Adjust the position of tooltip dots and add if run first time.
     * @private
     * @returns {void}
     */
    #adjustTooltipDots() {
        this.#tooltipDots = [...this.svgContainer?.parentElement?.querySelectorAll('#dots .dot') ?? []];
        // Add for first time
        if (!this.#tooltipDots.length) {
            const html = `<div id="dots">${this.#sliceAngles.map(() => '<span class="dot"></span>').join('')}`;
            this.svgContainer?.parentElement?.insertAdjacentHTML('beforeend', html);
            this.#tooltipDots = [...this.svgContainer?.parentElement?.querySelectorAll('#dots .dot') ?? []];
        }
        // Set positions
        this.#tooltipDots.forEach((dot, i) => {
            const { x, y } = this.#midPosition(i);
            dot.style.setProperty('--ids-pie-chart-tooltip-dot-size', `${this.#tooltipDotSize}px`);
            dot.style.setProperty('left', `${x}px`);
            dot.style.setProperty('top', `${y}px`);
        });
    }
    /**
     * Setup handlers on tooltip elements
     */
    #attachTooltipEvents() {
        if (this.suppressTooltips) {
            return;
        }
        const tooltip = this.svgContainer?.parentElement?.querySelector('ids-tooltip');
        // Need one event per bar due to the nature of the events for tooltip
        this.tooltipElements().forEach((element, index) => {
            this.onEvent('hoverend', element, async () => {
                if (tooltip) {
                    tooltip.innerHTML = this.#tooltipContent(element);
                    tooltip.target = element;
                }
                this.#positionTooltip(tooltip, index);
            });
        });
        // TODO: Find a way to work without initial visible call
        // Issue first time popup arrow not align position
        const tooltipPopup = tooltip?.popup;
        if (tooltipPopup)
            tooltipPopup.visible = true;
    }
    /**
     * Detatch tooltip handlers on elements
     */
    #detachTooltipEvents() {
        // Need one event per bar due to the nature of the events for tooltip
        this.tooltipElements().forEach((element) => {
            this.offEvent('hoverend', element);
        });
    }
    /**
     * Return the data for a tooltip accessed by index
     * @private
     * @param {SVGElement} tooltip the tooltip component
     * @param {number} index the index
     */
    #positionTooltip(tooltip, index) {
        this.#adjustTooltipDots();
        tooltip.popup.alignTarget = this.#tooltipDots[index];
        // Arrow placement
        const { midAngle } = this.#sliceAngles[index];
        const rads = midAngle + this.#degreeToRadians(90);
        const piQuart = Math.PI / 4;
        let placement = null;
        // https://www.wyzant.com/resources/lessons/math/trigonometry/unit-circle
        if ((rads <= piQuart && rads >= 0) || rads > (7 * piQuart))
            placement = 'top';
        else if (rads <= (3 * piQuart) && rads >= piQuart)
            placement = 'right';
        else if (rads <= (5 * piQuart) && rads >= (3 * piQuart))
            placement = 'bottom';
        else if (rads <= (7 * piQuart) && rads >= (5 * piQuart))
            placement = 'left';
        tooltip.placement = placement;
        // Show tooltip
        tooltip.visible = true;
    }
    /**
     * Return the data for a tooltip accessible by index
     * @param {number} index the data groupIndex
     * @returns {Array<string>} The elements
     */
    tooltipData(index) {
        const data = this.data[0].data[index];
        return {
            label: data.name,
            value: data.value || 0,
            tooltip: data.tooltip,
            total: this.percents[index].total,
            rounded: this.percents[index].rounded
        };
    }
    /**
     * Return the tooltip content
     * @param {SVGElement} elem The svg element we will inspect for content
     * @private
     * @returns {string} The tooltip content
     */
    #tooltipContent(elem) {
        const index = Number(elem.getAttribute('index'));
        const data = this.tooltipData(index);
        if (data.tooltip) {
            // eslint-disable-next-line no-template-curly-in-string
            return data.tooltip.replace('${value}', data.value).replace('${label}', data.label).replace('${percent}', data.rounded);
        }
        return injectTemplate(this.tooltipTemplate(), data);
    }
    /**
     * Show an empty message with settings configuration
     * @private
     */
    #showEmptyMessage() {
        this.svg?.classList.add('hidden');
        this.svgContainer?.parentElement?.classList.add('empty');
        this.emptyMessage?.style.setProperty('height', `${this.height}px`);
        this.emptyMessage?.removeAttribute('hidden');
    }
    /**
     * Hide the empty message
     * @private
     */
    #hideEmptyMessage() {
        this.svg?.classList.remove('hidden');
        this.svgContainer?.parentElement?.classList.remove('empty');
        this.emptyMessage?.style.setProperty('height', '');
        this.emptyMessage?.setAttribute('hidden', '');
    }
    /**
     * Set initially selected
     * @private
     * @returns {void}
     */
    #preSelected() {
        if (!this.initialized || !this.selectable || !this.data?.length || !this.selectionElements?.length)
            return;
        const index = this.data[0]?.data?.findIndex((n) => n.selected);
        if (typeof index === 'number' && index > -1) {
            const target = this.selectionElements[index];
            if (!target)
                return;
            this.selectionElements.forEach((el) => {
                if (el === target)
                    el.setAttribute('selected', '');
                else
                    el.classList.add('not-selected');
            });
        }
    }
    /**
     * Get currently selected
     * @returns {IdsPieChartSelected} selected.
     */
    getSelected() {
        const selected = this.selectionElements.filter((el) => el.hasAttribute('selected'))[0];
        if (!selected)
            return {};
        const i = selected.getAttribute('index');
        const data = this.data[0].data?.[i];
        return { slice: selected, index: i, data };
    }
    /**
     * Set selected by give indexes
     * @param {IdsPieChartSelectedBy} opt The in comeing options
     * @returns {void}
     */
    setSelected(opt) {
        if (!this.initialized || !this.selectable || !this.data?.length || !this.selectionElements?.length)
            return;
        const index = stringToNumber(opt.index);
        if (!Number.isNaN(index))
            this.setSelection(index);
    }
    /**
     * Set the selection for given index
     * @private
     * @param {number|string} index The index value
     * @returns {boolean} False, if veto.
     */
    setSelection(index) {
        const target = this.selectionElements?.[index];
        if (!target)
            return false;
        let data;
        // Deselect
        const deselect = (elem, idx) => {
            data = this.data[0].data?.[idx];
            if (!this.triggerVetoableEvent('beforedeselected', { slice: elem, index: idx, data })) {
                return false;
            }
            if (data)
                delete data.selected;
            this.selectionElements.forEach((el) => el.classList.remove('not-selected'));
            elem.removeAttribute('selected');
            this.triggerEvent('deselected', this, {
                bubbles: true,
                detail: { elem: this, slice: elem, index: idx, data } // eslint-disable-line
            });
            return true;
        };
        // Previously selected
        const idxSelected = this.selectionElements.findIndex((el) => el.hasAttribute('selected'));
        if (idxSelected > -1) {
            if (`${idxSelected}` === `${index}`)
                return deselect(target, idxSelected);
            if (!deselect(this.selectionElements[idxSelected], idxSelected))
                return false;
        }
        // Traget slices
        data = this.data[0].data?.[index];
        if (!this.triggerVetoableEvent('beforeselected', { slice: target, index, data })) {
            return false;
        }
        this.selectionElements.forEach((el) => {
            if (el === target)
                el.setAttribute('selected', '');
            else
                el.classList.add('not-selected');
        });
        if (data)
            data.selected = true;
        this.triggerEvent('selected', this, {
            bubbles: true,
            detail: { elem: this, slice: target, index, data } // eslint-disable-line
        });
        return true;
    }
    /**
     * Handles title attribute changes
     * @param {string} value title value
     */
    onTitleChange(value) {
        const titleElems = this.container?.querySelectorAll(attributes.TITLE);
        if (titleElems && titleElems?.length > 1) {
            titleElems[1].textContent = value;
        }
    }
    /**
     * Sets the chart to donut chart
     * @param {boolean} value True to make a donut chart
     */
    set donut(value) {
        this.setAttribute(attributes.DONUT, String(value));
        this.redraw();
    }
    get donut() { return stringToBool(this.getAttribute(attributes.DONUT)) || false; }
    /**
     * Sets the charts middle text
     * @param {string} value The text to use
     */
    set donutText(value) {
        this.setAttribute(attributes.DONUT_TEXT, value);
        const textElem = this.container?.querySelector('.donut-text');
        if (textElem)
            textElem.innerHTML = value;
    }
    get donutText() { return this.getAttribute(attributes.DONUT_TEXT) || ''; }
    /**
     * The width of the chart (in pixels) or 'inherit' from the parent
     * @param {number | string} value The height value
     */
    set height(value) {
        this.setAttribute(attributes.HEIGHT, String(value));
        this.svg?.setAttribute(attributes.HEIGHT, String(value));
        this.redraw();
    }
    get height() {
        const attrib = this.getAttribute(attributes.HEIGHT);
        return attrib ? parseFloat(attrib) : '';
    }
    /**
     * The width of the chart (in pixels) or 'inherit' from the parent
     * @param {number | string} value The width value
     */
    set width(value) {
        this.setAttribute(attributes.WIDTH, String(value));
        this.svg?.setAttribute(attributes.WIDTH, String(value));
        this.redraw();
    }
    get width() {
        const attrib = this.getAttribute(attributes.WIDTH);
        return attrib ? parseFloat(attrib) : '';
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
            return;
        }
        this.datasource.data = [];
    }
    get data() {
        return this?.datasource?.data || [];
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
        return `var(${this.data[0].data?.[index].color ? `color-${index + 1}` : this.colors[index]})`;
    }
    /**
     * Set the animation on/off
     * @param {boolean} value True if animation is on
     */
    set animated(value) {
        this.setAttribute(attributes.ANIMATED, String(value));
        this.redraw();
    }
    get animated() {
        const animated = this.getAttribute(attributes.ANIMATED);
        if (animated === null) {
            return true;
        }
        return stringToBool(this.getAttribute(attributes.ANIMATED));
    }
    /**
     * Set the tooltips on/off
     * @param {boolean} value True if animation is on
     */
    set suppressTooltips(value) {
        this.setAttribute(attributes.SUPPRESS_TOOLTIPS, String(value));
        const suppressed = stringToBool(this.getAttribute(attributes.SUPPRESS_TOOLTIPS));
        if (suppressed) {
            this.#detachTooltipEvents();
        }
        this.redraw();
    }
    get suppressTooltips() {
        const suppressed = this.getAttribute(attributes.SUPPRESS_TOOLTIPS);
        if (suppressed === null) {
            return false;
        }
        return stringToBool(this.getAttribute(attributes.SUPPRESS_TOOLTIPS));
    }
};
IdsPieChart = __decorate([
    customElement('ids-pie-chart'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsPieChart);
export default IdsPieChart;
//# sourceMappingURL=ids-pie-chart.js.map