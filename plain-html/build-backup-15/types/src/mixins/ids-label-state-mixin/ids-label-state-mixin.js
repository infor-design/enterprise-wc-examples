import { attributes, htmlAttributes } from '../../core/ids-attributes';
import { stripTags, stripHTML } from '../../utils/ids-xss-utils/ids-xss-utils';
import { IdsLabelStateAttributes, isLabelRequiredValid } from './ids-label-state-common';
/**
 * A mixin that will provide the container element of an IdsInputComponent with a class
 * reserved for changing the appearance of its associated label. The Label can be hidden entirely, or made blank.
 * @param {any} superclass Accepts a superclass and creates a new subclass from it
 * @returns {any} The extended object
 */
const IdsLabelStateMixin = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
        if (!this.state) {
            this.state = {};
        }
        this.state.label = '';
    }
    connectedCallback() {
        super.connectedCallback?.();
        this.state.labelState = null;
        if (this.hasAttribute(attributes.LABEL_STATE)) {
            this.labelState = this.getAttribute(attributes.LABEL_STATE);
        }
    }
    static get attributes() {
        return [
            ...superclass.attributes,
            ...IdsLabelStateAttributes
        ];
    }
    /**
     * Set the `label` text
     * @param {string} value of the `label` text property
     */
    set label(value) {
        const newValue = stripHTML(value);
        const currentValue = this.label;
        if (newValue !== currentValue) {
            if (this.state)
                this.state.label = newValue;
            if (newValue) {
                this.setAttribute(attributes.LABEL, `${newValue}`);
            }
            else {
                this.removeAttribute(attributes.LABEL);
            }
            this.setLabelText(newValue);
        }
    }
    get label() { return this.state?.label || ''; }
    /**
     * Used for setting the text contents of the shadowroot label
     * @param {string} [value] of label
     * @param {string} [selector] used to target a specific element in the shadowroot by CSS selector
     * @returns {void}
     */
    setLabelText(value = this.state?.label, selector = 'label') {
        const sanitizedValue = stripHTML(value);
        const labelEl = this.shadowRoot?.querySelector(selector);
        if (labelEl) {
            const textEl = labelEl.querySelector('ids-text');
            if (!this.labelState) {
                if (textEl)
                    textEl.innerHTML = sanitizedValue || '';
                labelEl.classList[sanitizedValue ? 'remove' : 'add']('empty');
            }
            else {
                if (textEl)
                    textEl.innerHTML = '';
                labelEl.classList.add('empty');
            }
        }
    }
    /**
     * Set `label-required` attribute
     * @param {string} value The `label-required` attribute
     */
    set labelRequired(value) {
        const safeValue = isLabelRequiredValid(value);
        if (value !== null) {
            this.setAttribute(attributes.LABEL_REQUIRED, safeValue.toString());
        }
        else {
            this.removeAttribute(attributes.LABEL_REQUIRED);
        }
        this.labelEl?.classList[!safeValue ? 'add' : 'remove']('no-required-indicator');
    }
    get labelRequired() {
        return isLabelRequiredValid(this.getAttribute(attributes.LABEL_REQUIRED));
    }
    /**
     * @returns {Array<IdsLabelStateMode>} List of available hidden label states
     */
    labelStates = ['hidden', 'collapsed'];
    /**
     * @returns {IdsLabelStateMode} the current state of the field label's visibility
     */
    get labelState() {
        return this.state?.labelState || null;
    }
    /**
     * @param {IdsLabelStateMode} val the type of label visibility to apply to the field
     */
    set labelState(val) {
        let safeValue = null;
        if (typeof val === 'string') {
            safeValue = stripTags(val, '');
        }
        const currentValue = this.state.labelState;
        if (currentValue !== safeValue) {
            if (safeValue !== null && this.labelStates.includes(safeValue)) {
                this.setAttribute(attributes.LABEL_STATE, `${safeValue}`);
            }
            else {
                this.removeAttribute(attributes.LABEL_STATE);
                safeValue = null;
            }
            this.state.labelState = safeValue;
            this.#refreshLabelState(currentValue, safeValue);
        }
    }
    /**
     * Refreshes the component's label state, driven by
     * a CSS class on the WebComponent's `container` element
     *
     * @param {string} oldVariantName the variant name to "remove" from the style
     * @param {string} newVariantName the variant name to "add" to the style
     * @returns {void}
     */
    #refreshLabelState(oldVariantName, newVariantName) {
        if (!this.container)
            return;
        const cl = this.container.classList;
        if (oldVariantName)
            cl.remove(`label-state-${oldVariantName}`);
        if (newVariantName)
            cl.add(`label-state-${newVariantName}`);
        this.#setlabelState(newVariantName);
        // Fire optional callback
        if (typeof this.onLabelStateChange === 'function') {
            this.onLabelStateChange(newVariantName);
        }
    }
    #setlabelState(doHide = null) {
        if (doHide) {
            this.#hideLabel();
            this.input?.setAttribute(htmlAttributes.ARIA_LABEL, this.label);
        }
        else {
            this.#showLabel();
            this.input?.removeAttribute(htmlAttributes.ARIA_LABEL);
        }
    }
    #hideLabel() {
        this.setLabelText?.('');
    }
    #showLabel() {
        const existingLabel = this.shadowRoot?.querySelector('label');
        const thisAsInput = this;
        if (!existingLabel && !thisAsInput.labelEl) {
            if (thisAsInput.fieldContainer) {
                thisAsInput.fieldContainer?.insertAdjacentHTML('beforebegin', `<label for="${this.id}-input" class="ids-label-text">
          <ids-text part="label" label="true" color-unset>${this.label}</ids-text>
        </label>`);
            }
        }
        else {
            this.setLabelText?.(this.label);
        }
    }
};
export default IdsLabelStateMixin;
//# sourceMappingURL=ids-label-state-mixin.js.map