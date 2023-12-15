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
  selector: 'app-breadcrumb-data-example',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {
  @ViewChild('displayBreadcrumbRef', { read: ElementRef }) displayBreadcrumbRef;

  displayBreadcrumbs = false;
  breadcrumbOptions = [];

  constructor() { }

  toggleBreadcrumbs() {
    this.displayBreadcrumbs = !this.displayBreadcrumbs;
  }

  toggleBreadcrumbDisplay() {
    let opts = [];
    let numOptions = randomInt(14);
    while (numOptions > 0) {
      opts.push(generateBreadcrumbDataItem());
      numOptions -= 1;
    }
    this.breadcrumbOptions = opts;
  }
}
