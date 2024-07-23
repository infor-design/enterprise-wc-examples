import eventsJSON from '../../../assets/data/events.json';
import eventTypesJSON from '../../../assets/data/event-types.json';
const eventsURL = eventsJSON;
const eventTypesURL = eventTypesJSON;
/**
 * Fetch events.json
 * @returns {Promise} events.json content
 */
function getCalendarEvents() {
    return fetch(eventsURL).then((res) => res.json());
}
/**
 * Fetch event-types.json
 * @returns {Promise} event-types.json content
 */
function getEventTypes() {
    return fetch(eventTypesURL).then((res) => res.json());
}
document.addEventListener('DOMContentLoaded', async () => {
    const calendar = document.querySelector('ids-calendar');
    const addEventMenu = document.querySelector('#add-event');
    // Set event types
    calendar.eventTypesData = await getEventTypes();
    calendar.eventsData = await getCalendarEvents();
    addEventMenu?.addEventListener('selected', (evt) => {
        // Mock user defined id
        const id = Date.now().toString() + Math.floor(Math.random() * 100);
        switch (evt.detail.value) {
            case 'add-modal':
                calendar.createNewEvent(id, true);
                break;
            case 'add-api':
                calendar.createNewEvent(id, false);
                break;
            case 'clear':
                calendar.clearEvents();
                break;
            default:
                break;
        }
    });
});
//# sourceMappingURL=example.js.map