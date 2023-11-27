import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @ViewChild('validatedRadioGroupRef', { read: ElementRef }) validatedRadioGroupRef;

  constructor() { }

  ngOnInit(): void {

  }

  validateRadioGroup() {
    this.validatedRadioGroupRef.nativeElement.checkValidation();
  }

  clearRadioGroupValidation() {
    this.validatedRadioGroupRef.nativeElement.clear();
  }
}
