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
import Base from './ids-process-indicator-base';
import './ids-process-indicator-step';
import '../ids-alert/ids-alert';
import styles from './ids-process-indicator.scss';
/**
 * IDS Process Indicator Component
 * @type {IdsProcessIndicator}
 * @inherits IdsElement
 * @mixes IdsThemeMixin
 */
let IdsProcessIndicator = class IdsProcessIndicator extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.#setActiveStepLabel();
    }
    static get attributes() {
        return [
            ...super.attributes,
        ];
    }
    /**
     * Set the active step label for xs heading
     * @private
     * @returns {void}
     */
    #setActiveStepLabel() {
        let activeStepLabel = 'None';
        const steps = this.querySelectorAll('ids-process-indicator-step');
        if (steps.length > 1) {
            let i = 0;
            for (const step of steps) {
                if (step.status === 'started') {
                    activeStepLabel = step.label === 'empty label' ? `${i + 1}` : step.label;
                    break;
                }
                i++;
            }
            const labelElem = this.container?.querySelector('.xs-header .label');
            if (labelElem)
                labelElem.innerHTML = activeStepLabel;
        }
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        return `
    <div class="ids-process-indicator">
      <span class="step-container">
        <div class="xs-header">
          <ids-text>Current: </ids-text>
          <ids-text class="label" font-weight="bold"></ids-text>
        </div>
        <slot></slot>
      </span>
    </div>
    `;
    }
};
IdsProcessIndicator = __decorate([
    customElement('ids-process-indicator'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsProcessIndicator);
export default IdsProcessIndicator;
//# sourceMappingURL=ids-process-indicator.js.map