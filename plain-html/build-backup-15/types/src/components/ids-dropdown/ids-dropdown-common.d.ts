export type IdsDropdownOption = {
    id?: string;
    label: string;
    value: string;
    icon?: string;
    groupLabel?: boolean;
    selected?: boolean;
    index?: number;
};
export type IdsDropdownOptions = Array<IdsDropdownOption>;
export declare const IdsDropdownCommonAttributes: string[];
