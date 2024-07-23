/**
 * Extends event type with path.
 */
export type HTMLElementEvent<T extends HTMLElement[]> = Event & {
    path?: T;
    orignPath?: T;
};
/**
 * Get list of path elements for given event.
 * @param  {HTMLElementEvent<HTMLElement[]>} e The event.
 * @returns {HTMLElement[]} List of path element.
 */
export declare function eventPath(e: HTMLElementEvent<HTMLElement[]>): HTMLElement[];
/**
 * Find element by selector in given event path.
 * @param  {HTMLElement[]} path List of path element.
 * @param  {string} selector The selector to find element in path list.
 * @returns {HTMLElement|undefined} Found element.
 */
export declare function findInPath(path: HTMLElement[], selector: string): HTMLElement | undefined;
