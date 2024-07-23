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
import { attributes } from '../../core/ids-attributes';
import Base from './ids-tabs-context-base';
import './ids-tab-content';
import styles from './ids-tabs.scss';
/**
 * IDS Tabs Context Component
 * @type {IdsTabsContext}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @part container - the container of all tabs
 */
let IdsTabsContext = class IdsTabsContext extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.onEvent('tabselect', this, (e) => {
            e.stopPropagation();
            this.value = e.target.value;
        });
        // On `tabremove` events, remove a tab's corresponding content pane
        this.onEvent('tabremove', this, (e) => {
            e.stopPropagation();
            const content = this.querySelector(`ids-tab-content[value="${e.detail.value}"]`);
            content?.remove();
        });
        this.#afterConnectedCallback();
    }
    #afterConnectedCallback() {
        this.value = this.querySelector('[selected]')?.value ?? null;
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.VALUE
        ];
    }
    template() {
        return '<slot></slot>';
    }
    /** @param {string} value The value representing a currently selected tab */
    set value(value) {
        const currentValue = this.getAttribute(attributes.VALUE);
        if (currentValue !== value) {
            this.setAttribute(attributes.VALUE, String(value));
            this.#changeContentPane(currentValue, value);
        }
    }
    get value() {
        return this.getAttribute(attributes.VALUE);
    }
    /**
     * Switches the "Active" content pane associated with this Tabs Context
     * @param {string} currentValue the value of the current pane, used to make it inactive
     * @param {string} newValue the value of the new pane, used to make it active
     */
    #changeContentPane(currentValue, newValue) {
        const contentPanes = [...this.querySelectorAll('ids-tab-content')];
        const currentPane = contentPanes.find((el) => el.value === currentValue);
        const targetPane = contentPanes.find((el) => el.value === newValue);
        if (currentPane)
            currentPane.active = false;
        if (targetPane)
            targetPane.active = true;
    }
};
IdsTabsContext = __decorate([
    customElement('ids-tabs-context'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsTabsContext);
export default IdsTabsContext;
//# sourceMappingURL=ids-tabs-context.js.map