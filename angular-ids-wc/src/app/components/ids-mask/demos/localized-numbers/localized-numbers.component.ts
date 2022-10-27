import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import IdsInput from 'ids-enterprise-wc/components/ids-input/ids-input';
// import { deepClone } from 'ids-enterprise-wc/utils/ids-deep-clone-utils/ids-deep-clone-utils';

// Store the references to avoid circular reference problems
const refs: Array<any> = [];
const refsNew: Array<any> = [];

/**
 * Deep clone an array creating a new array
 * @param {any} this The array to clone
 * @param {Array} arr The array to clone
 * @param {Function} fn The functional call back used for recursion
 * @returns {Array} The array's clone
 */
export function deepCloneArray(this: any, arr: any, fn?: any) {
  const keys = Object.keys(arr);
  const arrClone = new Array(keys.length);

  for (let i = 0; i < keys.length; i += 1) {
    const k: any = keys[i];
    const cur = arr[k];

    if (typeof cur !== 'object' || cur === null) {
      arrClone[k] = cur;
    } else if (cur instanceof Date) {
      arrClone[k] = new Date(cur);
    } else {
      const index = refs.indexOf(cur);
      if (index !== -1) {
        arrClone[k] = refsNew[index];
      } else {
        arrClone[k] = fn.call(this, cur);
      }
    }
  }
  return arrClone;
}

/**
 * Deep clone an object creating a new object
 * @param {object|Array} obj The object or array to clone
 * @returns {object|Array} The object/array's clone
 */
 export function deepClone(obj: any) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (Array.isArray(obj)) {
    return deepCloneArray(obj, deepClone);
  }

  const objClone: any = {};
  refs.push(obj);
  refsNew.push(objClone);

  for (const k in obj) {
    if (Object.hasOwnProperty.call(obj, k) === false) {
      continue;
    }

    const cur = obj[k];
    if (typeof cur !== 'object' || cur === null) {
      objClone[k] = cur;
    } else if (cur instanceof Date) {
      objClone[k] = new Date(cur);
    } else {
      const i = refs.indexOf(cur);
      if (i !== -1) {
        objClone[k] = refsNew[i];
      } else {
        objClone[k] = deepClone(cur);
      }
    }
  }
  refs.pop();
  refsNew.pop();
  return objClone;
}

@Component({
  selector: 'app-localized-numbers',
  templateUrl: './localized-numbers.component.html',
  styleUrls: ['./localized-numbers.component.css']
})
export class LocalizedNumbersComponent implements OnInit, AfterViewInit {
  @ViewChildren('idsInput', { read: ElementRef }) idsInput: QueryList<any>;
  @ViewChild('pageContainer', { read: ElementRef }) pageContainer;

  constructor() { }

  ngOnInit(): void {
    console.log('IdsMask localized-numbers OnInit');
  }

  ngAfterViewInit(): void {
    // Set basic rules on all input fields
    this.idsInput.toArray().forEach((input) => {
      input.nativeElement.textAlign = 'right';
      input.nativeElement.mask = 'number';
    });

    const allNegativeInputs = this.idsInput.toArray().filter(input => input.nativeElement.getAttribute('id').includes('negative') )
    allNegativeInputs.forEach((input) => {
      input.nativeElement.maskOptions.allowNegative = true;
    });

    const allDecimalInputs = this.idsInput.toArray().filter(input => input.nativeElement.getAttribute('id').includes('decimal'));
    allDecimalInputs.forEach((input) => {
      input.nativeElement.maskOptions.allowDecimal = true;
      input.nativeElement.maskOptions.decimalLimit = 2;
    });

    const allGroupInputs = this.idsInput.toArray().filter(input => input.nativeElement.getAttribute('id').includes('group'));
    allGroupInputs.forEach((input) => {
      input.nativeElement.maskOptions.allowThousandsSeparator = true;
    });

    // Set limits on "thousands-length" inputs
    const allThousandsInputs = this.idsInput.toArray().filter(input => input.nativeElement.getAttribute('id').includes('thousands'));
    allThousandsInputs.forEach((input) => {
      input.nativeElement.maskOptions.integerLimit = 4;
      this.createPlaceholder(input.nativeElement);
    });

    // Set limits on "millions-length" inputs
    const allMillionsInputs = this.idsInput.toArray().filter(input => input.nativeElement.getAttribute('id').includes('millions'));
    allMillionsInputs.forEach((input) => {
      input.nativeElement.maskOptions.integerLimit = 7;
      this.createPlaceholder(input.nativeElement);
    });

    // Set limits on "billions-length" inputs
    const allBillionsInputs = this.idsInput.toArray().filter(input => input.nativeElement.getAttribute('id').includes('billions'));
    allBillionsInputs.forEach((input) => {
      input.nativeElement.maskOptions.integerLimit = 10;
      this.createPlaceholder(input.nativeElement);
    });

    // Set limits on "quintillions-length" inputs
    const allQuintillionsInputs = this.idsInput.toArray().filter(input => input.nativeElement.getAttribute('id').includes('quintillions'));
    allQuintillionsInputs.forEach((input) => {
      input.nativeElement.maskOptions.integerLimit = 18;
      if (input.nativeElement.id.includes('decimal')) {
        input.nativeElement.maskOptions.decimalLimit = 6;
      }
      this.createPlaceholder(input.nativeElement);
    });
    
    // Change localized strings on all number inputs when the Page container's locale changes
    this.pageContainer.nativeElement.addEventListener('localechange', () => {
      this.idsInput.toArray().forEach((input) => {
        input.nativeElement.value = '';
        this.createPlaceholder(input.nativeElement);
      });
    });
  }

  // Uses the defined integer/decimal limits to create an IdsInput
  // `placeholder` definition based on the actual length of the mask.
  createPlaceholder = (input: any) => {
    const ints = input.maskOptions.integerLimit;
    const decs = input.maskOptions.decimalLimit || 0;
    let placeholder = '';

    for (let i = 0; i < ints; i++) {
      placeholder += '1';
    }

    if (input.maskOptions.allowDecimal) {
      placeholder += input.maskOptions.symbols.decimal;
      for (let i = 0; i < decs; i++) {
        placeholder += '1';
      }
    }

    // calling `input.mask()` directly doesn't include the locale,
    // since it's normally added by the IdsInput
    const opts = deepClone(input.maskOptions);
    opts.locale = input.locale;
    const maskArray = input.mask(placeholder, opts).mask;

    // Write a placeholder string based on a slightly-modified mask array
    // (removes "[]"" caret traps and replaces regex matchers with "#")
    input.placeholder = `${maskArray.map((el: any) => {
      if (typeof el !== 'string') {
        return '#';
      }
      if (el === '[]') {
        return '';
      }
      return el;
    }).join('')}`;
  };
}
