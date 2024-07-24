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
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Shows default listview example',
    }
  },
  {
    path: 'selectable-single',
    component: SelectableSingleComponent,
    data: {
      type: 'Example',
      description: 'Shows a single select listview example',
    }
  },
  {
    path: 'selectable-multiple',
    component: SelectableMultipleComponent,
    data: {
      type: 'Example',
      description: 'Shows a multiple select listview example',
    }
  },
  {
    path: 'tooltip-overflow-ellipses',
    component: TooltipOverflowEllipsesComponent,
    data: {
      type: 'Example',
      description: 'Shows an ellipsis tooltip example',
    }
  },
  {
    path: 'dynamic-disabled-items',
    component: DynamicDisabledItemsComponent,
    data: {
      type: 'Example',
      description: 'Shows disabled items',
    }
  },
  {
    path: 'selected-event',
    component: SelectedEventComponent,
    data: {
      type: 'Example',
      description: 'Shows the select event fires',
    }
  },
  {
    path: 'virtual-scroll',
    component: VirtualScrollComponent,
    data: {
      type: 'Example',
      description: 'Shows using virtual scroll',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsListViewRoutingModule { }
