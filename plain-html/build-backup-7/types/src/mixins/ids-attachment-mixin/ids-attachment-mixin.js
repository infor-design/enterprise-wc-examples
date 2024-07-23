import { attributes } from '../../core/ids-attributes';
import { getClosestContainerNode } from '../../utils/ids-dom-utils/ids-dom-utils';
/**
 * A mixin that allows for its component to attach itself to another DOM node when a specified condition occurs.
 * This mixin provides methods for attaching to the new node, and reattaching to the original node.
 * @param {any} superclass Accepts a superclass and creates a new subclass from it
 * @returns {any} The extended object
 */
const IdsAttachmentMixin = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
    }
    static get attributes() {
        return [
            ...superclass.attributes,
            attributes.ATTACHMENT,
        ];
    }
    /**
     * Original parent element reference
     */
    originalParentElement;
    /**
     * Attachment behavior's target element reference
     */
    attachmentParentElement;
    /**
     * @param {string | null} val CSS selector string representing a target element
     */
    set attachment(val) {
        if (val && val.length) {
            this.setAttribute(attributes.ATTACHMENT, val);
            this.#setAttachmentParent(val);
        }
        else {
            this.removeAttribute(attributes.ATTACHMENT);
            this.attachmentParentElement = null;
        }
    }
    /**
     * @returns {string | null} CSS selector string representing a target element
     */
    get attachment() {
        return this.getAttribute(attributes.ATTACHMENT);
    }
    connectedCallback() {
        super.connectedCallback?.();
        this.originalParentElement = this.parentElement;
        if (this.hasAttribute(attributes.ATTACHMENT))
            this.#setAttachmentParent(this.getAttribute(attributes.ATTACHMENT));
    }
    disconnectedCallback() {
        super.disconnectedCallback?.();
        this.originalParentElement = null;
        this.attachmentParentElement = null;
    }
    #setAttachmentParent(val) {
        const containerNode = getClosestContainerNode(this);
        const parentElem = containerNode.querySelector(`${val}`);
        this.attachmentParentElement = parentElem;
    }
    /**
     * Appends this component to the specified target
     * @returns {void}
     */
    appendToTargetParent() {
        if (!this.attachmentParentElement)
            return;
        this.attachmentParentElement.append(this);
    }
    /**
     * Appends this component to the its original parent element
     * @returns {void}
     */
    appendToOriginalParent() {
        if (!this.originalParentElement)
            return;
        this.originalParentElement.append(this);
    }
};
export default IdsAttachmentMixin;
//# sourceMappingURL=ids-attachment-mixin.js.map