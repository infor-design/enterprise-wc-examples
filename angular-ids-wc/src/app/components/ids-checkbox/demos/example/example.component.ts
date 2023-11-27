import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @ViewChild('indeterminateCheckboxRef', { read: ElementRef }) indeterminateCheckboxRef;

  constructor() { }

  ngOnInit(): void {

  }

  setIndeterminate() {
    this.indeterminateCheckboxRef.nativeElement.indeterminate = true;
  }

  removeIndeterminate() {
    this.indeterminateCheckboxRef.nativeElement.indeterminate = false;
  }

}
