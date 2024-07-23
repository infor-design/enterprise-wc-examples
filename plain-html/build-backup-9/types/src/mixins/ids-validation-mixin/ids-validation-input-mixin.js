/**
 * Adds validation to any input field
 * @param {any} superclass Accepts a superclass and creates a new subclass from it
 * @returns {any} The extended object
 */
const IdsValidationInputMixin = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
    }
    connectedCallback() {
        super.connectedCallback?.();
    }
    /**
     * Return if the field is valid or not
     * @returns {boolean} true if invalid
     */
    get isValid() { return this.input?.shadowRoot?.querySelectorAll('.validation-message').length === 0; }
    /**
     * Return if the current validation errors
     * @returns {Array<IdsValidationErrorMessage>} The current errors
     */
    get validationMessages() {
        const msgs = [];
        this.input?.shadowRoot?.querySelectorAll('.validation-message').forEach((message) => {
            msgs.push({
                message: message.querySelector('ids-text')?.childNodes[1].textContent || '',
                type: message.getAttribute('type') || '',
                id: message.getAttribute('validation-id') || ''
            });
        });
        return msgs;
    }
};
export default IdsValidationInputMixin;
//# sourceMappingURL=ids-validation-input-mixin.js.map