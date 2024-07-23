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
import Base from './ids-virtual-scroll-base';
import { injectTemplate } from '../../utils/ids-string-utils/ids-string-utils';
import styles from './ids-virtual-scroll.scss';
const DEFAULT_HEIGHT = '100vh';
const DEFAULT_ITEM_HEIGHT = 50;
/**
 * IDS Virtual Scroll Component
 * @type {IdsVirtualScroll}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 */
let IdsVirtualScroll = class IdsVirtualScroll extends Base {
    // Array is a pointer to a datasource in a parent component
    datasource = {};
    timeout;
    initialized = false;
    lastStart = NaN;
    lastEnd = NaN;
    eventTarget = null;
    onAfterVirtualScroll;
    // eslint-disable-next-line no-template-curly-in-string
    stringTemplate = '<div class="ids-virtual-scroll-item" part="list-item">${productName}</div>';
    constructor() {
        super();
        Object.defineProperty(this, 'scrollTop', {
            get: () => this.#scrollTop,
            set: (value) => { this.#scrollTop = value; },
            configurable: true,
            enumerable: true
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.applyHeight();
        this.renderItems(false);
        this.#attachEventHandlers();
    }
    /**
     * Establish Internal Event Handlers
     * @returns {void}
     */
    #attachEventHandlers() {
        this.timeout = null;
        this.scrollTarget = this.parentElement;
    }
    /**
     * Handle the scrolling event
     * @private
     * @param {Event} e The scroll event data
     */
    handleScroll(e) {
        if (this.timeout) {
            cancelAnimationFrame(this.timeout);
        }
        const target = e.target;
        this.timeout = requestAnimationFrame(() => {
            if (target) {
                this.scrollTop = target.scrollTop;
            }
        });
    }
    /**
     * Render the visible section plus the cached data
     * @private
     * @param {boolean} allowZero Allow a zero length dataset (render empty)
     */
    renderItems(allowZero) {
        if (!this.data || (!allowZero && this.data.length === 0)) {
            return;
        }
        requestAnimationFrame(() => {
            const startIndex = this.startIndex;
            const endIndex = this.startIndex + this.visibleItemCount();
            const indexesChanged = this.lastStart !== startIndex || this.lastEnd !== endIndex;
            if (!indexesChanged)
                return;
            this.lastStart = startIndex;
            this.lastEnd = endIndex;
            const visibleItems = this.data.slice(startIndex, endIndex);
            let html = '';
            visibleItems.map((item, index) => {
                const node = this.itemTemplate(item, index, startIndex + index + 1);
                html += node;
                return node;
            });
            const offset = this.container?.querySelector('.offset');
            offset?.style.setProperty('transform', `translateY(${this.offsetY}px)`);
            // work-around for outside components to style contents inside this shadowroot
            const wrapper = this.querySelector('[part="contents"]');
            if (wrapper)
                wrapper.innerHTML = html;
            this.triggerEvent('aftervirtualscroll', this, { detail: { elem: this, startIndex, endIndex } });
            if (this.onAfterVirtualScroll)
                this.onAfterVirtualScroll({ elem: this, startIndex, endIndex });
        });
    }
    /**
     * Set the height of the containers
     * @private
     * @returns {void}
     */
    applyHeight() {
        if (!this.initialized) {
            return;
        }
        const content = this.container?.querySelector('.ids-virtual-scroll-content');
        if (typeof this.height === 'string' && this.height?.includes('vh')) {
            const spaceFromTop = this.getBoundingClientRect().y;
            this.style.height = `calc(${this.height} - ${spaceFromTop + 16}px)`; // the actual viewport
        }
        else {
            this.style.height = `${this.height}`;
        }
        content?.style.setProperty('height', `${this.contentHeight}px`);
        const offset = this.container?.querySelector('.offset');
        offset?.style.setProperty('transform', `translateY(${this.offsetY}px)`);
    }
    /**
     * Render the visible section plus the cached data
     * @private
     * @returns {number} The array of visible data
     */
    visibleItemCount() {
        const viewportHeight = this.getBoundingClientRect().height;
        let count = Math.ceil(viewportHeight / this.itemHeight) + (2 * this.bufferSize);
        count = Math.min(Number(this.itemCount) - this.startIndex, count);
        return count;
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            attributes.HEIGHT,
            attributes.ITEM_HEIGHT,
            attributes.BUFFER_SIZE,
            attributes.DATA,
            attributes.SCROLL_TOP,
        ];
    }
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template() {
        return `
      <div class="ids-virtual-scroll">
        <div class="ids-virtual-scroll-content">
          <div class="offset">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
    }
    /**
     * The height of the virtual scroll container
     * @param {number|string|null} value the height for css
     */
    set height(value) {
        if (value) {
            this.setAttribute(attributes.HEIGHT, value.toString());
            this.applyHeight();
            return;
        }
        this.removeAttribute(attributes.HEIGHT);
    }
    get height() {
        return this.getAttribute(attributes.HEIGHT) || DEFAULT_HEIGHT;
    }
    /**
     * The height of each item in the scroller. TODO: support dynamic heights
     * @param {number|string} value the height of each item in pixels
     */
    set itemHeight(value) {
        if (value) {
            this.setAttribute(attributes.ITEM_HEIGHT, value.toString());
            this.applyHeight();
            this.renderItems(false);
            return;
        }
        this.removeAttribute(attributes.ITEM_HEIGHT);
    }
    get itemHeight() {
        const value = parseFloat(this.getAttribute(attributes.ITEM_HEIGHT) ?? '');
        return Number.isNaN(value) ? DEFAULT_ITEM_HEIGHT : value;
    }
    /**
     * Extra padding at the top and bottom so that the data transition smoothly
     * @param {number} value The number of extra top and bottom elements
     */
    set bufferSize(value) {
        if (value) {
            this.setAttribute(attributes.BUFFER_SIZE, value.toString());
            return;
        }
        this.removeAttribute(attributes.BUFFER_SIZE);
    }
    get bufferSize() {
        const value = parseFloat(this.getAttribute(attributes.BUFFER_SIZE) ?? '');
        return Number.isNaN(value) ? 10 : value;
    }
    /**
     * Set the scroll top position and scroll down to that location
     * @param {number | string} value The number of pixels from the top
     */
    set #scrollTop(value) {
        const val = parseFloat(value);
        if (!(Number.isNaN(val))) {
            this.setAttribute(attributes.SCROLL_TOP, val.toString());
            if (this.container)
                this.container.scrollTop = val;
            this.renderItems(false);
            return;
        }
        this.removeAttribute(attributes.SCROLL_TOP);
    }
    get #scrollTop() {
        const value = parseFloat(this.getAttribute(attributes.SCROLL_TOP) ?? '');
        return Number.isNaN(value) ? 0 : value;
    }
    /**
     * Scroll to a indexed item bring it into center view.
     * @param {number} value The index to scroll to
     */
    scrollToIndex(value) {
        this.scrollTop = Number(value) * Number(this.itemHeight);
    }
    /**
     * The height of the content behind the viewport
     * @returns {number} The calculated content height
     */
    get contentHeight() { return Number(this.itemCount) * Number(this.itemHeight); }
    get itemCount() { return this.data?.length; }
    get offsetY() {
        return Number(this.startIndex) * Number(this.itemHeight);
    }
    get startIndex() {
        let startNode = Math.floor(Number(this.scrollTop) / Number(this.itemHeight)) - Number(this.bufferSize);
        startNode = Math.max(0, startNode);
        return startNode;
    }
    /**
     * Return a item's html injecting any values from the dataset as needed.
     * @param {object} item The item to generate
     * @param {number} index the index for the template
     * @param {number} ariaIndex the aria index for the template (not used here but used in some implementations)
     * @returns {string} The html for this item
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    itemTemplate(item, index, ariaIndex) {
        return injectTemplate(this.stringTemplate, item);
    }
    /**
     * Set the data array of the listview
     * @param {Array|null} array The array to use
     */
    set data(array) {
        if (array && this.datasource) {
            this.datasource.data = array;
            this.lastStart = NaN;
            this.lastEnd = NaN;
            this.scrollTop = 0;
            this.initialized = true;
            this.applyHeight();
            this.renderItems(true);
            return;
        }
        if (this.datasource)
            this.datasource.data = null;
    }
    get data() {
        return this?.datasource?.data;
    }
    /**
     * Set the scroll target to a external parent
     * @param {HTMLElement|null} value The array to use
     */
    set scrollTarget(value) {
        if (value) {
            // first, unset old scrollTarget
            this.offEvent('scroll', this.eventTarget);
            this.eventTarget = value;
            this.onEvent('scroll', this.eventTarget, (e) => {
                this.handleScroll(e);
            }, { passive: true });
        }
    }
    get scrollTarget() {
        return this.eventTarget;
    }
};
IdsVirtualScroll = __decorate([
    customElement('ids-virtual-scroll'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsVirtualScroll);
export default IdsVirtualScroll;
//# sourceMappingURL=ids-virtual-scroll.js.map