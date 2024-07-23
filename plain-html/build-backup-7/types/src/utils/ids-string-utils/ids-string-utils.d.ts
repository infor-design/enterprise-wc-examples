/**
 * Convert a string in presumed kebab case to camel case
 * @param {string} str [description]
 * @returns {string} The return string
 */
export declare function camelCase(str: string): string;
/**
 * Convert a string into kebab case
 * @param {string} str The value to be converted
 * @returns {string} The return string
 */
export declare function kebabCase(str: string): string;
/**
 * Removes all duplicate characters from a string and returns another string
 * containing ALL unique characters.  Useful for construction of REGEX objects
 * with characters from an input field, etc.
 * @param {string} str The string to process
 * @returns {string} The processed string
 */
export declare function removeDuplicates(str: string): string;
/**
 * Removes all newLines from a string and replaces them with spaces
 * @param {string} str the incoming string to format
 * @returns {string} the string with newline characters replaced
 */
export declare function removeNewLines(str: string): string | null;
/**
 * Convert an attribute string into a boolean representation
 * @param {string|boolean|null} val string value from the component attribute
 * @returns {boolean} The return boolean
 */
export declare function stringToBool(val: string | boolean | null | undefined): boolean;
/**
 * Converts an attribute string into a number, or returns NaN
 * @param {string|number|any} val string value from the component attribute
 * @returns {number} The return boolean
 */
export declare function stringToNumber(val?: string | number | any): number;
/**
 * Inject template variables in a string
 * @param {string} str The string to inject into
 * @param {any} obj The string to inject into
 * @returns {string} The return string
 */
export declare function injectTemplate(str: string, obj: any): string;
/**
 * Combines classes and considers truthy/falsy +
 * doesn't pollute the attribs/DOM
 * @param {...any} classes classes/expressions
 * @returns {string} ` class="c1 c2..."` || ""
 */
export declare function buildClassAttrib(...classes: any): string;
/**
 * Checks a keycode value and determines if it belongs to a printable character
 * @private
 * @param {number} e the event to inspect
 * @returns {boolean} Returns true if the key is a printable one.
 */
export declare function isPrintable(e: KeyboardEvent | any): boolean;
/**
 * Escape user input that will be treated as a literal string.
 * This prevents incorrect RegExp matching when converting user input.
 * @param {string} s string to process
 * @returns {string} string after escaping
 */
export declare function escapeRegExp(s: string): string;
