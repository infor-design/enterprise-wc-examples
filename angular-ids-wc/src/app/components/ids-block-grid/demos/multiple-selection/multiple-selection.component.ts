import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-multiple-selection',
  templateUrl: './multiple-selection.component.html',
  styleUrls: ['./multiple-selection.component.css']
})
export class MultipleSelectionComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsBlockGrid multiple-selection AfterViewInit');
  }

}
