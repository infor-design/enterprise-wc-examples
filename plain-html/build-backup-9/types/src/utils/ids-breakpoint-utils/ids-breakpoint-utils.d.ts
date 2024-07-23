export type Breakpoints = {
    [index: string]: string;
};
export declare const breakpoints: Breakpoints;
/**
 * Check for max width media query.
 * @param {string} size size of the breakpoint
 * @returns {MediaQueryList} media query
 * @memberof IdsHidden
 */
export declare function isWidthBelow(size: keyof Breakpoints): MediaQueryList;
/**
 * Check for min width media query.
 * @param {string} size size of the breakpoint
 * @returns {MediaQueryList} media query
 * @memberof IdsHidden
 */
export declare function isWidthAbove(size: keyof Breakpoints): MediaQueryList;
