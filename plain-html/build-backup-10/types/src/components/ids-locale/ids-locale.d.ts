/**
 * A mixin that adds locale functionality to components
 * @param {any} superclass Accepts a superclass and creates a new subclass from it
 * @returns {any} The extended object
 */
declare class IdsLocale {
    #private;
    state?: any;
    dateFormatter?: Intl.DateTimeFormat;
    constructor();
    /**
     * Set the Defaut language and locale
     */
    setDefaults(): Promise<void>;
    /**
     * Load a locale or message file
     * @private
     * @param {string} value The script file name
     * @returns {Promise} A promise that will resolve when complete
     */
    loadLanguageScript(value: string): Promise<any>;
    /**
     * Sets the dir (direction) tag on an element
     * @param {HTMLElement} elem The element to set it on.
     * @param {string} value The value to check
     */
    updateDirectionAttribute(elem: HTMLElement, value: string): void;
    /**
     * Sets the lang (langauge) tag on an element
     * @param {HTMLElement} elem The element to set it on.
     * @param {string} value The value to check
     */
    setDocumentLangAttribute(elem: HTMLElement, value: string): void;
    /** Reset the language attribute to clean up */
    removeLangAttribute(): void;
    /**
     * Set the language for a component
     * @param {string} value The language string value
     */
    set language(value: string | any);
    /**
     * Get the language data
     * @returns {object} The language data
     */
    get language(): any;
    /**
     * Set the language for a component and wait for it to finish (async)
     * @param {string} value The language string value
     */
    setLanguage(value: string): Promise<void>;
    /**
     * Maps a language value to a more correct one
     * @private
     * @param {string} value the starting language string
     * @returns {string} the updated language string
     */
    correctLanguage(value: string): string;
    /**
     * Takes a translation key and returns the translation in the current locale
     * @param {string} key  The key to search for on the string
     * @param {object} [options] Supports showBrackets and maybe more in the future
     * @returns {string|undefined} a translated string, or nothing, depending on configuration
     */
    translate(key: string, options?: any): any;
    /**
     * Add an object full of translations to the given locale.
     * @param {string} lang The language to add them to.
     * @param {object} messages Strings in the form of
     */
    extendTranslations(lang: string, messages: any): void;
    /**
     * Load a locale file
     * @private
     * @param {string} value The script file name
     * @returns {Promise} A promise that will resolve when complete
     */
    loadLocaleScript(value: string): Promise<any>;
    /**
     * Set the locale for a component
     * @param {string} value The locale string value
     */
    set locale(value: string);
    /**
     * Get the locale data
     * @returns {object} The language data
     */
    get locale(): any;
    /**
     * Set the locale for a component and wait for it to finish (async)
     * @param {string} value The locale string value
     */
    setLocale(value: string | null | undefined): Promise<void>;
    /**
     * Format a number using the locale information
     * @param {string} value the starting locale string
     * @param {object} [options] the objects to use for formatting
     * @returns {string} the formatted number
     */
    formatNumber(value: any, options?: any): string;
    /**
     * Takes a locale formatted number string and converts it back to a real number object.
     * @param {string} input  The source number normally as a string.
     * @param {object} options Any special options to pass in such as the original locale
     * @returns {number} The number as an actual Number type unless the number
     * is a big int (19 significant digits), in this case a string will be returned
     */
    parseNumber(input: string, options?: any): number | string;
    /**
     * Convert a number in arabic/chinese or hindi numerals to an "english" number.
     * @param {string} string The string number in arabic/chinese or hindi
     * @returns {number} The english number.
     */
    convertNumberToEnglish(string: string): number;
    /**
     * Formats a date object using the current locale or specified settings
     * to a string for Internationalization
     * @param {Date} value The date to show in the current locale.
     * @param {object} options Additional date formatting settings.
     * @returns {string} the formatted date.
     */
    formatDate(value: any, options?: any): string;
    /**
     * Convert the two digit year year to the correct four digit year.
     * @param {number} twoDigitYear The two digit year.
     * @returns {number} Converted 3 digit year.
     */
    twoToFourDigitYear(twoDigitYear: any): any;
    /**
     * Formats a number into the locale hour format
     * @param {number} hour The hours to show in the current locale
     * @param {object} options Additional date formatting settings
     * @returns {string} the hours in either 24 h or 12 h format
     */
    formatHour(hour: any, options?: any): string;
    /**
     * Formats a number into the locales hour format.
     * @param {number} startHour The hours to show in the current locale.
     * @param {number} endHour The hours to show in the current locale.
     * @param {object} options Additional date formatting settings.
     * @returns {string} the hours in either 24 h or 12 h format
     */
    formatHourRange(startHour: number, endHour: number, options: any): string;
    /**
     * Returns whether or not the default calendar is islamic
     * @param {string} locale The locale to check if not the current
     * @returns {boolean} True if this locale uses islamic as the primary calendar
     */
    isIslamic(locale?: string): boolean;
    /**
     * Describes whether or not this locale is one that is read in "right-to-left" fashion
     * @param {string} language The language to check if not the current
     * @returns {boolean} Whether or not this locale is "right-to-left"
     */
    isRTL(language?: string): boolean;
    /**
     * Takes a formatted date string and parses back it into a date object
     * @param {string} dateString The string to parse in the current format
     * @param {string|object} options Additional options like locale and dateFormat
     * @param {boolean} isStrict If true missing date parts will be considered invalid. If false the current month/day.
     * @returns {Date | Array | undefined} The date object it could calculate from the string
     */
    parseDate(dateString: string, options?: any, isStrict?: boolean): number[] | Date | undefined;
    /**
     * Shortcut function to get the default or any calendar
     * @param {string} locale The locale to use
     * @param {string} name the name of the calendar (fx: "gregorian", "islamic-umalqura")
     * @returns {object} containing calendar data
     */
    calendar(locale?: string, name?: string): any;
    /**
     * Shortcut function to get the current locales numbers
     * @param {string} locale The locale to use
     * @returns {object} containing calendar data for numbers
     */
    numbers(locale?: string): any;
}
export default IdsLocale;
