import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import eventsJSON from '../../../../../api/events.json';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('listView', { read: ElementRef }) listView;
  template = '<ids-text font-size="16" type="h2">${subject}</ids-text><ids-text font-size="12" type="span">ID: ${id}</ids-text><ids-text font-size="12" type="span">Comments: ${comments}</ids-text>'

  constructor() { }

  ngAfterViewInit(): void {
    this.listView.nativeElement.defaultTemplate = this.template;
    this.listView.nativeElement.data = eventsJSON;
  }

}
