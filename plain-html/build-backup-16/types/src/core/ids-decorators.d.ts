/**
 * Custom Element Decorator
 * @param {string} name The custom element name
 * @returns {Function} The function that did the decorating
 */
export declare function customElement(name: string): (target: any) => void;
/**
 * Styles Decorator
 * @param {string} cssStyles The css stringified stylesheet
 * @returns {Function} The function that did the decorating
 */
export declare function scss(cssStyles: string): (target: any) => void;
