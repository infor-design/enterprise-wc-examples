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
// Import Mixins
import Base from './ids-splitter-base';
import styles from './ids-splitter-pane.scss';
/**
 * IDS SplitterPane Component
 * @type {IdsSplitterPane}
 * @inherits IdsElement
 * @mixes IdsEventsMixin
 * @mixes IdsLocaleMixin
 * @mixes IdsThemeMixin
 * @part pane - the splitter pane container element
 */
let IdsSplitterPane = class IdsSplitterPane extends Base {
    constructor() {
        super();
    }
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [...super.attributes];
    }
    /**
     * Create the Template for the contents
     * @returns {string} The template
     */
    template() {
        return `<div class="ids-splitter-pane" part="pane"><slot></slot></div>`;
    }
    /**
     * Invoked each time the custom element is appended into a document-connected element.
     */
    connectedCallback() {
        super.connectedCallback();
    }
};
IdsSplitterPane = __decorate([
    customElement('ids-splitter-pane'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsSplitterPane);
export default IdsSplitterPane;
//# sourceMappingURL=ids-splitter-pane.js.map