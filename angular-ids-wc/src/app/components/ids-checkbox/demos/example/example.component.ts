import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example-checkbox',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  @ViewChild('indeterminateCheckboxRef', { read: ElementRef }) indeterminateCheckboxRef;

  constructor() { }

  setIndeterminate() {
    this.indeterminateCheckboxRef.nativeElement.indeterminate = true;
  }

  removeIndeterminate() {
    this.indeterminateCheckboxRef.nativeElement.indeterminate = false;
  }
}
