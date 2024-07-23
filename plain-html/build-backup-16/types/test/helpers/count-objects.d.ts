/**
 * Count the objects looking for memory leaks.
 * @param {any} page any the puppeteer page
 * @returns {any} numberOfObjects page handler
 */
declare const countObjects: (page: any) => Promise<any>;
export default countObjects;
