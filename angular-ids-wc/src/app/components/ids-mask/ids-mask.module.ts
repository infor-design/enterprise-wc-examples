import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsMaskRoutingModule } from './ids-mask-routing.module';
import { IdsMaskComponent } from './ids-mask.component';
import { ExampleComponent } from './demos/example/example.component';
import { GuidesComponent } from './demos/guides/guides.component';
import { LocalizedDatesComponent } from './demos/localized-dates/localized-dates.component';
import { LocalizedNumbersComponent } from './demos/localized-numbers/localized-numbers.component';
import { MaskAttributeComponent } from './demos/mask-attribute/mask-attribute.component';
import { NumberLeadingZerosComponent } from './demos/number-leading-zeros/number-leading-zeros.component';
import { PrefixSuffixComponent } from './demos/prefix-suffix/prefix-suffix.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsMaskComponent,
    ExampleComponent,
    GuidesComponent,
    LocalizedDatesComponent,
    LocalizedNumbersComponent,
    MaskAttributeComponent,
    NumberLeadingZerosComponent,
    PrefixSuffixComponent,
  ],
  imports: [
    CommonModule,
    IdsMaskRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsMaskModule { }
