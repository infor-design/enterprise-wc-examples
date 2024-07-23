import IdsModal from '../ids-modal/ids-modal';
import '../ids-toolbar/ids-toolbar';
/**
 * IDS Action Panel
 * @type {IdsActionPanel}
 * @inherits IdsModal
 */
export default class IdsActionPanel extends IdsModal {
    #private;
    constructor();
    connectedCallback(): void;
    get toolbar(): HTMLSlotElement | null;
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template(): string;
    /**
     * Overrides `addOpenEvents` from both Modal and the IdsPopupOpenEventsMixin to include
     * a way to tie in Toolbar buttons to the Modal's standard `onButtonClick` callback
     * @returns {void}
     */
    addOpenEvents(): void;
    /**
     * Overrides `addOpenEvents` from both Modal and the IdsPopupOpenEventsMixin to include
     * a way to tie in Toolbar buttons to the Modal's standard `onButtonClick` callback
     * @returns {void}
     */
    removeOpenEvents(): void;
}
