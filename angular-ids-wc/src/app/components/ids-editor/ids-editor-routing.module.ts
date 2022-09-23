import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsEditorComponent } from './ids-editor.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsEditorComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsEditorRoutingModule { }
