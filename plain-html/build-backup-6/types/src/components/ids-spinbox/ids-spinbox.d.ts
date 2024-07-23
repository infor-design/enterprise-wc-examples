import '../ids-trigger-field/ids-trigger-button';
import IdsTriggerField from '../ids-trigger-field/ids-trigger-field';
/**
 * IDS Spinbox Component
 * @type {IdsSpinbox}
 * @inherits IdsTriggerField
 * @part container the overall container of the spinbox
 * @part button increment/decrement button
 * @part input input containing value/placeholder
 * @part label label text above the input
 * @part validation validation message when there is an error
 */
export default class IdsSpinbox extends IdsTriggerField {
    #private;
    constructor();
    isFormComponent: boolean;
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes(): string[];
    /**
     * Create the Template for the contents
     * @returns {string} the template to render
     */
    template(): string;
    templateHostAttributes(): void;
    connectedCallback(): void;
    /**
     * @returns {HTMLElement} reference to the decrementing button
     */
    get decrementButton(): Element | null;
    /**
     * @returns {HTMLElement} reference to the incrementing button
     */
    get incrementButton(): Element | null;
    /**
     * @param {number|null} newValue maximum value of the spinbox
     */
    set max(newValue: number | null);
    /**
     * @returns {number|null} the current max value of the spinbox' input
     */
    get max(): number | null;
    /**
     * @param {number|null} newValue minimum value aof the spinbox
     */
    set min(newValue: number | null);
    /**
     * @returns {number|null} the current min value of the spinbox' input
     */
    get min(): number | null;
    /**
     * @param {number|null} newValue step value on which the spinbox should count increments/decrements
     */
    set step(newValue: number | string | null);
    /**
     * @returns {number | string} step value on which the spinbox will count increments/decrements
     */
    get step(): number;
    /**
     * Override tabbable to simplify and ignore trigger buttons (never should be tabbable)
     * @param {boolean|string} value True of false depending if the trigger field is tabbable
     */
    set tabbable(value: boolean);
    /**
     * @returns {boolean} true if the component is tabbable
     */
    get tabbable(): boolean;
    /**
     * @param {number | string} value spinbox' input value
     */
    set value(value: string);
    /**
     * @returns {number | string} spinbox' current input value
     */
    get value(): string;
    /**
     * @param {boolean|string} value whether or not spinbox
     * interaction is disabled
     */
    set disabled(value: boolean);
    /**
     * @returns {'true'|null} whether or not element is disabled
     */
    get disabled(): boolean;
    /**
     * @param {boolean} value whether or not spinbox is readonly
     */
    set readonly(value: boolean);
    /**
     * @returns {boolean} value whether or not spinbox is readonly
     */
    get readonly(): boolean;
}
