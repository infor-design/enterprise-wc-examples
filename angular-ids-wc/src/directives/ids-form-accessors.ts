/* eslint-disable @angular-eslint/directive-class-suffix */
/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, Renderer2, forwardRef, inject } from "@angular/core";
import { DefaultValueAccessor, CheckboxControlValueAccessor, NG_VALUE_ACCESSOR, RadioControlValueAccessor, COMPOSITION_BUFFER_MODE } from "@angular/forms";

@Directive({
  selector: `
    ids-input[formControlName],ids-input[formControl],ids-input[ngModel],
    ids-textarea[formControlName],ids-textarea[formControl],ids-textarea[ngModel],
    ids-dropdown[formControlName],ids-dropdown[formControl],ids-dropdown[ngModel],
    ids-multiselect[formControlName],ids-multiselect[formControl],ids-multiselect[ngModel],
    ids-radio-group[formControlName],ids-radio-group[formControl],ids-radio-group[ngModel],
    ids-lookup[formControlName],ids-lookup[formControl],ids-lookup[ngModel],
    ids-search-field[formControlName],ids-search-field[formControl],ids-search-field[ngModel],
    ids-spinbox[formControlName],ids-spinbox[formControl],ids-spinbox[ngModel],
    ids-color-picker[formControlName],ids-color-picker[formControl],ids-color-picker[ngModel],
    ids-date-picker[formControlName],ids-date-picker[formControl],ids-date-picker[ngModel],
    ids-time-picker[formControlName],ids-time-picker[formControl],ids-time-picker[ngModel],
    ids-upload[formControlName],ids-upload[formControl],ids-upload[ngModel],
    ids-upload-advanced[formControlName],ids-upload-advanced[formControl],ids-upload-advanced[ngModel],
  `,
  standalone: true,
  providers: [
    {
      // @see https://angular.io/errors/NG01203#ng01203-you-must-register-an-ngvalueaccessor-with-a-custom-form-control
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdsDefaultValueAccessor),
      multi: true,
    },
  ],
})
export class IdsDefaultValueAccessor extends DefaultValueAccessor {
  constructor() {
    super(inject(Renderer2), inject(ElementRef), inject(COMPOSITION_BUFFER_MODE, { optional: true }));
  }
}

@Directive({
  selector: `
    ids-checkbox[formControlName],ids-checkbox[formControl],ids-checkbox[ngModel],
    ids-checkbox-group[formControlName],ids-checkbox-group[formControl],ids-checkbox-group[ngModel],
    ids-switch[formControlName],ids-switch[formControl],ids-switch[ngModel],
  `,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdsCheckboxValueAccessor),
      multi: true,
    },
  ],
})
export class IdsCheckboxValueAccessor extends CheckboxControlValueAccessor {
  constructor() {
    super(inject(Renderer2), inject(ElementRef));
  }
}

@Directive({
  selector: `
    ids-radio[formControlName],ids-radio[formControl],ids-radio[ngModel],
  `,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdsRadioValueAccessor),
      multi: true,
    },
  ],
})
export class IdsRadioValueAccessor extends RadioControlValueAccessor { }