import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsExpandableArea AfterViewInit');
  }

  handleHyperLinkClick(e: Event) {
    e.preventDefault();
  }

  handleToggleButton(e: Event | any) {
    e.target.toggle();
  }
}
