import IdsElement from '../../core/ids-element';
import '../ids-data-grid/ids-data-grid';
/**
 * IDS Demo Listing Component
 * @type {IdsDemoListing}
 * @inherits IdsElement
 */
export default class IdsDemoListing extends IdsElement {
    #private;
    constructor();
    connectedCallback(): void;
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The propertires in an array
     */
    static get attributes(): string[];
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template(): string;
    /**
     * Set the listing internal label
     * @param {string} value of the label text
     */
    set label(value: string | null);
    get label(): string | null;
    /**
     * Set the component name
     * @param {string} value name of the component
     */
    set componentName(value: string | null);
    get componentName(): string | null;
    /**
     * Set the yaml on the data grid
     * @param {string} value of the label text
     */
    set data(value: Array<Record<string, any>>);
    get data(): Array<Record<string, any>>;
}
