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
import Base from './ids-month-year-picklist-base';
import '../ids-text/ids-text';
import { weekNumber, weekNumberToDate } from '../../utils/ids-date-utils/ids-date-utils';
import { getClosest } from '../../utils/ids-dom-utils/ids-dom-utils';
import { stringToBool, stringToNumber } from '../../utils/ids-string-utils/ids-string-utils';
import { IdsDatePickerCommonAttributes, MONTH_KEYS, PICKLIST_LENGTH } from './ids-date-picker-common';
import styles from './ids-month-year-picklist.scss';
/**
 * IDS Month/Year PickList Component
 * @type {IdsMonthYearPicklist}
 * @inherits IdsElement
 * @mixes IdsDateAttributeMixin
 * @mixes IdsEventsMixin
 * @mixes IdsKeyboardMixin
 * @mixes IdsLocaleMixin
 * @mixes IdsThemeMixin
 */
let IdsMonthYearPicklist = class IdsMonthYearPicklist extends Base {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.attachEventListeners();
        this.setAttribute(htmlAttributes.ROLE, 'application');
        // Set reasonable default
        if (!this.hasPicklistConfigurationAttributes()) {
            this.setAttribute(attributes.SHOW_PICKLIST_MONTH, 'true');
            this.setAttribute(attributes.SHOW_PICKLIST_YEAR, 'true');
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback?.();
    }
    static get attributes() {
        return [
            ...super.attributes,
            ...IdsDatePickerCommonAttributes
        ];
    }
    template() {
        return `<div class="picklist">
      ${this.showPicklistWeek ? this.templatePicklistWeeks() : ''}
      ${this.showPicklistMonth && !this.showPicklistWeek ? this.templatePicklistMonths() : ''}
      ${this.showPicklistYear ? this.templatePicklistYears() : ''}
    </div>`;
    }
    templatePicklistWeeks() {
        return `<div class="picklist-section week">
      <ul class="picklist-list">
        <li class="picklist-item is-btn-up is-week-nav">
          <ids-text audible="true" translate-text="true">PreviousWeek</ids-text>
          <ids-icon icon="chevron-up"></ids-icon>
        </li>
        ${this.renderPicklistWeeks()}
        <li class="picklist-item is-btn-down is-week-nav">
          <ids-text audible="true" translate-text="true">NextWeek</ids-text>
          <ids-icon icon="chevron-down"></ids-icon>
        </li>
      </ul>
    </div>`;
    }
    templatePicklistMonths() {
        return `<div class="picklist-section month">
      <ul class="picklist-list">
        <li class="picklist-item is-btn-up is-month-nav">
          <ids-text audible="true" translate-text="true">PreviousMonth</ids-text>
          <ids-icon icon="chevron-up"></ids-icon>
        </li>
        ${this.renderPicklistMonths()}
        <li class="picklist-item is-btn-down is-month-nav">
          <ids-text audible="true" translate-text="true">NextMonth</ids-text>
          <ids-icon icon="chevron-down"></ids-icon>
        </li>
      </ul>
    </div>`;
    }
    templatePicklistYears() {
        return `<div class="picklist-section year">
      <ul class="picklist-list">
        <li class="picklist-item is-btn-up is-year-nav">
          <ids-text audible="true" translate-text="true">PreviousYear</ids-text>
          <ids-icon icon="chevron-up"></ids-icon>
        </li>
        ${this.renderPicklistYears()}
        <li class="picklist-item is-btn-down is-year-nav">
          <ids-text audible="true" translate-text="true">NextYear</ids-text>
          <ids-icon icon="chevron-down"></ids-icon>
        </li>
      </ul>
    </div>`;
    }
    refreshPicklists() {
        if (this.container) {
            this.container.innerHTML = `
        ${this.showPicklistWeek ? this.templatePicklistWeeks() : ''}
        ${this.showPicklistMonth && !this.showPicklistWeek ? this.templatePicklistMonths() : ''}
        ${this.showPicklistYear ? this.templatePicklistYears() : ''}
      `;
        }
    }
    /**
     * disabled attribute
     * @returns {boolean} disabled param
     */
    get disabled() {
        return stringToBool(this.getAttribute(attributes.DISABLED));
    }
    /**
     * Set trigger field disabled attribute
     * @param {string|boolean|null} val disabled param value
     */
    set disabled(val) {
        const boolVal = stringToBool(val);
        if (boolVal) {
            this.setAttribute(attributes.DISABLED, 'true');
        }
        else {
            this.removeAttribute(attributes.DISABLED);
        }
    }
    /**
     * @returns {boolean} true if any picklists are currently showing
     */
    hasPicklistConfigurationAttributes() {
        return this.hasAttribute(attributes.SHOW_PICKLIST_MONTH)
            || this.hasAttribute(attributes.SHOW_PICKLIST_YEAR)
            || this.hasAttribute(attributes.SHOW_PICKLIST_WEEK);
    }
    attachEventListeners() {
        this.offEvent('click.month-year-picklist');
        this.onEvent('click.month-year-picklist', this.container, (e) => {
            this.handlePicklistEvent(e);
        });
        this.offEvent('keydown.month-year-picklist');
        this.onEvent('keydown.month-year-picklist', this.container, (e) => {
            this.handleKeyDownEvent(e);
        });
    }
    /**
     * Keyboard events handler
     * @param {KeyboardEvent} e keyboard event
     */
    handleKeyDownEvent(e) {
        if (!this.container)
            return;
        const key = e.key;
        // Date Picker Dropdown keyboard events
        const btnUpYear = this.container.querySelector('.is-btn-up.is-year-nav');
        const btnDownYear = this.container.querySelector('.is-btn-down.is-year-nav');
        const btnUpMonth = this.container.querySelector('.is-btn-up.is-month-nav');
        const btnDownMonth = this.container.querySelector('.is-btn-down.is-month-nav');
        const btnUpWeek = this.container.querySelector('.is-btn-up.is-week-nav');
        const btnDownWeek = this.container.querySelector('.is-btn-down.is-week-nav');
        const monthSelected = this.container.querySelector('.is-month.is-selected');
        const yearSelected = this.container.querySelector('.is-year.is-selected');
        const weekSelected = this.container.querySelector('.is-week.is-selected');
        if (key === 'Enter') {
            // Enter on picklist year btn up
            if (btnUpYear?.matches(':focus')) {
                this.picklistYearPaged(false);
            }
            // Enter on picklist year btn down
            if (btnDownYear?.matches(':focus')) {
                this.picklistYearPaged(true);
            }
            // Enter on picklist month btn up/down
            if ((btnUpMonth?.matches(':focus') || btnDownMonth?.matches(':focus'))) {
                this.picklistMonthPaged();
            }
            // Enter on picklist week btn up
            if (btnUpWeek?.matches(':focus')) {
                this.picklistWeekPaged(false);
            }
            // Enter on picklist week btn down
            if (btnDownWeek?.matches(':focus')) {
                this.picklistWeekPaged(true);
            }
        }
        // Arrow Up on picklist month
        if (key === 'ArrowUp' && monthSelected?.matches(':focus')) {
            const month = this.month - 1;
            const el = this.container.querySelector(`.is-month[data-month="${month}"]`);
            this.unselectPicklist('month');
            if (!el) {
                btnUpMonth?.focus();
                return;
            }
            this.selectPicklistEl(el);
            this.month = month;
            el?.focus();
        }
        // Arrow Down on picklist month
        if (key === 'ArrowDown' && monthSelected?.matches(':focus')) {
            const month = this.month + 1;
            const el = this.container.querySelector(`.is-month[data-month="${month}"]`);
            this.unselectPicklist('month');
            if (!el) {
                btnDownMonth?.focus();
                return;
            }
            this.selectPicklistEl(el);
            this.month = month;
            el?.focus();
        }
        // Arrow Up on picklist year
        if (key === 'ArrowUp' && yearSelected?.matches(':focus')) {
            const year = this.year - 1;
            const el = this.container.querySelector(`.is-year[data-year="${year}"]`);
            this.unselectPicklist('year');
            if (!el) {
                btnUpYear?.focus();
                return;
            }
            this.selectPicklistEl(el);
            this.year = year;
            el?.focus();
        }
        // Arrow Down on picklist year
        if (key === 'ArrowDown' && yearSelected?.matches(':focus')) {
            const year = this.year + 1;
            const el = this.container.querySelector(`.is-year[data-year="${year}"]`);
            this.unselectPicklist('year');
            if (!el) {
                btnDownYear?.focus();
                return;
            }
            this.selectPicklistEl(el);
            this.year = year;
            el?.focus();
        }
        // Arrow Up on picklist week
        if (key === 'ArrowUp' && weekSelected?.matches(':focus')) {
            const weekIndex = stringToNumber(weekSelected.dataset.week) - 1;
            const week = this.getWeekNumber(weekIndex);
            const el = this.container.querySelector(`.is-week[data-week="${week}"]`);
            this.unselectPicklist('week');
            if (!el) {
                btnUpWeek?.focus();
                return;
            }
            this.selectPicklistEl(el);
            this.setWeekDate(week);
            el?.focus();
        }
        // Arrow Down on picklist year
        if (key === 'ArrowDown' && weekSelected?.matches(':focus')) {
            const weekIndex = stringToNumber(weekSelected.dataset.week) + 1;
            const week = this.getWeekNumber(weekIndex);
            const el = this.container.querySelector(`.is-week[data-week="${week}"]`);
            this.unselectPicklist('week');
            if (!el) {
                btnDownWeek?.focus();
                return;
            }
            this.selectPicklistEl(el);
            this.setWeekDate(week);
            el?.focus();
        }
        // Arrow Up on year btn up
        if (key === 'ArrowUp' && btnUpYear?.matches(':focus')) {
            btnDownYear?.focus();
            return;
        }
        // Arrow Down on year btn down
        if (key === 'ArrowDown' && btnDownYear?.matches(':focus')) {
            btnUpYear?.focus();
            return;
        }
        // Arrow Up on year btn down
        if (key === 'ArrowUp' && btnDownYear?.matches(':focus')) {
            const el = this.container.querySelector('.is-year.is-last');
            this.unselectPicklist('year');
            this.selectPicklistEl(el);
            this.year = el?.dataset?.year || null;
            el?.focus();
        }
        // Arrow Down on year btn up
        if (key === 'ArrowDown' && btnUpYear?.matches(':focus')) {
            const el = this.container.querySelector('.is-year');
            this.unselectPicklist('year');
            this.selectPicklistEl(el);
            this.year = el?.dataset.year || null;
            el?.focus();
        }
        // Arrow Up on month btn up
        if (key === 'ArrowUp' && btnUpMonth?.matches(':focus')) {
            btnDownMonth?.focus();
            return;
        }
        // Arrow Down on month btn down
        if (key === 'ArrowDown' && btnDownMonth?.matches(':focus')) {
            btnUpMonth?.focus();
            return;
        }
        // Arrow Up on month btn down
        if (key === 'ArrowUp' && btnDownMonth?.matches(':focus')) {
            const el = this.container.querySelector('.is-month.is-last');
            this.unselectPicklist('month');
            this.selectPicklistEl(el);
            this.month = el?.dataset.month || null;
            el?.focus();
        }
        // Arrow Down on month btn up
        if (key === 'ArrowDown' && btnUpMonth?.matches(':focus')) {
            const el = this.container.querySelector('.is-month');
            this.unselectPicklist('month');
            this.selectPicklistEl(el);
            this.month = el?.dataset.month || null;
            el?.focus();
        }
        // Arrow Up on week btn up
        if (key === 'ArrowUp' && btnUpWeek?.matches(':focus')) {
            btnDownWeek?.focus();
            return;
        }
        // Arrow Down on week btn down
        if (key === 'ArrowDown' && btnDownWeek?.matches(':focus')) {
            btnUpWeek?.focus();
            return;
        }
        // Arrow Up on week btn down
        if (key === 'ArrowUp' && btnDownWeek?.matches(':focus')) {
            const el = this.container.querySelector('.is-week.is-last');
            this.unselectPicklist('month');
            this.selectPicklistEl(el);
            this.setWeekDate(stringToNumber(el?.dataset.week));
            el?.focus();
        }
        // Arrow Down on week btn up
        if (key === 'ArrowUp' && btnUpWeek?.matches(':focus')) {
            const el = this.container.querySelector('.is-week');
            this.unselectPicklist('week');
            this.selectPicklistEl(el);
            this.setWeekDate(stringToNumber(el?.dataset.week));
            el?.focus();
        }
    }
    /**
     * Get a list of years to be attached to the picklist
     * @returns {string|undefined} years list items
     */
    renderPicklistYears() {
        const disabledSettings = getClosest(this, 'ids-month-view')?.disableSettings;
        const startYear = this.year - 2;
        const years = Array.from({ length: PICKLIST_LENGTH }).map((_, index) => {
            const year = startYear + index;
            const isDisabled = disabledSettings?.years?.includes(year);
            return `<li
        data-year="${year}"
        class="picklist-item is-year${index === PICKLIST_LENGTH - 1 ? ' is-last' : ''}${isDisabled ? ' is-disabled' : ''}"
      ><ids-text${isDisabled ? ' disabled="true"' : ''}>${year}</ids-text></li>`;
        }).join('');
        return years;
    }
    /**
     * Get a list of months to be attached to the picklist
     * @returns {string|undefined} months list items
     */
    renderPicklistMonths() {
        const monthsList = MONTH_KEYS.map((item) => this.locale?.translate(`MonthWide${item}`));
        const months = monthsList?.map((item, index) => `<li
        data-month="${index}"
        class="picklist-item is-month${index === PICKLIST_LENGTH - 1 || index === 11 ? ' is-last' : ''}"
      ><ids-text>${item}</ids-text></li>`).filter((_, index) => (this.month <= PICKLIST_LENGTH - 1 && index <= PICKLIST_LENGTH - 1)
            || (this.month > PICKLIST_LENGTH - 1 && index > PICKLIST_LENGTH - 1)).join('');
        return months;
    }
    /**
     * Get a list of week numbers to be attached to the picklist
     * @returns {string|undefined} week numbers items
     */
    renderPicklistWeeks() {
        const currentWeek = weekNumber(new Date(this.year, this.month, this.day));
        const startWeek = currentWeek <= PICKLIST_LENGTH ? 1 : currentWeek - 2;
        const weeks = Array.from({ length: PICKLIST_LENGTH }).map((_, index) => {
            const weekIndex = startWeek + index;
            const week = this.getWeekNumber(weekIndex);
            return `<li
        data-week="${week}"
        class="picklist-item is-week${index === PICKLIST_LENGTH - 1 ? ' is-last' : ''}"
      ><ids-text>${week}</ids-text></li>`;
        }).join('');
        return weeks;
    }
    /**
     * Helper to get week number from paginated index
     * @param {number} weekIndex index number as it comes from the paged loop
     * @returns {number} week number
     */
    getWeekNumber(weekIndex) {
        // Get total number of weeks in the year by getting week number of the last day of the year
        const totalWeeks = weekNumber(new Date(this.year, 11, 31), this.firstDayOfWeek);
        if (weekIndex > totalWeeks) {
            return weekIndex % totalWeeks;
        }
        if (weekIndex < 1) {
            return totalWeeks + weekIndex;
        }
        return weekIndex;
    }
    /**
     * Click to picklist elements event handler
     * @param {MouseEvent} e click event
     */
    handlePicklistEvent(e) {
        if (!e.target)
            return;
        e.stopPropagation();
        const btnUpYear = e.target.closest('.is-btn-up.is-year-nav');
        const btnDownYear = e.target.closest('.is-btn-down.is-year-nav');
        const btnUpMonth = e.target.closest('.is-btn-up.is-month-nav');
        const btnDownMonth = e.target.closest('.is-btn-down.is-month-nav');
        const btnUpWeek = e.target.closest('.is-btn-up.is-week-nav');
        const btnDownWeek = e.target.closest('.is-btn-down.is-week-nav');
        const monthItem = e.target.closest('.is-month');
        const yearItem = e.target.closest('.is-year');
        const weekItem = e.target.closest('.is-week');
        if (btnUpYear) {
            this.picklistYearPaged(false);
        }
        if (btnDownYear) {
            this.picklistYearPaged(true);
        }
        if (btnUpMonth || btnDownMonth) {
            this.picklistMonthPaged();
        }
        if (btnUpWeek) {
            this.picklistWeekPaged(false);
        }
        if (btnDownWeek) {
            this.picklistWeekPaged(true);
        }
        if (monthItem) {
            this.unselectPicklist('month');
            this.selectPicklistEl(monthItem);
            monthItem.focus();
            this.month = monthItem.dataset.month;
        }
        if (yearItem) {
            const disabledSettings = getClosest(this, 'ids-month-view')?.disableSettings;
            const isDisabled = disabledSettings?.years?.includes(stringToNumber(yearItem.dataset.year));
            if (isDisabled)
                return;
            this.unselectPicklist('year');
            this.selectPicklistEl(yearItem);
            yearItem.focus();
            this.year = yearItem.dataset.year;
        }
        if (weekItem) {
            this.unselectPicklist('week');
            this.selectPicklistEl(weekItem);
            weekItem.focus();
            const week = stringToNumber(weekItem.dataset.week);
            const date = weekNumberToDate(this.year, week, this.firstDayOfWeek);
            this.month = date.getMonth();
            this.day = date.getDate();
        }
    }
    /**
     * Loop through the year list and increase/descrese year depends on the param
     * @param {boolean} isNext increase/descrese picklist year
     */
    picklistYearPaged(isNext) {
        const disabledSettings = getClosest(this, 'ids-month-view')?.disableSettings;
        this.container?.querySelectorAll('.picklist-item.is-year').forEach((el) => {
            const elYear = stringToNumber(el.dataset.year);
            const year = isNext ? elYear + PICKLIST_LENGTH : elYear - PICKLIST_LENGTH;
            const isDisabled = disabledSettings?.years?.includes(year);
            el.dataset.year = year;
            el.querySelector('ids-text').textContent = year;
            el.classList.toggle('is-disabled', isDisabled);
            el.querySelector('ids-text').disabled = isDisabled;
            if (el.classList.contains('is-selected') && !isDisabled) {
                this.selectPicklistEl(el);
                this.year = year;
            }
        });
    }
    /**
     * Loop through the entire list of the months
     */
    picklistMonthPaged() {
        const monthsList = MONTH_KEYS.map((item) => this.locale?.translate(`MonthWide${item}`));
        this.container?.querySelectorAll('.picklist-item.is-month').forEach((el, index) => {
            const elMonth = stringToNumber(el.dataset.month);
            const month = elMonth > PICKLIST_LENGTH - 1 ? 0 + index : PICKLIST_LENGTH + index;
            el.dataset.month = month;
            el.querySelector('ids-text').textContent = monthsList[month];
            if (el.classList.contains('is-selected')) {
                this.selectPicklistEl(el);
                this.month = month;
            }
        });
    }
    /**
     * Loop through the week list and increase/descrese week depends on the param
     * @param {boolean} isNext increase/descrese picklist week
     */
    picklistWeekPaged(isNext) {
        this.container?.querySelectorAll('.picklist-item.is-week').forEach((el) => {
            const elWeek = stringToNumber(el.dataset.week);
            const weekIndex = isNext ? elWeek + PICKLIST_LENGTH : elWeek - PICKLIST_LENGTH;
            const week = this.getWeekNumber(weekIndex);
            el.dataset.week = week;
            el.querySelector('ids-text').textContent = week;
            if (el.classList.contains('is-selected')) {
                this.selectPicklistEl(el);
            }
        });
    }
    /**
     * Set month and day params based on week number
     * @param {number} week number of a week
     */
    setWeekDate(week) {
        const date = weekNumberToDate(this.year, week, this.firstDayOfWeek);
        this.month = date.getMonth();
        this.day = date.getDate();
    }
    /**
     * Add selectable/tabbable attributes to picklist element
     * @param {HTMLElement} el element to handle
     */
    selectPicklistEl(el) {
        el?.classList.add('is-selected');
        el?.setAttribute(attributes.TABINDEX, '0');
        el?.setAttribute(htmlAttributes.ARIA_SELECTED, 'true');
        el?.setAttribute(htmlAttributes.ROLE, 'gridcell');
    }
    /**
     * Reset picklist selectable/tabbable attributes
     * @param {'month'|'year'|'all'} type of panel to unselect
     */
    unselectPicklist(type) {
        const selector = `.picklist-item${type !== 'all' ? `.is-${type}` : ''}`;
        this.container?.querySelectorAll(selector).forEach((el) => {
            el.removeAttribute(attributes.TABINDEX);
            el.classList.remove('is-selected');
            el.removeAttribute(htmlAttributes.ARIA_SELECTED);
            if (el.getAttribute(htmlAttributes.ROLE) === 'gridcell') {
                el.setAttribute(htmlAttributes.ROLE, 'link');
            }
        });
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
        if (boolVal) {
            this.setAttribute(attributes.SHOW_PICKLIST_YEAR, 'true');
        }
        else {
            this.removeAttribute(attributes.SHOW_PICKLIST_YEAR);
        }
        this.refreshPicklists();
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
        if (boolVal) {
            this.setAttribute(attributes.SHOW_PICKLIST_MONTH, 'true');
        }
        else {
            this.removeAttribute(attributes.SHOW_PICKLIST_MONTH);
        }
        this.refreshPicklists();
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
            this.setAttribute(attributes.SHOW_PICKLIST_WEEK, 'true');
        }
        else {
            this.removeAttribute(attributes.SHOW_PICKLIST_WEEK);
        }
        this.refreshPicklists();
    }
    /**
     *
     */
    onLocaleChange = () => {
        this.refreshPicklists();
    };
    activatePicklist() {
        if (!this.container)
            return;
        const picklistBtns = this.container.querySelectorAll('.picklist-item.is-btn-up, .picklist-item.is-btn-down');
        picklistBtns.forEach((item) => {
            item.setAttribute(attributes.TABINDEX, '0');
        });
        const monthEl = this.container.querySelector(`.picklist-item.is-month[data-month="${this.month}"]`);
        const yearEl = this.container.querySelector(`.picklist-item.is-year[data-year="${this.year}"]`);
        const week = weekNumber(new Date(this.year, this.month, this.day), this.firstDayOfWeek);
        const weekEl = this.container.querySelector(`.picklist-item.is-week[data-week="${week}"]`);
        this.selectPicklistEl(monthEl);
        this.selectPicklistEl(yearEl);
        this.selectPicklistEl(weekEl);
        this.container.querySelector('.picklist-item.is-selected')?.focus();
    }
    deactivatePicklist() {
        if (!this.container)
            return;
        const picklistBtns = this.container.querySelectorAll('.picklist-item.is-btn-up, .picklist-item.is-btn-down');
        picklistBtns.forEach((item) => {
            item.setAttribute(attributes.TABINDEX, '-1');
        });
        this.unselectPicklist('all');
    }
};
IdsMonthYearPicklist = __decorate([
    customElement('ids-month-year-picklist'),
    scss(styles),
    __metadata("design:paramtypes", [])
], IdsMonthYearPicklist);
export default IdsMonthYearPicklist;
//# sourceMappingURL=ids-month-year-picklist.js.map