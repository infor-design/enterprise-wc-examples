import IdsElement from '../../core/ids-element';
import './ids-list-box-option';
/**
 * IDS List Box Component
 * @type {IdsListBox}
 * @inherits IdsElement
 */
export default class IdsListBox extends IdsElement {
    constructor();
    connectedCallback(): void;
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template(): string;
}
