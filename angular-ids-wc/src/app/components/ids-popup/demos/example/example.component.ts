import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import IdsButton from 'ids-enterprise-wc/components/ids-button/ids-button';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit, OnDestroy {
  @ViewChild('triggerButton', { read: ElementRef }) triggerButton: IdsButton;
  visible = false;

  constructor() { }

  ngAfterViewInit(): void {    
    this.triggerButton.nativeElement.addEventListener('click', this.handleVisible.bind(this));
  }

  handleVisible() {
    this.visible = !this.visible;
  }

  ngOnDestroy() {
    this.triggerButton.nativeElement.removeEventListener('click', this.handleVisible.bind(this))
  }
}
