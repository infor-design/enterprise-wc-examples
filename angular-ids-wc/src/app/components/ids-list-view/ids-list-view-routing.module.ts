import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsListViewComponent } from './ids-list-view.component';
import { ExampleComponent } from './demos/example/example.component';
import { SelectableSingleComponent } from './demos/selectable-single/selectable-single.component';
import { SelectableMultipleComponent } from './demos/selectable-multiple/selectable-multiple.component';
import { TooltipOverflowEllipsesComponent } from './demos/tooltip-overflow-ellipses/tooltip-overflow-ellipses.component';
import { DynamicDisabledItemsComponent } from './demos/dynamic-disabled-items/dynamic-disabled-items.component';
import { SelectedEventComponent } from './demos/selected-event/selected-event.component';
import { VirtualScrollComponent } from './demos/virtual-scroll/virtual-scroll.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsListViewComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'selectable-single',
    component: SelectableSingleComponent
  },
  {
    path: 'selectable-multiple',
    component: SelectableMultipleComponent
  },
  {
    path: 'tooltip-overflow-ellipses',
    component: TooltipOverflowEllipsesComponent
  },
  {
    path: 'dynamic-disabled-items',
    component: DynamicDisabledItemsComponent
  },
  {
    path: 'selected-event',
    component: SelectedEventComponent
  },
  {
    path: 'virtual-scroll',
    component: VirtualScrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsListViewRoutingModule { }
