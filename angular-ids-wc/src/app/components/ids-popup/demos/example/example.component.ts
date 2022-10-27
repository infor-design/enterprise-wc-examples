import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit, OnDestroy {
  visible = false;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('popup AfterViewInit');
  }

  handleVisible() {
    this.visible = !this.visible;
  }

  ngOnDestroy() {
    console.log('destroy triggerbutton event');
  }
}
