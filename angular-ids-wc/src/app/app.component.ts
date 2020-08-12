import { Component, VERSION, ViewChild } from '@angular/core';
import { IdsTag } from '@infor-ids/ids-tag/ids-tag.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  @ViewChild('myTag', { static: true }) tag: IdsTag; 

  public name = 'Angular ' + VERSION.major;
  public person = 'John Smith';
  public type = 'error';

  ngAfterViewInit() {
    this.tag.nativeElement.color = 'success';
  }

  onTagRemoved({ detail: component }) {
    console.log(component);
  }
}
