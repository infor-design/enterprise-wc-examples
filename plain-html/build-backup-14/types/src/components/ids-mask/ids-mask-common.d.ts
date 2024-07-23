/**
 * Contains various Mask-related utilities, settings, masking functions, etc.
 */
/**
 * IdsMaskOptions are POJOs that contain different properties based on the mask type.
 * Mask functions can be completely user-defined, so the options need to be flexible.
 */
export type IdsMaskOptions = Record<string, any>;
export type IdsMaskTypes = {
    /** Adds a mask to the input */
    mask: Array<RegExp | string> | CallableFunction | string;
    /** Adds options that are considered by a mask function when generating a mask */
    maskOptions?: IdsMaskOptions;
    /** If true, displays the literals and fillable space of the mask as a placeholder inside the field */
    maskGuide?: boolean;
    /** If true, combined with `maskGuide`, attempts to keep previously-entered input from shifting within the field */
    maskRetainPositions?: boolean;
};
/**
 * @property {string} EMPTY_STRING just an empty string
 */
export declare const EMPTY_STRING = "";
/**
 * @property {string} PLACEHOLDER_CHAR the default placeholder used in guides
 */
export declare const PLACEHOLDER_CHAR = "_";
/**
 * @property {string} CARET_TRAP the string of characters representing a caret trap in mask arrays
 */
export declare const CARET_TRAP = "[]";
/**
 * @property {RegExp} NON_DIGITS_REGEX regular expression matching non-digit characters
 */
export declare const NON_DIGITS_REGEX: RegExp;
/**
 * @property {RegExp} DIGITS_REGEX regular expression matching digit characters
 */
export declare const DIGITS_REGEX: RegExp;
/**
 * @property {RegExp} ALPHAS_REGEX regular expression matching alphabetic, non-special characters
 */
export declare const ALPHAS_REGEX: RegExp;
/**
 * @property {RegExp} ANY_REGEX regular expression matching any non-special characters
 */
export declare const ANY_REGEX: RegExp;
/**
 * Default options that get passed for the `maskAPI.conformToMask()` method.
 * @property {object} DEFAULT_CONFORM_OPTIONS default options
 */
export declare const DEFAULT_CONFORM_OPTIONS: {
    caretTrapIndexes: never[];
    guide: boolean;
    previousMaskResult: string;
    placeholderChar: string;
    placeholder: string;
    selection: {
        start: number;
    };
    keepCharacterPositions: boolean;
};
/**
 * @param {string} pattern a string containing a pattern that needs parsing
 * @returns {Array<string|RegExp>|undefined} a valid mask or nothing
 */
export declare function convertPatternFromString(pattern: string): (string | RegExp)[] | undefined;
