import { attributes } from '../../core/ids-attributes';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
import { IdsLabelStateAttributes, isLabelStateValid, isLabelRequiredValid } from './ids-label-state-common';
/**
 * A mixin that will pass down Label State features to an IdsInput/IdsTriggerField inside another component's shadow root
 * @param {any} superclass Accepts a superclass and creates a new subclass from it
 * @returns {any} The extended object
 */
const IdsLabelStateParentMixin = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
    }
    connectedCallback() {
        super.connectedCallback?.();
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
        if (value !== null) {
            this.setAttribute(attributes.LABEL, value);
        }
        else {
            this.removeAttribute(attributes.LABEL);
        }
        if (typeof this.onLabelChange === 'function')
            this.onLabelChange(value);
    }
    get label() {
        return this.getAttribute(attributes.LABEL) ?? '';
    }
    /**
     * Sets the `label-state` attribute on the inner IdsDropDrown
     */
    set labelState(value) {
        if (isLabelStateValid(value)) {
            if (value !== null) {
                this.setAttribute(attributes.LABEL_STATE, value);
            }
            else {
                this.removeAttribute(attributes.LABEL_STATE);
            }
            if (typeof this.onLabelStateChange === 'function')
                this.onLabelStateChange(value);
        }
    }
    get labelState() {
        return this.getAttribute(attributes.LABEL_STATE);
    }
    /**
     * Set `label-required` attribute
     * @param {string} value The `label-required` attribute
     */
    set labelRequired(value) {
        const isValid = isLabelRequiredValid(value);
        if (isValid) {
            this.setAttribute(attributes.LABEL_REQUIRED, isValid.toString());
        }
        else {
            this.removeAttribute(attributes.LABEL_REQUIRED);
        }
        if (typeof this.onLabelRequiredChange === 'function')
            this.onLabelRequiredChange();
    }
    get labelRequired() {
        const value = this.getAttribute(attributes.LABEL_REQUIRED);
        return value !== null ? stringToBool(value) : true;
    }
};
export default IdsLabelStateParentMixin;
//# sourceMappingURL=ids-label-state-parent-mixin.js.map