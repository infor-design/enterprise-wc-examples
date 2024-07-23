var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, scss } from '../../core/ids-decorators';
import { attributes, htmlAttributes } from '../../core/ids-attributes';
import { stringToBool, buildClassAttrib } from '../../utils/ids-string-utils/ids-string-utils';
import Base from './ids-tab-base';
import '../ids-text/ids-text';
import styles from './ids-tab.scss';
/**
 * IDS Tab Component
 * @type {IdsTab}
 * @inherits IdsElement
 * @mixes IdsColorVariantMixin
 * @mixes IdsOrientationMixin
 * @mixes IdsThemeMixin
 * @mixes IdsHideFocusMixin
 * @mixes IdsEventsMixin
 * @part container - the tab container itself
 */
let IdsTab = class IdsTab extends Base {
    /**
     * @param {IdsTabOnActionCallback} onAction a user-defined callback function that can be applied to a Tab
     */
    onAction;
    constructor() {
        super();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array<string>} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.ACTIONABLE,
            attributes.COUNT,
            attributes.DISMISSIBLE,
            attributes.DISABLED,
            attributes.SELECTED,
            attributes.VALUE
        ];
    }
    /**
     * Inherited from `IdsColorVariantMixin`
     * @returns {Array<string>} List of available color variants for this component
     */
    colorVariants = ['alternate', 'module'];
    /**
     * @returns {Array<string>} Drawer vetoable events
     */
    vetoableEventTypes = [
        'beforetabremove',
    ];
    /**
     * Create the Template for the contents
     * @returns {string} the template to render
     */
    template() {
        const hasIcon = this.querySelector('ids-icon');
        const hasCount = this.hasAttribute(attributes.COUNT);
        const cssClassAttr = buildClassAttrib('ids-tab', this.selected, this.orientation, this.count);
        const selectedAttr = this.selected ? ' font-weight="bold"' : '';
        let innerContent = '<slot></slot>';
        if (!hasIcon && !hasCount) {
            innerContent = `<ids-text overflow="ellipsis" size="22"${selectedAttr}>
        <slot></slot>
      </ids-text>`;
        }
        else if (hasCount) {
            innerContent = `<div class="ids-tab-count-container">
        <ids-text overflow="ellipsis" font-size="28"${selectedAttr}>
          ${this.getAttribute(attributes.COUNT)}
        </ids-text>
        <ids-text overflow="ellipsis" size="22">
          <slot></slot>
        </ids-text>
      </div>`;
        }
        return `<div ${cssClassAttr} tabindex="-1" part="container">
      ${innerContent}
      <div class="ids-tab-trigger-container">
        <slot name="close"></slot>
      </div>
    </div>`;
    }
    /**
     * @returns {string} draws the dismissible button
     */
    #templateDismissible() {
        let colorVariant = '';
        if (this.colorVariant) {
            colorVariant = ` color-variant="${this.#getDismissibleVariant()}"`;
        }
        return `<ids-trigger-button slot="close" label="Close"${colorVariant} inherit-color>
      <ids-icon icon="close" size="xsmall"></ids-icon>
    </ids-trigger-button>`;
    }
    #getDismissibleVariant() {
        return this.colorVariant === 'module' ? 'alternate' : this.colorVariant;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute(htmlAttributes.ROLE, 'tab');
        this.setAttribute(htmlAttributes.ARIA_SELECTED, `${Boolean(this.selected)}`);
        this.setAttribute(htmlAttributes.TABINDEX, stringToBool(this.selected) ? '0' : '-1');
        this.setAttribute(htmlAttributes.ARIA_LABEL, this.#getReadableAriaLabel());
        this.#detectSwappable();
        this.#afterConnectedCallback();
    }
    /**
     * Refresh component's bindings after render
     */
    #afterConnectedCallback() {
        this.offEvent('slotchange');
        // When any of this item's slots change,
        // refresh the text content so that
        // ids-text::part(text):after can access
        // this for bold sizing fix
        this.onEvent('slotchange', this.container, () => {
            this.#setDataTextForBoldFix();
            this.setAttribute(htmlAttributes.ARIA_LABEL, this.#getReadableAriaLabel());
        });
        this.#setDataTextForBoldFix();
        this.selected = this.hasAttribute(attributes.SELECTED);
    }
    /**
     * @param {boolean} isActionable true if this Tab should be displayed as an "action" (small, low padding, no flex)
     */
    set actionable(isActionable) {
        if (stringToBool(isActionable)) {
            this.setAttribute(attributes.ACTIONABLE, '');
            this.container?.classList.add(attributes.ACTIONABLE);
        }
        else {
            this.removeAttribute(attributes.ACTIONABLE);
            this.container?.classList.remove(attributes.ACTIONABLE);
        }
    }
    /**
     * @returns {boolean} true if this Tab should be displayed as an "action"
     */
    get actionable() {
        return this.hasAttribute(attributes.ACTIONABLE);
    }
    /**
     * @param {boolean} isDismissible true if this Tab should contain an "X" icon used for dismissal
     */
    set dismissible(isDismissible) {
        if (stringToBool(isDismissible)) {
            this.setAttribute(attributes.DISMISSIBLE, '');
            this.container?.classList.add(attributes.DISMISSIBLE);
            this.insertAdjacentHTML('beforeend', this.#templateDismissible());
        }
        else {
            this.removeAttribute(attributes.DISMISSIBLE);
            this.container?.classList.remove(attributes.DISMISSIBLE);
            this.dismissibleBtnEl.remove();
        }
    }
    /**
     * @returns {boolean} true if this Tab should contain an "X" icon used for dismissal
     */
    get dismissible() {
        return this.hasAttribute(attributes.DISMISSIBLE);
    }
    /**
     * Provides a reference to a close button, if applicable
     * @returns {HTMLElement | null} IdsTriggerButton
     */
    get dismissibleBtnEl() {
        return this.querySelector('ids-trigger-button');
    }
    /**
     * @param {boolean | string} isDisabled true if the tab should become disabled
     */
    set disabled(isDisabled) {
        const newValue = stringToBool(isDisabled);
        if (newValue) {
            this.setAttribute(attributes.DISABLED, '');
            this.container?.classList.add(attributes.DISABLED);
            if (this.dismissibleBtnEl) {
                this.dismissibleBtnEl.disabled = true;
            }
        }
        else {
            this.removeAttribute(attributes.DISABLED);
            this.container?.classList.remove(attributes.DISABLED);
            if (this.dismissibleBtnEl) {
                this.dismissibleBtnEl.disabled = false;
            }
        }
    }
    /**
     * @returns {boolean} true if this tab is disabled
     */
    get disabled() {
        return this.hasAttribute(attributes.DISABLED);
    }
    /**
     * @param {boolean} isSelected Whether or not this tab is selected.
     */
    set selected(isSelected) {
        const currentValue = this.selected;
        const newValue = stringToBool(isSelected);
        if (currentValue !== newValue) {
            if (!newValue) {
                this.removeAttribute(attributes.SELECTED);
                this.container?.classList.remove(attributes.SELECTED);
                this.container?.children?.[0]?.removeAttribute?.(attributes.FONT_WEIGHT);
                this.setAttribute(htmlAttributes.TABINDEX, '-1');
                this.container?.setAttribute(htmlAttributes.TABINDEX, '-1');
            }
            else {
                this.setAttribute(attributes.SELECTED, '');
                this.container?.children?.[0]?.setAttribute?.(attributes.FONT_WEIGHT, 'bold');
                this.container?.classList.add(attributes.SELECTED);
                this.setAttribute(htmlAttributes.TABINDEX, '0');
                this.container?.setAttribute(htmlAttributes.TABINDEX, '0');
                this.#select(newValue);
            }
            this.setAttribute(htmlAttributes.ARIA_SELECTED, `${newValue}`);
        }
    }
    /**
     * @returns {boolean} isSelected Whether or not this tab is selected.
     */
    get selected() {
        return this.hasAttribute(attributes.SELECTED);
    }
    /**
     * Triggers the `tabselect` event
     * @param {boolean} isSelected true if the tab has been selected
     */
    #select(isSelected) {
        if (this.actionable)
            return;
        this.triggerEvent('tabselect', this, {
            bubbles: true,
            detail: {
                selected: isSelected
            }
        });
    }
    /** @param {string} value The value which becomes selected by ids-tabs component */
    set value(value) {
        if (value !== this.getAttribute(attributes.VALUE)) {
            this.setAttribute(attributes.VALUE, String(value));
        }
        this.#valueChange(value);
    }
    /** @returns {string} value The value which becomes selected by ids-tabs component */
    get value() {
        return this.getAttribute(attributes.VALUE);
    }
    /**
     * @param {string} value The value which becomes selected by ids-tabs component
     */
    #valueChange(value) {
        this.triggerEvent('tabvaluechange', this, {
            bubbles: true,
            detail: { value: `${value}` }
        });
    }
    /** @returns {string} value The number of items represented in the tab (may or may not apply) */
    get count() {
        return this.getAttribute(attributes.COUNT);
    }
    /**
     * @param {string} value The number of items represented in the tab (may or may not apply)
     */
    set count(value) {
        if (value === '') {
            if (this.hasAttribute(attributes.COUNT)) {
                this.removeAttribute(attributes.COUNT);
            }
            this.container?.classList.remove(attributes.COUNT);
            return;
        }
        if (Number.isNaN(Number(value))) {
            return;
        }
        this.container?.classList.add(attributes.COUNT);
        if (this.getAttribute(attributes.COUNT) !== value) {
            this.setAttribute(attributes.COUNT, String(value));
        }
    }
    /**
     * sets aria readable label by
     * grabbing all ids-text nodes in order
     * they appear in the DOM
     * @returns {string} aria-label content
     */
    #getReadableAriaLabel() {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const idsTextEls = [...this.container?.querySelectorAll('ids-text') ?? []];
        return idsTextEls.map((textEl) => {
            const slotNode = textEl.querySelector('slot')?.assignedNodes?.()?.[0];
            return slotNode?.textContent || textEl.textContent;
        }).join(' ');
    }
    /**
     * Sets the data-text of nested ids-text to it's slot
     * text content. Fixes issue with bold moving around
     * when we edit content.
     */
    #setDataTextForBoldFix = () => {
        const idsText = this.container?.querySelector('ids-text');
        const slotNode = idsText?.querySelector('slot')?.assignedNodes?.()?.[0];
        if (slotNode && idsText) {
            idsText?.container?.setAttribute('data-text', `"${slotNode.textContent?.trim()}"`);
        }
    };
    /**
     * Sets/removes CSS classes on this tab that control "swappable" display
     */
    #detectSwappable() {
        const swappableParent = this.parentElement && this.parentElement.tagName === 'IDS-SWAPPABLE-ITEM';
        this.container?.classList[swappableParent ? 'add' : 'remove']('swappable');
    }
    /**
     * Dismisses this tab, if possible
     */
    dismiss() {
        if (this.dismissible) {
            if (!this.triggerVetoableEvent('beforetabremove'))
                return;
            this.triggerEvent('tabremove', this, {
                bubbles: true,
                detail: {
                    elem: this,
                    value: this.value
                }
            });
        }
    }
    /**
     * Causes the tab to become focused
     */
    focus() {
        if (!this.disabled) {
            this.container?.focus();
        }
    }
    onColorVariantRefresh() {
        const closeBtn = this.dismissibleBtnEl;
        if (closeBtn) {
            const target = this.#getDismissibleVariant();
            closeBtn.colorVariant = target;
        }
    }
};
IdsTab = __decorate([
    customElement('ids-tab'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsTab);
export default IdsTab;
//# sourceMappingURL=ids-tab.js.map