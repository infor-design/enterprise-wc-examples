import { attributes } from '../../core/ids-attributes';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
/**
 * A mixin that will add hitbox stylings to the component element.
 * @mixin IdsHitboxMixin
 * @param {any} superclass Accepts a superclass and creates a new subclass from it.
 * @returns {any} The extended object
 */
const IdsHitboxMixin = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
    }
    static get attributes() {
        return [
            ...superclass.attributes,
            attributes.HITBOX
        ];
    }
    connectedCallback() {
        super.connectedCallback?.();
        this.#setHitbox();
    }
    /**
     * Sets the checkbox to add hitbox style.
     * @param {boolean|string} value If true, it will apply the hitbox stylings.
     */
    set hitbox(value) {
        const val = stringToBool(value);
        if (val) {
            this.setAttribute(attributes.HITBOX, val.toString());
        }
        else {
            this.removeAttribute(attributes.HITBOX);
        }
        this.#setHitbox();
    }
    get hitbox() { return this.getAttribute(attributes.HITBOX); }
    #setHitbox() {
        this.container?.classList.toggle(attributes.HITBOX, Boolean(this.hitbox));
    }
};
export default IdsHitboxMixin;
//# sourceMappingURL=ids-hitbox-mixin.js.map