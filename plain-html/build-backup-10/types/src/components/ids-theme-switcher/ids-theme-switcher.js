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
import Base from './ids-theme-switcher-base';
import '../ids-menu-button/ids-menu-button';
import styles from './ids-theme-switcher.scss';
/**
 * IDS Theme Switcher Component
 */
let IdsThemeSwitcher = class IdsThemeSwitcher extends Base {
    popup;
    menuButton;
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.popup = this.shadowRoot?.querySelector('ids-popup-menu');
        this.menuButton = this.shadowRoot?.querySelector('ids-menu-button');
        this.menuButton?.configureMenu();
        this.#attachEventHandlers();
    }
    disconnectedCallback() {
        this.popup = null;
        this.menuButton = null;
        this.container = null;
        super.disconnectedCallback();
    }
    /**
     * Establish Internal Event Handlers
     * @private
     */
    #attachEventHandlers() {
        this.onEvent('selected.themeswitcher', this.popup, (e) => {
            const val = e.detail.elem.value;
            if (val === 'light' || val === 'dark' || val === 'contrast') {
                this.mode = val;
            }
            if (val?.indexOf('-') > -1) {
                if (this.locale)
                    this.locale.setLocale(val);
                document.querySelector('ids-container').setLocale(val);
            }
        });
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        return `<ids-menu-button id="ids-theme-switcher" menu="ids-theme-menu" color-variant="${this.colorVariant}" icon="more">
      <span class="audible">Theme Switcher</span>
    </ids-menu-button>
    <ids-popup-menu id="ids-theme-menu" target="#ids-theme-switcher" trigger-type="click">
      ${this.menuTemplate()}
    </ids-popup-menu>`;
    }
    /**
     * Create the popup part of the template for the contents
     * @returns {string} The template
     */
    menuTemplate() {
        return `<ids-menu-group>
    <ids-menu-item>
      <ids-text translate-text="true">Mode</ids-text>
        <ids-popup-menu>
          <ids-menu-group select="single">
            <ids-menu-item selected="true" value="light">
              <ids-text translate-text="true">Light</ids-text>
              </ids-menu-item>
            <ids-menu-item value="dark">
              <ids-text translate-text="true">Dark</ids-text>
            </ids-menu-item>
            <ids-menu-item value="contrast">
              <ids-text translate-text="true">Contrast</ids-text>
            </ids-menu-item>
          </ids-menu-group>
        </ids-popup-menu>
      </ids-menu-item>
      <ids-menu-item>
        <ids-text translate-text="true">Locale</ids-text>
        <ids-popup-menu>
          <ids-menu-group select="single" id="locale-menu">
            <ids-menu-item selected="true" value="en-US">
              <ids-text translate-text="true">English</ids-text>
              <ids-text>(en-US)</ids-text>
            </ids-menu-item>
            <ids-menu-item value="de-DE">
              <ids-text translate-text="true">German</ids-text>
              <ids-text>(de-DE)</ids-text>
            </ids-menu-item>
            <ids-menu-item value="uk-UA">
              <ids-text translate-text="true">Ukrainian</ids-text>
              <ids-text>(uk-UA)</ids-text>
            </ids-menu-item>
            <ids-menu-item value="bg-BG">
              <ids-text translate-text="true">Bulgarian</ids-text>
              <ids-text>(bg-BG)</ids-text>
            </ids-menu-item>
            <ids-menu-item value="he-IL">
              <ids-text translate-text="true">Hebrew</ids-text>
              <ids-text>(he-IL)</ids-text>
            </ids-menu-item>
            <ids-menu-item value="ar-EG">
              <ids-text translate-text="true">Arabic</ids-text>
              <ids-text>(ar-EG)</ids-text>
            </ids-menu-item>
            <ids-menu-item value="th-TH">
              <ids-text translate-text="true">Thai</ids-text>
              <ids-text>(th-TH)</ids-text>
            </ids-menu-item>
            <ids-menu-item value="zh-Hans">
              <ids-text translate-text="true">Chinese</ids-text>
              <ids-text>(zh-Hans)</ids-text>
            </ids-menu-item>
          </ids-menu-group>
        </ids-popup-menu>
      </ids-menu-item>
    </ids-menu-group>`;
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [...super.attributes, attributes.LANGUAGE, attributes.MODE];
    }
    /**
     * Inherited from `IdsColorVariantMixin`
     * @returns {Array<string>} List of available color variants for this component
     */
    colorVariants = ['alternate'];
    /**
     * Set the mode of the current theme
     * @param {string} value The mode value for example: light, dark, or high-contrast
     */
    set mode(value) {
        if (value) {
            this.setAttribute('mode', value);
            this.triggerEvent('themechanged', this, { detail: { elem: this, mode: value } });
            return;
        }
        this.removeAttribute('mode');
    }
    get mode() { return this.getAttribute('mode') || 'light'; }
    /**
     * Implements callback from IdsColorVariantMixin used to
     * update the color variant setting on children components
     */
    onColorVariantRefresh() {
        // Updates the inner menu button's color variant, which should match the theme switcher's
        this.container?.setAttribute(attributes.COLOR_VARIANT, this.colorVariant);
    }
};
IdsThemeSwitcher = __decorate([
    customElement('ids-theme-switcher'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsThemeSwitcher);
export default IdsThemeSwitcher;
//# sourceMappingURL=ids-theme-switcher.js.map