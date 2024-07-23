import { attributes } from '../../core/ids-attributes';
import { deepClone } from '../../utils/ids-deep-clone-utils/ids-deep-clone-utils';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
/**
 * A mixin that adds save user settings functionality to data grid
 * @param {any} superclass Accepts a superclass and creates a new subclass from it
 * @returns {any} The extended object
 */
const IdsDataGridSaveSettingsMixin = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
    }
    static get attributes() {
        return [
            ...superclass.attributes,
            attributes.SAVE_ACTIVE_PAGE,
            attributes.SAVE_COLUMNS,
            attributes.SAVE_FILTER,
            attributes.SAVE_PAGE_SIZE,
            attributes.SAVE_ROW_HEIGHT,
            attributes.SAVE_SORT_ORDER,
            attributes.SAVE_USER_SETTINGS
        ];
    }
    connectedCallback() {
        super.connectedCallback?.();
    }
    /**
     * Settings to use with local storage.
     */
    settings = {
        activePage: 'active-page',
        columns: 'columns',
        filter: 'filter',
        pageSize: 'page-size',
        rowHeight: 'row-height',
        sortOrder: 'sort-order'
    };
    /**
     * List of values for each setting.
     * @private
     */
    #valSettings = Object.values(this.settings);
    /**
     * State to check if can be able to save.
     * @private
     */
    #saveMode = true;
    /**
     * List of restored options.
     * @private
     */
    #restored = [];
    /**
     * Sets to save active page
     * @param {boolean|string} value The value
     */
    set saveActivePage(value) {
        this.#setBoolAttribute(attributes.SAVE_ACTIVE_PAGE, value);
    }
    get saveActivePage() {
        return this.hasAttribute(attributes.SAVE_ACTIVE_PAGE);
    }
    /**
     * Sets to save columns
     * @param {boolean|string} value The value
     */
    set saveColumns(value) {
        this.#setBoolAttribute(attributes.SAVE_COLUMNS, value);
    }
    get saveColumns() {
        return this.hasAttribute(attributes.SAVE_COLUMNS);
    }
    /**
     * Sets to save filter
     * @param {boolean|string} value The value
     */
    set saveFilter(value) {
        this.#setBoolAttribute(attributes.SAVE_FILTER, value);
    }
    get saveFilter() {
        return this.hasAttribute(attributes.SAVE_FILTER);
    }
    /**
     * Sets to save page size
     * @param {boolean|string} value The value
     */
    set savePageSize(value) {
        this.#setBoolAttribute(attributes.SAVE_PAGE_SIZE, value);
    }
    get savePageSize() {
        return this.hasAttribute(attributes.SAVE_PAGE_SIZE);
    }
    /**
     * Sets to save row height
     * @param {boolean|string} value The value
     */
    set saveRowHeight(value) {
        this.#setBoolAttribute(attributes.SAVE_ROW_HEIGHT, value);
    }
    get saveRowHeight() {
        return this.hasAttribute(attributes.SAVE_ROW_HEIGHT);
    }
    /**
     * Sets to save sort order
     * @param {boolean|string} value The value
     */
    set saveSortOrder(value) {
        this.#setBoolAttribute(attributes.SAVE_SORT_ORDER, value);
    }
    get saveSortOrder() {
        return this.hasAttribute(attributes.SAVE_SORT_ORDER);
    }
    /**
     * Sets to save all user settings
     * @param {boolean|string} value The value
     */
    set saveUserSettings(value) {
        this.#setBoolAttribute(attributes.SAVE_USER_SETTINGS, value);
    }
    get saveUserSettings() {
        return this.hasAttribute(attributes.SAVE_USER_SETTINGS);
    }
    /**
     * Sets the given boolean attribute.
     * @private
     * @param {string} attributeName The attribute name
     * @param {boolean|string} value The value
     * @returns {void}
     */
    #setBoolAttribute(attributeName, value) {
        if (stringToBool(value)) {
            this.setAttribute(attributeName, '');
            return;
        }
        this.removeAttribute(attributeName);
    }
    /**
     * Checks if local storage can be use.
     * @private
     * @returns {boolean} True, if local storage can be use.
     */
    #canUseLocalStorage() {
        try {
            if (typeof localStorage?.getItem === 'function')
                return true;
        }
        catch (exception) {
            return false;
        }
        return false;
    }
    /**
     * Get key to be used with local storage.
     * @private
     * @param {string} setting The setting name.
     * @param {string} prefix Optional prefix string to make the id more unique.
     * @param {string} suffix Optional suffix string to make the id more unique.
     * @param {string} uniqueId The uniqueId.
     * @returns {string} The key value.
     */
    #keyTobeUsed(setting, prefix = '', suffix = '', uniqueId = this.uniqueId ?? this.getAttribute('id') ?? '') {
        const key = `ids-data-grid-usersettings-${prefix}-${uniqueId}-${setting}-${suffix}`;
        return (key.replace(/-+/g, '-').replace(/-$/g, ''));
    }
    /**
     * Get key/value for given setting.
     * @private
     * @param {string} setting The setting.
     * @returns {{ key: string, value: any }} the value
     */
    #keyAndValue(setting) {
        const grid = this;
        // Adjust filters to keep minimal
        const filters = () => {
            const val = [];
            grid.filters?.filterConditions?.()?.forEach((filter) => {
                const { columnId, operator, value: v } = filter;
                val.push({ columnId, operator, value: v });
            });
            return val;
        };
        const s = this.settings;
        let value = null;
        if (setting === s.activePage)
            value = grid.datasource.pageNumber;
        if (setting === s.columns)
            value = deepClone(grid.columns);
        if (setting === s.filter)
            value = filters();
        if (setting === s.pageSize)
            value = grid.datasource.pageSize;
        if (setting === s.rowHeight)
            value = grid.rowHeight;
        if (setting === s.sortOrder)
            value = grid.sortColumn;
        return { key: this.#keyTobeUsed(setting), value };
    }
    /**
     * Save given key/value to local storage.
     * @private
     * @param {string} key The key.
     * @param {any} value The value.
     * @returns {void}
     */
    #save(key, value) {
        if (this.#saveMode
            && this.#canUseLocalStorage()
            && typeof value !== 'undefined'
            && value !== null) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
    /**
     * Save the given setting.
     * @param {string} setting The setting.
     * @returns {void}
     */
    saveSetting(setting) {
        if (this.#valSettings.includes(setting)) {
            if (!this.#restored.includes(setting))
                this.#restored.push(setting);
            const { key, value } = this.#keyAndValue(setting);
            this.#save(key, value);
        }
    }
    /**
     * Save all user settings to local storage.
     * @returns {void}
     */
    saveAllSettings() {
        this.#valSettings.forEach((s) => this.saveSetting(s));
    }
    /**
     * Get saved value for given setting.
     * @param {string} setting The setting.
     * @returns {any} Saved value
     */
    savedSetting(setting) {
        let value = null;
        if (this.#valSettings.includes(setting) && this.#canUseLocalStorage()) {
            const key = this.#keyTobeUsed(setting);
            const savedStr = localStorage.getItem(key);
            if (typeof savedStr === 'string' && savedStr !== '') {
                value = JSON.parse(savedStr);
            }
        }
        return value;
    }
    /**
     * Get saved all user settings.
     * @returns {IdsDataGridSaveSettings} Saved value
     */
    savedAllSettings() {
        return Object.fromEntries(Object.entries(this.settings).map(([k, v]) => [k, this.savedSetting(v)]));
    }
    /**
     * Clear the given saved setting from local storage
     * @private
     * @param {string} setting The setting.
     * @param {string} key The unique user key stored with local storage.
     * @returns {void}
     */
    clearSetting(setting, key) {
        if (this.#valSettings.includes(setting) && this.#canUseLocalStorage()) {
            key = key ?? this.#keyTobeUsed(setting);
            const found = Object.keys(localStorage).some((k) => k === key);
            if (found)
                localStorage.removeItem(key);
        }
    }
    /**
     * Clear saved all user settings from local storage.
     * @param {any} userKeys The setting/value.
     * @returns {void}
     */
    clearAllSettings(userKeys = {}) {
        Object.entries(this.settings).forEach(([k, v]) => this.clearSetting(v, userKeys[k]));
    }
    /**
     * Restore given setting.
     * @param {string} setting The setting.
     * @param {any} value The value.
     * @returns {void}
     */
    restoreSetting(setting, value) {
        if (this.#valSettings.includes(setting)) {
            const s = this.settings;
            if (setting === s.activePage)
                this.#restoreActivePage(value);
            if (setting === s.columns)
                this.#restoreColumns(value);
            if (setting === s.filter)
                this.#restoreFilter(value);
            if (setting === s.pageSize)
                this.#restorePageSize(value);
            if (setting === s.rowHeight)
                this.#restoreRowHeight(value);
            if (setting === s.sortOrder)
                this.#restoreSortOrder(value);
        }
    }
    /**
     * Restore saved all user settings from local storage.
     * @param {IdsDataGridSaveSettings} userSettings The setting/value.
     * @returns {void}
     */
    restoreAllSettings(userSettings = {}) {
        Object.entries(this.settings).forEach(([k, v]) => this.restoreSetting(v, userSettings[k]));
    }
    /**
     * Restore given user setting.
     * @private
     * @param {string} setting The setting.
     * @param {any} value The value.
     * @param {Function} callback The callback function.
     * @returns {void}
     */
    #restoreUserSetting(setting, value, callback) {
        if (!this.#restored.includes(setting) && typeof value !== 'undefined' && value !== null) {
            this.#saveMode = false;
            callback();
            this.#saveMode = true;
            this.#restored.push(setting);
        }
    }
    /**
     * Restore active page.
     * @param {number | null} value The value.
     * @returns {void}
     */
    #restoreActivePage(value = this.savedSetting(this.settings.activePage)) {
        this.#restoreUserSetting(this.settings.activePage, value, () => {
            this.pageNumber = value;
        });
    }
    /**
     * Restore columns.
     * @param {IdsDataGridColumn[] | null} value The value.
     * @returns {void}
     */
    #restoreColumns(value = this.savedSetting(this.settings.columns)) {
        const props = [
            'cellSelectedCssPart',
            'click',
            'cssPart',
            'disabled',
            'filterType',
            'formatter',
            'isChecked',
            'tooltipCssPart'
        ];
        const adjust = (column) => {
            const orgColumn = this.columnDataById(column.id);
            props.forEach((prop) => {
                if (!column[prop] && orgColumn[prop])
                    column[prop] = orgColumn[prop];
            });
        };
        value?.forEach((v) => adjust(v));
        this.#restoreUserSetting(this.settings.columns, value, () => {
            this.columns = value;
        });
    }
    /**
     * Restore filter.
     * @param {IdsDataGridFilterConditions[] | null} value The value.
     * @returns {void}
     */
    #restoreFilter(value = this.savedSetting(this.settings.filter)) {
        this.#restoreUserSetting(this.settings.filter, value, () => {
            this.applyFilter(value);
        });
    }
    /**
     * Restore Page size.
     * @param {number | null} value The value.
     * @returns {void}
     */
    #restorePageSize(value = this.savedSetting(this.settings.pageSize)) {
        this.#restoreUserSetting(this.settings.pageSize, value, () => {
            this.pageSize = value;
        });
    }
    /**
     * Restore row height.
     * @param {string | null} value The value.
     * @returns {void}
     */
    #restoreRowHeight(value = this.savedSetting(this.settings.rowHeight)) {
        this.#restoreUserSetting(this.settings.rowHeight, value, () => {
            this.rowHeight = value;
        });
    }
    /**
     * Restore sort order.
     * @param {{ id: string, ascending: boolean } | null} value The value.
     * @returns {void}
     */
    #restoreSortOrder(value = this.savedSetting(this.settings.sortOrder)) {
        const { id, ascending } = value || {};
        this.#restoreUserSetting(this.settings.sortOrder, value, () => {
            this.setSortColumn(id, ascending);
        });
    }
    /**
     * Sets to save user settings.
     * @returns {void}
     */
    saveSettings() {
        const grid = this;
        if (!this.#saveMode || !grid.initialized || !grid.data?.length)
            return;
        // Collect current settings
        const userSettings = Object.fromEntries(Object.entries(this.settings).map(([k, v]) => [k, this.#keyAndValue(v).value]));
        // Fires after settings are changed in some way
        this.triggerEvent('settingschanged', this, {
            bubbles: true,
            detail: { elem: this, settings: userSettings }
        });
        // Save all user settings
        if (this.saveUserSettings) {
            this.saveAllSettings();
            return;
        }
        // Save each individuals
        if (this.saveActivePage)
            this.saveSetting(this.settings.activePage);
        if (this.saveColumns)
            this.saveSetting(this.settings.columns);
        if (this.saveFilter)
            this.saveSetting(this.settings.filter);
        if (this.savePageSize)
            this.saveSetting(this.settings.pageSize);
        if (this.saveRowHeight)
            this.saveSetting(this.settings.rowHeight);
        if (this.saveSortOrder)
            this.saveSetting(this.settings.sortOrder);
    }
    /**
     * Handle all save settings events
     * @returns {void}
     */
    attachSaveSettingsEventHandlers() {
        const grid = this;
        this.offEvent('pagenumberchange.data-grid-save-settings');
        this.onEvent('pagenumberchange.data-grid-save-settings', grid.pager, () => {
            this.saveSettings();
        });
        this.offEvent('pagesizechange.data-grid-save-settings');
        this.onEvent('pagesizechange.data-grid-save-settings', grid.pager, () => {
            this.saveSettings();
        });
    }
};
export default IdsDataGridSaveSettingsMixin;
//# sourceMappingURL=ids-data-grid-save-settings-mixin.js.map