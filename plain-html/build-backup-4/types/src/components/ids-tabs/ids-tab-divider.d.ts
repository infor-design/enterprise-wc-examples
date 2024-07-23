import '../../mixins/ids-events-mixin/ids-events-mixin';
import '../../mixins/ids-color-variant-mixin/ids-color-variant-mixin';
import IdsElement from '../../core/ids-element';
/**
 * IDS Tab Divider Component
 * @type {IdsTabDivider}
 * @inherits IdsElement
 * @part divider - the tab divider
 */
export default class IdsTabDivider extends IdsElement {
    constructor();
    /**
     * Create the Template for the contents
     * @returns {string} the template to render
     */
    template(): string;
    connectedCallback(): void;
}
