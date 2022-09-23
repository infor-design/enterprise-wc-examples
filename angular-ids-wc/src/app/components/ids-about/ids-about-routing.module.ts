import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsAboutComponent } from './ids-about.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsAboutComponent,
  },
  { 
    path: 'example',
    component: ExampleComponent,
    data: {
      name: 'Example',
      type: 'Main Example',
      description: 'Shows main example'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsAboutRoutingModule { }
