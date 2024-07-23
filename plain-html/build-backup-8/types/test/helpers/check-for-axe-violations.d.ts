/**
 * Wrapper around `aXe` tests that provides additional console output about the specific aXe violations
 * @param {any} page reference to the puppeteer page
 * @param {Array<string>} disabledRules list of aXe violations to ignore
 */
declare const checkForAxeViolations: (page: any, disabledRules?: Array<string>) => Promise<void>;
export default checkForAxeViolations;
