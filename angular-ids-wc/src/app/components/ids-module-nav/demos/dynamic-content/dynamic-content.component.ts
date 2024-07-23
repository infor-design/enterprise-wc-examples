import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import type IdsModuleNav from 'ids-enterprise-wc/components/ids-module-nav/ids-module-nav';

@Component({
  selector: 'app-dynamic-content-module-nav',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css'],
})
export class DynamicContentComponent implements AfterViewInit {
  @ViewChild('moduleNav') moduleNav!: ElementRef<IdsModuleNav>;

  actions: Action[] = INITIAL_ACTIONS;

  ngAfterViewInit() {
    this.moduleNav.nativeElement.displayMode = "expanded";

    setTimeout(() => {
      this.actions = [...this.actions, ...DELAYED_ACTIONS];
    }, 1000);
  }

  toggleMenu() {
    const moduleNav = this.moduleNav.nativeElement;
    const displayMode = moduleNav.displayMode;
    moduleNav.displayMode = displayMode === "expanded" ? "collapsed" : "expanded";
  }
}

const INITIAL_ACTIONS: Action[] = [
  {
    text: "Home",
    icon: "home",
  },
  {
    text: "Warehouse",
    icon: "warehouse",
    children: [
      "Warehouse 1",
      "Warehouse 2",
      "Warehouse 3",
    ],
  },
  {
    text: "Shirts",
    icon: "shirt",
    children: [
      "Shirt 1",
      "Shirt 2",
      "Shirt 3",
    ],
  },
  {
    text: "Trucks",
    icon: "truck",
    children: [
      "Truck 1",
      "Truck 2",
      "Truck 3",
    ],
  }
];

const DELAYED_ACTIONS: Action[] = [
  {
    text: "Delayed",
    icon: "clock",
    children: [
      "Delayed 1",
      "Delayed 2",
      "Delayed 3",
    ],
  },
];

type Action = {
  text: string;
  icon: string;
  children?: string[];
}
