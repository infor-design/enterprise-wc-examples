import { IdsMaskOptions } from './ids-mask-common';
export declare const DEFAULT_NUMBER_MASK_OPTIONS: {
    prefix: string;
    suffix: string;
    allowThousandsSeparator: boolean;
    symbols: {
        currency: string;
        decimal: string;
        negative: string;
        thousands: string;
    };
    allowDecimal: boolean;
    decimalLimit: number;
    locale: string;
    requireDecimal: boolean;
    allowNegative: boolean;
    allowLeadingZeros: boolean;
    integerLimit: null;
};
/**
 * Contents returned from Mask Generator functions
 */
type IdsMaskGeneratorResult = {
    mask: Array<string | RegExp>;
    literals?: Array<string>;
    literalRegex?: RegExp;
};
/**
 * Number Mask Function
 * @param {string} rawValue the un-formatted value that will eventually be masked.
 * @param {IdsMaskOptions} options masking options
 * @returns {IdsMaskGeneratorResult} containing a mask that will match a formatted number.
 */
export declare function numberMask(rawValue?: string, options?: IdsMaskOptions): IdsMaskGeneratorResult;
export declare const DEFAULT_DATETIME_MASK_OPTIONS: {
    format: string;
    symbols: {
        timeSeparator: string;
        dayPeriodSeparator: string;
        dateSeparator: string;
    };
};
/**
 * Soho Date Mask Function
 * @param {string} rawValue the un-formatted value that will eventually be masked.
 * @param {IdsMaskOptions} options masking options
 * @returns {IdsMaskGeneratorResult} containing a mask that will match a formatted date,
 * along with extra meta-data about the characters contained.
 */
export declare function dateMask(rawValue?: string, options?: IdsMaskOptions): IdsMaskGeneratorResult;
/**
 * Range Date Mask
 * @param {string} rawValue the un-formatted value that will eventually be masked.
 * @param {IdsMaskOptions} options masking options
 * @returns {IdsMaskGeneratorResult} containing a mask that will match a formatted date,
 */
export declare function rangeDateMask(rawValue?: string, options?: IdsMaskOptions): IdsMaskGeneratorResult;
/**
 * Generates a pipe function that can be applied to a Mask API that will correct
 * shorthand numeric dates.
 * NOTE: DOES NOT WORK FOR DATES WITH ALPHABETIC CONTENT. Do not use this if your
 * dates contain "MMM" or the full month name.
 * @param {object} processResult the results object of a mask process
 * @param {object} processResult.conformedValue the value after being conformed to the mask
 * @param {object} processResult.placeholderChar the placeholder char to use
 * @param {object} processResult.placeholder the placeholder text to use
 * @param {object} options settings for the date pipe function
 * @param {object} options.dateFormat the dateFormat text to use
 * @returns {object} the result of the piping function's changes
 */
export declare function autoCorrectedDatePipe(processResult: {
    conformedValue: string;
    placeholderChar: any;
    placeholder: string;
}, options: {
    dateFormat: string;
}): false | {
    value: any;
    characterIndexes: number[];
};
export {};
