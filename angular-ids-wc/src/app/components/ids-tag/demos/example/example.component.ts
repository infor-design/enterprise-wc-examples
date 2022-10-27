import { Component, ViewChild, VERSION, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('myTag') tag;

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
