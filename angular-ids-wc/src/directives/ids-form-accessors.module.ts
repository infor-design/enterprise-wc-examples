import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IdsDefaultValueAccessor, IdsCheckboxValueAccessor, IdsRadioValueAccessor } from './ids-form-accessors';

@NgModule({
  imports: [
    IdsDefaultValueAccessor,
    IdsCheckboxValueAccessor,
    IdsRadioValueAccessor,
  ],
  exports: [
    IdsDefaultValueAccessor,
    IdsCheckboxValueAccessor,
    IdsRadioValueAccessor,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IdsFormAccessorsModule { }