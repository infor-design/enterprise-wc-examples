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
import Base from './ids-badge-base';
import styles from './ids-badge.scss';
/**
 * IDS Badge Component
 * @type {IdsBadge}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @part badge - the badge element
 */
let IdsBadge = class IdsBadge extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.color)
            this.color = this.getAttribute('color');
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attribute in an array
     */
    static get attributes() {
        return [
            attributes.COLOR,
            attributes.MODE,
            attributes.SHAPE
        ];
    }
    /**
     * Create the Template for the contents
     * @returns {string} The Template
     */
    template() {
        return `<span class="ids-badge ${this.shape}" part="badge"><slot></slot></span>`;
    }
    /**
     * Return the badge shape between normal and round
     * @returns {string} The path data
     */
    get shape() {
        return this.getAttribute('shape') || 'normal';
    }
    /**
     * Set the shape of the badge
     * @param {string} value The Badge Shape
     */
    set shape(value) {
        if (value) {
            this.setAttribute('shape', value.toString());
        }
        else {
            this.removeAttribute('shape');
        }
        this.container?.classList.remove('normal', 'round');
        this.container?.classList.add(this.shape);
    }
    /**
     * Return the badge color
     * @returns {string | null} the path data
     */
    get color() {
        return this.getAttribute('color');
    }
    /**
     * Set the color
     * @param {string | null} value The Badge Color [base, error, info, success and warning]
     */
    set color(value) {
        if (value) {
            this.setAttribute('color', value);
            this.container?.setAttribute('color', value);
            if (value === 'error' || value === 'info' || value === 'warning') {
                this.container?.classList.add('ids-white');
            }
        }
        else {
            this.removeAttribute('color');
            if (this.container) {
                this.container?.removeAttribute('color');
                this.container.style.backgroundColor = '';
                this.container.style.borderColor = '';
                this.container.style.color = '';
                this.container.style.position = '';
            }
        }
    }
};
IdsBadge = __decorate([
    customElement('ids-badge'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsBadge);
export default IdsBadge;
//# sourceMappingURL=ids-badge.js.map