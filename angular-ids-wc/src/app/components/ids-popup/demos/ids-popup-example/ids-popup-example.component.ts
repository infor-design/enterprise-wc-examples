import { Component, AfterViewInit, ViewChild, ElementRef, } from '@angular/core';
import IdsButton from 'ids-enterprise-wc/components/ids-button/ids-button';
import IdsPopup from 'ids-enterprise-wc/components/ids-popup/ids-popup';

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
    this.triggerButton.nativeElement.addEventListener('click', () => {
      this.visible = !this.visible;
    })
  }
}
