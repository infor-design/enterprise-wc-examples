import { Component, VERSION, ViewChild, ElementRef } from '@angular/core';

import IdsTag from 'ids-enterprise-wc/ids-tag/ids-tag.js';
import IdsAccordion from 'ids-enterprise-wc/ids-accordion/ids-accordion.js';

import { NativeElement } from '../helpers/native-element.decorator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  // @ViewChild('tag') tag: IdsTag;
  @NativeElement('myTag') tag: IdsTag;
  @NativeElement('myAccordion') accordion: IdsAccordion;

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
    this.tag.color = '#D7D7D8';
    console.log(this.accordion.headers);
  }

  onTagRemove(details: CustomEvent) {
    console.log('tagremove fired', details, details.detail);
  }
}
