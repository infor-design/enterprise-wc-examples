import { Component, ViewChild, VERSION, AfterViewInit } from '@angular/core';
import IdsTag from 'ids-enterprise-wc/components/ids-tag/ids-tag.js';

@Component({
  selector: 'app-ids-tag',
  templateUrl: './ids-tag.component.html',
  styleUrls: ['./ids-tag.component.css']
})
export class IdsTagComponent implements AfterViewInit {
  @ViewChild('myTag') tag: IdsTag;

  public name = 'Angular ' + VERSION.major;
  public person = 'John Smith';
  public type = 'success';
  public tagList = [
    { type: '', name: 'Tag One' },
    { type: 'success', name: 'Tag Two' },
    { type: '', name: 'Tag Three' },
    { type: 'error', name: 'Tag Four' },
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.tag.nativeElement.color = 'success';
  }

  onTagRemove(details: CustomEvent) {
    console.log('tagremove fired', details, details.detail);
  }
}
