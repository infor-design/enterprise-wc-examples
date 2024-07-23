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
import { attributes } from '../../core/ids-attributes';
import { fluidGridClass, fluidGridXlClass, autoGridClass, colsGridClass, rowsClass, noMarginsClass } from './ids-layout-grid-attributes';
import Base from './ids-layout-grid-base';
import './ids-layout-grid-cell';
import styles from './ids-layout-grid.scss';
const GRID_OPTIONS = {
    autoFlow: ['row', 'column', 'dense', 'row dense', 'column dense']
};
/**
 * IDS Layout Grid Component
 * @type {IdsLayoutGrid}
 * @inherits IdsElement
 */
let IdsLayoutGrid = class IdsLayoutGrid extends Base {
    constructor() {
        super();
    }
    static get attributes() {
        return [
            attributes.AUTO,
            attributes.AUTO_ROWS,
            attributes.AUTO_FLOW,
            attributes.COLS,
            attributes.FIXED,
            attributes.GAP,
            attributes.JUSTIFY_CONTENT,
            attributes.NO_MARGINS,
            attributes.MAX_COL_WIDTH,
            attributes.MIN_COL_WIDTH,
            attributes.ROWS
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.#setDefaults();
    }
    template() {
        return `<slot></slot>`;
    }
    /**
     * Sets the default attributes and classes
     * @private
     * @returns {void}
     */
    #setDefaults() {
        if (this.cols === null && this.auto === null) {
            this.setAttribute(attributes.COLS, 'fluid-grid');
            this.classList.remove(colsGridClass);
            this.classList.add(fluidGridClass);
            this.style.removeProperty('--grid-cols');
        }
    }
    /**
     * If true the grid is not responsive and stays equal width as will fit
     * @param {boolean | string | null} value true or false/nothing
     */
    set fixed(value) {
        if (value) {
            this.setAttribute(attributes.FIXED, value.toString());
            this.classList.add('ids-fixed');
            return;
        }
        this.removeAttribute(attributes.FIXED);
        this.classList.remove('ids-fixed');
    }
    get fixed() { return this.getAttribute(attributes.FIXED); }
    /**
     * Handle The Gap Setting
     * @returns {string} The Gap [none, sm, md, lg, xl]
     */
    get gap() { return this.getAttribute(attributes.GAP) || 'md'; }
    /**
     * Set the grid gap
     * @param {string} value The Gap [none, sm, md, lg, xl]
     */
    set gap(value) {
        if (value) {
            this.setAttribute(attributes.GAP, value);
            this.classList.add(`ids-layout-grid-gap-${value}`);
            return;
        }
        this.removeAttribute(attributes.GAP);
        this.classList.remove(`ids-layout-grid-gap-${value}`);
    }
    /**
     * Sets the grid to `auto-fit`
     * @param {boolean | string | null} value true or false/nothing
     */
    set auto(value) {
        if (value) {
            this.setAttribute(attributes.AUTO, value.toString());
            this.classList.add(autoGridClass);
            this.classList.remove(fluidGridClass);
            this.removeAttribute(attributes.COLS);
            return;
        }
        this.removeAttribute(attributes.AUTO);
        this.classList.remove(autoGridClass);
    }
    get auto() { return this.getAttribute(attributes.AUTO); }
    /**
     * Sets the amount of columns in the grid
     * @param {string | null} value number of columns of the grid
     */
    set cols(value) {
        if (value) {
            this.setAttribute(attributes.COLS, value);
            this.style.setProperty('--grid-cols', value);
            this.classList.add(colsGridClass);
            this.classList.remove(autoGridClass);
            this.classList.remove(fluidGridClass);
        }
        if (value === 'fluid-grid') {
            this.setAttribute(attributes.COLS, value);
            this.classList.remove(colsGridClass);
            this.classList.add(fluidGridClass);
            this.style.removeProperty('--grid-cols');
            this.removeAttribute(attributes.AUTO);
            this.classList.remove(autoGridClass);
        }
        if (value === 'fluid-grid-xl') {
            this.setAttribute(attributes.COLS, value);
            this.classList.remove(colsGridClass);
            this.classList.add(fluidGridClass);
            this.classList.add(fluidGridXlClass);
            this.style.removeProperty('--grid-cols');
            this.removeAttribute(attributes.AUTO);
            this.classList.remove(autoGridClass);
        }
    }
    get cols() { return this.getAttribute(attributes.COLS); }
    /**
     * Sets the amount of rows in the grid. Works best with fixed height grids
     * @param {string | null} value number of rows in a fixed grid
     */
    set rows(value) {
        if (value) {
            this.auto = false;
            this.setAttribute(attributes.ROWS, value);
            this.style.setProperty('--grid-rows', value);
            this.classList.add(rowsClass);
            this.classList.remove(autoGridClass);
            return;
        }
        this.style.removeProperty('--grid-rows');
        this.removeAttribute(attributes.AUTO);
        this.classList.remove(rowsClass);
    }
    get rows() { return this.getAttribute(attributes.ROWS); }
    /**
     * Sets the auto-row value of the grid
     * @param { string | null } value number value of the auto-row setting, ex: 1fr
     * @memberof IdsLayoutGrid
     */
    set autoRows(value) {
        if (value) {
            this.setAttribute(attributes.AUTO_ROWS, value);
            this.style.setProperty('--grid-auto-rows', value);
            this.classList.add('ids-layout-grid-auto-rows');
            return;
        }
        this.removeAttribute(attributes.AUTO_ROWS);
        this.classList.remove('ids-layout-grid-auto-rows');
    }
    get autoRows() { return this.getAttribute(attributes.AUTO_ROWS); }
    /**
     * Sets the auto-flow attribute
     * @param { string | null } value keyword value for the auto-flow setting:
     * ('row', 'column', 'dense', 'row dense', 'column dense')
     * @memberof IdsLayoutGrid
     */
    set autoFlow(value) {
        if (value && GRID_OPTIONS.autoFlow.includes(value)) {
            this.setAttribute(attributes.AUTO_FLOW, value);
            this.style.setProperty('--grid-auto-flow', value);
            this.classList.add('ids-layout-grid-auto-flow');
            return;
        }
        this.removeAttribute(attributes.AUTO_FLOW);
        this.classList.remove('ids-layout-grid-auto-flow');
    }
    get autoFlow() { return this.getAttribute(attributes.AUTO_FLOW); }
    /**
     * If true the grid will not have any margins
     * @param {boolean | string | null} value true or false/nothing
     */
    set noMargins(value) {
        if (value) {
            this.setAttribute(attributes.NO_MARGINS, value.toString());
            this.classList.add(noMarginsClass);
            return;
        }
        this.removeAttribute(attributes.NO_MARGINS);
        this.classList.remove(noMarginsClass);
    }
    get noMargins() { return this.getAttribute(attributes.NO_MARGINS); }
    /**
     * Sets the min col width on the grid
     * @param {string | null} value number for pixel length
     */
    set minColWidth(value) {
        if (value) {
            this.setAttribute(attributes.MIN_COL_WIDTH, value.toString());
            this.style.setProperty('--grid-min-col-width', value);
            return;
        }
        this.removeAttribute(attributes.MIN_COL_WIDTH);
        this.style.removeProperty('--grid-min-col-width');
    }
    get minColWidth() { return this.getAttribute(attributes.MIN_COL_WIDTH); }
    /**
     * Sets the max col width on the grid
     * @param {string | null} value number for pixel length
     */
    set maxColWidth(value) {
        if (value) {
            this.setAttribute(attributes.MAX_COL_WIDTH, value.toString());
            this.style.setProperty('--grid-max-col-width', value);
            return;
        }
        this.removeAttribute(attributes.MAX_COL_WIDTH);
        this.style.removeProperty('--grid-max-col-width');
    }
    get maxColWidth() { return this.getAttribute(attributes.MAX_COL_WIDTH); }
    set justifyContent(value) {
        if (value) {
            this.setAttribute(attributes.JUSTIFY_CONTENT, value.toString());
            this.style.setProperty('--grid-justify-content', value);
            this.classList.add(`ids-layout-grid-justify-content`);
            return;
        }
        this.removeAttribute(attributes.JUSTIFY_CONTENT);
        this.style.removeProperty('--grid-justify-content');
    }
    get justifyContent() { return this.getAttribute(attributes.JUSTIFY_CONTENT); }
};
IdsLayoutGrid = __decorate([
    customElement('ids-layout-grid'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsLayoutGrid);
export default IdsLayoutGrid;
//# sourceMappingURL=ids-layout-grid.js.map