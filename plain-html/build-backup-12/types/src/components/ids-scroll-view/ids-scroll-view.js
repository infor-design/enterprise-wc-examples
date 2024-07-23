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
import Base from './ids-scroll-view-base';
import styles from './ids-scroll-view.scss';
/**
 * IDS Scroll View Component
 * @type {IdsScrollView}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsThemeMixin
 * @mixes IdsKeyboardMixin
 * @part container - the parent container element
 * @part scroll-view - the scrolling container
 * @part controls - the control button area
 * @part button - the individual circle buttons in the scroll view
 */
let IdsScrollView = class IdsScrollView extends Base {
    controls = null;
    constructor() {
        super();
        this.isClick = false;
    }
    static get attributes() {
        return [
            ...super.attributes,
            attributes.MODE
        ];
    }
    /**
     * Invoked each time the custom element is add into a document-connected element
     */
    connectedCallback() {
        super.connectedCallback();
        this.controls = this.shadowRoot?.querySelector('.ids-scroll-view-controls');
        this.#renderButtons();
        this.#attachEventHandlers();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    /**
     * Create the template for the contents
     * @returns {string} The template
     */
    template() {
        return `<div class="ids-scroll-view-container" part="container">
        <div class="ids-scroll-view" part="scroll-view" role="complementary" tabindex="-1">
          <slot name="scroll-view-item"></slot>
        </div>
        <div class="ids-scroll-view-controls" part="controls" role="tablist">
        </div>
    </div>`;
    }
    isClick;
    /**
     * Handle events in this case set the selected state
     * @private
     * @returns {void}
     */
    #attachEventHandlers() {
        // Set selected state on click
        this.onEvent('click', this.controls, (event) => {
            if (event.target.nodeName !== 'A') {
                return;
            }
            this.#activateLink(event.target, true);
            this.isClick = true;
        });
        // handle arrow keys
        this.listen(['ArrowLeft', 'ArrowRight', 'Enter'], this.controls, (e) => {
            const selected = this.controls?.querySelector('.selected');
            this.isClick = false;
            if (e.key === 'ArrowRight' && selected?.nextElementSibling) {
                this.container?.scrollBy(this.container.offsetWidth, 0);
                this.#activateLink(selected.nextElementSibling, true);
                return;
            }
            if (e.key === 'ArrowLeft' && selected?.previousElementSibling) {
                this.container?.scrollBy(-this.container.offsetWidth, 0);
                this.#activateLink(selected.previousElementSibling, true);
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
            }
        });
        this.offEvent('touchstart.scroll-view-touch');
        this.onEvent('touchstart.scroll-view-touch', this.container, () => {
            // Reset the property so the controls can be updated when swipe
            this.isClick = false;
        });
        // Set selected state on scroll/swipe
        this.querySelectorAll('[slot]').forEach((elem, i) => {
            const scrollViewIndex = i;
            const observer = new IntersectionObserver((entries) => {
                const elemToCheck = entries[0];
                if (elemToCheck.isIntersecting && !this.isClick) {
                    this.#activateLink(this.controls?.querySelectorAll('a')[scrollViewIndex], true);
                }
            }, { threshold: 0.55 });
            observer.observe(elem);
        });
    }
    /**
     * Activate the circle button
     * @private
     * @param {HTMLElement} elem The next selected element
     * @param {boolean} focus The next selected element
     */
    #activateLink(elem, focus = false) {
        const selected = this.controls?.querySelector('.selected');
        selected?.classList.remove('selected');
        selected?.setAttribute('tabindex', '-1');
        selected?.removeAttribute('aria-selected');
        elem.classList.add('selected');
        elem.setAttribute('tabindex', '0');
        elem.setAttribute('aria-selected', 'true');
        if (focus) {
            elem.focus();
        }
    }
    /**
     * Render the circle button
     * @private
     */
    #renderButtons() {
        const items = this.querySelectorAll('[slot]');
        items.forEach((item, i) => {
            const id = `id-${i}`;
            item.id = id;
            this.controls?.insertAdjacentHTML('beforeend', `<a ${i === 0 ? ' class="selected"' : ''} href="#${id}" part="button" tabindex="${i === 0 ? '0' : '-1'}" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}"><span class="audible">${item.getAttribute('alt')}</span></a>`);
        });
    }
};
IdsScrollView = __decorate([
    customElement('ids-scroll-view'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsScrollView);
export default IdsScrollView;
//# sourceMappingURL=ids-scroll-view.js.map