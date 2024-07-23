/**
 * Default settings
 */
export declare const DEFAULTS: any;
export declare const AUDIBLE_TIMEOUT = 100;
export declare const ATTRIBUTE_MESSAGE_ID = "message-id";
export declare const ATTRIBUTE_TOAST_DESTROY_ON_COMPLETE = "destroy-on-complete";
export declare const TOAST_MESSAGE_CLASSES: {
    start: string;
    end: string;
};
export declare const POSITIONS: string[];
export declare const EVENTS: {
    addMessage: string;
    removeMessage: string;
    savePosition: string;
    clearPosition: string;
    removeContainer: string;
};
/**
 * Get the id to be use with current container.
 * @private
 * @param {string} uniqueId The uniqueId.
 * @param {string} suffix Optional suffix string to make the id more unique.
 * @param {string} prefix Optional prefix string to make the id more unique.
 * @returns {string} The id.
 */
export declare function id(uniqueId?: any, suffix?: string, prefix?: undefined): any;
/**
 * Get the Message ID to be use with current message in current container.
 * @private
 * @param {string} uniqueId The uniqueId.
 * @param {string} idSegment The id part with out the uniqueId.
 * @returns {string} The message id.
 */
export declare function messageId(uniqueId: any, idSegment: any): string;
/**
 * Get the value for given slot.
 * @private
 * @param {object} root The shadow root.
 * @param {string} slotName The slot name.
 * @returns {string} The slot val.
 */
export declare function slotVal(root: any, slotName: string): any;
/**
 * Get the boolean value for given attribute.
 * @param {HTMLElement} elem The element.
 * @param {string} attr The attribute name to get the value.
 * @returns {boolean} The value
 */
export declare function getBoolVal(elem: any, attr: string): boolean;
/**
 * Check the given value is boolean.
 * @param {boolean|string} val The value.
 * @returns {boolean} true if the value boolean
 */
export declare function isBool(val: boolean | string | null): boolean;
