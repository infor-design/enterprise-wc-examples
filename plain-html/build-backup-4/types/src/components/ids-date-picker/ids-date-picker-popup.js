var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { attributes, htmlAttributes } from '../../core/ids-attributes';
import { customElement, scss } from '../../core/ids-decorators';
import Base from './ids-date-picker-popup-base';
import { subtractDate, isValidDate, hoursTo24, removeDateRange } from '../../utils/ids-date-utils/ids-date-utils';
import { stringToBool, stringToNumber } from '../../utils/ids-string-utils/ids-string-utils';
import { IdsDatePickerCommonAttributes, } from './ids-date-picker-common';
// Components
import './ids-month-year-picklist';
import '../ids-button/ids-button';
import '../ids-modal-button/ids-modal-button';
import '../ids-expandable-area/ids-expandable-area';
import '../ids-month-view/ids-month-view';
import '../ids-text/ids-text';
import '../ids-time-picker/ids-time-picker';
import '../ids-toggle-button/ids-toggle-button';
import '../ids-toolbar/ids-toolbar';
import '../ids-toolbar/ids-toolbar-section';
import styles from './ids-date-picker-popup.scss';
/**
 * IDS Date Picker Popup Component
 * @type {IdsDatePickerPopup}
 * @inherits IdsPickerPopup
 * @mixes IdsDateAttributeMixin
 * @mixes IdsLocaleMixin
 * @mixes IdsMonthViewAttributeMixin
 */
let IdsDatePickerPopup = class IdsDatePickerPopup extends Base {
    constructor() {
        super();
        this.#value = '';
    }
    expandableArea;
    monthView;
    monthYearPicklist;
    timepicker;
    toolbar;
    connectedCallback() {
        super.connectedCallback();
        this.configureComponents();
        this.attachEventListeners();
        this.attachExpandedListener();
    }
    disconnectedCallback() {
        super.disconnectedCallback?.();
        this.expandableArea = null;
        this.monthView = null;
        this.monthYearPicklist = null;
        this.timepicker = null;
        this.toolbar = null;
    }
    static get attributes() {
        return [
            ...super.attributes,
            ...IdsDatePickerCommonAttributes,
            attributes.EXPANDED
        ];
    }
    /**
     * Inner template contents
     * @returns {string} The template
     */
    template() {
        return `<ids-popup class="ids-date-picker-popup" type="menu" align="bottom, left" arrow="bottom" tabIndex="-1" y="12" animated>
      <slot slot="content" name="toolbar">
        ${this.toolbarTemplate()}
      </slot>
      <div class="ids-date-picker-content" slot="content">
        <ids-expandable-area
          expand-style="fill"
          expanded="${this.expanded}"
        >
          <ids-month-year-picklist
            slot="pane"
            ${this.showPicklistYear ? 'show-picklist-year="true"' : ''}></ids-month-year-picklist>
        </ids-expandable-area>
        <ids-month-view
          compact="true"
          is-date-picker="true"
          show-today=${this.showToday}
          first-day-of-week="${this.firstDayOfWeek}"
          year="${this.year}"
          month="${this.month}"
          day="${this.day}"
          use-range="${this.useRange}"
        ></ids-month-view>
      ${this.hasTime() ? this.timepickerTemplate() : ''}
      </div>
      <div
        slot="content"
        class="popup-footer"
        part="footer">
        <ids-modal-button class="popup-btn popup-btn-cancel" cancel ${this.showCancel ? '' : ' hidden'}>
          <ids-text translate-text="true" font-weight="bold" part="btn-cancel">Cancel</ids-text>
        </ids-modal-button>
        <ids-modal-button class="popup-btn popup-btn-clear" part="btn-clear" ${this.showClear ? '' : ' hidden'}>
          <ids-text translate-text="true" font-weight="bold">Clear</ids-text>
        </ids-modal-button>
        <ids-modal-button class="popup-btn popup-btn-apply"${this.useRange || this.expanded ? ' disabled' : ' hidden'} part="btn-apply" type="primary">
          <ids-text translate-text="true" font-weight="bold">Apply</ids-text>
        </ids-modal-button>
      </div>
    </ids-popup>`;
    }
    /**
     * @returns {string} containing the inner Timepicker's template
     */
    timepickerTemplate() {
        return `
      <ids-time-picker
        embeddable="true"
        value="${this.value}"
        format="${this.format}"
        minute-interval="${this.minuteInterval}"
        second-interval="${this.secondInterval}"
        use-current-time="${this.useCurrentTime}"
      ></ids-time-picker>
    `;
    }
    /**
     * @returns {string} containing the inner Toolbar's template
     */
    toolbarTemplate() {
        const prevNextBtn = `<ids-button class="btn-previous">
      <ids-text audible="true" translate-text="true">PreviousMonth</ids-text>
      <ids-icon icon="chevron-left"></ids-icon>
    </ids-button>
    <ids-button class="btn-next">
      <ids-text audible="true" translate-text="true">NextMonth</ids-text>
      <ids-icon icon="chevron-right"></ids-icon>
    </ids-button>`;
        const todayBtn = this.showToday ? `<ids-button css-class="no-padding" class="btn-today">
      <ids-text
        class="btn-today-text"
        font-size="16"
        translate-text="true"
        font-weight="bold"
      >Today</ids-text>
    </ids-button>` : '';
        return `<ids-toolbar class="month-view-header" tabbable="true">
      <ids-toolbar-section favor>
        <ids-toggle-button id="month-year-view-trigger" icon-off="dropdown" icon-on="dropdown" icon="dropdown" icon-align="end" no-padding class="dropdown-btn">
          <ids-text audible="true" translate-text="true">DatePickerTriggerButton</ids-text>
          <ids-text class="dropdown-btn-text" font-size="20">${this.formatMonthText()}</ids-text>
          <ids-icon icon="dropdown" class="dropdown-btn-icon"></ids-icon>
        </ids-toggle-button>
      </ids-toolbar-section>
      <ids-toolbar-section class="toolbar-buttonset monthview-nav" align="end" type="fluid"${this.expanded ? ' inactive' : ''}>
        ${todayBtn}
        ${prevNextBtn}
      </ids-toolbar-section>
    </ids-toolbar>`;
    }
    /**
     * @returns {Array<string>} Date Picker vetoable events
     */
    vetoableEventTypes = ['beforeshow'];
    /**
     * @readonly
     * @returns {NodeList<IdsDatePickerPopupButton>} containing all buttons in the Date Picker Popup
     */
    get buttons() {
        return this.container?.querySelectorAll('ids-button, ids-modal-button, ids-toggle-button');
    }
    /**
     * show-today attribute
     * @returns {boolean} showToday param converted to boolean from attribute value
     */
    get showToday() {
        const attrVal = this.getAttribute(attributes.SHOW_TODAY);
        // true by default if no attribute
        return attrVal !== null ? stringToBool(attrVal) : true;
    }
    /**
     * Set whether or not month view today button should be show
     * @param {string|boolean|null} val show-today attribute value
     */
    set showToday(val) {
        const doShow = stringToBool(val);
        if (doShow) {
            this.setAttribute(attributes.SHOW_TODAY, 'true');
            this.todayBtnEl?.removeAttribute(attributes.HIDDEN);
        }
        else {
            this.setAttribute(attributes.SHOW_TODAY, 'false');
            this.todayBtnEl?.setAttribute(attributes.HIDDEN, 'true');
        }
    }
    onFirstDayOfWeekChange(newValue) {
        this.monthView?.setAttribute(attributes.FIRST_DAY_OF_WEEK, `${newValue}`);
        this.monthYearPicklist?.setAttribute(attributes.FIRST_DAY_OF_WEEK, `${newValue}`);
    }
    onMonthChange(newValue, isValid) {
        if (isValid) {
            this.monthView?.setAttribute(attributes.MONTH, `${newValue}`);
            this.monthYearPicklist?.setAttribute(attributes.MONTH, `${newValue}`);
        }
        else {
            this.monthView?.removeAttribute(attributes.MONTH);
            this.monthYearPicklist?.removeAttribute(attributes.MONTH);
        }
    }
    onYearChange(newValue, isValid) {
        if (isValid) {
            this.monthView?.setAttribute(attributes.YEAR, `${newValue}`);
            this.monthYearPicklist?.setAttribute(attributes.MONTH, `${newValue}`);
        }
        else {
            this.monthView?.removeAttribute(attributes.YEAR);
            this.monthYearPicklist?.removeAttribute(attributes.YEAR);
        }
    }
    onDayChange(newValue, isValid) {
        if (isValid) {
            this.monthView?.setAttribute(attributes.DAY, `${newValue}`);
            this.monthYearPicklist?.setAttribute(attributes.DAY, `${newValue}`);
        }
        else {
            this.monthView?.removeAttribute(attributes.DAY);
            this.monthYearPicklist?.removeAttribute(attributes.DAY);
        }
    }
    onFormatChange() {
        if (!this.container)
            return;
        if (this.monthView)
            this.monthView.format = this.format;
        if (this.timepicker)
            this.timepicker.format = this.format;
        this.updateTimepickerDisplay();
    }
    /**
     * @param {IdsLocale} locale the new locale object
     */
    onLocaleChange = (locale) => {
        this.updateMonthYearPickerTriggerDisplay(locale);
    };
    hideIfAble() {
        if (!this.expanded && this.popup?.visible) {
            this.hide();
        }
    }
    get applyBtnEl() {
        return this.container?.querySelector('.popup-btn-apply');
    }
    get cancelBtnEl() {
        return this.container?.querySelector('.popup-btn-cancel');
    }
    get todayBtnEl() {
        return this.container?.querySelector('.btn-today');
    }
    /**
     * expanded attribute
     * @returns {boolean} whether the month/year picker expanded or not
     */
    get expanded() {
        return stringToBool(this.getAttribute(attributes.EXPANDED));
    }
    /**
     * Set whether or not the month/year picker should be expanded
     * @param {string|boolean|null} val expanded attribute value
     */
    set expanded(val) {
        const boolVal = stringToBool(val);
        if (boolVal) {
            this.setAttribute(attributes.EXPANDED, `${boolVal}`);
            this.expandableArea?.setAttribute(attributes.EXPANDED, `${boolVal}`);
            this.toolbar?.querySelector('.monthview-nav')?.setAttribute(attributes.INACTIVE, 'true');
        }
        else {
            this.removeAttribute(attributes.EXPANDED);
            this.expandableArea?.removeAttribute(attributes.EXPANDED);
            this.toolbar?.querySelector('.monthview-nav')?.removeAttribute(attributes.INACTIVE);
        }
    }
    onDisableSettingsChange(val) {
        if (this.monthView)
            this.monthView.disableSettings = val;
    }
    onLegendSettingsChange(val) {
        if (this.monthView)
            this.monthView.legend = val;
    }
    /**
     * Defer to the inner IdsMonthView for getting `rangeSettings` if possible
     * @returns {IdsRangeSettings} month view range settings
     */
    getRangeSettings() {
        return this.monthView?.rangeSettings || this.rangeSettings;
    }
    /**
     * Defer to the inner IdsMonthView for storing `rangeSettings` if possible
     * @param {IdsRangeSettings} val incoming range settings
     */
    setRangeSettings(val) {
        if (this.monthView)
            this.monthView.rangeSettings = val;
        else
            this.rangeSettings = val;
    }
    onRangeSettingsChange(val) {
        if (this.monthView) {
            const btnApply = this.applyBtnEl;
            this.setRangeSettings(val);
            if (val?.start && val?.end) {
                const formattedStart = this.locale.formatDate(this.setTime(val.start), { pattern: this.format });
                const formattedEnd = this.locale.formatDate(this.setTime(val.end), { pattern: this.format });
                this.value = `${formattedStart}${val.separator}${formattedEnd}`;
                if (!val.selectWeek)
                    btnApply?.removeAttribute(attributes.DISABLED);
            }
            else {
                if (val?.separator && this.value.indexOf(val?.separator) > -1) {
                    this.value = removeDateRange(this.value, val?.separator);
                }
                btnApply?.setAttribute(attributes.DISABLED, 'true');
            }
            if (val?.selectWeek) {
                btnApply?.setAttribute(attributes.HIDDEN, 'true');
            }
        }
    }
    /**
     * minute-interval attribute
     * @returns {number} minuteInterval value
     */
    get minuteInterval() {
        return stringToNumber(this.getAttribute(attributes.MINUTE_INTERVAL));
    }
    /**
     * Set interval in minutes dropdown
     * @param {string|number|null} val minute-interval attribute value
     */
    set minuteInterval(val) {
        const numberVal = stringToNumber(val);
        const timePicker = this.container?.querySelector('ids-time-picker');
        if (numberVal) {
            this.setAttribute(attributes.MINUTE_INTERVAL, `${numberVal}`);
            timePicker?.setAttribute(attributes.MINUTE_INTERVAL, `${numberVal}`);
        }
        else {
            this.removeAttribute(attributes.MINUTE_INTERVAL);
            timePicker?.removeAttribute(attributes.MINUTE_INTERVAL);
        }
    }
    /**
     * second-interval attribute
     * @returns {number} secondInterval value
     */
    get secondInterval() {
        return stringToNumber(this.getAttribute(attributes.SECOND_INTERVAL));
    }
    /**
     * Set interval in seconds dropdown
     * @param {string|number|null} val second-interval attribute value
     */
    set secondInterval(val) {
        const numberVal = stringToNumber(val);
        const timePicker = this.container?.querySelector('ids-time-picker');
        if (numberVal) {
            this.setAttribute(attributes.SECOND_INTERVAL, `${numberVal}`);
            timePicker?.setAttribute(attributes.SECOND_INTERVAL, `${numberVal}`);
        }
        else {
            this.removeAttribute(attributes.SECOND_INTERVAL);
            timePicker?.removeAttribute(attributes.SECOND_INTERVAL);
        }
    }
    /**
     * show-clear attribute
     * @returns {boolean} showClear param converted to boolean from attribute value
     */
    get showClear() {
        return stringToBool(this.getAttribute(attributes.SHOW_CLEAR));
    }
    /**
     * Set whether or not to show clear button in the calendar popup
     * @param {string|boolean|null} val show-clear attribute value
     */
    set showClear(val) {
        const boolVal = stringToBool(val);
        const btn = this.container?.querySelector('.popup-btn-clear');
        if (boolVal) {
            this.setAttribute(attributes.SHOW_CLEAR, boolVal.toString());
            btn?.removeAttribute(attributes.HIDDEN);
        }
        else {
            this.removeAttribute(attributes.SHOW_CLEAR);
            btn?.setAttribute(attributes.HIDDEN, (!boolVal).toString());
        }
    }
    /**
     * show-cancel attribute
     * @returns {boolean} showCancel param converted to boolean from attribute value
     */
    get showCancel() {
        return stringToBool(this.getAttribute(attributes.SHOW_CANCEL));
    }
    /**
     * Set whether or not to show cancel button when the picker is expanded
     * @param {string|boolean|null} val show-cancel attribute value
     */
    set showCancel(val) {
        const boolVal = stringToBool(val);
        const btn = this.container?.querySelector('.popup-btn-cancel');
        if (boolVal) {
            this.setAttribute(attributes.SHOW_CANCEL, String(boolVal));
            btn?.removeAttribute(attributes.HIDDEN);
        }
        else {
            this.removeAttribute(attributes.SHOW_CANCEL);
            btn?.setAttribute(attributes.HIDDEN, (!boolVal).toString());
        }
    }
    /**
     * show-picklist-year attribute, default is true
     * @returns {boolean} showPicklistYear param converted to boolean from attribute value
     */
    get showPicklistYear() {
        const attrVal = this.getAttribute(attributes.SHOW_PICKLIST_YEAR);
        if (attrVal) {
            return stringToBool(attrVal);
        }
        return true;
    }
    /**
     * Whether or not to show a list of years in the picklist
     * @param {string | boolean | null} val value to be set as show-picklist-year attribute converted to boolean
     */
    set showPicklistYear(val) {
        const boolVal = stringToBool(val);
        this.setAttribute(attributes.SHOW_PICKLIST_YEAR, String(boolVal));
        this.monthYearPicklist?.setAttribute(attributes.SHOW_PICKLIST_YEAR, String(boolVal));
    }
    /**
     * show-picklist-month attribute, default is true
     * @returns {boolean} showPicklistMonth param converted to boolean from attribute value
     */
    get showPicklistMonth() {
        const attrVal = this.getAttribute(attributes.SHOW_PICKLIST_MONTH);
        if (attrVal) {
            return stringToBool(attrVal);
        }
        return true;
    }
    /**
     * Whether or not to show a list of months in the picklist
     * @param {string | boolean | null} val value to be set as show-picklist-month attribute converted to boolean
     */
    set showPicklistMonth(val) {
        const boolVal = stringToBool(val);
        this.setAttribute(attributes.SHOW_PICKLIST_MONTH, String(boolVal));
        this.monthYearPicklist?.setAttribute(attributes.SHOW_PICKLIST_MONTH, String(boolVal));
    }
    /**
     * show-picklist-week attribute
     * @returns {boolean} showPicklistWeek param converted to boolean from attribute value
     */
    get showPicklistWeek() {
        return stringToBool(this.getAttribute(attributes.SHOW_PICKLIST_WEEK));
    }
    /**
     * Whether or not to show week numbers in the picklist
     * @param {string | boolean | null} val value to be set as show-picklist-week attribute converted to boolean
     */
    set showPicklistWeek(val) {
        const boolVal = stringToBool(val);
        if (boolVal) {
            this.setAttribute(attributes.SHOW_PICKLIST_WEEK, String(boolVal));
            this.monthYearPicklist?.setAttribute(attributes.SHOW_PICKLIST_WEEK, String(boolVal));
        }
        else {
            this.removeAttribute(attributes.SHOW_PICKLIST_WEEK);
            this.monthYearPicklist?.removeAttribute(attributes.SHOW_PICKLIST_WEEK);
        }
    }
    /**
     * use-current-time attribute
     * @returns {number} useCurrentTime param converted to boolean from attribute value
     */
    get useCurrentTime() {
        return stringToBool(this.getAttribute(attributes.USE_CURRENT_TIME));
    }
    /**
     * Set whether or not to show current time in the time picker
     * @param {string|boolean|null} val useCurrentTime param value
     */
    set useCurrentTime(val) {
        const boolVal = stringToBool(val);
        const timePicker = this.container?.querySelector('ids-time-picker');
        this.updateTimepickerDisplay();
        if (boolVal) {
            this.setAttribute(attributes.USE_CURRENT_TIME, String(boolVal));
            timePicker?.setAttribute(attributes.USE_CURRENT_TIME, String(boolVal));
        }
        else {
            this.removeAttribute(attributes.USE_CURRENT_TIME);
            timePicker?.removeAttribute(attributes.USE_CURRENT_TIME);
        }
    }
    onUseRangeChange(val) {
        const btnApply = this.applyBtnEl;
        if (val) {
            this.monthView?.setAttribute(attributes.USE_RANGE, String(val));
            btnApply?.removeAttribute(attributes.HIDDEN);
            btnApply?.setAttribute(attributes.DISABLED, 'true');
        }
        else {
            this.monthView?.removeAttribute(attributes.USE_RANGE);
            if (!this.expanded)
                btnApply?.setAttribute(attributes.HIDDEN, 'true');
            btnApply?.removeAttribute(attributes.DISABLED);
        }
    }
    #value;
    /**
     * value attribute
     * @returns {string} value param
     */
    get value() {
        return this.#value;
    }
    /**
     * Set Date Picker Popup's stored value. Should parse a date from the value.
     * @param {string|null} val value param
     */
    set value(val) {
        if (!val) {
            this.#value = '';
            this.removeAttribute(attributes.VALUE);
            return;
        }
        const currentValue = new Date(this.#value).getUTCDate();
        const newValue = new Date(val).getUTCDate();
        if (newValue !== currentValue) {
            this.#value = val;
            this.setAttribute(attributes.VALUE, val);
            this.syncDateAttributes(val);
        }
    }
    onPicklistExpand() {
        const btnApply = this.applyBtnEl;
        const btnCancel = this.cancelBtnEl;
        this.monthYearPicklist?.activatePicklist();
        btnApply?.removeAttribute(attributes.HIDDEN);
        btnApply?.removeAttribute(attributes.DISABLED);
        if (this.showCancel) {
            btnCancel?.removeAttribute(attributes.HIDDEN);
        }
    }
    onPicklistCollapse() {
        this.monthYearPicklist?.deactivatePicklist();
        this.updateActionButtonStateOnShow();
    }
    /**
     * Checks internal component refs based on settings
     */
    configureComponents() {
        this.expandableArea = this.container?.querySelector('ids-expandable-area');
        this.monthView = this.container?.querySelector('ids-month-view');
        this.monthYearPicklist = this.container?.querySelector('ids-month-year-picklist');
        if (this.hasTime()) {
            this.timepicker = this.container?.querySelector('ids-time-picker');
            if (this.useCurrentTime)
                this.setCurrentTime();
        }
        else {
            this.timepicker?.remove();
            this.timepicker = null;
        }
        this.toolbar = this.container?.querySelector('ids-toolbar');
    }
    /**
     * Defers `activeDate` to the inner MonthView's `activeDate` attribute,
     * otherwise fallback to the one generated by this one's date props
     * @returns {Date} activeDate from the inner monthView component
     */
    getActiveDate() {
        return this.monthView?.activeDate || this.activeDate;
    }
    /**
     * Expanded/Collapsed event for Month/Year Picklist
     */
    attachExpandedListener() {
        if (this.expandableArea) {
            this.offEvent('afterexpand');
            this.onEvent('afterexpand', this.expandableArea, () => {
                this.onPicklistExpand();
            });
            this.offEvent('beforecollapse');
            this.onEvent('beforecollapse', this.expandableArea, () => {
                this.onPicklistCollapse();
            });
        }
    }
    attachEventListeners() {
        // Selects day from the monthView (after user input)
        this.offEvent('dayselected.date-picker-calendar');
        this.onEvent('dayselected.date-picker-calendar', this.monthView, (e) => {
            this.handleDaySelectedEvent(e);
        });
        this.offEvent('datechange');
        this.onEvent('datechange', this.monthView, (e) => {
            e.stopPropagation();
            this.updateMonthYearPickerTriggerDisplay();
        });
        // Handles input from header buttons
        this.offEvent('click.date-picker-header');
        if (this.toolbar) {
            this.onEvent('click.date-picker-header', this.toolbar, (e) => {
                const target = e.target;
                const dropdownBtn = target.closest('.dropdown-btn');
                if (dropdownBtn) {
                    if (!dropdownBtn.disabled) {
                        this.expanded = !this.expanded;
                    }
                    return;
                }
                const navBtn = target.closest('.btn-previous, .btn-next, .btn-today');
                if (navBtn) {
                    if (!navBtn.disabled) {
                        if (navBtn.classList.contains('btn-next')) {
                            this.monthView?.changeDate('next-month');
                        }
                        else if (navBtn.classList.contains('btn-previous')) {
                            this.monthView?.changeDate('previous-month');
                        }
                        else if (navBtn.classList.contains('btn-today')) {
                            this.monthView?.changeDate('today');
                            this.setCurrentTime();
                        }
                    }
                }
            });
        }
        // Handles input from footer buttons
        this.offEvent('click.date-picker-footer');
        this.onEvent('click.date-picker-footer', this.container?.querySelector('.popup-footer'), (e) => {
            const target = e.target;
            if (!target)
                return;
            e.stopPropagation();
            if (target.closest('.popup-btn-apply')) {
                this.handleApplyEvent(e);
                return;
            }
            if (target.closest('.popup-btn-clear')) {
                this.clear();
                this.hide(true);
                return;
            }
            if (target.closest('.popup-btn-cancel')) {
                this.expanded = false;
                this.hide(true);
            }
        });
        // Input value change triggers component value change
        if (this.target) {
            this.offEvent('change.date-picker-input');
            this.onEvent('change.date-picker-input', this.target, (e) => {
                this.setAttribute(attributes.VALUE, e.detail.value);
            });
        }
    }
    /**
     * Click to apply button event handler
     * @param {MouseEvent} e click event
     */
    handleApplyEvent(e) {
        e.stopPropagation();
        if (!this.monthView)
            return;
        if (this.expanded) {
            this.captureValueFromPicklist();
            this.updateMonthYearPickerTriggerDisplay();
            this.expanded = false;
            return;
        }
        const rangeSettings = this.getRangeSettings();
        if (this.useRange) {
            if (rangeSettings.end || (rangeSettings.start && !rangeSettings.end)) {
                if (rangeSettings.minDays && (rangeSettings.start === rangeSettings.end)) {
                    rangeSettings.start = subtractDate(rangeSettings.start, rangeSettings.minDays, 'days');
                    this.setRangeSettings(rangeSettings);
                }
                this.value = [
                    this.locale.formatDate(this.setTime(rangeSettings.start), { pattern: this.format }),
                    rangeSettings.separator,
                    this.locale.formatDate(this.setTime(rangeSettings.end ?? this.getActiveDate()), { pattern: this.format }),
                ].filter(Boolean).join('');
                this.hide(true);
                this.triggerSelectedEvent();
            }
            else {
                this.value = this.locale.formatDate(this.setTime(rangeSettings.start ?? this.getActiveDate()), { pattern: this.format });
                rangeSettings.start = this.getActiveDate();
                this.setRangeSettings(rangeSettings);
            }
            return;
        }
        if (this.target) {
            this.value = this.locale.formatDate(this.setTime(this.getActiveDate()), { pattern: this.format });
        }
        this.hide(true);
        this.triggerSelectedEvent();
    }
    /**
     * Clears the contents of the Date Picker Popup and its corresponding target, if applicable
     * @returns {void}
     */
    clear() {
        this.expanded = false;
        this.resetRangeSettings();
        this.value = '';
        this.triggerSelectedEvent();
    }
    /**
     * Selected event handler
     * @param {IdsDayselectedEvent} e event from the calendar day selection
     */
    handleDaySelectedEvent(e) {
        if (!this.monthView)
            return;
        const inputDate = this.locale.parseDate(this.value, { dateFormat: this.format });
        // Clear action
        // Deselect the selected date by clicking to the selected date
        if (inputDate instanceof Date && isValidDate(inputDate) && inputDate.getTime() === e.detail.date.getTime()) {
            this.value = '';
            if (this.monthView.selectDay) {
                this.monthView.selectDay();
            }
            this.triggerSelectedEvent(e);
            return;
        }
        if (this.useRange) {
            const rangeSettings = this.getRangeSettings();
            if (rangeSettings.selectWeek) {
                const fixedDate = this.setTime(e.detail.rangeStart);
                this.value = [
                    this.locale.formatDate(fixedDate, { pattern: this.format }),
                    rangeSettings.separator,
                    e.detail.rangeEnd && this.locale.formatDate(this.setTime(e.detail.rangeEnd), { pattern: this.format })
                ].filter(Boolean).join('');
                e.detail.date = fixedDate;
                e.detail.value = this.value;
                this.hide(true);
                this.triggerSelectedEvent(e);
                return;
            }
            e.stopPropagation();
            const btnApply = this.applyBtnEl;
            if (e.detail.rangeStart && e.detail.rangeEnd) {
                btnApply?.removeAttribute(attributes.DISABLED);
            }
            else {
                btnApply?.setAttribute(attributes.DISABLED, 'true');
            }
        }
        else {
            const fixedDate = this.setTime(e.detail.date);
            this.value = this.locale.formatDate(fixedDate, { pattern: this.format });
            this.year = e.detail.date.getFullYear();
            this.month = e.detail.date.getMonth();
            this.day = e.detail.date.getDate();
            e.detail.date = fixedDate;
            e.detail.value = this.value;
            this.hide(true);
            this.triggerSelectedEvent(e);
        }
    }
    /**
     * Gets the value from the selected items in the Month/Year Picklist
     * and sets them in the Date Picker Popup
     * @returns {void}
     */
    captureValueFromPicklist() {
        if (!this.monthYearPicklist)
            return;
        const { month, year } = this.monthYearPicklist;
        this.year = year;
        this.month = month;
        this.value = this.getActiveDate().toString();
    }
    /**
     * Defines if the format has hours/minutes/seconds pattern to show time picker
     * @returns {boolean} whether or not to show time picker
     */
    hasTime() {
        if (!this.format)
            return false;
        return this.format.includes('h') || this.format.includes('m') || this.format.includes('s');
    }
    /**
     * Helper to set the date with time from time picker
     * @param {any} val date to add time values
     * @returns {Date} date with time values
     */
    setTime(val) {
        const date = isValidDate(val) ? val : new Date(val);
        const timePicker = this.container?.querySelector('ids-time-picker');
        if (!this.hasTime() || !timePicker)
            return date;
        const hours = timePicker.hours;
        const minutes = timePicker.minutes;
        const seconds = timePicker.seconds;
        const period = timePicker.period;
        const dayPeriodIndex = this.locale?.calendar().dayPeriods?.indexOf(period);
        date.setHours(hoursTo24(hours, dayPeriodIndex), minutes, seconds);
        return date;
    }
    /**
     * Triggers the same `dayselected` event on the Popup's target element that came from the internal IdsMonthView
     * @param {IdsDayselectedEvent} [e] optional event handler to pass arguments
     * @returns {void}
     */
    triggerSelectedEvent(e) {
        let args;
        if (e)
            args = e;
        else {
            const rangeSettings = this.getRangeSettings();
            args = {
                bubbles: true,
                detail: {
                    elem: this,
                    date: this.getActiveDate(),
                    useRange: this.useRange,
                    rangeStart: this.useRange && rangeSettings.start ? new Date(rangeSettings.start) : null,
                    rangeEnd: this.useRange && rangeSettings.end ? new Date(rangeSettings.end) : null,
                    value: this.value
                }
            };
        }
        if (this.target) {
            const event = new CustomEvent('dayselected', args);
            this.target.dispatchEvent(event);
        }
    }
    /**
     * Renders or removes an embedded IdsTimePicker component
     */
    updateTimepickerDisplay() {
        const hasTime = this.hasTime();
        this.container?.classList.toggle('has-time', hasTime);
        if (hasTime) {
            if (!this.timepicker) {
                this.monthView?.insertAdjacentHTML('afterend', this.timepickerTemplate());
                this.timepicker = this.container?.querySelector('ids-time-picker');
            }
        }
        else {
            this.timepicker?.remove();
            this.timepicker = null;
        }
    }
    /**
     * Removes all button ripples in the component
     * @returns {void}
     */
    removeRipples() {
        this.buttons?.forEach((button) => {
            button.removeRipples();
        });
    }
    /**
     * Takes a string containing a date, or an actual Date object, and syncs its values
     * to the correct properties provided by IdsDateAttributeMixin
     * @param {string | Date} val incoming date string/object
     */
    syncDateAttributes(val) {
        let usableValue = val;
        const rangeSettings = this.getRangeSettings();
        if (typeof val === 'string' && this.useRange && rangeSettings.separator) {
            usableValue = removeDateRange(val, rangeSettings.separator);
        }
        const date = new Date(usableValue);
        const month = date.getMonth();
        const year = date.getFullYear();
        const day = date.getDate();
        if (this.year !== year)
            this.year = year;
        if (this.month !== month)
            this.month = month;
        if (this.day !== day)
            this.day = day;
        if (this.hasTime()) {
            if (this.timepicker)
                this.timepicker.value = this.value;
        }
        if (this.monthView) {
            if (typeof this.monthView.selectDayFromValue === 'function') {
                this.monthView.selectDayFromValue(`${usableValue}`);
            }
        }
        this.updateMonthYearPickerTriggerDisplay();
    }
    setCurrentTime() {
        if (this.timepicker) {
            this.timepicker.value = this.locale.formatDate(new Date(), { pattern: this.format });
        }
    }
    /**
     * Helper to format datepicker text in the toolbar
     * @param {IdsLocale} [locale] an optional, provided IdsLocale object
     * @param {Date} [date] an optional, provided Date object (defaults to `this.getActiveDate()`)
     * @returns {string} locale formatted month year
     */
    formatMonthText(locale, date) {
        const targetLocale = locale || this.locale;
        const targetDate = date || this.getActiveDate();
        if (!targetLocale)
            return '';
        const monthKeys = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = targetLocale?.translate(`MonthWide${monthKeys[targetDate.getMonth()]}`);
        return `${month} ${targetDate.getFullYear()}`;
    }
    /**
     * Updates the text contents of the Month/Year Picker's trigger button to reflect current state
     * @param {IdsLocale} [locale] incoming IdsLocale object, if applicable
     * @param {Date} [date] an optional, provided Date object (defaults to `this.getActiveDate()`)
     * @returns {void}
     */
    updateMonthYearPickerTriggerDisplay(locale, date) {
        const formattedDate = this.formatMonthText(locale, date) || '';
        const dropdownEl = this.container?.querySelector('.dropdown-btn-text');
        if (dropdownEl) {
            dropdownEl.innerText = formattedDate;
        }
    }
    /**
     * Runs when this picker component hides
     * @returns {void}
     */
    onHide() {
        this.container?.setAttribute(htmlAttributes.TABINDEX, '-1');
        this.expanded = false;
        this.removeRipples();
    }
    /**
     * Runs when this picker component shows
     * @returns {void}
     */
    onShow() {
        this.attachEventListeners();
        this.updateActionButtonStateOnShow();
        this.container?.removeAttribute(htmlAttributes.TABINDEX);
        this.focus();
    }
    /**
     * Updates the Popup's Modal button states
     */
    updateActionButtonStateOnShow() {
        const btnApply = this.applyBtnEl;
        const rangeSettings = this.getRangeSettings();
        const hasPartialRangeSelected = !(rangeSettings.start && rangeSettings.end);
        if (!this.useRange) {
            if (btnApply) {
                btnApply.removeRipples();
                btnApply.setAttribute(attributes.HIDDEN, 'true');
                btnApply.setAttribute(attributes.DISABLED, `${hasPartialRangeSelected}`);
            }
            if (this.showCancel) {
                const btnCancel = this.cancelBtnEl;
                btnCancel?.removeAttribute(attributes.HIDDEN);
            }
        }
        else if (!rangeSettings.selectWeek) {
            btnApply?.removeAttribute(attributes.HIDDEN);
            btnApply?.setAttribute(attributes.DISABLED, `${hasPartialRangeSelected}`);
        }
        else {
            btnApply?.setAttribute(attributes.HIDDEN, 'true');
        }
    }
    /**
     * Passes through to IdsMonthView to check if a specified date is disabled (not available for choosing)
     * @param {Date} date the date to check
     * @returns {boolean} wheter or not the date is disabled
     */
    isDisabledByDate(date) {
        return this.monthView?.isDisabledByDate(date);
    }
    /**
     * Passes focus to the inner MonthView component
     */
    focus() {
        if (this.expanded) {
            this.monthYearPicklist?.focus();
        }
        else {
            this.monthView?.focus();
        }
    }
};
IdsDatePickerPopup = __decorate([
    customElement('ids-date-picker-popup'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsDatePickerPopup);
export default IdsDatePickerPopup;
//# sourceMappingURL=ids-date-picker-popup.js.map