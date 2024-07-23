import IdsCalendarEvent, { CalendarEventTypeData } from '../ids-calendar-event';
interface CustomCalendarEventTypeData extends CalendarEventTypeData {
    attrs?: [];
}
export default class IdsCustomCalendarEvent extends IdsCalendarEvent {
    #private;
    eventTypesJson: CustomCalendarEventTypeData[] | any;
    eventPillHeight: string;
    constructor();
    /**
     * Invoked when ids-custom-calendar-event is added to the DOM
     */
    connectedCallback(): void;
    template(): string;
    /**
     * Creates template for calendar event content
     * @returns {string} content html
     */
    contentTemplate(): string;
    /**
     * Sets extra css classes to calendar event
     * @param {Array<string>} value array of css classes
     */
    set cssClass(value: string[]);
    /**
     * Gets the start and end time format for each event
     * @param {Date} start Event Start Date
     * @param {Date} end Event End Date
     * @returns {string} Formatted Hour Range
     */
    getHourRange(start: Date, end: Date): string;
}
export {};
