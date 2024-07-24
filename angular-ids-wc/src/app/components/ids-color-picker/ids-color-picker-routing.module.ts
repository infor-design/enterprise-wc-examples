import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsColorPickerComponent } from './ids-color-picker.component';
import { ExampleComponent } from './demos/example/example.component';
import { ExampleSizesComponent } from './demos/example-sizes/example-sizes.component';
import { AxeComponent } from './demos/axe/axe.component';
import { NoScrollComponent } from './demos/no-scroll/no-scroll.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsColorPickerComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Shows various colorpicker examples',
    },
  },
  {
    path: 'example-sizes',
    component: ExampleSizesComponent,
    data: {
      type: 'Example',
      description: 'Shows examples of various colorpicker sizes',
    },
  },
  {
    path: 'no-scroll',
    component: NoScrollComponent,
    data: {
      type: 'Example',
      description: 'Shows an example of a page that does not scroll to the color picker view',
    },
  },
  {
    path: 'axe',
    component: AxeComponent,
    data: {
      type: 'Example',
      description: 'Shows an axe scan page for (accessibility tests)',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsColorPickerRoutingModule { }
