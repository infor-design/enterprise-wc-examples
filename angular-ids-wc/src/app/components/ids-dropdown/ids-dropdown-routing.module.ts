import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsDropdownComponent } from './ids-dropdown.component';
import { ExampleComponent } from './demos/example/example.component';
import { DynamicComponent } from './demos/dynamic/dynamic.component';
import { TypeaheadComponent } from './demos/typeahead/typeahead.component';
import { SizesComponent } from './demos/sizes/sizes.component';
import { SandBoxComponent } from './demos/sandbox/sandbox.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsDropdownComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Main dropdown example',
    }
  },
  {
    path: 'dynamic',
    component: DynamicComponent,
    data: {
      type: 'Dynamic',
      description: 'Main dropdown dynamic',
    }
  },
  {
    path: 'typeahead',
    component: TypeaheadComponent,
    data: {
      type: 'Example',
      description: 'Shows typeahead search example',
    }
  },
  {
    path: 'sizes',
    component: SizesComponent,
    data: {
      type: 'Example',
      description: 'Shows various sized dropdowns',
    }
  },
  {
    path: 'sandbox',
    component: SandBoxComponent,
    data: {
      type: 'Sandbox',
      description: 'Example Dropdown',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsDropdownRoutingModule { }
