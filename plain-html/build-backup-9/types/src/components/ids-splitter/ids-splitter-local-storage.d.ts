/**
 * Saved object type
 */
export type IdsSplitterSavedHostProps = 'align' | 'axis' | 'disabled';
/**
 * Saved object interface
 */
export interface IdsSplitterSaved {
    /** Flag for saved values, can be use or not */
    canRestore?: boolean;
    /** The splitter align */
    align?: string;
    /** The axis used */
    axis?: string;
    /** The disabled state */
    disabled?: boolean;
    /** List of pane sizes */
    sizes?: number[];
}
/**
 * IDS Splitter Local Storage
 * @type {object}
 */
export default class IdsSplitterLocalStorage {
    #private;
    constructor(root: any);
    root: any;
    /**
     * Save position.
     * @private
     * @returns {void}
     */
    savePosition(): void;
    /**
     * Restore the saved position from local storage
     * @private
     * @returns {IdsSplitterSaved|null} The position
     */
    restorePosition(): IdsSplitterSaved | null;
    /**
     * Clear the saved position from local storage
     * @param {string} uniqueId If undefined, will use Internal attached.
     * @returns {void}
     */
    clearPosition(uniqueId?: string): void;
    /**
     * Clear all related saved position from local storage
     * @returns {void}
     */
    clearPositionAll(): void;
    /**
     * Get the id to be use.
     * @param {string} uniqueId The uniqueId.
     * @param {string} suffix Optional suffix string to make the id more unique.
     * @param {string} prefix Optional prefix string to make the id more unique.
     * @returns {string} The id.
     */
    idTobeUse(uniqueId?: any, suffix?: string, prefix?: string): string;
}
