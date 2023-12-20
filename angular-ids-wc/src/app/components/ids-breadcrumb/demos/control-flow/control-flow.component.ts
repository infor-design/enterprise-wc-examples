import { Component, ElementRef, ViewChild } from '@angular/core';
import { randomInt, randomBool } from '../../../../../utils/random';

function generateBreadcrumbDataItem() {
  const id = randomInt(999);
  return {
    id,
    text: `Item ${id}`,
    disabled: randomBool()
  }
}

@Component({
  selector: 'app-example-breadcrumb-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css']
})
export class ControlFlowComponent {
  @ViewChild('displayBreadCrumbBtnRef', { read: ElementRef }) displayBreadCrumbBtnRef;

  displayBreadcrumbStates = false;
  breadcrumbOptions = [];

  constructor() { }

  toggleBreadcrumbStatesDisplay() {
    this.displayBreadcrumbStates = !this.displayBreadcrumbStates;
  }

  toggleBreadcrumbOptionsDisplay() {
    let opts = [];
    let numOptions = randomInt(14);
    while (numOptions > 0) {
      opts.push(generateBreadcrumbDataItem());
      numOptions -= 1;
    }
    this.breadcrumbOptions = opts;
  }
}
