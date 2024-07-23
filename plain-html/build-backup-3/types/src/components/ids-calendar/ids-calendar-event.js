var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Base from './ids-calendar-event-base';
import styles from './ids-calendar-event.scss';
import { customElement, scss } from '../../core/ids-decorators';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
import { attributes } from '../../core/ids-attributes';
let IdsCalendarEvent = class IdsCalendarEvent extends Base {
    // Property used to position overlapping events in month view
    #order = 0;
    #cssClass = [];
    #dateKey = '';
    cachedEvent = null;
    cachedEventType = null;
    constructor() {
        super();
    }
    /**
     * Returns array of observed attributes
     * @returns {Array<string>} attribute names
     */
    static get attributes() {
        return [
            ...super.attributes,
            attributes.DISPLAY_TIME,
            attributes.HEIGHT,
            attributes.WIDTH,
            attributes.OVERFLOW,
            attributes.X_OFFSET,
            attributes.Y_OFFSET
        ];
    }
    /**
     * Invoked when ids-calendar-event is added to the DOM
     */
    connectedCallback() {
        super.connectedCallback();
        this.#attachEventHandlers();
        this.setDirection();
        this.refreshContent();
        this.recalc();
    }
    /**
     * Creates template for ids calendar event
     * @returns {string} html
     */
    template() {
        const cssClass = this.#cssClass.join(' ');
        return `
      <a class="ids-calendar-event ${cssClass}" href="#" color="${this.color}">
        ${this.contentTemplate()}
      </a>
    `;
    }
    /**
     * Creates template for calendar event content
     * @returns {string} content html
     */
    contentTemplate() {
        if (!this.eventData)
            return ``;
        const displayTime = this.getDisplayTime();
        const text = this.eventData.shortSubject || this.eventData.subject;
        const tooltip = this.eventData.subject;
        const overflow = this.overflow;
        const icon = this.eventData.icon ? `<ids-icon class="calendar-event-icon" icon="${this.eventData.icon}" height="11" width="11"></ids-icon>` : '';
        return `<div class="calendar-event-content">
      <ids-text class="calendar-event-title" inline font-size="12" overflow="${overflow}" tooltip="${tooltip}">
        ${icon} ${text} ${displayTime}
      </ids-text>
    </div>`;
    }
    /**
     * Attach calendar-event event handlers
     */
    #attachEventHandlers() {
        const triggerFn = (clickType) => {
            this.triggerEvent(`${clickType}-calendar-event`, this, {
                detail: { elem: this },
                bubbles: true,
                cancelable: true,
                composed: true
            });
        };
        this.onEvent('click', this.container, (evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            triggerFn('click');
        });
        this.onEvent('languagechange.calendar-event', this.closest('ids-container'), () => {
            this.refreshContent();
        });
    }
    /**
     * Refreshses calendar event content with current settings
     */
    refreshContent() {
        if (this.container) {
            this.container.innerHTML = this.contentTemplate();
        }
    }
    /**
     * Updates calendar event dimensions and position
     */
    recalc() {
        if (!this.container)
            return;
        // resize
        if (this.height) {
            this.container.style.height = this.height;
        }
        if (this.width) {
            this.container.style.width = this.width;
        }
        // reposition
        if (this.yOffset) {
            this.container.style.top = this.yOffset;
        }
        if (this.locale?.isRTL()) {
            this.container.style.right = this.xOffset || '';
            this.container.style.removeProperty('left');
        }
        else {
            this.container.style.removeProperty('right');
            this.container.style.left = this.xOffset || '';
        }
    }
    /**
     * Creates localized hour range string (ex. 12-5:00pm)
     * @returns {string} localized hour range
     */
    getDisplayTime() {
        if (this.displayTime) {
            const startHours = this.startDate.getHours() + (this.startDate.getMinutes() / 60);
            const endHours = this.endDate.getHours() + (this.startDate.getMinutes() / 60);
            return this.locale?.formatHourRange(startHours, endHours, {});
        }
        return '';
    }
    /**
     * Sets calendar event data
     * @param {CalendarEventData} data Event data
     */
    set eventData(data) {
        this.cachedEvent = data ?? null;
        if (data)
            this.setAttribute('data-id', data.id);
        this.refreshContent();
    }
    /**
     * Gets calendar event data
     * @returns {CalendarEventData} Event data
     */
    get eventData() {
        return this.cachedEvent;
    }
    /**
     * Sets calendar event type
     * @param {CalendarEventTypeData} data Event type
     */
    set eventTypeData(data) {
        this.cachedEventType = data ?? null;
        // update cached event data
        if (this.cachedEvent && data?.id) {
            this.cachedEvent.type = data?.id;
        }
        if (data?.color) {
            this.container?.setAttribute('color', data?.color);
        }
        else {
            this.container?.removeAttribute('color');
        }
    }
    /**
     * Gets calendar event type
     * @returns {CalendarEventTypeData} Event type
     */
    get eventTypeData() {
        return this.cachedEventType;
    }
    /**
     * Sets top style of calendar event
     * @param {string | null} value css top value
     */
    set yOffset(value) {
        if (value) {
            this.setAttribute(attributes.Y_OFFSET, value);
        }
        else {
            this.removeAttribute(attributes.Y_OFFSET);
        }
        this.recalc();
    }
    /**
     * Gets y offset
     * @returns {string | null} yOffset value
     */
    get yOffset() {
        return this.getAttribute(attributes.Y_OFFSET);
    }
    /**
     * Sets horizontal position of calendar event
     * Styles left or right depending on rtl flag
     * @param {string | null} value css left/right value
     */
    set xOffset(value) {
        if (value) {
            this.setAttribute(attributes.X_OFFSET, value);
        }
        else {
            this.removeAttribute(attributes.X_OFFSET);
        }
        this.recalc();
    }
    /**
     * @returns {string | null} xOffset value
     */
    get xOffset() {
        return this.getAttribute(attributes.X_OFFSET);
    }
    /**
     * Sets height of calendar event (Defaults to 20px)
     * @param {string | null} value css height value
     */
    set height(value) {
        if (value) {
            this.setAttribute(attributes.HEIGHT, value);
        }
        else {
            this.removeAttribute(attributes.HEIGHT);
        }
        this.recalc();
    }
    /**
     * Gets height
     * @returns {string | null} height value
     */
    get height() {
        return this.getAttribute(attributes.HEIGHT);
    }
    /**
     * Sets width of calendar event (Defaults to width of container)
     * @param {string | null} value css width value
     */
    set width(value) {
        if (value) {
            this.setAttribute(attributes.WIDTH, value);
        }
        else {
            this.removeAttribute(attributes.WIDTH);
        }
        this.recalc();
    }
    /**
     * Gets width
     * @returns {string | null} width value
     */
    get width() {
        return this.getAttribute(attributes.WIDTH);
    }
    /**
     * Sets extra css classes to calendar event
     * @param {Array<string>} value array of css classes
     */
    set cssClass(value) {
        this.#cssClass = this.#cssClass.concat(value);
        this.container?.classList.add(...value);
    }
    /**
     * Gets start date of calendar event
     * @returns {Date} start date
     */
    get startDate() {
        return new Date(this.cachedEvent?.starts ?? '');
    }
    /**
     * Gets end date of calendar event
     * @returns {Date} end date
     */
    get endDate() {
        return new Date(this.cachedEvent?.ends ?? '');
    }
    /**
     * Gets duration of event in hours
     * @returns {number} duration in hours
     */
    get duration() {
        const hoursInMs = (1000 * 60 * 60);
        return (this.endDate.getTime() - this.startDate.getTime()) / hoursInMs;
    }
    /**
     * Sets whether hour range should be displayed in content
     * @param {string | boolean} value shows hour range if true
     */
    set displayTime(value) {
        if (stringToBool(value)) {
            this.setAttribute('display-time', '');
        }
        else {
            this.removeAttribute('display-time');
        }
        this.refreshContent();
    }
    /**
     * Gets displayTime setting value
     * @returns {boolean} return true if displayTime is set
     */
    get displayTime() {
        return this.hasAttribute('display-time');
    }
    /**
     * Sets overflow type for IdsText
     * @param {string} value Overflow values for IdsText
     */
    set overflow(value) {
        this.setAttribute(attributes.OVERFLOW, value ?? 'ellipsis');
        this.refreshContent();
    }
    /**
     * Gets overflow value of IdsText
     * @returns {string} IdsText overflow setting value
     */
    get overflow() {
        return this.getAttribute(attributes.OVERFLOW) || 'ellipsis';
    }
    /**
     * Sets order property
     * @param {number} val order number
     */
    set order(val) {
        this.#order = val;
    }
    /**
     * Gets order property
     * @returns {number} order number
     */
    get order() {
        return this.#order;
    }
    /**
     * Gets color property from event type data
     * @returns {string} color
     */
    get color() {
        return this.eventTypeData?.color || 'azure';
    }
    /**
     * Sets dateKey property
     * @param {string} val dateKey string
     */
    set dateKey(val) {
        this.#dateKey = val;
    }
    /**
     * Gets dateKey property
     * @returns {string} dateKey string
     */
    get dateKey() {
        return this.#dateKey;
    }
};
IdsCalendarEvent = __decorate([
    customElement('ids-calendar-event'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsCalendarEvent);
export default IdsCalendarEvent;
//# sourceMappingURL=ids-calendar-event.js.map