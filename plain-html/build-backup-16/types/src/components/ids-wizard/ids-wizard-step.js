var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from '../../core/ids-decorators';
import Base from './ids-wizard-step-base';
// Note: this component is only used to count steps
// and retrieve attributes via parent for markup for
// simplicity sake and does not actually render it's own markup
/**
 * IDS WizardStep Component
 * @type {IdsWizardStep}
 * @inherits IdsElement
 */
let IdsWizardStep = class IdsWizardStep extends Base {
};
IdsWizardStep = __decorate([
    customElement('ids-wizard-step')
], IdsWizardStep);
export default IdsWizardStep;
//# sourceMappingURL=ids-wizard-step.js.map