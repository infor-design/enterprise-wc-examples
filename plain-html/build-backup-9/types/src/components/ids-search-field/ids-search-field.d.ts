import IdsTriggerField from '../ids-trigger-field/ids-trigger-field';
import '../ids-trigger-field/ids-trigger-button';
import '../ids-input/ids-input';
import '../ids-icon/ids-icon';
/**
 * IDS Search Field Component
 * @type {IdsSearchField}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @mixes IdsKeyboardMixin
 * @mixes IdsColorVariantMixin
 */
export default class IdsSearchField extends IdsTriggerField {
    #private;
    constructor();
    isFormComponent: boolean;
    /**
     * Inherited from `IdsColorVariantMixin`
     * @returns {Array<string>} List of available color variants for this component
     */
    colorVariants: string[];
    /**
     * Inherited from `IdsColorVariantMixin`. If the Color Variant on Search Fields are changed,
     * switch trigger buttons to the "alternate" style instead of an `app-menu` style.
     * @param {string} variantName the new color variant being applied to the Search Field
     */
    onColorVariantRefresh(variantName?: string): void;
    static get attributes(): string[];
    connectedCallback(): void;
    template(): string;
    /**
     * Programmatically sets the search field's value and performs an optional search function
     * @param {any} val the incoming value to search for
     * @returns {Array<any>} containing search results, if applicable
     */
    search(val: any): Promise<any>;
    /**
     * @param {string} val the new value to set
     */
    set value(val: string);
    get value(): string;
    /**
     * Define this method to carry out search functionality
     * (override this method when implementing an IdsSearchField).
     * @param {any} [val] the value to be searched for
     * @returns {Array<any>} containing matching search results
     */
    onSearch(val?: any): any;
}
