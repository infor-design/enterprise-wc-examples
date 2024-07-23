import IdsButton from '../ids-button/ids-button';
import type { IdsButtonAppearance } from '../ids-button/ids-button-common';
import '../ids-icon/ids-icon';
/**
 * IDS Toggle Button Component
 * @type {IdsToggleButton}
 * @inherits IdsButton
 */
export default class IdsToggleButton extends IdsButton {
    constructor();
    /**
     * @returns {Array<string>} containing configurable properties on this component
     */
    static get attributes(): Array<string>;
    /**
     * Toggle-Button-level `connectedCallback` implementation (adds an icon refresh)
     * @returns {void}
     */
    connectedCallback(): void;
    /**
     * Set the pressed (on/off) state
     * @param {boolean | string} val if true, the "toggle" is activated
     */
    set pressed(val: boolean | string);
    get pressed(): boolean;
    /**
     * Override setting the "appearance" on Toggle Buttons, since they can only be the default style
     * @param {IdsButtonAppearance | null} val a valid appearance attribute
     */
    set appearance(val: IdsButtonAppearance | null);
    /**
     * @returns {IdsButtonAppearance} the currently set appearance attribute
     */
    get appearance(): IdsButtonAppearance;
    /**
     * Defines the `unpressed/off` toggle state icon.
     * @param {string} val corresponds to an IdsIcon's `icon` property
     * @returns {void}
     */
    set iconOff(val: string);
    /**
     * @returns {string} the current icon representing the `unpressed/off` state
     */
    get iconOff(): string;
    /**
     * Defines the `pressed/on` toggle state icon.
     * @param {string} val corresponds to an IdsIcon's `icon` property
     * @returns {void}
     */
    set iconOn(val: string);
    /**
     * @returns {string} the current icon representing the `pressed/on` state
     */
    get iconOn(): string;
    /**
     * Defines the `unpressed/off` toggle state text.
     * @param {string} val `unpressed/off` description text
     * @returns {void}
     */
    set textOff(val: string);
    /**
     * @returns {string} the current icon representing the `unpressed/off` state
     */
    get textOff(): string;
    /**
     * Defines the `pressed/on` toggle state icon.
     * @param {string} val corresponds to an IdsIcon's `icon` property
     * @returns {void}
     */
    set textOn(val: string);
    /**
     * @returns {string} the current icon representing the `pressed/on` state
     */
    get textOn(): string;
    /**
     * Sets (or creates) a slotted icon that represents the pressed state
     * @private
     * @returns {void}
     */
    refreshIcon(): void;
    /**
     * Sets (or creates) a slotted span that contains text
     * @private
     * @returns {void}
     */
    refreshText(): void;
    /**
     * Toggles the "pressed" state of the button
     * @returns {void}
     */
    toggle(): void;
}
