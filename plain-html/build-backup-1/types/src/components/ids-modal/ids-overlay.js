var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { attributes } from '../../core/ids-attributes';
import { customElement, scss } from '../../core/ids-decorators';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
import { transitionToPromise } from '../../utils/ids-dom-utils/ids-dom-utils';
import Base from './ids-overlay-base';
import styles from './ids-overlay.scss';
/**
 * IDS Overlay Component
 * @type {IdsOverlay}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 */
let IdsOverlay = class IdsOverlay extends Base {
    constructor() {
        super();
        this.state = {
            opacity: 0.5,
            visible: false,
        };
    }
    static get attributes() {
        return [
            ...super.attributes,
            attributes.VISIBLE,
            attributes.OPACITY
        ];
    }
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template() {
        return `<div class="ids-overlay" part="overlay"><slot></slot></div>`;
    }
    /**
     * @returns {boolean} true if the overlay is visible
     */
    get visible() {
        return this.state.visible;
    }
    /**
     * @param {boolean} val true if the overlay should be made visible
     */
    set visible(val) {
        const trueVal = stringToBool(val);
        this.state.visible = trueVal;
        this.#smoothlyAnimateVisibility(trueVal);
    }
    /**
     * @returns {number} the percent opacity
     */
    get opacity() {
        return this.state.opacity;
    }
    /**
     * @param {number} val a percentage number for setting overlay transparency
     */
    set opacity(val) {
        let trueVal = Number(val);
        if (Number.isNaN(trueVal)) {
            return;
        }
        // Opacity is a percentage value between 0 and 1,
        // so adjust the number accordingly if we get something off
        if (trueVal < 0) {
            trueVal = 0;
        }
        if (trueVal > 1) {
            trueVal = 1;
        }
        this.state.opacity = trueVal;
        this.#changeOpacity(trueVal);
    }
    /**
     * Changes the amount of opacity on the overlay
     * @param {number} val the opacity value to set on the overlay
     * @returns {Promise} fulfilled after a CSS transition completes.
     */
    async #changeOpacity(val) {
        return transitionToPromise(this.container, 'background-color', `rgba(0 0 0 / ${val})`);
    }
    /**
     * Animates in/out the visibility of the overlay
     * @param {boolean} val if true, shows the overlay.  If false, hides the overlay.
     */
    async #smoothlyAnimateVisibility(val) {
        const cl = this.container?.classList;
        if (val && !cl?.contains('visible')) {
            // Make visible
            cl?.add('visible');
            requestAnimationFrame(() => {
                this.#changeOpacity(this.opacity);
            });
        }
        else if (!val && cl?.contains('visible')) {
            // Make hidden
            await this.#changeOpacity(0);
            cl?.remove('visible');
        }
    }
};
IdsOverlay = __decorate([
    customElement('ids-overlay'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsOverlay);
export default IdsOverlay;
//# sourceMappingURL=ids-overlay.js.map