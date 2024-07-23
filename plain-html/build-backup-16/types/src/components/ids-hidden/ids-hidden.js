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
import { isWidthBelow, isWidthAbove } from '../../utils/ids-breakpoint-utils/ids-breakpoint-utils';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
import Base from './ids-hidden-base';
import styles from './ids-hidden.scss';
/**
 * IDS Hidden Component
 * @type {IdsHidden}
 * @inherits IdsElement
 */
let IdsHidden = class IdsHidden extends Base {
    constructor() {
        super();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array<string>} The attributes in an array
     */
    static get attributes() {
        return [
            attributes.CONDITION,
            attributes.HIDE_UP,
            attributes.HIDE_DOWN,
            attributes.VALUE,
            attributes.VISIBLE,
        ];
    }
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template() {
        return `<slot part="children"></slot>`;
    }
    /**
     * Sets the max-width breakpoint
     * @param {string} val xxl | xl | lg | md | sm | xs
     * @memberof IdsHidden
     */
    set hideDown(val) {
        if (val) {
            const mqUp = isWidthBelow(val);
            this.setAttribute(attributes.HIDE_DOWN, String(val));
            mqUp.addEventListener('change', () => {
                this.checkScreen(mqUp);
            });
            this.checkScreen(mqUp);
        }
        else {
            this.removeAttribute(attributes.HIDE_DOWN);
        }
    }
    /**
     * Get the hideDown attribute
     * @returns {string} hideDown
     * @readonly
     * @memberof IdsHidden
     */
    get hideDown() {
        return this.getAttribute(attributes.HIDE_DOWN);
    }
    /**
     * Sets the min-width breakpoint
     * @param {string} val xxl | xl | lg | md | sm | xs
     * @memberof IdsHidden
     */
    set hideUp(val) {
        if (val) {
            const mqUp = isWidthAbove(val);
            this.setAttribute(attributes.HIDE_UP, String(val));
            mqUp.addEventListener('change', () => {
                this.checkScreen(mqUp);
            });
            this.checkScreen(mqUp);
        }
        else {
            this.removeAttribute(attributes.HIDE_UP);
        }
    }
    /**
     * Get the hideUp attribute
     * @returns {string} hideUp
     * @readonly
     * @memberof IdsHidden
     */
    get hideUp() {
        return this.getAttribute(attributes.HIDE_UP);
    }
    /**
     * Set the visible attribute
     * @param {boolean} val of the visible attribute
     * @memberof IdsHidden
     */
    set visible(val) {
        const isValTruthy = stringToBool(val);
        if (isValTruthy) {
            this.setAttribute(attributes.VISIBLE, 'true');
            this.hidden = false;
        }
        else {
            this.removeAttribute(attributes.VISIBLE);
            this.hidden = true;
        }
    }
    /**
     * Get the visible attribute
     * @returns {boolean} visible
     * @readonly
     * @memberof IdsHidden
     */
    get visible() {
        return this.getAttribute(attributes.VISIBLE);
    }
    /**
     * Set the compare condition
     * @param {string} val the value to compare
     * @memberof IdsHidden
     */
    set condition(val) {
        if (val) {
            this.setAttribute(attributes.CONDITION, String(val));
        }
        else {
            this.removeAttribute(attributes.CONDITION);
        }
        this.checkCompare();
    }
    /**
     * Get the compare condition
     * @returns {boolean} visible
     * @readonly
     * @memberof IdsHidden
     */
    get condition() {
        return this.getAttribute(attributes.CONDITION);
    }
    /**
     * Set the compare value
     * @param {boolean} val the value to compare
     * @memberof IdsHidden
     */
    set value(val) {
        if (val) {
            this.setAttribute(attributes.VALUE, String(val === 'undefined' ? '' : val));
        }
        else {
            this.removeAttribute(attributes.VALUE);
        }
        this.checkCompare();
    }
    /**
     * Get the compare value
     * @returns {string} the value to compare
     * @readonly
     * @memberof IdsHidden
     */
    get value() {
        return this.getAttribute(attributes.VALUE);
    }
    /**
     * Check the screen size
     * @param {MediaQueryList} mq media query to check against
     * @memberof IdsHidden
     */
    checkScreen(mq) {
        if (mq.matches) {
            this.hidden = true;
            this.removeAttribute('visible');
        }
        else {
            this.removeAttribute('hidden');
            this.setAttribute('visible', 'true');
        }
    }
    /**
     * Check value agains the comparison
     * @memberof IdsHidden
     */
    checkCompare() {
        let condition = this.condition;
        let value = this.value;
        let isMatch = false;
        value = value === 'undefined' ? '' : value;
        if (condition === 'false' || condition === 'true') {
            condition = stringToBool(condition);
            value = (value === 'false' || value === 'true') ? stringToBool(value) : value;
            if (condition && value) {
                isMatch = true;
            }
            if (!condition && !value) {
                isMatch = true;
            }
        }
        else {
            isMatch = this.value === this.condition;
        }
        if (isMatch) {
            this.hidden = true;
            this.removeAttribute('visible');
        }
        else {
            this.removeAttribute('hidden');
            this.setAttribute('visible', 'true');
        }
    }
};
IdsHidden = __decorate([
    customElement('ids-hidden'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsHidden);
export default IdsHidden;
//# sourceMappingURL=ids-hidden.js.map