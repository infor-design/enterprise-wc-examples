export interface IdsInputInterface {
    input?: any;
    value?: any;
    checked?: any;
    fieldContainer?: HTMLElement | SVGElement | null;
    labelEl?: HTMLLabelElement | null;
}
declare const TYPES: {
    readonly default: "text";
    readonly text: "text";
    readonly password: "password";
    readonly number: "number";
    readonly phone: "tel";
    readonly email: "email";
    readonly color: "color";
};
type TypeKeys = keyof typeof TYPES;
type TypeValues = typeof TYPES[TypeKeys];
declare const SIZES: {
    readonly default: "md";
    readonly xs: "xs";
    readonly sm: "sm";
    readonly mm: "mm";
    readonly md: "md";
    readonly lg: "lg";
    readonly full: "full";
};
type SizeKeys = keyof typeof SIZES;
type SizeValues = typeof SIZES[SizeKeys];
declare const TEXT_ALIGN: {
    default: string;
    start: string;
    center: string;
    end: string;
};
declare const instanceCounter = 0;
export { TYPES, TypeKeys, TypeValues, SIZES, SizeKeys, SizeValues, TEXT_ALIGN, instanceCounter };
