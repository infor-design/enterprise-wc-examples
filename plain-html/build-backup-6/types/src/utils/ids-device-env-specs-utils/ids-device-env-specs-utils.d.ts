/**
 * Return an object with some browser information. Used primary for the ids-about component.
 * You avoid using browser detection for anything else.
 * @returns {object} browser device env specs
 */
export declare function getSpecs(): {
    platform: any;
    isMobile: boolean;
    browser: string;
    browserVersion: string;
    idsVersion: string;
    browserLanguage: string;
};
