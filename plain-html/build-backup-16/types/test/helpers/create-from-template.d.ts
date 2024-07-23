/**
 * Jest helper function to create a web component with associated markup.
 * @param {HTMLElement} elem the dom element that will be replaced
 * @param {string} innerHTML the template
 * @param {HTMLElement} appendToElem the dom element to append the new component
 * @returns {HTMLElement} the new root dom element
 */
declare const createFromTemplate: (elem: any, innerHTML: string, appendToElem?: any) => any;
export default createFromTemplate;
