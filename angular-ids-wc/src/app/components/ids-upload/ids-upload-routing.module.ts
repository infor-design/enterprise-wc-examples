import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsUploadComponent } from './ids-upload.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsUploadComponent 
  },
  { 
    path: 'example', 
    component: ExampleComponent
  },
  { 
    path: 'sandbox', 
    component: SandboxComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsUploadRoutingModule { }
