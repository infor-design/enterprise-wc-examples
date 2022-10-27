import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-wizard-routing.module';

@Component({
  selector: 'app-ids-wizard',
  templateUrl: './ids-wizard.component.html',
  styleUrls: ['./ids-wizard.component.css']
})
export class IdsWizardComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Wizard init');
  }

}
