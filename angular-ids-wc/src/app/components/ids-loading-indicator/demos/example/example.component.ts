import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-example-loading-indicator',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  public indicatorValue01 = 30;
  public indicatorValue02 = 72;
  public indicatorValue03 = 0;
  public indicatorValue04 = 0;
  public indicatorValue05 = 0;

  ngOnInit(): void {
    console.log('example init');
  }

  onUpdate(event: CustomEvent) {
    console.log('onUpdate', event);
  }
}
