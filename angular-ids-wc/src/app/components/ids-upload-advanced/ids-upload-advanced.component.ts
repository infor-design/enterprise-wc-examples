import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-upload-advanced-routing.module';

@Component({
  selector: 'app-ids-upload-advanced',
  templateUrl: './ids-upload-advanced.component.html',
  styleUrls: ['./ids-upload-advanced.component.css']
})
export class IdsUploadAdvancedComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor(
  ) { }

  ngAfterViewInit(): void {
    console.log('Ids Upload Advanced init');
  }

}
