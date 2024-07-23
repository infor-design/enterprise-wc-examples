import type IdsElement from '../../core/ids-element';
export type IdsPopupElementRef = IdsElement | HTMLElement | SVGElement | null;
declare const CENTER = "center";
declare const DEFAULT_ALIGN_EDGE = "center";
declare const ALIGNMENT_EDGES: string[];
declare const ALIGNMENTS_X: string[];
declare const ALIGNMENTS_Y: string[];
declare const ALIGNMENTS_EDGES_X: string[];
declare const ALIGNMENTS_EDGES_Y: string[];
declare const ANIMATION_STYLES: string[];
declare const ARROW_TYPES: string[];
declare const POSITION_STYLES: string[];
declare const TYPES: string[];
declare const POPUP_PROPERTIES: string[];
declare const POPUP_MAXHEIGHT_PROPNAME = "--ids-popup-maxheight";
/**
 * Defines XY Switch results
 */
export type IdsPopupXYSwitchResult = {
    flip: boolean;
    oppositeEdge: string;
    shouldSwitchXY: boolean;
    targetEdge: string;
    x: number;
    y: number;
};
/**
 * Formats the text value of the `align` attribute.
 * @private
 * @param {string} alignX matches a value from the ALIGNMENTS_X array
 * @param {string} alignY matches a value from the ALIGNMENTS_Y array
 * @param {string} edge matches a value from the ALIGNMENT_EDGES array
 * @returns {string} containing the properly formatted align value
 */
declare function formatAlignAttribute(alignX: string, alignY: string, edge: string): string;
/**
 * Optional callback that can be used to adjust the Popup's placement
 * after all internal adjustments are made.
 * @param {DOMRect} popupRect a Rect object representing the current state of the popup.
 * @returns {object} an adjusted Rect object with "nudged" coordinates.
 */
declare function onPlace(popupRect: DOMRect): DOMRect;
export { CENTER, ALIGNMENT_EDGES, ALIGNMENTS_X, ALIGNMENTS_Y, ALIGNMENTS_EDGES_X, ALIGNMENTS_EDGES_Y, ANIMATION_STYLES, ARROW_TYPES, DEFAULT_ALIGN_EDGE, POSITION_STYLES, TYPES, POPUP_MAXHEIGHT_PROPNAME, POPUP_PROPERTIES, formatAlignAttribute, onPlace };
