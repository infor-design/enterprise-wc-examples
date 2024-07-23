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
import IdsDataSource from '../../core/ids-data-source';
import IdsBlockGridItem from './ids-block-grid-item';
import Base from './ids-block-grid-base';
import styles from './ids-block-grid.scss';
/**
 * IDS Block Grid Component
 * @type {IdsBlockgrid}
 * @inherits IdsElement
 */
let IdsBlockgrid = class IdsBlockgrid extends Base {
    constructor() {
        super();
    }
    /** Reference to datasource API */
    datasource = new IdsDataSource();
    /**
     * Create the Template for the contents
     * @returns {string} The Template
     */
    template() {
        return `<div class="ids-block-grid-wrapper"><slot></slot></div>`;
    }
    connectedCallback() {
        super.connectedCallback();
        this.redraw();
    }
    static get attributes() {
        return [
            ...super.attributes,
            attributes.ALIGN,
            attributes.SELECTION,
        ];
    }
    /**
     * Rerender the list by re applying the template
     * @private
     */
    redraw() {
        if (this.data.length === 0) {
            return;
        }
        this.querySelectorAll('ids-block-grid-item').forEach((item) => item?.remove());
        this.append(...this.#gridItems());
    }
    /**
     * Set the data array of the blockgrid
     * @param {Array} value The array to use
     */
    set data(value) {
        if (value) {
            this.datasource.data = value;
            this.redraw();
            return;
        }
        this.datasource.data = null;
    }
    get data() { return this?.datasource?.data || []; }
    /**
     * Return the alignment of blockgrid
     * @returns {string|null} The path data
     */
    get align() { return this.getAttribute(attributes.ALIGN); }
    /**
     * Set the alignment of blockgrid
     * @param {string|null} value The Blockgrid Alignment
     */
    set align(value) {
        if (value) {
            this.setAttribute(attributes.ALIGN, value);
            this.style.textAlign = `${value}`;
        }
        else {
            this.removeAttribute(attributes.ALIGN);
            this.style.removeProperty('text-align');
        }
    }
    /**
     * Set the selection to a block-grid and it will add selection to all items
     * @param {string} value The selection value
     */
    set selection(value) {
        this.#syncSelectionOnItems();
    }
    get selection() {
        return this.getAttribute(attributes.SELECTION);
    }
    #gridItems() {
        return this.data.map((d) => {
            const settings = {};
            if (this.selection) {
                settings.selection = this.selection;
            }
            const gridItem = new IdsBlockGridItem(settings);
            gridItem.innerHTML = `
        <img src="${d.url}" alt="Placeholder 200x200" />
        <ids-text type="p">
          ${d.name}<br/>
          ${d.title}
        </ids-text>
      `;
            return gridItem;
        });
    }
    /**
     * Add selection value to all block-grid-items
     */
    #syncSelectionOnItems() {
        this.querySelectorAll('ids-block-grid-item').forEach((item) => item.setAttribute(attributes.SELECTION, this.selection));
    }
};
IdsBlockgrid = __decorate([
    customElement('ids-block-grid'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsBlockgrid);
export default IdsBlockgrid;
//# sourceMappingURL=ids-block-grid.js.map