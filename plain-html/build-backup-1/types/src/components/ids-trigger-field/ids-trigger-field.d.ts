import IdsInput from '../ids-input/ids-input';
import './ids-trigger-button';
import type IdsTriggerButton from './ids-trigger-button';
/**
 * IDS Trigger Field Component
 * @type {IdsTriggerField}
 * @inherits IdsInput
 * @part field - the field container
 * @part content - the content with trigger buttons and input element
 */
export default class IdsTriggerField extends IdsInput {
    #private;
    /**
     * Call the constructor and then initialize
     */
    constructor();
    /**
     * Get a list of element dependencies for this component
     * @returns {object} of elements
     */
    get elements(): {
        content: Element | null | undefined;
        label: HTMLLabelElement | null | undefined;
        text: Element | null | undefined;
    };
    /**
     * Custom Element `connectedCallback` implementation
     * @returns {void}
     */
    connectedCallback(): void;
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes(): string[];
    /**
     * Push color variant to the container element
     * @returns {void}
     */
    onColorVariantRefresh(): void;
    /**
     * Creates the Template for rendering an IdsTriggerField's contents
     * @returns {string} containing the template
     */
    template(): string;
    /**
     * @readonly
     * @returns {Array<HTMLElement>} containing references to slotted IdsTriggerButtons on this component
     */
    get buttons(): IdsTriggerButton[];
    /**
     * @param {boolean | string} value true if this trigger field's buttons should be made accessible using the tab key
     */
    set tabbable(value: boolean | string);
    /**
     * @returns {boolean} true if this trigger field's buttons are accessible using the tab key
     */
    get tabbable(): boolean;
    /**
     * Sets the disabled attribute
     * @param {boolean | string} d string value from the disabled attribute
     */
    set disabled(d: boolean | string);
    get disabled(): boolean;
    /**
     * Sets the readonly attribute
     * @param {string} r string value from the read only attribute
     */
    set readonly(r: boolean | string);
    get readonly(): boolean;
    /**
     * Set format for date, time
     * @param {string} val date, time format
     */
    set format(val: string | null);
    /**
     * Return format
     * @returns {string} return date format
     */
    get format(): string | null;
    /**
     * Updates trigger buttons when the trigger field's fieldHeight property is updated
     * @param {string} val the new field height setting
     */
    onFieldHeightChange(val: string): void;
    /**
     * Fire the trigger event and action.
     */
    trigger(): void;
}
