/**
 * Get list of path elements for given event.
 * @param  {HTMLElementEvent<HTMLElement[]>} e The event.
 * @returns {HTMLElement[]} List of path element.
 */
export function eventPath(e) {
    const path = e.composedPath() || [];
    return !path.length ? (e.orignPath || []) : path;
}
/**
 * Find element by selector in given event path.
 * @param  {HTMLElement[]} path List of path element.
 * @param  {string} selector The selector to find element in path list.
 * @returns {HTMLElement|undefined} Found element.
 */
export function findInPath(path, selector) {
    return path?.find((elem) => elem?.matches?.(selector));
}
//# sourceMappingURL=ids-event-path-utils.js.map