import eventsJSON from '../../../assets/data/events.json';
import eventTypesJSON from '../../../assets/data/event-types.json';
const eventsURL = eventsJSON;
const eventTypesURL = eventTypesJSON;
/**
 * Fetch event-types.json
 * @returns {Promise} event-types.json content
 */
function getEventTypes() {
    return fetch(eventTypesURL).then((res) => res.json());
}
/**
 * Fetch event-types.json
 * @returns {Promise} event-types.json content
 */
function getEvents() {
    return fetch(eventsURL).then((res) => res.json());
}
document.addEventListener('DOMContentLoaded', async () => {
    const monthView = document.querySelector('ids-month-view');
    monthView?.addEventListener('dayselected', (e) => {
        console.info('Day Selected', e.detail.date);
    });
    monthView.eventTypesData = await getEventTypes();
    monthView.eventsData = await getEvents();
});
//# sourceMappingURL=example.js.map