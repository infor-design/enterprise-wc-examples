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
import { stringToBool, stringToNumber } from '../../utils/ids-string-utils/ids-string-utils';
import { hoursTo12, hoursTo24, isValidDate } from '../../utils/ids-date-utils/ids-date-utils';
import { getClosest } from '../../utils/ids-dom-utils/ids-dom-utils';
import Base from './ids-time-picker-base';
import { IdsTimePickerCommonAttributes, IdsTimePickerMixinAttributes, range } from './ids-time-picker-common';
import '../ids-dropdown/ids-dropdown';
import '../ids-popup/ids-popup';
import './ids-time-picker-popup';
import '../ids-trigger-field/ids-trigger-field';
import styles from './ids-time-picker.scss';
/**
 * IDS TimePicker Component
 * @type {IdsTimePicker}
 * @inherits IdsElement
 * @mixes IdsDirtyTrackerMixin
 * @mixes IdsEventsMixin
 * @mixes IdsKeyboardMixin
 * @mixes IdsLabelStateMixin
 * @mixes IdsLocaleMixin
 * @mixes IdsPopupOpenEventsMixin
 * @mixes IdsThemeMixin
 * @part container - the container of the component
 * @part trigger-button - the trigger button
 * @part icon - the icon in the trigger button
 * @part input - the input element
 * @part popup - the popup with dropdowns
 * @part btn-set - the set button in the popup
 * @part hours - the hours dropdown
 * @part minutes - the minutes dropdown
 * @part seconds - the seconds dropdown
 * @part period - the period dropdown
 */
let IdsTimePicker = class IdsTimePicker extends Base {
    isFormComponent = true;
    triggerButton = null;
    picker = null;
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.triggerButton = this.container?.querySelector('ids-trigger-button');
        this.picker = this.container?.querySelector('ids-time-picker-popup');
        this.configurePickerPopup();
        this.#attachEventHandlers();
        this.#attachKeyboardListeners();
        this.#applyMask();
    }
    disconnectedCallback() {
        super.disconnectedCallback?.();
        this.picker = null;
        this.triggerButton = null;
    }
    /**
     * Return the attributes we handle as getters/setters
     * @private
     * @returns {Array} The attributes in an array
     */
    static get attributes() {
        return [
            ...super.attributes,
            ...IdsTimePickerCommonAttributes,
            ...IdsTimePickerMixinAttributes,
        ];
    }
    /**
     * List of available color variants for this component
     * @returns {Array<string>}
     */
    colorVariants = ['alternate-formatter'];
    /**
     * Push color variant to the trigger-field element
     * @returns {void}
     */
    onColorVariantRefresh() {
        if (this.input) {
            this.input.colorVariant = this.colorVariant;
        }
    }
    /**
     * Push label-state to the trigger-field element
     * @returns {void}
     */
    onLabelStateChange() {
        if (this.input) {
            this.input.labelState = this.labelState;
        }
    }
    /**
     * Push field-height/compact to the trigger-field element
     * @param {string} val the new field height setting
     */
    onFieldHeightChange(val) {
        if (val) {
            const attr = val === 'compact' ? { name: 'compact', val: '' } : { name: 'field-height', val };
            this.input?.setAttribute(attr.name, attr.val);
        }
        else {
            this.input?.removeAttribute('compact');
            this.input?.removeAttribute('field-height');
        }
    }
    /**
     * Create the Template for the contents
     * @returns {string} HTML for the template
     */
    template() {
        const createTimePicker = () => `<ids-time-picker-popup
        id="popup-${this.id ? this.id : ''}"
        align="left, top"
        animated
        arrow="bottom"
        autoupdate="${this.autoupdate}"
        embeddable="${this.embeddable}"
        format="${this.format}"
        trigger-type="click"
        use-current-time="time"
        value="${this.value}"
      ></ids-time-picker-popup>`;
        if (this.embeddable) {
            return createTimePicker();
        }
        const colorVariant = this.colorVariant ? ` color-variant="${this.colorVariant}"` : '';
        const fieldHeight = this.fieldHeight ? ` field-height="${this.fieldHeight}"` : '';
        const labelState = this.labelState ? ` label-state="${this.labelState}"` : '';
        const compact = this.compact ? ' compact' : '';
        const noMargins = this.noMargins ? ' no-margins' : '';
        return `
      <div class="ids-time-picker" part="container">
        <ids-trigger-field
          ${this.id ? `id="${this.id}"` : ''}
          ${colorVariant}${fieldHeight}${compact}${noMargins}${labelState}
          label="${this.label}"
          size="${this.size}"
          placeholder="${this.placeholder}"
          value="${this.value}"
          ${this.disabled ? `disabled="${this.disabled}"` : ''}
          ${this.readonly ? `readonly="${this.readonly}"` : ''}
          ${this.dirtyTracker ? `dirty-tracker="${this.dirtyTracker}"` : ''}
          ${this.validate ? `validate="${this.validate}"` : ''}
          validation-events="${this.validationEvents}"
          part="input"
        >
          <ids-text audible="true" translate-text="true">UseArrow</ids-text>
          <ids-trigger-button slot="trigger-end" part="trigger-button" id="triggerBtn-${this.id ? this.id : ''}">
            <ids-text audible="true" translate-text="true">TimepickerTriggerButton</ids-text>
            <ids-icon icon="clock" part="icon"></ids-icon>
          </ids-trigger-button>
        </ids-trigger-field>
        ${createTimePicker()}
      <div>
    `;
    }
    /**
     * Callback for dirty tracker setting change
     * @param {boolean} value The changed value
     * @returns {void}
     */
    onDirtyTrackerChange(value) {
        if (value) {
            this.input?.setAttribute(attributes.DIRTY_TRACKER, String(value));
        }
        else {
            this.input?.removeAttribute(attributes.DIRTY_TRACKER);
        }
    }
    configurePickerPopup() {
        const fieldId = this.input?.getAttribute('id');
        const btn = this.triggerButton;
        const btnId = btn?.getAttribute('id');
        const picker = this.picker;
        if (picker) {
            picker.format = this.format;
            if (this.input) {
                picker.value = this.input.value;
            }
            if (btn) {
                picker.setAttribute(attributes.TARGET, `#${fieldId}`);
                picker.setAttribute(attributes.TRIGGER_TYPE, 'click');
                picker.setAttribute(attributes.TRIGGER_ELEM, `#${btnId}`);
                if (picker.popup) {
                    picker.popup.x = 0;
                    picker.popup.setAttribute(attributes.ARROW_TARGET, `#${btnId}`);
                }
                picker.onOutsideClick = (e) => {
                    const path = e.composedPath && e.composedPath();
                    if (!path?.includes(picker) && !path?.includes(this.input)) {
                        picker.hide();
                    }
                };
                picker.onTriggerClick = () => {
                    if (this.disabled || this.readonly)
                        return;
                    picker?.toggleVisibility();
                };
                picker.refreshTriggerEvents();
            }
        }
    }
    /**
     * Establish Internal Keyboard shortcuts
     * @private
     * @returns {IdsTimePicker} this class-instance object for chaining
     */
    #attachKeyboardListeners() {
        this.listen(['ArrowDown', 'Escape', 'Backspace'], this, (e) => {
            if (e.key === 'ArrowDown') {
                this.picker?.show();
            }
            else if (e.key === 'Escape' || e.key === 'Backspace') {
                this.picker?.hide(true);
            }
        });
        return this;
    }
    /**
     * Establish Internal Event Handlers
     * @returns {IdsTimePicker} this class-instance object for chaining
     * @private
     */
    #attachEventHandlers() {
        this.offEvent('change.time-picker-dropdowns');
        this.onEvent('change.time-picker-dropdowns', this.container?.querySelector('.dropdowns'), (e) => {
            const currentId = e.detail?.elem?.id;
            if (!currentId)
                return;
            this.setAttribute(currentId, e.detail.value);
            if (this.autoupdate) {
                this.#setTimeOnField();
            }
        });
        this.offEvent('timeselected');
        this.onEvent('timeselected', this.input, () => {
            this.#setTimeOnField();
        });
        this.offEvent('hide.picker');
        this.onEvent('hide.picker', this.picker, (e) => {
            if (e.detail.doFocus && !this.autoselect) {
                this.input?.focus();
            }
            this.onHide();
        });
        this.offEvent('show.picker');
        this.onEvent('show.picker', this.picker, () => {
            this.onShow();
        });
        this.offEvent('focus.time-picker-input');
        this.onEvent('focus.time-picker-input', this.input, () => {
            if (this.picker && this.autoselect) {
                if (!this.picker.visible) {
                    this.picker.show();
                }
            }
        });
        // Translate Labels
        this.offEvent('languagechange.time-picker-container');
        this.onEvent('languagechange.time-picker-container', getClosest(this, 'ids-container'), () => {
            if (!this.hasAttribute(attributes.FORMAT)) {
                this.setAttribute(attributes.FORMAT, this.locale?.calendar().timeFormat);
            }
            this.picker?.renderDropdowns();
            this.#setTimeValidation();
        });
        // Change component value on input value change
        this.offEvent('change.time-picker-input');
        this.onEvent('change.time-picker-input', this.input, (e) => {
            this.setAttribute(attributes.VALUE, e.detail.value);
        });
        return this;
    }
    /**
     * Parse input date and populate dropdowns
     */
    #parseInputValue() {
        const inputDate = this.locale?.parseDate(this.input?.value || this.value, { dateFormat: this.format });
        const hours24 = inputDate?.getHours();
        const hours12 = hoursTo12(hours24);
        const minutes = inputDate?.getMinutes();
        const seconds = inputDate?.getSeconds();
        const period = inputDate && this.locale?.calendar()?.dayPeriods[hours24 >= 12 ? 1 : 0];
        if (this.#is24Hours() && hours24 !== this.hours) {
            this.hours = hours24;
        }
        if (this.#is12Hours() && hours12 !== this.hours) {
            this.hours = hours12;
        }
        if (minutes !== this.minutes) {
            this.minutes = minutes;
        }
        if (seconds !== this.seconds) {
            this.seconds = seconds;
        }
        if (this.#hasPeriod()) {
            this.period = period;
        }
    }
    /**
     * @returns {boolean} returns true if the timepicker format includes the am/pm period (" a")
     */
    #hasPeriod() {
        return this.#is12Hours() && this.format.toLowerCase().includes(' a');
    }
    /**
     * @returns {boolean} returns true if the timepicker is using a 12-Hour format ("hh")
     */
    #is12Hours() {
        return this.format.includes('h');
    }
    /**
     * @returns {boolean} returns true if the timepicker is using a 24-Hour format ("HH")
     */
    #is24Hours() {
        return this.format.includes('H') || !this.#hasPeriod();
    }
    /**
     * Get options list for hours dropdown
     * @returns {Array<number>} options
     */
    #getHourOptions() {
        if (!this.#hasHourRange()) {
            return range(this.#is12Hours() ? 1 : 0, this.#is12Hours() ? 12 : 23);
        }
        if (this.#is24Hours()) {
            return range(this.startHour, this.endHour > 23 ? 23 : this.endHour);
        }
        const dayPeriodIndex = this.locale?.calendar().dayPeriods?.indexOf(this.period);
        // Including 12AM or 12PM to the range
        if ((dayPeriodIndex === 0 && this.startHour === 0)
            || (dayPeriodIndex === 1 && (this.startHour <= 12 && this.endHour >= 12))) {
            return [...range(this.#getPeriodStartHour(), this.#getPeriodEndHour()), 12];
        }
        return range(this.#getPeriodStartHour(), this.#getPeriodEndHour());
    }
    /**
     * @returns {boolean} true if range is set
     */
    #hasHourRange() {
        return this.startHour > 0 || this.endHour < 24;
    }
    /**
     * @returns {number} start hour in range by day period
     */
    #getPeriodStartHour() {
        const dayPeriodIndex = this.locale?.calendar().dayPeriods?.indexOf(this.period);
        if ((this.startHour <= 12 && dayPeriodIndex === 1) || this.startHour === 0) {
            return 1;
        }
        if (this.startHour > 12) {
            return this.startHour % 12;
        }
        return this.startHour;
    }
    /**
     * @returns {number} end hour in range by day period
     */
    #getPeriodEndHour() {
        const dayPeriodIndex = this.locale?.calendar().dayPeriods?.indexOf(this.period);
        if ((this.endHour >= 12 && dayPeriodIndex === 0) || this.endHour === 24) {
            return 11;
        }
        if (dayPeriodIndex === 1) {
            return this.endHour % 12;
        }
        return this.endHour;
    }
    /**
     * @returns {Array<string>} list of available day periods
     */
    #getDayPeriodsWithRange() {
        const dayPeriods = this.locale?.calendar().dayPeriods || [];
        if (!this.#hasHourRange()) {
            return dayPeriods;
        }
        // Do not include out of range day period
        return dayPeriods.reduce((prev, curr, index) => {
            const amInRange = index === 0 && (this.startHour < 12 || this.startHour === 0);
            const pmInRange = index === 1 && this.endHour >= 12;
            if (amInRange || pmInRange) {
                return [...prev, curr];
            }
            return prev;
        }, []);
    }
    /**
     * Get the input-field's timestring value
     * @returns {string} formatted timestring
     */
    #getTimeOnField() {
        const date = new Date();
        const dayPeriodIndex = this.locale?.calendar().dayPeriods?.indexOf(this.period);
        date.setHours(hoursTo24(this.hours, dayPeriodIndex), this.minutes, this.seconds);
        return this.locale.formatDate(date, { pattern: this.format });
    }
    /**
     * Set the input-field's timestring value
     */
    #setTimeOnField() {
        const value = this.#getTimeOnField();
        if (this.input) {
            this.input.value = value;
        }
    }
    /**
     * Valid time validation extend validation mixin
     */
    #setTimeValidation() {
        if (this.validate?.includes('time')) {
            this.input?.addValidationRule({
                id: 'time',
                type: 'error',
                message: this.locale?.translate('InvalidTime'),
                check: (input) => {
                    if (!input.value)
                        return true;
                    const date = this.locale.parseDate(input.value, { dateFormat: this.format, strictTime: true });
                    return isValidDate(date);
                }
            });
        }
    }
    /**
     * @param {number} value minutes or seconds to be rounded
     * @param {number} interval for value to be rounded to
     * @returns {number} rounded value
     */
    #roundToInterval(value, interval) {
        return Math.round(value / interval) * interval;
    }
    /**
     * Applying ids-mask to the input when changing locale or format
     */
    #applyMask() {
        if (this.input && this.mask) {
            this.input.mask = 'date';
            this.input.maskOptions = { format: this.format };
        }
    }
    /**
     * Public method to open timepicker popup
     * @returns {void}
     */
    open() {
        this.picker?.show();
    }
    /**
     * Public method to close timepicker popup
     * @returns {void}
     */
    close() {
        this.picker?.hide(false);
    }
    /**
     * Close the timepicker's popup window
     */
    onHide() {
        this.container?.classList.remove('is-open');
        this.picker?.setAttribute(attributes.TABINDEX, '-1');
    }
    /**
     * Open the timepicker's popup window
     */
    onShow() {
        this.container?.classList.add('is-open');
        if (this.picker) {
            this.picker.removeAttribute(attributes.TABINDEX);
            if (this.picker.popup) {
                this.picker.popup.align = `bottom, ${this.locale.isRTL() || ['md', 'lg', 'full'].includes(this.size) ? 'right' : 'left'}`;
                this.picker.popup.arrow = 'bottom';
                this.picker.popup.y = 16;
            }
        }
        // Update dropdown values each time the popup is opened if using current time
        if (!this.input?.value && this.useCurrentTime) {
            this.#parseInputValue();
        }
        this.picker?.focus();
    }
    /**
     * @returns {HTMLElement} reference to the IdsPopup component
     */
    get popup() {
        return this.container?.querySelector('ids-popup') || null;
    }
    /**
     * @returns {HTMLElement} Reference to the IdsTriggerField
     */
    get input() {
        return this.container?.querySelector('ids-trigger-field') || null;
    }
    /**
     * Sets the time format to use in the picker.
     * @param {string|null} value - a variation of "hh:mm:ss a"
     */
    set format(value) {
        if (value) {
            this.setAttribute(attributes.FORMAT, value);
            this.picker?.setAttribute(attributes.FORMAT, `${value}`);
        }
        else {
            this.removeAttribute(attributes.FORMAT);
            this.picker?.setAttribute(attributes.FORMAT, `${this.locale?.calendar().timeFormat}`);
        }
        this.#applyMask();
    }
    /**
     * Gets the time format to use in the picker. Defaults to the current locale's time format or english ("hh:mm a")
     * @returns {string} the time format being used
     */
    get format() {
        return this.getAttribute(attributes.FORMAT) || this.locale?.calendar().timeFormat || 'hh:mm a';
    }
    /**
     * Sets a current timestring-value of the timepickers input-field
     * @param {string} value - a timestring value for the input-field
     */
    set value(value) {
        if (!this.disabled && !this.readonly) {
            this.setAttribute(attributes.VALUE, value);
            this.#parseInputValue();
            if (this.input) {
                this.input.value = value;
            }
        }
    }
    /**
     * Gets a timestring that matches the format specified by this.format()
     * @returns {string} the current timestring value of the timepicker
     */
    get value() { return this.getAttribute(attributes.VALUE) || ''; }
    /**
     * Sets the autoselect attribute
     * @param {boolean|string|null} value - true or false
     */
    set autoselect(value) {
        const boolVal = stringToBool(value);
        if (boolVal) {
            this.setAttribute(attributes.AUTOSELECT, 'true');
        }
        else {
            this.removeAttribute(attributes.AUTOSELECT);
        }
    }
    /**
     * Gets the autoselect attribute
     * @returns {boolean} true if autoselect is enabled
     */
    get autoselect() {
        return stringToBool(this.getAttribute(attributes.AUTOSELECT));
    }
    /**
     * Sets the autoupdate attribute
     * @param {boolean} value - true or false
     */
    set autoupdate(value) {
        const boolVal = stringToBool(value);
        const popupBtn = this.container?.querySelector('.popup-btn');
        if (boolVal) {
            this.setAttribute(attributes.AUTOUPDATE, 'true');
            popupBtn?.setAttribute('hidden', 'true');
        }
        else {
            this.removeAttribute(attributes.AUTOUPDATE);
            popupBtn?.removeAttribute('hidden');
        }
    }
    /**
     * Gets the autoupdate attribute
     * @returns {boolean} true if autoselect is enabled
     */
    get autoupdate() {
        return stringToBool(this.getAttribute(attributes.AUTOUPDATE));
    }
    /**
     * Sets the disabled attribute
     * @param {boolean|string|null} value - true or false
     */
    set disabled(value) {
        const boolVal = stringToBool(value);
        if (boolVal) {
            this.setAttribute(attributes.DISABLED, 'true');
            this.input?.setAttribute(attributes.DISABLED, 'true');
        }
        else {
            this.removeAttribute(attributes.DISABLED);
            this.input?.removeAttribute(attributes.DISABLED);
        }
    }
    /**
     * Gets the disabled attribute
     * @returns {boolean} true if the timepicker is disabled
     */
    get disabled() {
        return stringToBool(this.getAttribute(attributes.DISABLED));
    }
    /**
     * Sets the readonly attribute
     * @param {boolean|string|null} value - true or false
     */
    set readonly(value) {
        const boolVal = stringToBool(value);
        if (boolVal) {
            this.setAttribute(attributes.READONLY, 'true');
            this.input?.setAttribute(attributes.READONLY, 'true');
        }
        else {
            this.removeAttribute(attributes.READONLY);
            this.input?.removeAttribute(attributes.READONLY);
        }
    }
    /**
     * Gets the readonly attribute
     * @returns {boolean} true if the timepicker is in readonly mode
     */
    get readonly() {
        return stringToBool(this.getAttribute(attributes.READONLY));
    }
    /**
     * Handles label attribute changes
     * @param {string} value label value
     */
    onLabelChange(value) {
        if (value) {
            this.input?.setAttribute(attributes.LABEL, value);
        }
        else {
            this.input?.removeAttribute(attributes.LABEL);
        }
    }
    /**
     * Handles id attribute changes
     * @param {string} value id value
     */
    onIdChange(value) {
        if (value) {
            this.input?.setAttribute(attributes.ID, value);
        }
        else {
            this.input?.removeAttribute(attributes.ID);
        }
    }
    /**
     * Sets the placeholder attribute
     * @param {string} value - the placeholder's text
     */
    set placeholder(value) {
        if (value) {
            this.setAttribute(attributes.PLACEHOLDER, value);
            this.input?.setAttribute(attributes.PLACEHOLDER, value);
        }
        else {
            this.removeAttribute(attributes.PLACEHOLDER);
            this.input?.removeAttribute(attributes.PLACEHOLDER);
        }
    }
    /**
     * Get the placeholder attribute
     * @returns {string} default is ""
     */
    get placeholder() {
        return this.getAttribute(attributes.PLACEHOLDER) ?? '';
    }
    /**
     * Sets the no margins attribute
     * @param {string|boolean|null} value The value for no margins attribute
     */
    set noMargins(value) {
        const boolVal = stringToBool(value);
        if (boolVal) {
            this.setAttribute(attributes.NO_MARGINS, 'true');
            this.input?.setAttribute(attributes.NO_MARGINS, 'true');
        }
        else {
            this.removeAttribute(attributes.NO_MARGINS);
            this.input?.removeAttribute(attributes.NO_MARGINS);
        }
    }
    /**
     * no-margins attribute
     * @returns {boolean} noMargins parameter
     */
    get noMargins() {
        return stringToBool(this.getAttribute(attributes.NO_MARGINS));
    }
    /**
     * Set the time picker size
     * @param {string} value The value
     */
    set size(value) {
        if (value) {
            this.setAttribute(attributes.SIZE, value);
        }
        else {
            this.removeAttribute(attributes.SIZE);
        }
        this.input?.setAttribute(attributes.SIZE, this.size);
    }
    /**
     * Get the size attribute
     * @returns {string} default is "sm"
     */
    get size() {
        return this.getAttribute(attributes.SIZE) ?? 'sm';
    }
    /**
     * Set interval in minutes dropdown
     * @param {string|number|null} val minute-interval attribute value
     */
    set minuteInterval(val) {
        const numberVal = stringToNumber(val);
        if (!Number.isNaN(numberVal)) {
            this.setAttribute(attributes.MINUTE_INTERVAL, String(numberVal));
        }
        else {
            this.removeAttribute(attributes.MINUTE_INTERVAL);
        }
        if (this.picker)
            this.picker.minuteInterval = val;
    }
    /**
     * minute-interval attribute, default is 5
     * @returns {number} minuteInterval value
     */
    get minuteInterval() {
        const numberVal = stringToNumber(this.getAttribute(attributes.MINUTE_INTERVAL));
        if (!Number.isNaN(numberVal)) {
            return numberVal;
        }
        return 5;
    }
    /**
     * Set interval in seconds dropdown
     * @param {string|number|null} val second-interval attribute value
     */
    set secondInterval(val) {
        const numberVal = stringToNumber(val);
        if (!Number.isNaN(numberVal)) {
            this.setAttribute(attributes.SECOND_INTERVAL, String(numberVal));
        }
        else {
            this.removeAttribute(attributes.SECOND_INTERVAL);
        }
        if (this.picker)
            this.picker.secondInterval = val;
    }
    /**
     * second-interval attribute, default is 5
     * @returns {number} secondInterval value
     */
    get secondInterval() {
        const numberVal = stringToNumber(this.getAttribute(attributes.SECOND_INTERVAL));
        if (!Number.isNaN(numberVal)) {
            return numberVal;
        }
        return 5;
    }
    /**
     * Set whether or not show only hours/minutes/seconds dropdowns without input
     * @param {string|boolean|null} val embeddable param value
     */
    set embeddable(val) {
        const boolVal = stringToBool(val);
        if (boolVal) {
            this.setAttribute(attributes.EMBEDDABLE, 'true');
        }
        else {
            this.removeAttribute(attributes.EMBEDDABLE);
        }
        if (this.picker)
            this.picker.embeddable = val;
    }
    /**
     * embeddable attribute
     * @returns {boolean} whether or not to show only hours/minutes/seconds dropdowns without input
     */
    get embeddable() {
        return stringToBool(this.getAttribute(attributes.EMBEDDABLE));
    }
    /**
     * Set hours attribute and update value in hours dropdown
     * @param {string|number|null} value hours param value
     */
    set hours(value) {
        if (value !== null) {
            this.setAttribute(attributes.HOURS, String(value));
        }
        else {
            this.removeAttribute(attributes.HOURS);
        }
        if (this.picker)
            this.picker.hours = value;
        if (this.autoupdate)
            this.#setTimeOnField();
    }
    /**
     * hours attribute, default is 1
     * @returns {number} hours attribute value converted to number
     */
    get hours() {
        if (this.picker)
            return this.picker.hours;
        const numberVal = stringToNumber(this.getAttribute(attributes.HOURS));
        if (!Number.isNaN(numberVal)) {
            return numberVal;
        }
        if (this.#hasHourRange()) {
            return this.#getHourOptions()[0];
        }
        if (this.useCurrentTime && Number.isNaN(numberVal)) {
            const hours24Now = new Date().getHours();
            if (this.#is12Hours()) {
                return hoursTo12(hours24Now);
            }
            return hours24Now;
        }
        return 1;
    }
    /**
     * Gets hours in 24 hour format
     * @returns {number} input value in 24 hours format
     */
    get hours24() {
        const inputDate = this.locale?.parseDate(this.input?.value || this.value, { dateFormat: this.format });
        return inputDate.getHours();
    }
    /**
     * Set minutes attribute and update value in minutes dropdown
     * @param {string|number|null} value minutes param value
     */
    set minutes(value) {
        const stringValue = String(value);
        if (value !== null) {
            this.setAttribute(attributes.MINUTES, stringValue);
        }
        else {
            this.removeAttribute(attributes.MINUTES);
        }
        if (this.picker)
            this.picker.minutes = value;
        if (this.autoupdate)
            this.#setTimeOnField();
    }
    /**
     * minutes attribute, default is 0
     * @returns {number} minutes attribute value converted to number
     */
    get minutes() {
        if (this.picker)
            return this.picker.minutes;
        const numberVal = stringToNumber(this.getAttribute(attributes.MINUTES));
        if (!Number.isNaN(numberVal)) {
            return this.#roundToInterval(numberVal, this.minuteInterval);
        }
        if (this.useCurrentTime && Number.isNaN(numberVal)) {
            const minutesNow = new Date().getMinutes();
            return this.#roundToInterval(minutesNow, this.minuteInterval);
        }
        // Default
        return 0;
    }
    /**
     * Set seconds attribute and update value in seconds dropdown
     * @param {string|number|null} value seconds param value
     */
    set seconds(value) {
        const stringValue = String(value);
        if (value !== null) {
            this.setAttribute(attributes.SECONDS, stringValue);
        }
        else {
            this.removeAttribute(attributes.SECONDS);
        }
        if (this.picker)
            this.picker.seconds = value;
        if (this.autoupdate)
            this.#setTimeOnField();
    }
    /**
     * seconds attribute, default is 0
     * @returns {number} seconds attribute value converted to number
     */
    get seconds() {
        if (this.picker)
            return this.picker.seconds;
        const numberVal = stringToNumber(this.getAttribute(attributes.SECONDS));
        if (!Number.isNaN(numberVal)) {
            return this.#roundToInterval(numberVal, this.secondInterval);
        }
        if (this.useCurrentTime && Number.isNaN(numberVal)) {
            const secondsNow = new Date().getSeconds();
            return this.#roundToInterval(secondsNow, this.secondInterval);
        }
        // Default
        return 0;
    }
    /**
     * Set period attribute and update value in period dropdown
     * @param {string|null} value period param value
     */
    set period(value) {
        if (value) {
            this.setAttribute(attributes.PERIOD, value);
        }
        else {
            this.removeAttribute(attributes.PERIOD);
        }
        // Updating hours dropdown with AM/PM range
        if (this.picker) {
            if (this.#hasHourRange()) {
                this.picker.hours = String(this.#getHourOptions()[0]);
            }
            else {
                this.picker.period = value;
            }
        }
        if (this.autoupdate)
            this.#setTimeOnField();
    }
    /**
     * period attribute, default is first day period in locale calendar
     * @returns {string} period attribute value
     */
    get period() {
        if (this.picker)
            return this.picker.period;
        const attrVal = this.getAttribute(attributes.PERIOD);
        const dayPeriods = this.#getDayPeriodsWithRange();
        const dayPeriodExists = dayPeriods.map((item) => item.toLowerCase())
            .includes(attrVal?.toString().toLowerCase());
        if (!this.#hasPeriod())
            return '';
        if (attrVal && dayPeriodExists) {
            return attrVal;
        }
        if (this.useCurrentTime) {
            const hours24Now = new Date().getHours();
            if (hours24Now >= 12) {
                return dayPeriods[1];
            }
            return dayPeriods[0];
        }
        return dayPeriods[0];
    }
    /**
     * Set trigger field/input validation
     * @param {string|null} val validate param
     */
    set validate(val) {
        if (val) {
            this.setAttribute(attributes.VALIDATE, val);
            this.input?.setAttribute(attributes.VALIDATE, val);
            this.input?.setAttribute(attributes.VALIDATION_EVENTS, this.validationEvents);
            this.input?.handleValidation();
        }
        else {
            this.removeAttribute(attributes.VALIDATE);
            this.input?.removeAttribute(attributes.VALIDATE);
            this.input?.removeAttribute(attributes.VALIDATION_EVENTS);
            this.input?.handleValidation();
        }
        this.#setTimeValidation();
    }
    /**
     * validate attribute
     * @returns {string|null} validate param
     */
    get validate() { return this.getAttribute(attributes.VALIDATE); }
    /**
     * Set which input events to fire validation on
     * @param {string|null} val validation-events attribute
     */
    set validationEvents(val) {
        if (val) {
            this.setAttribute(attributes.VALIDATION_EVENTS, val);
            this.input?.setAttribute(attributes.VALIDATION_EVENTS, val);
        }
        else {
            this.removeAttribute(attributes.VALIDATION_EVENTS);
            this.input?.removeAttribute(attributes.VALIDATION_EVENTS);
        }
    }
    /**
     * validation-events attributes
     * @returns {string} validationEvents param. Default is 'change blur'
     */
    get validationEvents() { return this.getAttribute(attributes.VALIDATION_EVENTS) ?? 'change blur'; }
    /**
     * Set trigger field tabbable attribute
     * @param {boolean|string|null} val true or false depending if the trigger field is tabbable
     */
    set tabbable(val) {
        this.setAttribute(attributes.TABBABLE, String(val));
        this.input?.setAttribute(attributes.TABBABLE, String(val));
    }
    /**
     * tabbable attribute
     * @returns {boolean} tabbable param
     */
    get tabbable() {
        const attrVal = this.getAttribute(attributes.TABBABLE);
        // tabbable by default
        return attrVal !== null ? stringToBool(attrVal) : true;
    }
    /**
     * Set start of limited hours range
     * @param {string|number|null} val to be set as end-hour attribute
     */
    set startHour(val) {
        if (val) {
            this.setAttribute(attributes.START_HOUR, String(val));
        }
        else {
            this.removeAttribute(attributes.START_HOUR);
        }
        if (this.picker)
            this.picker.startHour = val;
    }
    /**
     * start-hour attribute, default is 0
     * @returns {number} startHour param converted to number from attribute value
     */
    get startHour() {
        if (this.picker)
            return this.picker.startHour;
        const numberVal = stringToNumber(this.getAttribute(attributes.START_HOUR));
        if (!Number.isNaN(numberVal) && numberVal >= 0) {
            return numberVal;
        }
        return 0;
    }
    /**
     * Set end of limited hours range
     * @param {string|number|null} val to be set as end-hour attribute
     */
    set endHour(val) {
        if (val) {
            this.setAttribute(attributes.END_HOUR, String(val));
        }
        else {
            this.removeAttribute(attributes.END_HOUR);
        }
        if (this.picker)
            this.picker.endHour = val;
    }
    /**
     * end-hour attribute, default is 24
     * @returns {number} endHour param converted to number from attribute value
     */
    get endHour() {
        if (this.picker)
            return this.picker.endHour;
        const numberVal = stringToNumber(this.getAttribute(attributes.END_HOUR));
        if (!Number.isNaN(numberVal) && numberVal <= 24) {
            return numberVal;
        }
        return 24;
    }
    /**
     * Set whether or not to show current time in the dropdowns
     * @param {string|boolean|null} val useCurrentTime param value
     */
    set useCurrentTime(val) {
        const boolVal = stringToBool(val);
        if (boolVal) {
            this.setAttribute(attributes.USE_CURRENT_TIME, 'true');
        }
        else {
            this.removeAttribute(attributes.USE_CURRENT_TIME);
        }
        if (this.picker)
            this.picker.useCurrentTime = boolVal;
    }
    /**
     * use-current-time attribute
     * @returns {number} useCurrentTime param converted to boolean from attribute value
     */
    get useCurrentTime() {
        if (this.picker)
            return this.picker.useCurrentTime;
        return stringToBool(this.getAttribute(attributes.USE_CURRENT_TIME));
    }
    /**
     * Enable/disable mask for the input
     * @param {string|boolean|null} val mask param value
     */
    set mask(val) {
        const boolVal = stringToBool(val);
        if (boolVal) {
            this.setAttribute(attributes.MASK, 'true');
            this.input?.setAttribute(attributes.MASK, 'date');
        }
        else {
            this.removeAttribute(attributes.MASK);
            this.input?.removeAttribute(attributes.MASK);
        }
    }
    /**
     * mask attribute
     * @returns {boolean} mask param converted to boolean from attribute value
     */
    get mask() {
        const attrVal = this.getAttribute(attributes.MASK);
        return stringToBool(attrVal);
    }
};
IdsTimePicker = __decorate([
    customElement('ids-time-picker'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsTimePicker);
export default IdsTimePicker;
//# sourceMappingURL=ids-time-picker.js.map