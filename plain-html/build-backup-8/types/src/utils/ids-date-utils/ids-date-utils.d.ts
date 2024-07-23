/**
 * Determine whether or not a date is todays date.
 * @param {Date} date The date to check.
 * @returns {boolean} Returns true or false if the compared date is today.
 */
export declare function isTodaysDate(date: Date): boolean;
/**
 * Gets the first day of the week.
 * @param {Date} date The date to check.
 * @param {number} startsOn Day of the week to start on. Sunday is 0, Monday is 1, and so on.
 * @param {boolean} showRange If calendar is showing range view, day of the week should not be counted backwards
 * @returns {Date} Returns first day of the week date.
 */
export declare function firstDayOfWeekDate(date: Date, startsOn?: number, showRange?: boolean): Date;
/**
 * Gets the last day of the week.
 * @param {Date} date The date to check.
 * @param {number} startsOn Day of the week to start on. Sunday is 0, Monday is 1, and so on.
 * @returns {Date} Returns last day of the week date.
 */
export declare function lastDayOfWeekDate(date: Date, startsOn?: number): Date;
/**
 * Get the difference between two dates.
 * @param {Date} first The first date.
 * @param {Date} second The second date.
 * @param {boolean} useHours The different in hours if true, otherways days.
 * @returns {number} The difference between the two dates.
 */
export declare function dateDiff(first: any, second: any, useHours: boolean): number;
/**
 * Get the month difference between two dates.
 * @param {Date} first The first date.
 * @param {Date} second The second date.
 * @returns {number} The difference between the two dates.
 */
export declare function monthDiff(first: Date, second: Date): number;
/**
 * Get the difference in days between two dates.
 * @param {Date} startDate the beginning of the interval
 * @param {Date} endDate the end of the interval
 * @returns {number} number of days
 */
export declare function daysDiff(startDate: any, endDate: any): number;
/**
 * Add a number of units to original date
 * @param {Date | string} date original date.
 * @param {number} number of unit to add to the date.
 * @param {string} unit days
 * @returns {Date} new date after addition.
 */
export declare function addDate(date: Date | string, number: number, unit?: string): any;
/**
 * Subtract a number of units to original date
 * @param {Date | string} date original date.
 * @param {number} number of unit to subtract from the given date.
 * @param {string} unit days
 * @returns {Date} new date after subtraction.
 */
export declare function subtractDate(date: Date | string, number: number, unit?: string): any;
/**
 * Check if a date is using daylight saving time
 * @param {Date} date original date.
 * @returns {boolean} true if given date is using daylight saving time, false otherwise.
 */
export declare function isDaylightSavingTime(date: Date): boolean;
/**
 * Check if a date is valid
 * @param {any} date date to check.
 * @returns {boolean} true if valid, false otherwise.
 */
export declare function isValidDate(date: any): boolean;
/**
 * Convert umalqura to gregorian date.
 * @param {number} year Umm al-Qura calendar year
 * @param {number} month Umm al-Qura calendar month
 * @param {number} day Umm al-Qura calendar day
 * @param {number} hours hours
 * @param {number} mins minutes
 * @param {number} secs seconds
 * @param {number} mills milliseconds
 * @returns {Date} Gregorian calendar date
 */
export declare function umalquraToGregorian(year: number, month: number, day: number, hours?: number, mins?: number, secs?: number, mills?: number): Date;
/**
 * Convert Gregorian to Umm al-Qura calendar date.
 * @param {Date} date Gregorian calendar date
 * @returns {object} Umm al-Qura calendar year, month, day
 */
export declare function gregorianToUmalqura(date?: Date): any;
/**
 * Gets first day of given month/year date.
 * @param {number} year Gregorian calendar year, long format
 * @param {number} month Gregorian calendar month, 0-11 range
 * @param {number} day Gregorian calendar day, needed only if converting to Umm al-Qura calendar date
 * @param {boolean} isIslamic if set to true the calculation is based on the Umm al-Qura Calendar
 * @returns {Date} Gregorian calendar date
 */
export declare function firstDayOfMonthDate(year: number, month: number, day?: number | undefined, isIslamic?: boolean): Date;
/**
 * Gets last day of given month/year date.
 * @param {number} year Gregorian calendar year, long format
 * @param {number} month Gregorian calendar month, 0-11 range
 * @param {number} day Gregorian calendar day, needed only if converting to Umm al-Qura calendar date
 * @param {boolean} isIslamic if set to true the calculation is based on the Umm al-Qura Calendar
 * @returns {Date} Gregorian calendar date
 */
export declare function lastDayOfMonthDate(year: number, month: number, day?: number | undefined, isIslamic?: boolean): Date;
/**
 * Gets the number of days in a given month.
 * @param {number} year Gregorian calendar year, long format
 * @param {number} month Gregorian calendar month, 0-11 range
 * @param {number} day Gregorian calendar day, needed only if converting to Umm al-Qura calendar date
 * @param {boolean} isIslamic if set to true the calculation is base the Umm al-Qura Calendar
 * @returns {number} number of days in a given month.
 */
export declare function daysInMonth(year: number, month: number, day?: number | undefined, isIslamic?: boolean): number;
/**
 * Gets the number of weeks in a given month.
 * @param {number} year Gregorian calendar year, long format
 * @param {number} month Gregorian calendar month, 0-11 range
 * @param {number} day Gregorian calendar day, needed only if converting to Umm al-Qura calendar date
 * @param {number} startsOn day of the week to start on. Sunday is 0, Monday is 1 and so on
 * @param {boolean} isIslamic if set to true the calculation is base the Umm al-Qura Calendar
 * @returns {number} number of weeks in a given month
 */
export declare function weeksInMonth(year: number, month: number, day?: number | undefined, startsOn?: number, isIslamic?: boolean): number;
/**
 * Gets the number of weeks in a given range of dates.
 * @param {Date} startDate start of the range
 * @param {Date} endDate end of the range
 * @param {number} startsOn day of the week to start on. Sunday is 0, Monday is 1, and so on
 * @returns {number} number of weeks in a given range of dates
 */
export declare function weeksInRange(startDate: any, endDate: any, startsOn?: number): number;
/**
 * Gets date of first day of the week by year and week number.
 * @param {Date} year a year where week number should be returned
 * @param {number} week week number
 * @param {number} startsOn day of the week to start on. Sunday is 0, Monday is 1, and so on
 * @returns {Date} date of first day of the week
 */
export declare function weekNumberToDate(year: number, week: number, startsOn?: number): Date;
/**
 * Gets ISO-8601 week number of a year by date
 * @param {Date} date what date week number should be returned
 * @param {number} startsOn day of the week to start on. Sunday is 0, Monday is 1, and so on
 * @returns {number} week number
 */
export declare function weekNumber(date: Date, startsOn?: number): number;
/**
 * Convert 12/24 hour format to 24 hour format based on day period
 * @param {number} hours in 12 or 24 hour format
 * @param {number} dayPeriodIndex 0 or 1 if time format with day period
 * @returns {number} hours in 24 hour format
 */
export declare function hoursTo24(hours: number, dayPeriodIndex?: number | undefined): number;
/**
 * Convert 24 hour format to 12 hour format
 * @param {number} hours in 24 hour format
 * @returns {number} hours in 12 hour format
 */
export declare function hoursTo12(hours: number): number;
/**
 * Extracts the first half of a date range from inside a string (two dates in a string with a separator between them)
 * @param {string} val the date range string
 * @param {string} sep desired separator to use
 * @returns {string} a string with a single date
 */
export declare function removeDateRange(val: string, sep: string): string;
