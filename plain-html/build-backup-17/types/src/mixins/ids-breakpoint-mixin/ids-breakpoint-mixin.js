import { attributes } from '../../core/ids-attributes';
import { isWidthAbove, isWidthBelow } from '../../utils/ids-breakpoint-utils/ids-breakpoint-utils';
/**
 * A mixin that repsonds to breakpoint changes
 * @param {any} superclass Accepts a superclass and creates a new subclass from it
 * @returns {any} The extended object
 */
const IdsBreakpointMixin = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
    }
    static get attributes() {
        return [
            ...superclass.attributes,
            attributes.RESPOND_UP,
            attributes.RESPOND_DOWN,
        ];
    }
    connectedCallback() {
        super.connectedCallback?.();
    }
    disconnectedCallback() {
        super.disconnectedCallback?.();
        this.#teardownRespondUp();
        this.#teardownRespondDown();
    }
    // ===============================================
    // Respond Up
    #mqUp;
    #mqUpChangeHandler;
    onBreakpointUpResponse;
    set respondUp(val) {
        if (val) {
            this.setAttribute(attributes.RESPOND_UP, String(val));
            this.#setupRespondUp(val);
        }
        else {
            this.removeAttribute(attributes.RESPOND_UP);
            this.#teardownRespondUp();
        }
    }
    get respondUp() {
        return this.getAttribute(attributes.RESPOND_UP);
    }
    #setupRespondUp(val) {
        this.#teardownRespondUp();
        this.#mqUp = isWidthAbove(val);
        this.#mqUpChangeHandler = (e) => {
            if (typeof this.onBreakpointUpResponse === 'function') {
                this.onBreakpointUpResponse(val, e.matches);
            }
        };
        this.#mqUp.addEventListener('change', this.#mqUpChangeHandler);
    }
    #teardownRespondUp() {
        if (this.#mqUp) {
            this.#mqUp.removeEventListener('change', this.#mqUpChangeHandler);
            this.#mqUpChangeHandler = undefined;
            this.#mqUp = undefined;
        }
    }
    // ===============================================
    // Respond Down
    #mqDown;
    #mqDownChangeHandler;
    onBreakpointDownResponse;
    set respondDown(val) {
        if (val) {
            this.setAttribute(attributes.RESPOND_DOWN, String(val));
            this.#setupRespondDown(val);
        }
        else {
            this.removeAttribute(attributes.RESPOND_DOWN);
            this.#teardownRespondDown();
        }
    }
    get respondDown() {
        return this.getAttribute(attributes.RESPOND_DOWN);
    }
    #setupRespondDown(val) {
        this.#teardownRespondDown();
        this.#mqDown = isWidthBelow(val);
        this.#mqDownChangeHandler = (e) => {
            if (typeof this.onBreakpointDownResponse === 'function') {
                this.onBreakpointDownResponse(val, e.matches);
            }
        };
        this.#mqDown.addEventListener('change', this.#mqDownChangeHandler);
    }
    #teardownRespondDown() {
        if (this.#mqDown) {
            this.#mqDown.removeEventListener('change', this.#mqDownChangeHandler);
            this.#mqDownChangeHandler = undefined;
            this.#mqDown = undefined;
        }
    }
    // ===============================================
    // General
    respondToCurrentBreakpoint() {
        const simulateChangeEvent = (mq) => new MediaQueryListEvent('change', {
            bubbles: true,
            matches: mq.matches
        });
        if (this.#mqUp) {
            this.#mqUp.dispatchEvent(simulateChangeEvent(this.#mqUp));
        }
        if (this.#mqDown) {
            this.#mqDown.dispatchEvent(simulateChangeEvent(this.#mqDown));
        }
    }
};
export default IdsBreakpointMixin;
//# sourceMappingURL=ids-breakpoint-mixin.js.map