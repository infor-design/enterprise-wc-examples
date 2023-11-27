import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

function randomInt(max: number) { 
  return Math.floor(Math.random() * max) 
};

function randomBool() {
  return Math.random() < 0.5;
}

function generateCheckboxDataItem() {
  const id = randomInt(65536);
  return {
    id,
    text: `Checkbox Option ${id}`,
    checked: randomBool(),
    disabled: randomBool()
  }
}

@Component({
  selector: 'app-example',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  @ViewChild('displayCheckboxStatesBtnRef', { read: ElementRef }) displayCheckboxStatesBtnRef;

  displayCheckboxStates = false;
  checkboxOptions = [];

  constructor() { }

  ngOnInit(): void {}

  toggleCheckboxStatesDisplay() {
    this.displayCheckboxStates = !this.displayCheckboxStates;
  }

  toggleCheckboxOptionsDisplay() {
    let opts = [];
    let numOptions = randomInt(50);
    while (numOptions > 0) {
      opts.push(generateCheckboxDataItem());
      numOptions -= 1;
    }
    this.checkboxOptions = opts;
  }

  onCheckboxChange(event, i) {
    const id = this.checkboxOptions[i].id;
    const checked = event.target.checked;

    this.checkboxOptions[i].checked = checked;
    console.info(`Checkbox ${id} updated checked state to ${checked}`, this.checkboxOptions[i]);
  }
}
