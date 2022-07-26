import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsColorPickerComponent } from './ids-color-picker.component';
import { ExampleComponent } from './demos/example/example.component';
import { ExampleSizesComponent } from './demos/example-sizes/example-sizes.component';
import { AxeComponent } from './demos/axe/axe.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsColorPickerComponent 
  },
  { 
    path: 'example', 
    component: ExampleComponent
  },
  { 
    path: 'example-sizes', 
    component: ExampleSizesComponent
  },
  { 
    path: 'axe', 
    component: AxeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsColorPickerRoutingModule { }
