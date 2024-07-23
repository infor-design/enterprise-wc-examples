import { Breakpoints } from '../../utils/ids-breakpoint-utils/ids-breakpoint-utils';
import IdsElement from '../../core/ids-element';
/**
 * IDS Hidden Component
 * @type {IdsHidden}
 * @inherits IdsElement
 */
export default class IdsHidden extends IdsElement {
    constructor();
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array<string>} The attributes in an array
     */
    static get attributes(): Array<string>;
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template(): string;
    /**
     * Sets the max-width breakpoint
     * @param {string} val xxl | xl | lg | md | sm | xs
     * @memberof IdsHidden
     */
    set hideDown(val: keyof Breakpoints | null);
    /**
     * Get the hideDown attribute
     * @returns {string} hideDown
     * @readonly
     * @memberof IdsHidden
     */
    get hideDown(): keyof Breakpoints | null;
    /**
     * Sets the min-width breakpoint
     * @param {string} val xxl | xl | lg | md | sm | xs
     * @memberof IdsHidden
     */
    set hideUp(val: keyof Breakpoints | null);
    /**
     * Get the hideUp attribute
     * @returns {string} hideUp
     * @readonly
     * @memberof IdsHidden
     */
    get hideUp(): keyof Breakpoints | null;
    /**
     * Set the visible attribute
     * @param {boolean} val of the visible attribute
     * @memberof IdsHidden
     */
    set visible(val: boolean | string | null);
    /**
     * Get the visible attribute
     * @returns {boolean} visible
     * @readonly
     * @memberof IdsHidden
     */
    get visible(): boolean | string | null;
    /**
     * Set the compare condition
     * @param {string} val the value to compare
     * @memberof IdsHidden
     */
    set condition(val: string | boolean | null);
    /**
     * Get the compare condition
     * @returns {boolean} visible
     * @readonly
     * @memberof IdsHidden
     */
    get condition(): string | boolean | null;
    /**
     * Set the compare value
     * @param {boolean} val the value to compare
     * @memberof IdsHidden
     */
    set value(val: string | boolean | null);
    /**
     * Get the compare value
     * @returns {string} the value to compare
     * @readonly
     * @memberof IdsHidden
     */
    get value(): string | boolean | null;
    /**
     * Check the screen size
     * @param {MediaQueryList} mq media query to check against
     * @memberof IdsHidden
     */
    checkScreen(mq: MediaQueryList): void;
    /**
     * Check value agains the comparison
     * @memberof IdsHidden
     */
    checkCompare(): void;
}
