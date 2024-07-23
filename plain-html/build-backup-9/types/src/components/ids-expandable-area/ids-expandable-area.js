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
import { EXPANDABLE_AREA_TYPES } from './ids-exandable-area-attributes';
import Base from './ids-exandable-area-base';
import styles from './ids-expandable-area.scss';
export var IdsExpandableAreaExpandStyles;
(function (IdsExpandableAreaExpandStyles) {
    IdsExpandableAreaExpandStyles[IdsExpandableAreaExpandStyles["fixed"] = 0] = "fixed";
    IdsExpandableAreaExpandStyles[IdsExpandableAreaExpandStyles["fill"] = 1] = "fill";
})(IdsExpandableAreaExpandStyles || (IdsExpandableAreaExpandStyles = {}));
/**
 * IDS Expandable Area Component
 * @type {IdsExpandableArea}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsKeyboardMixin
 * @mixes IdsThemeMixin
 * @part container - the main container element
 * @part header - the header element
 * @part pane - the expandable pane element
 * @part pane-content - the expandable pane content
 * @part footer - the footer element
 */
let IdsExpandableArea = class IdsExpandableArea extends Base {
    /**
     * @returns {Array<string>} Expandable area vetoable events
     */
    vetoableEventTypes = ['beforecollapse', 'beforeexpand'];
    expander = null;
    expanderDefault = null;
    expanderExpanded = null;
    pane = null;
    constructor() {
        super();
        this.state = {};
    }
    connectedCallback() {
        super.connectedCallback();
        this.expander = this.shadowRoot?.querySelector('[data-expander]');
        this.expanderDefault = this.shadowRoot?.querySelector('[name="expander-default"]');
        this.expanderExpanded = this.shadowRoot?.querySelector('[name="expander-expanded"]');
        this.pane = this.shadowRoot?.querySelector('.ids-expandable-area-pane');
        this.#attachEventHandlers();
        this.switchState();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            attributes.EXPANDED,
            attributes.EXPAND_STYLE,
            attributes.TYPE
        ];
    }
    /**
     * Set the type
     * @param {string | null} value The Type [null, toggle-btn]
     */
    set type(value) {
        if (value && EXPANDABLE_AREA_TYPES.indexOf(value) !== -1) {
            this.setAttribute(attributes.TYPE, value);
        }
        else {
            this.setAttribute(attributes.TYPE, '');
        }
    }
    get type() { return this.getAttribute(attributes.TYPE); }
    /**
     * Set the expanded property
     * @param {string | boolean | null} value true/false
     */
    set expanded(value) {
        if (value) {
            this.setAttribute(attributes.EXPANDED, String(value));
        }
        else {
            this.setAttribute(attributes.EXPANDED, 'false');
        }
        this.switchState();
    }
    get expanded() {
        return this.getAttribute(attributes.EXPANDED);
    }
    /**
     * Set the expanded property
     * @param {string} value true/false
     */
    set expandStyle(value) {
        if (value !== `${IdsExpandableAreaExpandStyles[0]}`) {
            this.setAttribute(attributes.EXPAND_STYLE, String(value));
        }
        else {
            this.removeAttribute(attributes.EXPAND_STYLE);
        }
        this.switchState();
    }
    get expandStyle() {
        return this.getAttribute(attributes.EXPAND_STYLE) || `${IdsExpandableAreaExpandStyles[0]}`;
    }
    /**
     * The main state switching function
     * @returns {void}
     */
    switchState() {
        const expanded = this.expanded === 'true' || false;
        this.expanderDefault = this.shadowRoot?.querySelector('[name="expander-default"]');
        this.expanderExpanded = this.shadowRoot?.querySelector('[name="expander-expanded"]');
        this.expander?.setAttribute('aria-expanded', String(expanded));
        // Hide/show the text link if default
        if (this.type !== EXPANDABLE_AREA_TYPES[0] && this.expanderDefault && this.expanderExpanded) {
            this.expanderDefault.hidden = expanded;
            this.expanderExpanded.hidden = !expanded;
        }
        if (!expanded) {
            this.collapsePane();
        }
        else {
            this.expandPane();
        }
    }
    /**
     * Collapse the expandable area pane.
     * @private
     * @returns {void}
     */
    collapsePane() {
        if (!this.pane) {
            return;
        }
        const canCollapse = this.triggerVetoableEvent('beforecollapse', this);
        if (!canCollapse) {
            this.expanded = true;
            return;
        }
        if (this.state.expanded) {
            requestAnimationFrame(() => {
                this.triggerEvent('collapse', this, { detail: { elem: this } });
                this.pane?.style.setProperty('height', this.targetExpandedSize());
                this.pane?.style.setProperty('height', `0px`);
            });
        }
        this.state.expanded = false;
    }
    /**
     * Expand the expandable area pane.
     * @private
     * @returns {void}
     */
    expandPane() {
        if (!this.pane) {
            return;
        }
        const canExpand = this.triggerVetoableEvent('beforeexpand', this);
        if (!canExpand) {
            this.expanded = false;
            return;
        }
        if (this.state.expanded === false) {
            requestAnimationFrame(() => {
                this.triggerEvent('expand', this, { detail: { elem: this } });
                this.pane?.style.setProperty('height', this.targetExpandedSize());
            });
        }
        this.state.expanded = true;
    }
    /**
     * @returns {string} containing the value of the pane's `height` css property
     */
    targetExpandedSize() {
        switch (this.expandStyle) {
            case IdsExpandableAreaExpandStyles[1]:
                return `100%`;
            default:
                return `${this.pane?.scrollHeight}px`;
        }
    }
    /**
     * Sets the expanded state attribute
     * @returns {void}
     */
    setAttributes() {
        this.setAttribute(attributes.EXPANDED, this.getAttribute(attributes.EXPANDED) === 'true' ? 'false' : 'true');
    }
    /**
     * Sets up event listeners
     * @private
     * @returns {void}
     */
    #attachEventHandlers() {
        this.onEvent('click', this.expander, () => {
            this.setAttributes();
        });
        this.onEvent('touchstart', this.expander, (e) => {
            if (e.touches && e.touches.length > 0) {
                this.setAttributes();
            }
        }, {
            passive: true
        });
        this.onEvent('transitionend', this.pane, () => {
            const eventOpts = {
                detail: { elem: this }
            };
            if (this.pane?.style.height === '0px') {
                this.triggerEvent('aftercollapse', this, eventOpts);
            }
            else {
                this.triggerEvent('afterexpand', this, eventOpts);
            }
        });
    }
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template() {
        let header = `
      <div class="ids-expandable-area-header" part="header">
        <slot name="header"></slot>
      </div>
    `;
        let pane = `
      <div class="ids-expandable-area-pane" part="pane">
        <div class="expandable-pane-content" part="pane-content">
          <slot name="pane"></slot>
        </div>
      </div>
    `;
        let footer = `
      <div class="ids-expandable-area-footer" part="footer">
        <a class="ids-expandable-area-expander" href="#0" role="button" aria-expanded="false" data-expander="link">
          <slot name="expander-default"></slot>
          <slot name="expander-expanded" hidden></slot>
        </a>
      </div>
    `;
        if (this.type === EXPANDABLE_AREA_TYPES[0]) { // Toggle Button Type
            header = `
        <div class="ids-expandable-area-header" part="header" aria-expanded="false" data-expander="header">
          <slot name="header"></slot>
        </div>
      `;
            footer = '';
        }
        else if (this.type === EXPANDABLE_AREA_TYPES[1]) { // Partial Pane Type
            pane = `
        <div class="ids-expandable-area-visible-pane">
          <div class="expandable-pane-content" part="pane-content">
            <slot name="visible-pane-content"></slot>
          </div>
        </div>
        ${pane}
      `;
        }
        const template = `
      <div class="ids-expandable-area" part="container">
        ${header}
        ${pane}
        ${footer}
      </div>
    `;
        return template;
    }
};
IdsExpandableArea = __decorate([
    customElement('ids-expandable-area'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsExpandableArea);
export default IdsExpandableArea;
//# sourceMappingURL=ids-expandable-area.js.map