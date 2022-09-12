import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit, AfterViewInit {
  @ViewChild('maskPhoneNumberGuides', { read: ElementRef }) maskPhoneNumberGuides;
  @ViewChild('maskPhoneNumberPositions', { read: ElementRef }) maskPhoneNumberPositions;
  @ViewChild('maskPhoneNumberBoth', { read: ElementRef }) maskPhoneNumberBoth;
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor() { }

  ngOnInit(): void {
    console.log('IdsMask guides OnInit');
  }

  ngAfterViewInit(): void {
    // Phone Number Input with guides
    this.maskPhoneNumberGuides.nativeElement.maskGuide = true;
    this.maskPhoneNumberGuides.nativeElement.mask = this.mask;

    // Phone Number Input retaining original character positions when field contents are removed.
    this.maskPhoneNumberPositions.nativeElement.maskRetainPositions = true;
    this.maskPhoneNumberPositions.nativeElement.mask = this.mask;

    // Phone Number Input that combines both settings.
    this.maskPhoneNumberBoth.nativeElement.maskGuide = true;
    this.maskPhoneNumberBoth.nativeElement.maskRetainPositions = true;
    this.maskPhoneNumberBoth.nativeElement.mask = this.mask;
  }
}
