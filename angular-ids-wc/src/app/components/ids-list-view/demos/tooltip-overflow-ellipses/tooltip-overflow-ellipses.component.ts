import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import eventsJSON from '../../../../../api/events.json';

@Component({
  selector: 'app-tooltip-overflow-ellipses',
  templateUrl: './tooltip-overflow-ellipses.component.html',
  styleUrls: ['./tooltip-overflow-ellipses.component.css']
})
export class TooltipOverflowEllipsesComponent implements AfterViewInit {
  @ViewChild('listView', { read: ElementRef }) listView;
  template = '<ids-text font-size="16" type="h2">${subject}</ids-text><ids-text font-size="12" type="span">ID: ${id}</ids-text><ids-text font-size="12" type="span">Comments: ${comments}</ids-text>'

  constructor() { }

  onMultiListClick(event) {
    console.log('onMultiListClick() triggered', event);
  }

  ngAfterViewInit(): void {
    this.listView.nativeElement.defaultTemplate = this.template;
    this.listView.nativeElement.data = eventsJSON;
  }

}
