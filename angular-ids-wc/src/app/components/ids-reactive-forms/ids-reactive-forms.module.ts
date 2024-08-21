import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IdsReactiveFormsRoutingModule } from './ids-reactive-forms-routing.module';
import { IdsReactiveFormsComponent } from './ids-reactive-forms.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
import { FormControlComponent } from './demos/form-control/form-control.component';


@NgModule({
  declarations: [
    IdsReactiveFormsComponent,
    ExampleComponent,
    FormControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IdsReactiveFormsRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsReactiveFormsModule { }
