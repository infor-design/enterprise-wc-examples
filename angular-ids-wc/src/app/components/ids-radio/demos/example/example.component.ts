import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example-radio',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  @ViewChild('validatedRadioGroupRef', { read: ElementRef }) validatedRadioGroupRef;

  constructor() { }

  validateRadioGroup() {
    this.validatedRadioGroupRef.nativeElement.checkValidation();
  }

  clearRadioGroupValidation() {
    this.validatedRadioGroupRef.nativeElement.clear();
  }
}
