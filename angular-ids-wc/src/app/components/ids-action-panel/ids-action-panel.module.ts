import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IdsActionPanelRoutingModule } from "./ids-action-panel-routing.module";
import { DemoListingModule } from "../demo-listing/demo-listing.module";
import { IdsActionPanelComponent } from "./ids-action-panel.component";
import { ExampleComponent } from './demos/example/example.component';

@NgModule({
	declarations: [
		IdsActionPanelComponent,
		ExampleComponent
	],
	imports: [
		CommonModule,
		IdsActionPanelRoutingModule,
		DemoListingModule,
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsActionPanelModule {}