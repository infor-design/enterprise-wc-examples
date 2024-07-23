import { IdsMaskOptions } from './ids-mask-common';
/**
 * @class MaskAPI
 */
declare class MaskAPI {
    /**
     * Process a string against the masking algorithm
     * @param {string} rawValue the original, unmasked value
     * @param {object} [opts] process options
     * @returns {object} containing the processed mask along with some meta-data
     */
    process(rawValue: string, opts?: IdsMaskOptions): any;
    /**
     * Processes a raw string value against a masking algorithm and removes unfavorable chracters.
     * @private
     * @param {string} rawValue incoming full text string to process.
     * @param {object} maskObj containing the mask to be used for modifying the raw value,
     *  along with some meta-data calculated about the mask
     * @param {object} [settings] incoming settings for mask parsing.
     * @returns {object} containing the conformation result and some meta-data
     */
    conformToMask(rawValue: string, maskObj: any, settings: any): {
        caretPos: any;
        caretTrapIndexes: any;
        conformedValue: string;
        charactersRejected: boolean;
        placeholder: any;
        placeholderChar: any;
        maskResult: boolean;
    };
    /**
     * Detects Caret Traps inside of a Mask Array and identifies them with a rich object
     * @private
     * @param {Array<string|RegExp>} mask the mask being checked
     * @returns {object} containing a modified Mask array without caret traps, and an array of
     *  indices with locations of the caret traps.
     */
    processCaretTraps(mask: any): {
        maskWithoutCaretTraps: any;
        indexes: any[];
    };
    /**
     * Converts an array-based mask into a placeholder string.
     * @private
     * @param {Array<string|RegExp>} mask - contains string "literal" characters and Regex matchers.
     * @param {string} placeholderChar - a character that will be used as the placeholder.
     * @returns {string} representing the placeholder
     */
    convertMaskToPlaceholder(mask: Array<string | RegExp>, placeholderChar?: string): string;
    /**
     * Takes an index representing a caret and changes it based on mask modifications
     * @param {object} opts information about the caret placement.
     * @returns {number} the index of the text caret.
     */
    adjustCaretPosition(opts: any): any;
    /**
     * Gets the safe raw value of an input field
     * @param {any} inputValue the original value that came from an input field or other source
     * @returns {string} the string-ified version of the original value
     */
    getSafeRawValue(inputValue: any): string;
}
export default MaskAPI;
