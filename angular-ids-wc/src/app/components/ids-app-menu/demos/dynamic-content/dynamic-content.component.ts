import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit, AfterViewInit {
  @ViewChild('appMenuDrawer', { read: ElementRef }) appMenuDrawer;
  @ViewChild('appMenuTriggerBtn', { read: ElementRef }) appMenuTriggerBtn;
  public disabled: boolean;

  constructor() { }

  actions: Action[] = INITIAL_ACTIONS;

  ngOnInit(): void {
    console.log('example init');
  }

  ngAfterViewInit() {
    this.appMenuDrawer.nativeElement.visible = true;
    this.appMenuDrawer.nativeElement.target = this.appMenuTriggerBtn.nativeElement;

    setTimeout(() => {
      this.actions = [...this.actions, ...DELAYED_ACTIONS];
    }, 1000);
  }


  disableTriggerButton() {
    this.disabled = true;
  }

  enableTriggerButton() {
    this.disabled = false;
  }

  handleSelected(e: CustomEvent) {
    console.info(`Header "${(e.target as any).textContent.trim()}" was selected.`);
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

