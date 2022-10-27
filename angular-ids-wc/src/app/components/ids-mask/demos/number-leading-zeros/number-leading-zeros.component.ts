import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-number-leading-zeros',
  templateUrl: './number-leading-zeros.component.html',
  styleUrls: ['./number-leading-zeros.component.css']
})
export class NumberLeadingZerosComponent implements OnInit, AfterViewInit {
  @ViewChild('maskNumber', { read: ElementRef }) maskNumber;

  constructor() { }

  ngOnInit(): void {
    console.log('IdsMask number-leading OnInit');
  }

  ngAfterViewInit(): void {
    this.maskNumber.nativeElement.mask = 'number';
    this.maskNumber.nativeElement.maskOptions = {
      allowDecimal: true,
      allowLeadingZeros: true,
      allowNegative: true,
      allowThousandsSeparator: true,
      decimalLimit: 2,
      integerLimit: 7
    };    
  }
}
