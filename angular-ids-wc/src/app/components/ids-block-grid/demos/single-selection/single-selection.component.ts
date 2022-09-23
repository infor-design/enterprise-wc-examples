import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-single-selection',
  templateUrl: './single-selection.component.html',
  styleUrls: ['./single-selection.component.css']
})
export class SingleSelectionComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsBlockGrid single-selection AfterViewInit');
  }

}
