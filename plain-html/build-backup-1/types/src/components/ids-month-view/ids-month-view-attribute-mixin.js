import { attributes } from '../../core/ids-attributes';
import { deepClone } from '../../utils/ids-deep-clone-utils/ids-deep-clone-utils';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
const isValidLegendArray = (val) => Array.isArray(val)
    && val.length > 0
    && val.every((item) => item.name && item.color && (item.dates || item.dayOfWeek));
/**
 * A mixin that adds shared attribute setters/getters/callbacks related to IdsMonthView behaviors.
 * @mixin IdsMonthViewAttributeMixin
 * @param {any} superclass Accepts a superclass and creates a new subclass from it.
 * @returns {any} The extended object
 */
const IdsMonthViewAttributeMixin = (superclass) => class extends superclass {
    #disableSettings = {
        dates: [],
        years: [],
        minDate: '',
        maxDate: '',
        dayOfWeek: [],
        isEnable: false
    };
    #currentLegend = [];
    #rangeSettings = {
        start: null,
        end: null,
        separator: ' - ',
        minDays: 0,
        maxDays: 0,
        selectForward: false,
        selectBackward: false,
        includeDisabled: false,
        selectWeek: false
    };
    constructor(...args) {
        super(...args);
    }
    static get attributes() {
        return [
            ...superclass.attributes,
            attributes.RANGE_SETTINGS,
            attributes.USE_RANGE
        ];
    }
    connectedCallback() {
        super.connectedCallback?.();
    }
    disconnectedCallback() {
        super.disconnectedCallback?.();
    }
    /**
     * @returns {IdsDisableSettings} disable settings object
     */
    get disableSettings() {
        return this.#disableSettings;
    }
    /**
     * Set disable settings
     * @param {IdsDisableSettings} val settings to be assigned to default disable settings
     */
    set disableSettings(val) {
        this.#disableSettings = {
            ...this.#disableSettings,
            ...deepClone(val)
        };
        if (typeof this.onDisableSettingsChange === 'function')
            this.onDisableSettingsChange(this.#disableSettings);
    }
    /**
     * @returns {IdsLegendSettings} array of legend items
     */
    get legend() {
        return this.#currentLegend;
    }
    /**
     * Set array of legend items to month view component
     * Validation of data is provided by the month view component
     * @param {IdsLegendSettings} val array of legend items
     */
    set legend(val) {
        if (val === null || (Array.isArray(val) && !val.length)) {
            this.#currentLegend = [];
        }
        else if (isValidLegendArray(val)) {
            this.#currentLegend = deepClone(val);
        }
        else {
            throw new Error('ids-month-view: Invalid legend data provided');
        }
        if (typeof this.onLegendSettingsChange === 'function')
            this.onLegendSettingsChange(this.#currentLegend);
    }
    /**
     * Find legend object by date provided
     * @param {Date} date to check if has any legend
     * @returns {IdsLegend | undefined} legend object for a specific date
     */
    getLegendByDate(date) {
        if (!this.#currentLegend)
            return;
        return this.#currentLegend.find((legend) => {
            const ifDayOfWeek = legend.dayOfWeek?.includes(date.getDay());
            const ifDate = legend.dates?.some((item) => new Date(item).getTime() === date.getTime());
            return ifDayOfWeek || ifDate;
        });
    }
    /**
     * @returns {IdsRangeSettings} range settings object
     */
    get rangeSettings() {
        return this.#rangeSettings;
    }
    /**
     * Set range selection settings
     * @param {IdsRangeSettings} val settings to be assigned to default range settings
     */
    set rangeSettings(val) {
        if (!val || val === null)
            this.resetRangeSettings();
        else {
            this.#rangeSettings = {
                ...this.#rangeSettings,
                ...deepClone(val)
            };
        }
        if (typeof this.onRangeSettingsChange === 'function')
            this.onRangeSettingsChange(val);
    }
    /**
     * Sets the `rangeSettings` object back to its original defaults
     */
    resetRangeSettings() {
        this.rangeSettings = {
            start: null,
            end: null,
            separator: ' - ',
            minDays: 0,
            maxDays: 0,
            selectForward: false,
            selectBackward: false,
            includeDisabled: false,
            selectWeek: false
        };
    }
    /**
     * use-range attribute
     * @returns {boolean} useRange param converted to boolean from attribute value
     */
    get useRange() {
        const attrVal = this.getAttribute(attributes.USE_RANGE);
        return stringToBool(attrVal);
    }
    /**
     * Set whether or not the component should be a range picker
     * @param {string|boolean|null} val useRange param value
     */
    set useRange(val) {
        const boolVal = stringToBool(val);
        if (boolVal) {
            this.setAttribute(attributes.USE_RANGE, 'true');
        }
        else {
            this.removeAttribute(attributes.USE_RANGE);
        }
        if (typeof this.onUseRangeChange === 'function')
            this.onUseRangeChange(boolVal);
    }
};
export default IdsMonthViewAttributeMixin;
//# sourceMappingURL=ids-month-view-attribute-mixin.js.map