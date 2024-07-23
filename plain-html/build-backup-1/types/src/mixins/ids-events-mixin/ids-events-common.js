/**
 * Returns an event's "base" event without it's namespace
 * @param {string} fullEventName the full event name
 * @returns {string} the base event name
 */
export function getEventBaseName(fullEventName) {
    return fullEventName.split('.')[0];
}
//# sourceMappingURL=ids-events-common.js.map