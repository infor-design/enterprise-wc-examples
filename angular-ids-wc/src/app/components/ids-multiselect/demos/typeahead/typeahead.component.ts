import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-typeahead-multiselect',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class ExampleTypeaheadComponent implements AfterViewInit {
  @ViewChildren('idsMultiselect') multiselects: QueryList<ElementRef>;

  coldStates = [
    { id: "ak2", value: "ak", tooltip: "The State of Alaska", label: "Alaska" },
    { id: "me2", value: "me", tooltip: "The State of Maine", label: "Maine" },
    { id: "mt2", value: "mt", tooltip: "The State of Montana", label: "Montana" },
  ];

  hotStates = [
    { id: "ca2", value: "ca", tooltip: "The State of California", label: "California" },
    { id: "fl2", value: "fl", tooltip: "The State of Florida", label: "Florida" },
    { id: "tx2", value: "tx", tooltip: "The State of Texas", label: "Texas" },
  ];

  private isInitialized = false;

  constructor() { }

  ngAfterViewInit(): void {
    this.multiselects.forEach((multiselect: ElementRef) => {
      const element = multiselect.nativeElement;
      element.addEventListener('change', this.onChangeEvent.bind(this));
    });

    setTimeout(() => {
      this.isInitialized = true;
    });
  }

  onChangeEvent(e: any): void {
    if (!this.isInitialized) {
      return;
    }

    console.info(`e.target.selectedOptions`, e.target?.selectedOptions);
    console.info(`Value Changed to :`, e.target.value, e.detail.value);
  }
}
