import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import IdsModal from 'ids-enterprise-wc/components/ids-modal/ids-modal';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('modal', { read: ElementRef }) modal: IdsModal;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('example init');
  }

  handleShow() {
    this.modal.nativeElement.show();
  }

}
