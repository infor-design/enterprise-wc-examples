import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import IdsButton from 'ids-enterprise-wc/components/ids-button/ids-button';

@Component({
  selector: 'app-ids-popup-example',
  templateUrl: './ids-popup-example.component.html',
  styleUrls: ['./ids-popup-example.component.css']
})
export class IdsPopupExampleComponent implements AfterViewInit {
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
