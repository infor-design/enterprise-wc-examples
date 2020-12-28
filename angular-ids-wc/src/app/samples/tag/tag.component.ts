import {
  Component,
  VERSION,
  ViewChild
} from '@angular/core';

import { IdsTag } from 'ids-enterprise-wc/ids-tag/ids-tag.js';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @ViewChild('myTag', { static: true }) tag: IdsTag;

  constructor() { }

  public name: string = 'Angular' + VERSION.major;
  public person: string = 'John Smith';
  public type: string = 'success';
  public tagList: Array<{ type: string, name: string }> = [
    { type: '', name: 'Tag One' },
    { type: 'success', name: 'Tag Two' },
    { type: '', name: 'Tag Three' },
    { type: 'error', name: 'Tag Four' },
  ];

  ngAfterViewInit(): void {
    this.tag.nativeElement.color = 'error';
    console.log("myTag", this.tag);
  }

  onTagRemoved({ detail: component }): void {
    console.log('tagremoved fired', component);
  }
}
