import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('aboutModal', { read: ElementRef }) aboutModal;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('example AfterViewInit');
  }

  handleShow() {
    this.aboutModal.nativeElement.show();
  }
}
