import { Component, VERSION, ViewChild } from '@angular/core';
import { IdsTag } from 'ids-enterprise-wc/ids-tag/ids-tag.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  @ViewChild('myTag', { static: true }) tag: IdsTag; 

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
    this.tag.nativeElement.color = 'error';
  }

  onTagRemoved({ detail: component }) {
    console.log('tagremoved fired', component);
  }
}
