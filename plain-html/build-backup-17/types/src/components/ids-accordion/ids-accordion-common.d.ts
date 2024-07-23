export declare const ALIGNMENT_TYPES: string[];
export declare const applyContentAlignmentClass: (cl: {
    contains: (arg0: string) => any;
    remove: (arg0: string) => void;
    add: (arg0: string) => void;
}, thisAlignment: string | null) => void;
/**
 * @param {DOMTokenList} cl the classlist of an IdsElement's `container`
 * @param {boolean} val true if this component should be displayed with RTL styles
 * @returns {void}
 */
export declare const refreshRTLStyle: (cl: DOMTokenList, val: boolean) => void;
