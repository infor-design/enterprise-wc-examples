/**
 * Check if given html is word format
 * @param {string} content The html
 * @returns {boolean} True, if has word format
 */
export declare function isWordFormat(content: string): boolean;
/**
 * Clean word format for given html
 * @param {string} content The html
 * @returns {string} The cleaned html
 */
export declare function cleanWordHtml(content: string): string;
/**
 * Strip given styles
 * @private
 * @param {string} content The html
 * @param {RegExp} styleStripper The RegExp
 * @returns {string} The cleaned html
 */
export declare function stripStyles(content: string, styleStripper: RegExp): string;
/**
 * Strip given attribute
 * @private
 * @param {string} content The html
 * @param {string} attribute The attribute
 * @param {RegExp} attributeStripper The RegExp
 * @returns {string} The cleaned html
 */
export declare function stripAttribute(content: string, attribute: string, attributeStripper: RegExp): string;
/**
 * Clean given html
 * @private
 * @param {string} content The html
 * @returns {string} The cleaned html
 */
export declare function cleanHtml(content: string): string;
/**
 * Trim out the editor spaces for comparison.
 * @private
 * @param {string} content The html.
 * @returns {string} The trimmed content.
 */
export declare function trimContent(content: string): string;
