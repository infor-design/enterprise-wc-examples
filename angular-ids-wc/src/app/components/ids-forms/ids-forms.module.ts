import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IdsFormAccessorsModule } from 'src/directives/ids-form-accessors.module';
import { IdsFormsRoutingModule } from './ids-forms-routing.module';
import { IdsFormsComponent } from './ids-forms.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsFormsComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IdsFormAccessorsModule,
    IdsFormsRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsFormsModule { }
