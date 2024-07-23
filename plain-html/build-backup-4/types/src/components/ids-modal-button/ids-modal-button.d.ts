import IdsButton from '../ids-button/ids-button';
/**
 * IDS Modal Button Component
 * @type {IdsModalButton}
 * @inherits IdsButton
 */
export default class IdsModalButton extends IdsButton {
    constructor();
    /**
     * Toggle-Button-level `connectedCallback` implementation (adds an icon refresh)
     */
    connectedCallback(): void;
    /**
     * @returns {Array} containing configurable properties on this component
     */
    static get attributes(): Array<string>;
    /**
     * Figure out the classes
     * @private
     * @readonly
     * @returns {Array} containing classes used to identify this button prototype
     */
    get protoClasses(): Array<string>;
    /**
     * @returns {boolean} true if the button is a cancel button
     */
    get cancel(): boolean;
    /**
     * @param {boolean} val true if the button should be able to cancel the Modal
     */
    set cancel(val: boolean);
}
