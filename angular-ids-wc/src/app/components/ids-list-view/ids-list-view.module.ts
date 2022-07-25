import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsListViewRoutingModule } from './ids-list-view-routing.module';
import { IdsListViewComponent } from './ids-list-view.component';
import { ExampleComponent } from './demos/example/example.component';
import { SelectableSingleComponent } from './demos/selectable-single/selectable-single.component';
import { SelectableMultipleComponent } from './demos/selectable-multiple/selectable-multiple.component';


@NgModule({
  declarations: [
    IdsListViewComponent,
    ExampleComponent,
    SelectableSingleComponent,
    SelectableMultipleComponent
  ],
  imports: [
    CommonModule,
    IdsListViewRoutingModule
  ]
})
export class IdsListViewModule { }
