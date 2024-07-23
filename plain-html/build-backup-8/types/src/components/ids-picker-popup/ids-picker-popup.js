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
import Base from './ids-picker-popup-base';
let IdsPickerPopup = class IdsPickerPopup extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        super.disconnectedCallback?.();
    }
    static get attributes() {
        return [...super.attributes];
    }
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template() {
        return `<ids-popup class="ids-picker-popup" type="menu" align="bottom, left" arrow="bottom" tabIndex="-1" y="12" animated>
      <slot slot="content"></slot>
    </ids-popup>`;
    }
    /**
     * @returns {Array<string>} Date Picker vetoable events
     */
    vetoableEventTypes = ['beforeshow'];
    /**
     * @readonly
     * @returns {boolean} true if the inner IdsPopup is visible
     */
    get visible() {
        return this.popup?.visible || false;
    }
    /**
     * Hides this menu and any of its submenus.
     * @param {boolean} [doFocus] if true, instructs the listening component that focus should change to a different element
     * @returns {void}
     */
    async hide(doFocus) {
        if (!this.popup?.visible)
            return;
        this.removeOpenEvents();
        // Hide the Ids Popup and all Submenus
        this.popup.visible = false;
        await this.popup.hide();
        if (typeof this.onHide === 'function')
            this.onHide();
        this.triggerEvent('hide', this, {
            bubbles: true,
            detail: {
                doFocus,
                elem: this,
            }
        });
        this.hidden = true;
    }
    /**
     * @returns {void}
     */
    show() {
        if (!this.popup || this.popup.visible)
            return;
        // Trigger a veto-able `beforeshow` event.
        if (!this.triggerVetoableEvent('beforeshow')) {
            return;
        }
        this.hidden = false;
        // Show the popup and do placement
        this.popup.visible = true;
        this.popup.show();
        if (typeof this.onShow === 'function')
            this.onShow();
        this.triggerEvent('show', this, {
            bubbles: true,
            detail: {
                elem: this
            }
        });
        this.addOpenEvents();
    }
    /**
     * Toggles visibility of the popup on/off depending on its current state
     * @returns {void}
     */
    toggleVisibility() {
        if (!this.popup)
            return;
        if (!this.popup.visible) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    onOutsideClick(e) {
        const target = e.target;
        if (!this.contains(target)) {
            this.hide();
        }
    }
    onTriggerClick() {
        this.toggleVisibility();
    }
    /**
     * Inherited from the Popup Interactions Mixin.
     * Runs as soon as the Popup is connected to the DOM.
     * @returns {void}
     */
    onTriggerImmediate() {
        this.show();
    }
};
IdsPickerPopup = __decorate([
    customElement('ids-picker-popup'),
    __metadata("design:paramtypes", [])
], IdsPickerPopup);
export default IdsPickerPopup;
//# sourceMappingURL=ids-picker-popup.js.map