import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DIGITS_REGEX, EMPTY_STRING } from 'ids-enterprise-wc/components/ids-mask/ids-mask-common';

@Component({
  selector: 'app-prefix-suffix',
  templateUrl: './prefix-suffix.component.html',
  styleUrls: ['./prefix-suffix.component.css']
})
export class PrefixSuffixComponent implements OnInit, AfterViewInit {
  @ViewChild('maskPrefix', { read: ElementRef }) maskPrefix;
  @ViewChild('maskSuffix', { read: ElementRef }) maskSuffix;

  constructor() { }

  ngOnInit(): void {
    console.log('IdsMask prefix-suffix OnInit');
  }

  ngAfterViewInit(): void {
    // Masked field with a prefix
    this.maskPrefix.nativeElement.maskOptions = {
      prefix: '$'
    };
    this.maskPrefix.nativeElement.mask = (rawValue: string, opts: any) => {
      const totalDigits = rawValue.split(EMPTY_STRING).map(() => DIGITS_REGEX);
      return [opts.prefix, ...totalDigits];
    };

    // Masked field with a suffix
    this.maskSuffix.nativeElement.maskOptions = {
      suffix: '%'
    };
    this.maskSuffix.nativeElement.mask = (rawValue: string, opts: any) => {
      const totalDigits = rawValue.split(EMPTY_STRING).map(() => DIGITS_REGEX);
      return [...totalDigits, opts.suffix];
    };
  }
}
