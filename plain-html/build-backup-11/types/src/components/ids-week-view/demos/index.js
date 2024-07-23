import '../ids-week-view';
import '../../ids-calendar/ids-calendar-event';
import '../../ids-menu-button/ids-menu-button';
import '../../ids-popup-menu/ids-popup-menu';
import eventsJSON from '../../../assets/data/events.json';
import eventTypesJSON from '../../../assets/data/event-types.json';
const eventsURL = eventsJSON;
const eventTypesURL = eventTypesJSON;
/**
 * Fetch events.json
 * @param {Date} startDate start date of week
 * @param {Date} endDate end date of week
 * @returns {Promise} events.json content
 */
function getEventsWithinWeek(startDate, endDate) {
    return fetch(eventsURL)
        .then((res) => res.json())
        .then((events) => {
        const weekStart = startDate.getTime();
        const weekEnd = endDate.getTime();
        const weekEvents = events.filter((event) => {
            const eventStart = new Date(event.starts).getTime();
            return weekStart <= eventStart && eventStart < weekEnd;
        });
        return weekEvents;
    });
}
/**
 * Fetch event-types.json
 * @returns {Promise} event-types.json content
 */
function getEventTypes() {
    return fetch(eventTypesURL).then((res) => res.json());
}
document.addEventListener('DOMContentLoaded', async () => {
    const weekView = document.querySelector('ids-week-view');
    if (!weekView)
        return;
    // Set event types
    weekView.eventTypesData = await getEventTypes();
    weekView.beforeEventsRender = (startDate, endDate) => {
        const starts = startDate;
        const ends = endDate;
        return getEventsWithinWeek(starts, ends);
    };
});
//# sourceMappingURL=index.js.map