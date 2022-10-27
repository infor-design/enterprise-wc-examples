import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  public visible;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  handleClick(e) {
    this.visible = !this.visible;
  }

}
