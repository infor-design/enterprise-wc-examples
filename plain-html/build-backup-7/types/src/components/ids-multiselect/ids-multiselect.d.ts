import IdsDropdown from '../ids-dropdown/ids-dropdown';
import '../ids-checkbox/ids-checkbox';
import '../ids-tag/ids-tag';
import '../ids-text/ids-text';
/**
 * IDS Multiselect Component
 * @type {IdsMultiselect}
 * @inherits IdsDropdown
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part container - the container element
 */
declare class IdsMultiselect extends IdsDropdown {
    #private;
    constructor();
    /**
     * Invoked each time the custom element is add into a document-connected element
     */
    connectedCallback(): void;
    /**
     * Return the attributes we handle as getters and setters
     * @returns {Array} The attributes in an array
     */
    static get attributes(): any[];
    /**
     * Sets the disabled attribute
     * @param {string|boolean} value string value from the disabled attribute
     */
    set disabled(value: boolean);
    /**
     * Gets the value of the disabled property
     * @returns {boolean} a boolean indicating the elements disabled status
     */
    get disabled(): boolean;
    /**
     * Sets the tags attribute which determines if selected options are displayed as tags
     * @param {string|boolean} value string or boolean that sets the use of tag attribute
     */
    set tags(value: boolean);
    /**
     * returns whether the multiselect is set to display selections as tags
     * @returns {boolean} a boolean indicating tags setting
     */
    get tags(): boolean;
    /**
     * sets the max possible selections for multiselect
     * @param {string|number} value the max number of selections allowed
     */
    set max(value: any);
    /**
     * returns the maximum number of allowed selections
     * @returns {number} the maximum number of selectable options
     */
    get max(): number;
    /**
     * Set the selected values of the multiselect using the provided array
     * @param {Array} value the array of values to set as selected
     */
    set value(value: any);
    /**
     * returns an array of the values that have been selected
     * @returns {Array} the array of values
     */
    get value(): any;
    /**
     * Rewriting dropdown click events
     */
    attachClickEvent(): void;
    /**
     * Establish selection event for keyboard interactions.
     * Overrides a similiar method from IdsDropdown for Multiselect-specific behavior.
     */
    attachKeyboardSelectionEvent(): void;
    /**
     * Close the dropdown popup
     * Rewriting it to add multiselect value update
     * @param {boolean} noFocus if true do not focus on close
     */
    close(noFocus?: boolean): void;
}
export default IdsMultiselect;
