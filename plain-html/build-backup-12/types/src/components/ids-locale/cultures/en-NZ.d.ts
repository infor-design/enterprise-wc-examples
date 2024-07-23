declare const locale: {
    language: string;
    englishName: string;
    nativeName: string;
    direction: string;
    calendars: {
        name: string;
        dateFormat: {
            separator: string;
            timeSeparator: string;
            short: string;
            medium: string;
            long: string;
            full: string;
            month: string;
            year: string;
            dayOfWeek: string;
            timestamp: string;
            timestampMillis: string;
            hour: string;
            datetime: string;
            datetimeMillis: string;
            timezone: string;
            timezoneLong: string;
        };
        days: {
            wide: string[];
            abbreviated: string[];
            narrow: string[];
        };
        months: {
            wide: string[];
            abbreviated: string[];
        };
        timeFormat: string;
        dayPeriods: string[];
        firstDayofWeek: number;
    }[];
    currencySign: string;
    currencyFormat: string;
    numbers: {
        percentSign: string;
        percentFormat: string;
        percentSuffix: string;
        percentPrefix: string;
        minusSign: string;
        decimal: string;
        group: string;
        groupSizes: number[];
    };
};
export { locale };
//# sourceMappingURL=en-NZ.d.ts.map