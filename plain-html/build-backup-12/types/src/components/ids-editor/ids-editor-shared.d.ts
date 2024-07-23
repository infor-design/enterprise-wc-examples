export declare const VIEWS: string[];
export declare const PARAGRAPH_SEPARATORS: string[];
export declare const BLOCK_ELEMENTS: string[];
export declare const FONT_SIZES: string[];
export declare const CLASSES: {
    hidden: string;
    labelRequired: string;
};
export declare const EDITOR_DEFAULTS: {
    disabled: boolean;
    label: string;
    labelHidden: boolean;
    labelRequired: boolean;
    modals: {
        hyperlink: {
            url: string;
            classes: string;
            targets: ({
                text: string;
                value: string;
                selected?: undefined;
            } | {
                text: string;
                value: string;
                selected: boolean;
            })[];
            isClickable: boolean;
            showIsClickable: boolean;
        };
        insertimage: {
            url: string;
            alt: string;
        };
    };
    paragraphSeparator: string;
    pasteAsPlainText: boolean;
    readonly: boolean;
    sourceFormatter: boolean;
    view: string;
};
export declare const EDITOR_ATTRIBUTES: string[];
/**
 * Query selector in shadow root or given element.
 * @param {string} s The selector.
 * @param {ShadowRoot|HTMLElement} root The root element.
 * @returns {any} First matched selector element.
 */
export declare function qs(s: string, root: ShadowRoot | HTMLElement | null): any;
/**
 * Query selector all in shadow root or given element.
 * @param {string} s The selector.
 * @param {ShadowRoot|HTMLElement} root The root element.
 * @returns {Array<any>} List of elements that matched.
 */
export declare function qsAll(s: string, root: ShadowRoot | HTMLElement | null): Array<any>;
/**
 * Convert rgb to hex color value.
 * @param {string} rgb The rgb value
 * @returns {string} the hex value
 */
export declare function rgbToHex(rgb: string): string;
