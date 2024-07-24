import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-example-popup',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent implements AfterViewInit, OnDestroy {
  public visible = false;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('popup AfterViewInit');
  }

  handleVisible() {
    this.visible = !this.visible;
  }

  handleHide() {
    this.visible = false;
  }

  ngOnDestroy() {
    console.log('destroy event fired');
  }
}
