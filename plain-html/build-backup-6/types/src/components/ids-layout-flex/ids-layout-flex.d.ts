import IdsElement from '../../core/ids-element';
import './ids-layout-flex-item';
export declare const FLEX_OPTIONS: {
    alignContent: string[];
    alignItems: string[];
    direction: string[];
    display: string[];
    justifyContent: string[];
    wrap: string[];
    units: number[];
};
/**
 * IDS Layout Flex Component
 * @type {IdsLayoutFlex}
 * @inherits IdsElement
 */
export default class IdsLayoutFlex extends IdsElement {
    constructor();
    static get attributes(): any;
    connectedCallback(): void;
    template(): string;
    /**
     * Set the align content setting
     * @param {string} value The value
     */
    set alignContent(value: string | null);
    get alignContent(): string | null;
    /**
     * Set the align items setting
     * @param {string} value The value
     */
    set alignItems(value: string | null);
    get alignItems(): string | null;
    /**
     * Set the direction setting
     * @param {string} value The value
     */
    set direction(value: string | null);
    get direction(): string | null;
    /**
     * Set the display setting
     * @param {string} value The value
     */
    set display(value: string | null);
    get display(): string | null;
    /**
     * Set the gap, apply same for both horizontal and vertical sides
     * @param {number|string} value The value
     */
    set gap(value: number | string | null);
    get gap(): number | string | null;
    /**
     * Set the horizontal gap
     * @param {number|string} value The value
     */
    set gapX(value: number | string | null);
    get gapX(): number | string | null;
    /**
     * Set card vertical gap
     * @param {number|string} value The value
     */
    set gapY(value: number | string | null);
    get gapY(): number | string | null;
    /**
     * Set the justify content setting
     * @param {string} value The value
     */
    set justifyContent(value: string | null);
    get justifyContent(): string | null;
    /**
     * Set the wrap setting
     * @param {string} value The value
     */
    set wrap(value: string | null);
    get wrap(): string | null;
}
