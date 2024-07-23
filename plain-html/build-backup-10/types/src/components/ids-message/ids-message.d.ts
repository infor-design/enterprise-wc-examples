import IdsModal from '../ids-modal/ids-modal';
import '../ids-icon/ids-icon';
/**
 * IDS Message Component
 * @type {IdsMessage}
 * @inherits IdsModal
 * @part popup - the popup outer element
 * @part overlay - the inner overlay element
 */
export default class IdsMessage extends IdsModal {
    #private;
    constructor();
    static get attributes(): string[];
    /**
     * @returns {void}
     */
    connectedCallback(): void;
    /**
     * Used for ARIA Labels and other content
     * @readonly
     * @returns {string} concatenating the status and title together.
     */
    get ariaLabelContent(): string;
    /**
     * @returns {string} the current contents of the messsage
     */
    get message(): string;
    /**
     * @param {string} val the desired contents of the message element
     */
    set message(val: string);
    /**
     * @returns {string} the current opacity of the overlay
     */
    get opacity(): string;
    /**
     * @param {string} val the desired opacity of the overlay
     */
    set opacity(val: string | null);
    /**
     * @returns {string} the message's current status type
     */
    get status(): string;
    /**
     * @param {string} val the message's new status type
     */
    set status(val: string | null);
}
