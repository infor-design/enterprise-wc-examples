import IdsCheckbox from '../ids-checkbox/ids-checkbox';
import IdsInput from '../ids-input/ids-input';
import IdsDropdown from '../ids-dropdown/ids-dropdown';
import '../ids-time-picker/ids-time-picker';
import '../ids-date-picker/ids-date-picker';
import type IdsDatePicker from '../ids-date-picker/ids-date-picker';
import type IdsTimePicker from '../ids-time-picker/ids-time-picker';
import type IdsDataGridCell from './ids-data-grid-cell';
export interface IdsDataGridEditorOptions {
    /** The type of editor (i.e. text, data, time, dropdown, checkbox, number ect) */
    type: string;
    /** The field in the data set to show */
    field: string;
    /** If true the editor will remain visible */
    inline: boolean;
}
export interface IdsDataGridSaveValue {
    value?: string | number | boolean | null;
    dirtyCheckValue?: string | number | boolean | null;
}
export interface IdsDataGridEditor {
    /** The type of editor (i.e. input, dropdown, checkbox ect) */
    type: string;
    /** The main editor element */
    input?: IdsInput | IdsCheckbox | IdsDropdown | IdsDatePicker | IdsTimePicker;
    /** The function that invokes and sets values on the input */
    init: (cell?: IdsDataGridCell) => void;
    /** The function that transforms and saved the editor */
    save: (cell?: IdsDataGridCell) => IdsDataGridSaveValue | undefined | null;
    /** The function that tears down all aspects of the editor */
    destroy: (cell?: IdsDataGridCell) => void;
    /** MouseEvent if click was used to edit */
    clickEvent?: MouseEvent;
}
export declare class InputEditor implements IdsDataGridEditor {
    /** The type of editor (i.e. input, dropdown, checkbox ect) */
    type: string;
    /** Holds the Editor */
    input?: IdsInput;
    /**
     * Create an input and set the value and focus states
     * @param {IdsDataGridCell} cell the cell element
     */
    init(cell?: IdsDataGridCell): void;
    save(): {
        value: string | undefined;
    };
    destroy(): void;
}
export declare class CheckboxEditor implements IdsDataGridEditor {
    /** The type of editor (i.e. input, dropdown, checkbox ect) */
    type: string;
    /** Holds the Editor */
    input?: IdsCheckbox;
    /** MouseEvent if click was used to edit */
    clickEvent?: MouseEvent;
    /**
     * Create an input and set the value and focus states
     * @param {IdsDataGridCell} cell the cell element
     */
    init(cell?: IdsDataGridCell): void;
    save(): {
        value: boolean | undefined;
    };
    destroy(): void;
}
export declare class DropdownEditor implements IdsDataGridEditor {
    #private;
    /** The type of editor (i.e. input, dropdown, checkbox ect) */
    type: string;
    /** Holds the Editor */
    input?: IdsDropdown;
    /** MouseEvent if click was used to edit */
    clickEvent?: MouseEvent;
    init(cell?: IdsDataGridCell): void;
    /**
     * Overrides data grid cell's focusout event handling
     * @param {FocusEvent} evt focus event
     */
    stopPropagation(evt: FocusEvent): void;
    save(): {
        value: string | null | undefined;
        dirtyCheckValue: string | undefined;
    };
    /**
     * Destroy dropdown editor
     */
    destroy(): void;
}
export declare class DatePickerEditor implements IdsDataGridEditor {
    #private;
    type: string;
    input?: IdsDatePicker;
    clickEvent?: MouseEvent;
    init(cell?: IdsDataGridCell): void;
    save(cell?: IdsDataGridCell): {
        value: string;
        dirtyCheckValue: string;
    };
    destroy(): void;
}
export declare class TimePickerEditor implements IdsDataGridEditor {
    #private;
    type: string;
    input?: IdsTimePicker;
    clickEvent?: MouseEvent;
    init(cell?: IdsDataGridCell | undefined): void;
    save(): {
        value: string | undefined;
        dirtyCheckValue: string;
    };
    destroy(): void;
}
export declare const editors: Array<{
    type: string;
    editor?: IdsDataGridEditor;
}>;
