import { Component, VERSION, ViewChild, ElementRef } from '@angular/core';
import { IdsTag } from 'ids-enterprise-wc/ids-tag/ids-tag.js';
import { NativeElement } from '../helpers/native-element.decorator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  @NativeElement('myTag') tag: IdsTag;

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
    this.tag.color = '#F1EBFC';
  }

  onTagRemoved(details: CustomEvent) {
    console.log('tagremoved fired', details, details.detail);
  }
}
