import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  IdsDefaultValueAccessor,
  IdsCheckboxValueAccessor,
  IdsRadioValueAccessor,
  IdsSelectControlValueAccessor,
  IdsNgSelectOption,
} from "./ids-form-accessors";

@NgModule({
  imports: [
    IdsDefaultValueAccessor,
    IdsCheckboxValueAccessor,
    IdsRadioValueAccessor,
    IdsSelectControlValueAccessor,
    IdsNgSelectOption,
  ],
  exports: [
    IdsDefaultValueAccessor,
    IdsCheckboxValueAccessor,
    IdsRadioValueAccessor,
    IdsSelectControlValueAccessor,
    IdsNgSelectOption,
  ],
  providers: [IdsSelectControlValueAccessor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IdsFormAccessorsModule {}
