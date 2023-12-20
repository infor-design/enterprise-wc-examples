import { Component, ElementRef, ViewChild } from '@angular/core';
import { randomInt, randomBool } from '../../../../../utils/random';

function generateRadioDataItem(noTrue: boolean) {
  const id = randomInt(65536);
  return {
    id,
    text: `Radio ${id}`,
    checked: noTrue ? false : randomBool(),
    disabled: randomBool()
  }
}
@Component({
  selector: 'app-example-radio-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {
  @ViewChild('displayRadioItemsBtnRef', { read: ElementRef }) displayRadioItemsBtnRef;

  constructor() { }

  radioGroupDisplay = false;
  radioItems = [];

  toggleRadioGroupDisplay() {
    this.radioGroupDisplay = !this.radioGroupDisplay;
  }

  generateRadioItems() {
    let opts = [];
    let numOptions = randomInt(50);
    let hasTrueVal = false;
    while (numOptions > 0) {
      let item = generateRadioDataItem(hasTrueVal);
      if (item.checked) hasTrueVal = true;
      opts.push(item);
      numOptions -= 1;
    }
    this.radioItems = opts;
  }

  onRadioChange(event, i) {
    const id = this.radioItems[i].id;
    const checked = event.target.checked;

    this.radioItems.forEach((item, j) => {
      item.checked = i === j;
    });
    console.info(`Radio ${id} updated checked state to ${checked}`, this.radioItems[i]);
  }
}
