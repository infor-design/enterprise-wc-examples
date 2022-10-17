import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoFitComponent } from './demos/auto-fit/auto-fit.component';
import { AutoHeightComponent } from './demos/auto-height/auto-height.component';
import { ExampleComponent } from './demos/example/example.component';
import { FooterComponent } from './demos/footer/footer.component';
import { HeightComponent } from './demos/height/height.component';
import { InfoComponent } from './demos/info/info.component';
import { MultipleSelectionComponent } from './demos/multiple-selection/multiple-selection.component';
import { SingleSelectionComponent } from './demos/single-selection/single-selection.component';
import { ToolbarComponent } from './demos/toolbar/toolbar.component';
import { IdsCardComponent } from './ids-card.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsCardComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      name: 'Example',
      type: 'Main Example',
      description: 'Shows main example'
    }
  },
  {
    path: 'auto-height',
    component: AutoHeightComponent,
    data: {
      name: 'Auto Height',
      type: 'Main Example',
      description: 'Shows main example'
    }
  },
  {
    path: 'auto-fit',
    component: AutoFitComponent,
    data: {
      name: 'Auto Height',
      type: 'Main Example',
      description: 'Shows main example'
    }
  },
  {
    path: 'height',
    component: HeightComponent,
    data: {
      name: 'Auto Height',
      type: 'Main Example',
      description: 'Shows main example'
    }
  },
  {
    path: 'single-selection',
    component: SingleSelectionComponent,
    data: {
      name: 'Auto Height',
      type: 'Main Example',
      description: 'Shows main example'
    }
  },
  {
    path: 'multiple-selection',
    component: MultipleSelectionComponent,
    data: {
      name: 'Auto Height',
      type: 'Main Example',
      description: 'Shows main example'
    }
  },
  {
    path: 'toolbar',
    component: ToolbarComponent,
    data: {
      name: 'Auto Height',
      type: 'Main Example',
      description: 'Shows main example'
    }
  },
  {
    path: 'info',
    component: InfoComponent,
    data: {
      name: 'Auto Height',
      type: 'Main Example',
      description: 'Shows main example'
    }
  },
  {
    path: 'footer',
    component: FooterComponent,
    data: {
      name: 'Auto Height',
      type: 'Main Example',
      description: 'Shows main example'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsCardRoutingModule { }
