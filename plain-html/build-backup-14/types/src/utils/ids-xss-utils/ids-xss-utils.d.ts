/**
 * Remove console methods
 * @private
 * @param {string} html HTML in string form
 * @returns {string} the modified value
 */
export declare function sanitizeConsoleMethods(html: string | any): any;
/**
 * Remove Script tags and all onXXX functions
 * @private
 * @param {string} html HTML in string form
 * @returns {string} the modified value
 */
export declare function sanitizeHTML(html: string): string;
/**
 * Takes a string and removes all html tags
 * @param {string} str The string to parse
 * @returns {string} The string minus html tags.
 */
export declare function stripHTML(str: string): string;
/**
 * Remove all html tags except for the ones specified.
 * For example: White list to a specific set of accepted tags.
 * @param {string | number} html HTML in string form
 * @param {string} allowed Comma seperated string of allowed tags e.g. '<b><i><p>''
 * @returns {string} the modified value
 */
export declare function stripTags(html: string | number, allowed?: string): string | number;
/**
 * Un-escapes HTML, replacing encoded symbols with special characters.
 * Symbols taken from https://bit.ly/1iVkGlc
 * @private
 * @param {string} value HTML in string form
 * @returns {string} the modified value
 */
export declare function unescapeHTML(value: any): any;
/**
 * Escapes HTML, replacing special characters with encoded symbols.
 * Symbols taken from https://bit.ly/1iVkGlc
 * @private
 * @param {string} unsafe HTML in string form
 * @returns {string} the modified value
 */
export declare function escapeHTML(unsafe?: string): string;
