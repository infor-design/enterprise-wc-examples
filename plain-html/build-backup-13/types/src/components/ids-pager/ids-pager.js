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
import { stringToBool, stringToNumber } from '../../utils/ids-string-utils/ids-string-utils';
// Import Utils
import Base from './ids-pager-base';
import './ids-pager-button';
import './ids-pager-dropdown';
import './ids-pager-input';
import './ids-pager-number-list';
import styles from './ids-pager.scss';
/**
 * IDS Pager Component
 * @type {IdsPager}
 * @inherits IdsElement
 * @mixes IdsThemeMixin
 * @part container the overall ids-pager container
 */
let IdsPager = class IdsPager extends Base {
    DEFAULT_STEP = 3;
    DEFAULT_PAGE_SIZE = 10;
    constructor() {
        super();
    }
    get elements() {
        return {
            buttons: {
                first: this.querySelector('ids-pager-button[first]'),
                previous: this.querySelector('ids-pager-button[previous]'),
                next: this.querySelector('ids-pager-button[next]'),
                last: this.querySelector('ids-pager-button[last]'),
            },
            input: this.querySelector('ids-pager-input'),
            slots: {
                start: this.container?.querySelector('.pager-section.start slot'),
                middle: this.container?.querySelector('.pager-section.middle slot'),
                end: this.container?.querySelector('.pager-section.end slot'),
            },
            dropdowns: this.querySelectorAll('ids-pager-dropdown')
        };
    }
    static get attributes() {
        return [
            attributes.DISABLED,
            attributes.MODE,
            attributes.STEP,
            attributes.TOTAL,
            attributes.TYPE,
            attributes.PAGE_COUNT,
            attributes.PAGE_SIZE,
            attributes.PAGE_NUMBER
        ];
    }
    /**
     * React to attributes changing on the web-component
     * @param {string} name The property name
     * @param {string} oldValue The property old value
     * @param {string} newValue The property new value
     */
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        const shouldRerender = [
            attributes.DISABLED,
            attributes.PAGE_NUMBER,
            attributes.PAGE_SIZE,
            attributes.STEP,
            attributes.TOTAL,
            attributes.TYPE,
        ].includes(name);
        if (shouldRerender) {
            if (oldValue !== newValue) {
                this.connectedCallback();
                this.#syncChildren(name, newValue);
            }
        }
    }
    template() {
        switch (this.type) {
            case 'list': return this.templatePagerList();
            default: return this.templatePagerButtons();
        }
    }
    templatePagerButtons() {
        return `
      <div class="ids-pager">
        <section class="pager-section start"><slot name="start"></slot></section>
        <section class="pager-section middle" role="navigation"><slot></slot></section>
        <section class="pager-section end"><slot name="end"></slot></section>
      </div>
    `;
    }
    /**
     * Set the pager template for listview
     * @returns {string} the default pager template for list-view
     */
    templatePagerList() {
        return `
      <div class="ids-pager">
        <ids-pager-button label="Previous page" previous></ids-pager-button>
        <ids-pager-number-list
          label="Page {num} of {total}"
          page-number="${this.pageNumber}"
          page-size="${this.pageSize}"
          total="${this.total}"
          step="${this.step}"
        >
        </ids-pager-number-list>
        <ids-pager-button label="Next page" next></ids-pager-button>
      </div>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.offEvent('pagenumberchange', this);
        this.onEvent('pagenumberchange', this, (event) => {
            const val = stringToNumber(event.detail.value);
            if (!Number.isNaN(val) && val !== this.pageNumber) {
                this.pageNumber = Number(event.detail.value);
            }
        });
        this.offEvent('pagesizechange', this);
        this.onEvent('pagesizechange', this, (event) => {
            this.pageSize = Number(event.detail.value);
        });
    }
    /**
     * Sync children with the given attribute
     * @param {string} attribute attribute to sync
     * @param {string} value value to sync
     * @private
     */
    #syncChildren(attribute, value) {
        const pagerChildSelectors = [
            'ids-pager-input',
            'ids-pager-number-list',
            'ids-pager-button',
            'ids-pager-dropdown',
        ].join(', ');
        const pagerChildren = [
            ...(this.shadowRoot?.querySelectorAll(pagerChildSelectors) || []),
            ...this.querySelectorAll(pagerChildSelectors),
        ];
        pagerChildren.forEach((element) => {
            element.setAttribute(attribute, value);
        });
    }
    /**
     * @param {boolean} value Whether or not to disable the pager overall
     */
    set disabled(value) {
        const isTruthy = stringToBool(value);
        if (isTruthy && !this.hasAttribute(attributes.DISABLED)) {
            this.setAttribute(attributes.DISABLED, '');
            this.#syncChildren(attributes.PARENT_DISABLED, true);
        }
        else if (!isTruthy && this.hasAttribute(attributes.DISABLED)) {
            this.removeAttribute(attributes.DISABLED);
            this.#syncChildren(attributes.PARENT_DISABLED, false);
        }
    }
    /**
     * @returns {boolean} Whether or not the pager overall is disabled
     */
    get disabled() {
        return this.hasAttribute(attributes.DISABLED);
    }
    /** @param {number} value The number of items shown per page */
    set pageSize(value) {
        const val = this.#validPageSize(value);
        this.setAttribute(attributes.PAGE_SIZE, String(val));
        this.#keepPageNumberInBounds();
    }
    /** @returns {number} The number of items shown per page */
    get pageSize() {
        return this.#validPageSize(this.getAttribute(attributes.PAGE_SIZE));
    }
    /**
     * Check given page size value, if not a number return default
     * @private
     * @param {number | string | null} value The value
     * @returns {number} Given value or default
     */
    #validPageSize(value) {
        const val = stringToNumber(value);
        return !Number.isNaN(val) && val > 0 ? val : this.DEFAULT_PAGE_SIZE;
    }
    /** @param {number} value A 1-based index for the page number displayed */
    set pageNumber(value) {
        const pageNumber = this.pageNumber;
        const pageCount = this.pageCount;
        let val = stringToNumber(value);
        if (val !== pageNumber || (pageNumber < 1) || (pageCount && pageCount < pageNumber)) {
            if (Number.isNaN(val) || val < 1)
                val = 1;
            else if (pageCount)
                val = Math.min(val, pageCount);
            this.setAttribute(attributes.PAGE_NUMBER, String(val));
        }
    }
    /** @returns {number} value A 1-based-index for the page number displayed */
    get pageNumber() {
        return Math.max(parseInt(this.getAttribute(attributes.PAGE_NUMBER) ?? '') || 1, 1);
    }
    /** @returns {number|null} The calculated pageCount using total and pageSize */
    get pageCount() {
        return (this.total !== null && !Number.isNaN(this.total))
            ? Math.ceil(this.total / this.pageSize)
            : null;
    }
    /**
     * Set the number of step for page number list
     * @param {number|string} value The number of steps
     */
    set step(value) {
        const val = stringToNumber(value);
        if (!Number.isNaN(val)) {
            this.setAttribute(attributes.STEP, String(val));
            return;
        }
        this.removeAttribute(attributes.STEP);
    }
    /** @returns {number|string} value The number of steps */
    get step() {
        const val = stringToNumber(this.getAttribute(attributes.STEP));
        return (!Number.isNaN(val)) ? val : this.DEFAULT_STEP;
    }
    /** @param {number} value The number of items to track */
    set total(value) {
        let val = stringToNumber(value);
        if (Number.isNaN(val) || val < 1)
            val = 1;
        this.setAttribute(attributes.TOTAL, String(val));
        this.#keepPageNumberInBounds();
    }
    /** @returns {number} The number of items the pager is tracking */
    get total() {
        return stringToNumber(this.getAttribute(attributes.TOTAL));
    }
    /** @param {number} value The number of items to track */
    set type(value) {
        this.setAttribute(attributes.TYPE, value);
    }
    /**
     * @returns {'buttons' | 'list'} Type of pager that should be displayed
     */
    get type() {
        return this.getAttribute(attributes.TYPE);
    }
    #keepPageNumberInBounds() {
        const attrVal = Number.parseInt(this.getAttribute(attributes.PAGE_NUMBER) ?? '');
        let val = attrVal;
        if (Number.isNaN(val) || val <= 1)
            val = 1;
        else if (this.pageCount && val > this.pageCount)
            val = this.pageCount;
        // Dropdowns
        this.elements.dropdowns.forEach((d) => {
            if (d.pageSize !== this.pageSize)
                d.pageSize = this.pageSize;
        });
        if (val !== attrVal && !Number.isNaN(attrVal))
            this.setAttribute(attributes.PAGE_NUMBER, String(val));
    }
};
IdsPager = __decorate([
    customElement('ids-pager'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsPager);
export default IdsPager;
//# sourceMappingURL=ids-pager.js.map