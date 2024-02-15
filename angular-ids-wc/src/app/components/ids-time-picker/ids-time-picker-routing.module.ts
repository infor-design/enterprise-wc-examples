import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsTimePickerComponent } from './ids-time-picker.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { IntervalsComponent } from './demos/intervals/intervals.component';
import { ExampleComponent } from './demos/example/example.component';
import { SizesComponent } from './demos/sizes/sizes.component';
import { OpenComponent } from './demos/open/open.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsTimePickerComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Basic time picker examples'
    }
  },
  {
    path: 'sizes',
    component: SizesComponent,
    data: {
      type: 'Example',
      description: 'Time picker size examples'
    }
  },
  {
    path: 'intervals',
    component: IntervalsComponent,
    data: {
      type: 'Example',
      description: 'Time picker interval examples'
    }
  },
  {
    path: 'sandbox',
    component: SandboxComponent,
    data: {
      type: 'Example',
      description: 'Time picker example sandbox'
    }
  },
  {
    path: 'open',
    component: OpenComponent,
    data: {
      type: 'Example',
      description: 'Time picker open example'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsTimePickerRoutingModule { }
