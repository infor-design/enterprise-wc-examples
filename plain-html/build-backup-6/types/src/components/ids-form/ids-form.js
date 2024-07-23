var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement } from '../../core/ids-decorators';
import { attributes } from '../../core/ids-attributes';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
import Base from './ids-form-base';
import { FIELD_HEIGHTS } from '../../mixins/ids-field-height-mixin/ids-field-height-mixin';
/**
 * IDS Form Component
 * @type {IdsForm}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsKeyboardMixin
 * @mixes IdsThemeMixin
 * @part form - the form element
 */
let IdsForm = class IdsForm extends Base {
    constructor() {
        super();
    }
    static get attributes() {
        return [
            ...super.attributes,
            attributes.COMPACT,
            attributes.SUBMIT_BUTTON
        ];
    }
    connectedCallback() {
        super.connectedCallback();
    }
    /**
     * Create the template for the header contents
     * @returns {string} The template
     */
    template() {
        let formAttribs = '';
        formAttribs += this.name ? ` name="${this.name}"` : '';
        return `<form${formAttribs} part="form"><slot></slot></form>`;
    }
    /**
     * Sets the compact attribute
     * @param {boolean | string} value string value for compact
     */
    set compact(value) {
        const isCompact = stringToBool(value);
        super.compact = value;
        const formComponents = this.formComponents;
        [...formComponents].forEach((el) => {
            if (isCompact)
                el.setAttribute(attributes.COMPACT, value.toString());
            else
                el.removeAttribute(attributes.COMPACT);
        });
    }
    get compact() {
        return stringToBool(this.getAttribute(attributes.COMPACT)) || false;
    }
    /**
     * Set the fieldHeight (height) of input
     * @param {string} value [xs, sm, md, lg]
     */
    set fieldHeight(value) {
        super.fieldHeight = value;
        const formComponents = this.formComponents;
        [...formComponents].forEach((el) => {
            if (value)
                el.setAttribute(attributes.FIELD_HEIGHT, value.toString());
            else
                el.removeAttribute(attributes.FIELD_HEIGHT);
        });
    }
    get fieldHeight() {
        return this.getAttribute(attributes.FIELD_HEIGHT) ?? FIELD_HEIGHTS.default;
    }
    /**
     * Attached a button to the form to submit the form.
     * @param {string} value string value for title
     */
    set submitButton(value) {
        if (value) {
            this.setAttribute(attributes.SUBMIT_BUTTON, value);
            this.offEvent('click.submit');
            this.onEvent('click.submit', this.querySelector(`#${value}`), () => {
                const formElems = this.formComponents;
                const formValues = [];
                formElems.forEach((el) => formValues.push({
                    nodeName: el.nodeName,
                    value: ['IDS-CHECKBOX', 'IDS-SWITCH'].includes(el.nodeName) ? el.checked : el.value,
                    id: el.id,
                    name: el.name,
                    isDirty: el.isDirty,
                    isValid: el.isValid,
                    originalValue: el.dirty?.original,
                    validationMessages: el.validationMessages
                }));
                this.triggerEvent('submit', this, { bubbles: true, detail: { components: formValues } });
            });
            return;
        }
        this.offEvent('click.submit');
        this.removeAttribute(attributes.SUBMIT_BUTTON);
    }
    get submitButton() {
        return this.getAttribute(attributes.SUBMIT_BUTTON) || '';
    }
    /**
     * Returns an array containing only IdsElements
     * @private
     * @returns {Element[]} Array of IdsElements
     */
    get idsComponents() {
        const elements = [];
        const form = this;
        const findIdsElements = (el) => {
            if (el.hasChildNodes()) {
                const formChildren = [...el.children];
                formChildren.forEach((e) => {
                    if (e.tagName.includes('IDS-')) {
                        elements.push(e);
                    }
                    findIdsElements(e);
                });
            }
        };
        findIdsElements(form);
        return elements;
    }
    /**
     * Returns an array containing only Ids Elements that are considered form components.
     * @private
     * @returns {Element[]} Array of IdsElements
     */
    get formComponents() {
        const idsElements = this.idsComponents;
        const idsFormComponents = idsElements.filter((item) => item.isFormComponent === true);
        return idsFormComponents;
    }
    /**
     * Resets the dirty indicator on all form components.
     */
    resetDirtyTracker() {
        const formElems = this.formComponents;
        formElems.forEach((el) => {
            if (el.resetDirtyTracker)
                el.resetDirtyTracker();
        });
    }
    /**
     * Runs validation on each input
     */
    checkValidation() {
        const formElems = this.formComponents;
        formElems.forEach((el) => {
            if (el?.input?.checkValidation)
                el?.input?.checkValidation();
            if (el?.checkValidation)
                el?.checkValidation();
        });
    }
    /**
     * Return if and form fields are dirty or not
     * @returns {boolean} true if dirty
     */
    get isDirty() {
        return this.dirtyFormComponents.length > 0;
    }
    /**
     * Returs all dirty form components.
     * @returns {Array<Element>} The elements that are dirty.
     */
    get dirtyFormComponents() {
        const formElems = this.formComponents;
        return formElems.filter((item) => item.isDirty === true);
    }
    /**
     * Return if the form is valid or not
     * @returns {boolean} true if invalid
     */
    get isValid() {
        return this.errorFormComponents.length === 0;
    }
    /**
     * Return the inputs with validation errors
     * @returns {Array<Element>} The current form elements with errors
     */
    get errorFormComponents() {
        const formElems = this.formComponents;
        return formElems.filter((item) => item.isValid === false);
    }
};
IdsForm = __decorate([
    customElement('ids-form'),
    __metadata("design:paramtypes", [])
], IdsForm);
export default IdsForm;
//# sourceMappingURL=ids-form.js.map