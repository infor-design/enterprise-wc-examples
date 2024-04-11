import { Component } from "@angular/core";
import { routes } from './ids-action-panel-routing.module';

@Component({
	selector: 'app-ids-action-panel',
	templateUrl: './ids-action-panel.component.html'
})
export class IdsActionPanelComponent {
	public routes = routes.filter(r => r.path !== '');
	public columns = [];
}