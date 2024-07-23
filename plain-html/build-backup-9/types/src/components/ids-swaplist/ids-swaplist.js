var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, scss, } from '../../core/ids-decorators';
import { attributes } from '../../core/ids-attributes';
import Base from './ids-swaplist-base';
import IdsDataSource from '../../core/ids-data-source';
import { injectTemplate } from '../../utils/ids-string-utils/ids-string-utils';
import '../ids-card/ids-card';
import '../ids-button/ids-button';
import '../ids-list-view/ids-list-view';
import '../ids-swappable/ids-swappable';
import styles from './ids-swaplist.scss';
const DEFAULT_COUNT = 2;
/**
 * IDS SwapList Component
 * @type {IdsSwapList}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 */
let IdsSwapList = class IdsSwapList extends Base {
    constructor() {
        super();
    }
    datasource = new IdsDataSource();
    defaultTemplate = '';
    connectedCallback() {
        super.connectedCallback();
        this.defaultTemplate = `${this.querySelector('template')?.innerHTML || ''}`;
        this.attachEventHandlers();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.COUNT
        ];
    }
    /**
     * Set the data array of the swaplist
     * @param {any | null} value The array to use
     */
    set data(value) {
        if (this.datasource) {
            this.datasource.data = value || [];
            this.render();
        }
    }
    get data() { return this?.datasource?.data || []; }
    /**
     * Swap the list item to the next list
     * @param {any} button htmlElement
     * @private
     * @returns {void}
     */
    #swapToNextList(button) {
        const currentCard = button.parentElement.parentElement.parentElement;
        const nextCard = currentCard.nextSibling;
        const nextList = nextCard.querySelector('ids-swappable');
        const selectedItems = currentCard.querySelectorAll('ids-swappable-item[selected]');
        selectedItems.forEach((x) => {
            nextList.appendChild(x);
            x.removeAttribute(attributes.SELECTED);
        });
    }
    /**
     * Swap the list item to the previous list
     * @param {any} button htmlElement
     * @private
     * @returns {void}
     */
    #swapToPreviousList(button) {
        const currentCard = button.parentElement.parentElement.parentElement;
        const prevCard = currentCard.previousSibling;
        const prevList = prevCard.querySelector('ids-swappable');
        const selectedItems = currentCard.querySelectorAll('ids-swappable-item[selected]');
        selectedItems.forEach((x) => {
            prevList.appendChild(x);
            x.removeAttribute(attributes.SELECTED);
        });
    }
    /**
     * Get all selected ids-swappable-item
     * @returns {any} NodeList of ids-swappable-items
     * @readonly
     * @memberof IdsSwapList
     */
    get selectedItems() {
        return this.container?.querySelectorAll('ids-swappable-item[selected]');
    }
    /**
     * Set the count of lists
     * @param {any} value number of lists
     * @memberof IdsSwapList
     */
    set count(value) {
        const val = parseInt(value);
        if (!Number.isNaN(val))
            this.setAttribute(attributes.COUNT, String(val));
        else
            this.setAttribute(attributes.COUNT, String(DEFAULT_COUNT));
    }
    /**
     * Get the count of lists
     * @returns {number} number of lists
     * @readonly
     * @memberof IdsSwapList
     */
    get count() {
        const val = this.getAttribute(attributes.COUNT);
        return val ? parseInt(val) : DEFAULT_COUNT;
    }
    /**
     * Setup the next/prev button template
     * @param {number} i index of the list
     * @returns {object} html element
     * @memberof IdsSwapList
     */
    buttonTemplate(i) {
        const leftArrow = `
      <ids-button id="left-arrow-${i}" class="left-arrow">
        <span class="audible">Swap Item Left</span>
        <ids-icon icon="arrow-left" size="xsmall"></ids-icon>
      </ids-button>
    `;
        const rightArrow = `
      <ids-button id="right-arrow-${i}" class="right-arrow">
        <span class="audible">Swap Item Left</span>
        <ids-icon icon="arrow-right" size="xsmall"></ids-icon>
      </ids-button>
    `;
        let html = ``;
        if (i > 0 && i < this.count - 1) {
            // render left and right arrow button
            html = leftArrow + rightArrow;
        }
        else if (i === 0) {
            // render the right arrow button
            html = rightArrow;
        }
        else if (i === this.count - 1) {
            // render the left arrow button
            html = leftArrow;
        }
        return html;
    }
    /**
     * Item template function that will generate the swappable items
     * @returns {object} function
     * @memberof IdsSwapList
     */
    itemTemplateFunc() {
        const func = (item) => this.itemTemplate(item);
        return func;
    }
    /**
     * Return an item's html injecting any values from the dataset as needed.
     * @param {any} item The item to generate
     * @returns {string} The html for this item
     */
    itemTemplate(item) {
        return injectTemplate(this.defaultTemplate, item);
    }
    /**
     * Set up the list view template
     * @returns {string} html element
     * @memberof IdsSwapList
     */
    listTemplate() {
        const arr = Array(this.count).fill(0);
        const arrLen = arr.length;
        const html = arr.map((v, i) => `
      <ids-card class="${arrLen === i + 1 ? `card card-${i} card-last` : `card card-${i}`}">
        <div slot="card-header">
          <ids-text font-size="20">List #${i}</ids-text>
          <div class="swap-buttons">
            ${this.buttonTemplate(i)}
          </div>
        </div>
        <div slot="card-content">
          <ids-swappable selection="multiple">
            ${this.data.length > 0 ? this.data?.map(this.itemTemplateFunc()).join('') : ''}
          </ids-swappable>
        </div>
      </ids-card>
    `.trim()).join('');
        return html;
    }
    /**
     * Handle the item swap logic
     * @param {any} e event paramater
     * @returns {void}
     * @private
     * @memberof IdsSwapList
     */
    #handleItemSwap(e) {
        if (e.target.classList.contains('left-arrow')) {
            this.#swapToPreviousList(e.target);
        }
        else if (e.target.classList.contains('right-arrow')) {
            this.#swapToNextList(e.target);
        }
    }
    /**
     * Attach event handlers
     * @memberof IdsSwapList
     */
    attachEventHandlers() {
        this.offEvent('click', this.container, (e) => this.#handleItemSwap(e));
        this.onEvent('click', this.container, (e) => this.#handleItemSwap(e));
        this.offEvent('touchend', this.container, (e) => this.#handleItemSwap(e));
        this.onEvent('touchend', this.container, (e) => this.#handleItemSwap(e));
        this.listen('Enter', this.container, (e) => this.#handleItemSwap(e));
    }
    render() {
        super.render(true);
        if (this.data?.length > 0) {
            this.attachEventHandlers();
        }
        return this;
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        return `
      <div class="ids-swaplist">
        ${this.listTemplate()}
      </div>
    `;
    }
};
IdsSwapList = __decorate([
    customElement('ids-swaplist'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsSwapList);
export default IdsSwapList;
//# sourceMappingURL=ids-swaplist.js.map