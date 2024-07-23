export declare const MIN_MONTH = 0;
export declare const MAX_MONTH = 11;
export declare const WEEK_LENGTH = 7;
export declare const BASE_Y_OFFSET = 35;
export declare const MAX_EVENT_COUNT = 3;
export type IdsRangeSettings = {
    start?: any;
    end?: any;
    separator: string;
    minDays?: number;
    maxDays?: number;
    selectForward?: boolean;
    selectBackward?: boolean;
    includeDisabled?: boolean;
    selectWeek?: boolean;
};
export interface IdsRangeSettingsInterface {
    rangeSettings?: IdsRangeSettings;
}
export type IdsDisableSettings = {
    dates?: Array<string>;
    years?: Array<number>;
    minDate?: string;
    maxDate?: string;
    dayOfWeek?: Array<number>;
    isEnable?: boolean;
};
export type IdsLegend = {
    name: string;
    color: string;
    dates?: Array<string>;
    dayOfWeek?: Array<number>;
};
export type IdsLegendSettings = Array<IdsLegend> | null;
