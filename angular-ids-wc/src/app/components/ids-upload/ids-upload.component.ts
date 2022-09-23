import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-upload-routing.module';

@Component({
  selector: 'app-ids-upload',
  templateUrl: './ids-upload.component.html',
  styleUrls: ['./ids-upload.component.css']
})
export class IdsUploadComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Upload init');
  }

}
