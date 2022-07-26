import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import IdsAbout from 'ids-enterprise-wc/components/ids-about/ids-about.js';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('aboutModal', { read: ElementRef }) aboutModal: IdsAbout;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('example AfterViewInit');
  }

  handleShow() {
    this.aboutModal.nativeElement.show();
  }
}
