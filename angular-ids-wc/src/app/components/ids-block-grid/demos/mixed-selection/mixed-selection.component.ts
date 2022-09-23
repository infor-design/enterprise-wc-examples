import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mixed-selection',
  templateUrl: './mixed-selection.component.html',
  styleUrls: ['./mixed-selection.component.css']
})
export class MixedSelectionComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsBlockGrid mixed-selection AfterViewInit');
  }

}
