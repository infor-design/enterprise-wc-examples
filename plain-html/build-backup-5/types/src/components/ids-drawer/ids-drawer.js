var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import Core
import { customElement, scss } from '../../core/ids-decorators';
import { attributes } from '../../core/ids-attributes';
import { stripHTML } from '../../utils/ids-xss-utils/ids-xss-utils';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
import { EDGES, TYPES } from './ids-drawer-attributes';
import Base from './ids-drawer-base';
import styles from './ids-drawer.scss';
/**
 * IDS Drawer Component
 * @type {IdsDrawer}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsPopupOpenEventsMixin
 */
let IdsDrawer = class IdsDrawer extends Base {
    constructor() {
        super();
        if (!this.state) {
            this.state = {};
        }
        this.state.edge = null;
        this.state.target = null;
        this.state.type = null;
        this.state.visible = false;
    }
    connectedCallback() {
        super.connectedCallback();
    }
    static get attributes() {
        return [
            ...super.attributes,
            attributes.EDGE,
            attributes.TYPE,
            attributes.VISIBLE
        ];
    }
    template() {
        return `<div class="ids-drawer">
      <slot></slot>
    </ids-drawer>`;
    }
    /**
     * @returns {string} the current Edge that the Drawer is displayed against
     */
    get edge() {
        return this.state.edge;
    }
    /**
     * @param {string} val changes the Edge that the Drawer is displayed against
     */
    set edge(val) {
        let trueVal = EDGES[0];
        if (typeof val === 'string' && EDGES.includes(val)) {
            trueVal = val;
        }
        if (this.state.edge !== trueVal) {
            this.state.edge = trueVal;
            this.setAttribute(attributes.EDGE, `${trueVal}`);
            this.#refreshEdgeClass();
        }
    }
    /**
     * Refreshes the visual state of the Drawer related to its Edge
     * @returns {void}
     */
    #refreshEdgeClass() {
        const cl = this.container?.classList;
        const edgeClass = `edge-${this.edge}`;
        EDGES.forEach((edge) => {
            const thisEdgeClass = `edge-${edge}`;
            if (edgeClass === thisEdgeClass && !cl?.contains(edgeClass)) {
                cl?.add(edgeClass);
            }
            else if (edgeClass !== thisEdgeClass && cl?.contains(thisEdgeClass)) {
                cl?.remove(thisEdgeClass);
            }
        });
    }
    /**
     * @returns {HTMLElement} the target element's reference
     */
    get target() {
        return this.state.target;
    }
    /**
     * @param {HTMLElement} val a target element's reference
     */
    set target(val) {
        if (val !== this.state.target) {
            this.removeTriggerEvents();
            this.state.target = val;
            this.refreshTriggerEvents();
        }
    }
    /** Describes whether or not this drawer has trigger events */
    hasTriggerEvents = false;
    /**
     * Removes events from a trigger element
     */
    removeTriggerEvents() {
        const removeEventTargets = ['click.trigger'];
        removeEventTargets.forEach((eventName) => {
            const evt = this.handledEvents.get(eventName);
            if (evt) {
                this.detachEventsByName(eventName);
            }
        });
        this.hasTriggerEvents = false;
    }
    /**
     * Attaches events to the trigger element
     */
    refreshTriggerEvents() {
        if (!this.target) {
            return;
        }
        this.onEvent('click.trigger', this.target, () => {
            // Closes the popup for app menu
            if (this.type === TYPES[0] && this.visible) {
                this.hide();
            }
            else {
                this.show();
            }
        });
    }
    /**
     * @returns {string} the current display type of the Drawer
     */
    get type() {
        return this.state.type;
    }
    /**
     * @param {string} val changes the display type of the Drawer
     */
    set type(val) {
        let trueVal = null;
        if (typeof val === 'string' && TYPES.includes(val)) {
            trueVal = val;
        }
        if (this.state.type !== trueVal) {
            this.state.type = trueVal;
            if (trueVal) {
                this.setAttribute(attributes.TYPE, `${trueVal}`);
            }
            else {
                this.removeAttribute(attributes.TYPE);
            }
            this.#refreshTypeClass();
        }
    }
    /**
     * Refreshes the visual state of the Drawer related to its type
     * @returns {void}
     */
    #refreshTypeClass() {
        const cl = this.container?.classList;
        const typeClass = `type-${this.type}`;
        TYPES.forEach((type) => {
            const thisTypeClass = `type-${type}`;
            if (this.type !== null && typeClass === thisTypeClass && !cl?.contains(typeClass)) {
                cl?.add(typeClass);
            }
            else if (typeClass !== thisTypeClass && cl?.contains(thisTypeClass)) {
                cl?.remove(thisTypeClass);
            }
        });
    }
    /**
     * @returns {boolean} true if the Drawer is currently visible
     */
    get visible() {
        return stringToBool(this.state.visible);
    }
    /**
     * @param {boolean | string} val true if the Drawer should become visible
     */
    set visible(val) {
        const trueVal = stringToBool(val);
        if (trueVal) {
            this.setAttribute(attributes.VISIBLE, stripHTML(`${val}`));
        }
        else {
            this.removeAttribute(attributes.VISIBLE);
        }
        if (this.state.visible !== trueVal) {
            this.state.visible = trueVal;
            this.#refreshVisibility();
        }
    }
    /**
     * Changes visual state related to the Drawer's visibility
     * @returns {void}
     */
    #refreshVisibility() {
        if (this.visible) {
            this.container?.classList.add('visible');
            this.addOpenEvents();
            this.triggerEvent('show', this, {
                bubbles: true,
                detail: { elem: this }
            });
        }
        else {
            this.container?.classList.remove('visible');
            this.removeOpenEvents();
            this.triggerEvent('hide', this, {
                bubbles: true,
                detail: { elem: this }
            });
        }
    }
    /**
     * @returns {Array<string>} Drawer vetoable events
     */
    vetoableEventTypes = ['beforeshow', 'beforehide'];
    /**
     * Shows the drawer
     */
    show() {
        // Trigger a veto-able `beforeshow` event.
        if (!this.triggerVetoableEvent('beforeshow')) {
            return;
        }
        this.visible = true;
    }
    /**
     * Hides the drawer
     */
    hide() {
        // Trigger a veto-able `beforehide` event.
        if (!this.triggerVetoableEvent('beforehide')) {
            return;
        }
        this.visible = false;
    }
    /**
     * Handle `onOutsideClick` from IdsPopupOpenEventsMixin
     * @param {MouseEvent} e the original click event
     */
    onOutsideClick(e) {
        if (this.isEqualNode(e.target) || this.contains(e.target)) {
            return;
        }
        this.hide();
    }
};
IdsDrawer = __decorate([
    customElement('ids-drawer'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsDrawer);
export default IdsDrawer;
//# sourceMappingURL=ids-drawer.js.map