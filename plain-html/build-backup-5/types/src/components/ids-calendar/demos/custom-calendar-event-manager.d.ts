import { CalendarEventTypeData } from '../ids-calendar-event';
import IdsCustomCalendarEvent from './custom-calendar-event';
export default class CustomCalendarEventManager {
    #private;
    /**
     * Calculates the event Y_OFFSET value to set the event pill top position
     * @param {IdsCustomCalendarEvent} calendarEvent IdsCustomCalendarEvent
     * @returns {number} yOffset
     */
    generateYOffset(calendarEvent: IdsCustomCalendarEvent): number;
    /**
     * Checks if the event pills exceed the MAX_EVENT_COUNT in a day cell
     * @param {IdsCustomCalendarEvent} calendarEvent IdsCustomCalendarEvent
     * @returns {boolean} isEventOverflowing
     */
    isEventOverflowing(calendarEvent: IdsCustomCalendarEvent): boolean;
    /**
     * Manage event pill position vetically based on the number of attributes displayed in first event pill
     * @param {string} dateKey generated date key
     * @param {number} eventOrder Events order
     * @param {CalendarEventTypeData} eventType Event
     */
    manageEventPillsPosition(dateKey: string, eventOrder: number, eventType: CalendarEventTypeData | any): void;
}
