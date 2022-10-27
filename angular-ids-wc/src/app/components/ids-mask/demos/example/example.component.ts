import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('maskPhoneNumber', { read: ElementRef }) maskPhoneNumber;
  @ViewChild('maskDate', { read: ElementRef }) maskDate;
  @ViewChild('maskNumber', { read: ElementRef }) maskNumber;

  constructor() { }

  ngOnInit(): void {
    console.log('IdsMask example OnInit');
  }

  ngAfterViewInit(): void {
    // Phone Number Input - standard pattern mask
    this.maskPhoneNumber.nativeElement.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  
    // Date Input - use `date` string to pre-configure the internal Date Mask
    this.maskDate.nativeElement.mask = 'date';
    this.maskDate.nativeElement.maskOptions = {
      format: 'M/d/yyyy hh:mm a'
    };

    // Number Input - use `number` string to pre-configure the internal Number Mask
    this.maskNumber.nativeElement.mask = 'number';
    this.maskNumber.nativeElement.maskOptions = {
      allowDecimal: true,
      allowNegative: true,
      allowThousandsSeparator: true,
      decimalLimit: 2,
      integerLimit: 7
    };
  }
}
