/**
 * Check whether the given object is an object or not.
 * @param {any} obj The object to check.
 * @returns {boolean} true if given object is an object.
 */
export declare function isObject(obj: any): boolean;
/**
 * Check the given object is an object and NOT empty.
 * @param {any} obj The object to check.
 * @returns {boolean} true if given object is an object and NOT empty.
 */
export declare function isObjectAndNotEmpty(obj: any): boolean;
/**
 * Calculates the width to render given text string.
 * @private
 * @param  {object} obj The used object.
 * @param  {string} text The text to render.
 * @param  {string} font The font value.
 * @returns {number} Calculated text width in pixels.
 */
export declare function calculateTextRenderWidth(obj: any, text: string, font?: string): number;
