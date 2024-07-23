/**
 * @typedef TranslationPoint
 * @type {object}
 * @property {number} x? x-offset
 * @property {number} y? y-offset
 * @property {number} z? z-offset
 */
/**
 * Gets computed translate values from style prop; adapted from:
 * https://zellwk.com/blog/css-translate-values-in-javascript/
 * @param {HTMLElement} element element to grab translation point from it's styles with
 * @returns {TranslationPoint} translation point if available
 */
export default function getElTranslatePoint(element: any): any;
