/**
 * Deep clone an array creating a new array
 * @param {any} this The array to clone
 * @param {Array} arr The array to clone
 * @param {Function} fn The functional call back used for recursion
 * @returns {Array} The array's clone
 */
export declare function deepCloneArray(this: any, arr: any, fn?: any): any[];
/**
 * Deep clone an object creating a new object
 * @param {object|Array} obj The object or array to clone
 * @returns {object|Array} The object/array's clone
 */
export declare function deepClone(obj: any): any;
