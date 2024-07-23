import IdsModal from '../ids-modal/ids-modal';
import '../ids-empty-message/ids-empty-message';
import '../ids-icon/ids-icon';
/**
 * IDS Error Page Component
 * @type {IdsErrorPage}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsKeyboardMixin
 * @mixes IdsThemeMixin
 */
export default class IdsErrorPage extends IdsModal {
    #private;
    constructor();
    connectedCallback(): void;
    static get attributes(): Array<string>;
    template(): string;
    /**
     * Set the icon
     * @param {string} value icon id
     * @memberof IdsErrorPage
     */
    set icon(value: string | null);
    /**
     * Get the icon
     * @returns {string} the icon attribute
     * @readonly
     * @memberof IdsErrorPage
     */
    get icon(): string | null;
    /**
     * Set the label
     * @param {string} value label text
     * @memberof IdsErrorPage
     */
    set label(value: string | null);
    /**
     * Get the label
     * @returns {string} the label text
     * @readonly
     * @memberof IdsErrorPage
     */
    get label(): string | null;
    /**
     * Set the description text
     * @param {string} value description text
     * @memberof IdsErrorPage
     */
    set description(value: string | null);
    /**
     * Get the description text
     * @returns {string} the description text
     * @readonly
     * @memberof IdsErrorPage
     */
    get description(): string | null;
    /**
     * Set the button text
     * @param {string} value button text
     * @memberof IdsErrorPage
     */
    set buttonText(value: string | null);
    /**
     * Get the button text
     * @returns {string} button text
     * @readonly
     * @memberof IdsErrorPage
     */
    get buttonText(): string | null;
    /**
     * Used for ARIA Labels and other content
     * @readonly
     * @returns {string} concatenating the label and description.
     */
    get ariaLabelContent(): string;
}
