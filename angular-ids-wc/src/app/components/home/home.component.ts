import { Component, VERSION, ViewChild, ElementRef } from '@angular/core';

import IdsTag from 'ids-enterprise-wc/components/ids-tag/ids-tag.js';
import IdsAccordion from 'ids-enterprise-wc/components/ids-accordion/ids-accordion.js';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('myTag') tag: IdsTag;
  @ViewChild('myAccordion') accordion: IdsAccordion;

  public name = 'Angular ' + VERSION.major;
  public person = 'John Smith';
  public type = 'success';
  public tagList = [
    { type: '', name: 'Tag One' },
    { type: 'success', name: 'Tag Two' },
    { type: '', name: 'Tag Three' },
    { type: 'error', name: 'Tag Four' },
  ];

  ngAfterViewInit() {
    this.tag.nativeElement.color = 'success';
    console.log(this.accordion.headers);
  }

  onTagRemove(details: CustomEvent) {
    console.log('tagremove fired', details, details.detail);
  }
}
