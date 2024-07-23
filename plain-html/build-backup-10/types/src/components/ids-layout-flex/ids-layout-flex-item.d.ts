import IdsElement from '../../core/ids-element';
export declare const FLEX_ITEM_OPTIONS: {
    alignSelf: string[];
    grow: number[];
    shrink: number[];
};
/**
 * IDS Layout Flex Item Component
 * @type {IdsLayoutFlexItem}
 * @inherits IdsElement
 */
export default class IdsLayoutFlexItem extends IdsElement {
    constructor();
    static get attributes(): any;
    connectedCallback(): void;
    template(): string;
    /**
     * Set the align self setting
     * @param {string} value The value
     */
    set alignSelf(value: string | null);
    get alignSelf(): string | null;
    /**
     * Set the grow setting
     * @param {number|string} value The value
     */
    set grow(value: number | string | null);
    get grow(): number | string | null;
    /**
     * Set the shrink setting
     * @param {number|string} value The value
     */
    set shrink(value: number | string | null);
    get shrink(): number | string | null;
}
