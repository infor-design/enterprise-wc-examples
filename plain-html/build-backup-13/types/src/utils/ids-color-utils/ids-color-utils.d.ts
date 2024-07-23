/**
 * Converts the provided hex to an RGB(A?) value
 * @private
 * @param {string} hex to set.
 * @param {number} opacity to check.
 * @returns {string} converted rgba
 */
export declare function hexToRgba(hex: string, opacity?: number): string;
/**
 * Converts the provided "built in" human-readable color to an RGB(A?) value
 * @private
 * @param {string} colorName any valid CSS color value, including "built-in".
 * @param {number} [opacity=1] optional opacity value. If included, causes the return value to be RGBA.
 *  If omitted, causes the return value to be RGB.
 * @returns {string} converted rgb(a)
 */
export declare function builtinToRgba(colorName: string, opacity?: number): string;
/**
 * Converts any valid CSS color into an RGB(A?) value
 * @param {string} colorName any valid CSS color
 * @param {number} opacity optional opacity value. If included, causes the return value to be RGBA.
 *  If omitted, causes the return value to be RGB.
 * @returns {string} RGB(A?) value of the original color
 */
export declare function convertColorToRgba(colorName: string, opacity?: number): string;
/**
 * Converts a "status" keyword provided to a color attribute into its corresponding
 * IDS theme color CSS variable.
 * @param {string} statusName the status keyword provided
 * @returns {string} containing the CSS variable name, or the original status if it cannot be corrected
 */
export declare function convertStatusToIDSColor(statusName: string): string;
