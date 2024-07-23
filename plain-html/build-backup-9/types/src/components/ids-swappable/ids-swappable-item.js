var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, scss, } from '../../core/ids-decorators';
import { attributes } from '../../core/ids-attributes';
import Base from './ids-swappable-item-base';
import styles from './ids-swappable-item.scss';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
/**
 * IDS Swappable Item Component
 * @type {IdsSwappableItem}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 */
let IdsSwappableItem = class IdsSwappableItem extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute(attributes.TABBABLE, 'true');
        if (!this.hasAttribute(attributes.DRAG_MODE)) {
            this.setAttribute(attributes.DRAG_MODE, 'select');
        }
        this.setAttribute(attributes.DRAGGABLE, this.dragMode === 'select' ? 'false' : 'true');
        this.attachEventListeners();
        this.#addCssClasses();
    }
    static get attributes() {
        return [
            ...super.attributes,
            attributes.DRAG_MODE,
            attributes.DRAGGING,
            attributes.ORIGINAL_TEXT,
            attributes.OVER,
            attributes.SELECTED,
            attributes.TABBABLE
        ];
    }
    template() {
        return `<slot></slot>`;
    }
    set dragMode(value) {
        if (value === 'select') {
            this.setAttribute(attributes.DRAGGABLE, 'false');
        }
        else {
            // "always"
            this.setAttribute(attributes.DRAGGABLE, 'true');
        }
    }
    get dragMode() {
        return this.getAttribute(attributes.DRAG_MODE);
    }
    /**
     * Set the selected attribute
     * @param {string | boolean | null} value boolean value
     * @memberof IdsSwappableItem
     */
    set selected(value) {
        const isValueTruthy = stringToBool(value);
        if (isValueTruthy) {
            this.setAttribute(attributes.SELECTED, '');
            this.setAttribute('aria-selected', 'selected');
            this.setAttribute('draggable', 'true');
        }
        else {
            this.removeAttribute(attributes.SELECTED);
            this.removeAttribute('aria-selected');
            if (this.dragMode === 'select') {
                this.setAttribute('draggable', 'false');
            }
        }
    }
    /**
     * Get the selected attribute
     * @returns {boolean} selected attribute value
     * @readonly
     * @memberof IdsSwappableItem
     */
    get selected() {
        return stringToBool(this.getAttribute(attributes.SELECTED));
    }
    /**
     * Get all selected swappable items
     * @returns {NodeListOf<IdsSwappableItem>} NodeList of selected ids-swappable-item
     * @readonly
     * @memberof IdsSwappableItem
     */
    get selectedItems() {
        return this.parentElement?.shadowRoot?.querySelectorAll('[selected]');
    }
    /**
     * Get all swappable items
     * @returns {NodeListOf<IdsSwappableItem>} NodeList of ids-swappable-item
     * @readonly
     * @memberof IdsSwappableItem
     */
    get allItems() {
        return this.parentElement?.querySelectorAll('ids-swappable-item');
    }
    /**
     * Set the originalText attribute
     * which is used to reset the text of the dropped items
     * @param {string|null} value text value of the item
     * @memberof IdsSwappableItem
     */
    set originalText(value) {
        if (value) {
            this.setAttribute(attributes.ORIGINAL_TEXT, value);
        }
        else {
            this.removeAttribute(attributes.ORIGINAL_TEXT);
        }
    }
    /**
     * Get the originalText attribute
     * @returns {string} string of text
     * @readonly
     * @memberof IdsSwappableItem
     */
    get originalText() {
        return this.getAttribute(attributes.ORIGINAL_TEXT);
    }
    /**
     * Get the selection attribute
     * @returns {string} value of selection attribute
     * @readonly
     * @memberof IdsSwappableItem
     */
    get selection() {
        return this.parentElement?.getAttribute(attributes.SELECTION);
    }
    /**
     * Set if the item is tabbable
     * @param {boolean | string} value True of false depending if the item is tabbable
     */
    set tabbable(value) {
        const isTabbable = stringToBool(value);
        if (isTabbable) {
            this.setAttribute(attributes.TABBABLE, 'true');
            this.setAttribute(attributes.TABINDEX, '0');
            return;
        }
        this.setAttribute(attributes.TABBABLE, 'false');
        this.setAttribute(attributes.TABINDEX, '-1');
    }
    /**
     * Get whether the item currently allows tabbing.
     * @returns {boolean} true or false depending on whether the item is currently tabbable
     */
    get tabbable() {
        return stringToBool(this.getAttribute(attributes.TABBABLE) || true);
    }
    /**
     * Handle functionality for the dragstart event
     * @param {any} event dragstart event
     */
    #dragStart(event) {
        event.dataTransfer?.setData('text/plain', event.target.innerText);
        this.setAttribute(attributes.DRAGGING, '');
        [...this.children].forEach((elem) => {
            elem.setAttribute(attributes.DRAGGING, '');
        });
    }
    /**
     * Handle functionality for the dragend event
     */
    #dragEnd() {
        if (this.dragMode === 'select') {
            this.setAttribute(attributes.DRAGGABLE, 'true');
        }
        this.removeAttribute(attributes.DRAGGING);
        [...this.children].forEach((elem) => {
            elem.removeAttribute(attributes.DRAGGING);
            elem.focus();
        });
        this.removeAttribute(attributes.OVER);
    }
    /**
     * Handle functionality for the dragover event
     * @param {any} event dragstart event
     */
    #dragOver(event) {
        if (event.dataTransfer)
            event.dataTransfer.dropEffect = 'move';
        if (this.hasAttribute(attributes.DRAGGING)) {
            this.removeAttribute(attributes.OVER);
        }
        else {
            this.setAttribute(attributes.OVER, '');
        }
    }
    /**
     * Handle functionality for the dragleave event
     */
    #dragLeave() {
        this.removeAttribute(attributes.OVER);
    }
    /**
     * Toggles the select attribute when
     * ids-swappable is not set to selection
     */
    #toggleSelect() {
        const clearSelection = () => {
            this.removeAttribute(attributes.SELECTED);
            this.querySelector('div[part="list-item"]')?.removeAttribute(attributes.SELECTED);
        };
        if (this.dragMode === 'select') {
            if (this.selected) {
                clearSelection();
            }
            else {
                this.allItems?.forEach((item) => {
                    item.removeAttribute(attributes.SELECTED);
                    item.querySelector('div[part="list-item"]')?.removeAttribute(attributes.SELECTED);
                });
                this.setAttribute(attributes.SELECTED, '');
                this.querySelector('div[part="list-item"]')?.setAttribute(attributes.SELECTED, 'selected');
            }
        }
        else {
            clearSelection();
        }
    }
    /**
     * Toggles the select attribute when
     * ids-swappable is set to selection
     */
    #toggleMultiSelect() {
        if (this.selected) {
            this.removeAttribute(attributes.SELECTED);
        }
        else {
            this.setAttribute(attributes.SELECTED, '');
        }
    }
    /**
     * Handle the keyboard events
     */
    #handleKeyEvents() {
        this.listen(['Enter', 'ArrowUp', 'ArrowDown'], this, (e) => {
            e.preventDefault();
            if (e.key === 'ArrowDown') {
                e.target.parentElement?.nextElementSibling?.focus();
                e.target.nextElementSibling?.focus();
            }
            if (e.key === 'ArrowUp') {
                e.target.previousElementSibling?.focus();
            }
            if (e.key === 'Enter') {
                const isEditing = this.querySelector('.is-editing');
                if (isEditing) {
                    return;
                }
                if (this.selection === 'multiple') {
                    this.#toggleMultiSelect();
                }
                else {
                    this.#toggleSelect();
                }
            }
        });
    }
    /**
     * Handle the click events
     */
    #handleClickEvents() {
        if (this.selection === 'multiple') {
            this.offEvent('click', this, this.#toggleMultiSelect);
            this.onEvent('click', this, this.#toggleMultiSelect);
        }
        else {
            this.offEvent('click', this, this.#toggleSelect);
            this.onEvent('click', this, this.#toggleSelect);
        }
    }
    /**
     * Handle the drag events
     */
    #handleDragEvents() {
        this.offEvent('dragstart', this, (e) => this.#dragStart(e));
        this.onEvent('dragstart', this, (e) => this.#dragStart(e));
        this.offEvent('dragend', this, () => this.#dragEnd());
        this.onEvent('dragend', this, () => this.#dragEnd());
        this.offEvent('drop', this, () => this.#dragEnd());
        this.onEvent('drop', this, () => this.#dragEnd());
        this.offEvent('dragover', this, (e) => this.#dragOver(e));
        this.onEvent('dragover', this, (e) => this.#dragOver(e));
        this.offEvent('dragleave', this, () => this.#dragLeave());
        this.onEvent('dragleave', this, () => this.#dragLeave());
    }
    /**
     * Attach all event listeners
     */
    attachEventListeners() {
        this.#handleClickEvents();
        this.#handleKeyEvents();
        this.#handleDragEvents();
    }
    /**
     * Adding CSS classes to the component with a name of slotted element
     * Allows to style the component for different cases
     */
    #addCssClasses() {
        if (this.children.length > 0) {
            const slottedClasses = [...this.children]
                .filter((item) => item.name)
                .map((item) => `slotted-${item.name}`);
            const orientationClasses = [...this.children]
                .filter((item) => item.state?.orientation)
                .map((item) => `orientation-${item.state.orientation}`);
            if (slottedClasses.length > 0 || orientationClasses.length > 0) {
                this.classList.add(...slottedClasses, ...orientationClasses);
            }
        }
    }
};
IdsSwappableItem = __decorate([
    customElement('ids-swappable-item'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsSwappableItem);
export default IdsSwappableItem;
//# sourceMappingURL=ids-swappable-item.js.map