var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement } from '../../core/ids-decorators';
import { attributes } from '../../core/ids-attributes';
import Base from './ids-demo-listing-base';
import '../ids-data-grid/ids-data-grid';
/**
 * IDS Demo Listing Component
 * @type {IdsDemoListing}
 * @inherits IdsElement
 */
let IdsDemoListing = class IdsDemoListing extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.#attachColumns();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The propertires in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.LABEL,
            attributes.COMPONENT_NAME
        ];
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        return `<ids-data-grid id="${this.id}" list-style="true" label="${this.label}"></ids-data-grid>`;
    }
    /**
     * Set the listing internal label
     * @param {string} value of the label text
     */
    set label(value) {
        if (value) {
            this.setAttribute(attributes.LABEL, value);
        }
        else {
            this.removeAttribute(attributes.LABEL);
        }
    }
    get label() {
        return this.getAttribute(attributes.LABEL);
    }
    /**
     * Set the component name
     * @param {string} value name of the component
     */
    set componentName(value) {
        if (value) {
            this.setAttribute(attributes.COMPONENT_NAME, value);
        }
        else {
            this.removeAttribute(attributes.COMPONENT_NAME);
        }
    }
    get componentName() {
        return this.getAttribute(attributes.COMPONENT_NAME);
    }
    /**
     * Set the yaml on the data grid
     * @param {string} value of the label text
     */
    set data(value) {
        if (this.container) {
            this.container.data = value;
        }
    }
    get data() {
        return this.container.data;
    }
    /**
     * Set the data grid columns
     */
    #attachColumns = () => {
        const columns = [];
        columns.push({
            id: 'link',
            name: 'Example Name',
            field: 'link',
            href: `/${this.componentName}/{{value}}`,
            sortable: true,
            formatter: this.container?.formatters.hyperlink
        });
        columns.push({
            id: 'type',
            name: 'Example Type',
            field: 'type',
            sortable: true,
            formatter: this.container?.formatters.text
        });
        columns.push({
            id: 'description',
            name: 'Description',
            field: 'description',
            sortable: true,
            formatter: this.container?.formatters.text
        });
        this.container.columns = columns;
    };
};
IdsDemoListing = __decorate([
    customElement('ids-demo-listing'),
    __metadata("design:paramtypes", [])
], IdsDemoListing);
export default IdsDemoListing;
//# sourceMappingURL=ids-demo-listing.js.map