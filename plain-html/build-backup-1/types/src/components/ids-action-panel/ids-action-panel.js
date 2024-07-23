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
import Base from './ids-action-panel-base';
import '../ids-toolbar/ids-toolbar';
import styles from './ids-action-panel.scss';
/**
 * IDS Action Panel
 * @type {IdsActionPanel}
 * @inherits IdsModal
 */
let IdsActionPanel = class IdsActionPanel extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.#refreshHeader();
        if (this.popup)
            this.popup.animationStyle = 'slide-from-bottom';
    }
    get toolbar() {
        return this.querySelector('[slot="toolbar"]');
    }
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template() {
        return `<ids-popup part="modal" class="ids-modal ids-action-panel" type="modal" position-style="viewport">
      <div class="ids-modal-container" slot="content">
        <div class="ids-modal-header">
          <slot name="toolbar"></slot>
        </div>
        <div class="ids-modal-content">
          <slot></slot>
        </div>
        <div class="ids-modal-footer">
          <slot name="buttons"></slot>
        </div>
      </div>
    </ids-popup>`;
    }
    #refreshHeader() {
        const toolbarSlot = this.container?.querySelector('slot[name="toolbar"]');
        if (toolbarSlot) {
            toolbarSlot.hidden = this.toolbar === undefined;
        }
    }
    /**
     * Overrides `addOpenEvents` from both Modal and the IdsPopupOpenEventsMixin to include
     * a way to tie in Toolbar buttons to the Modal's standard `onButtonClick` callback
     * @returns {void}
     */
    addOpenEvents() {
        super.addOpenEvents();
        // If a Modal Button is clicked, fire an optional callback
        const toolbarSlot = this.container?.querySelector('slot[name="toolbar"]');
        this.onEvent('click.toolbar', toolbarSlot, (e) => {
            this.handleButtonClick(e);
        });
    }
    /**
     * Overrides `addOpenEvents` from both Modal and the IdsPopupOpenEventsMixin to include
     * a way to tie in Toolbar buttons to the Modal's standard `onButtonClick` callback
     * @returns {void}
     */
    removeOpenEvents() {
        super.removeOpenEvents();
        this.offEvent('click.toolbar');
    }
};
IdsActionPanel = __decorate([
    customElement('ids-action-panel'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsActionPanel);
export default IdsActionPanel;
//# sourceMappingURL=ids-action-panel.js.map