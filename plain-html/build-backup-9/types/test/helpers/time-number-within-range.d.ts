/**
 * Checks that a number representing a time's "seconds|minutes" parameters is within a valid range
 * @param {number} val the value to check
 * @param {number} min the minimum range
 * @param {number} max the maximum range
 * @returns {boolean} true if the value is within range
 */
export declare const timeNumberWithinRange: (val: number, min: number, max: number) => Promise<boolean>;
