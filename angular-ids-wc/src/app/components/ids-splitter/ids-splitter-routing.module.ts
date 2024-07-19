import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitIssueComponent } from './demos/init-issue/init-issue.component';
import { IdsSplitterComponent } from './ids-splitter.component';
import { ResponsiveSplitterComponent } from './demos/responsive-splitter/responsive-splitter.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsSplitterComponent
  },
  {
    path: 'init-issue',
    component: InitIssueComponent
  },
  {
    path: 'responsive-splitter',
    component: ResponsiveSplitterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsSplitterRoutingModule { }
