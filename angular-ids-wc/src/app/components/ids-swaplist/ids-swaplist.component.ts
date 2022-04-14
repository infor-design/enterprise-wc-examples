import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NativeElement } from '../../../helpers/native-element.decorator';
import IdsSwapList from 'ids-enterprise-wc/ids-swaplist/ids-swaplist.js';
import 'ids-enterprise-wc/ids-swappable/ids-swappable';
import 'ids-enterprise-wc/ids-swappable/ids-swappable-item';

@Component({
  selector: 'app-ids-swaplist',
  templateUrl: './ids-swaplist.component.html',
  styleUrls: [ './ids-swaplist.component.css' ]
})
export class IdsSwaplistComponent implements AfterViewInit {
  @NativeElement('mySwaplist') swaplist: IdsSwapList;

  public periods = [
    {
      "id": 1,
      "city": "London",
      "location": "Corporate FY19",
      "alert": true,
      "alertClass": "error",
      "daysLeft": 3,
      "hoursLeft": 5
    },
    {
      "id": 2,
      "city": "New York",
      "location": "Corporate FY19",
      "alert": true,
      "alertClass": "alert",
      "daysLeft": 6,
      "hoursLeft": 7
    },
    {
      "id": 3,
      "city": "Vancouver",
      "location": "Corporate FY19",
      "alert": false,
      "alertClass": "",
      "daysLeft": 8,
      "hoursLeft": 1
    },
    {
      "id": 4,
      "city": "Tokyo",
      "location": "Corporate FY19",
      "alert": false,
      "alertClass": "",
      "daysLeft": 2 ,
      "hoursLeft": 1
    },
    {
      "id": 5,
      "city": "Madrid",
      "location": "Corporate FY19",
      "alert": false,
      "alertClass": "",
      "daysLeft": 3 ,
      "hoursLeft": 1
    }
  ];

  ngAfterViewInit() {
    this.setSwaplistData();
  }

  setSwaplistData() {
    this.swaplist['defaultTemplate'] = [
      '<ids-swappable-item><ids-text>${city}</ids-text></ids-swappable-item>'
    ].join('\n')

    this.swaplist['data'] = this.periods;
  }

  handleClick(e) {
    console.log(e);
  }
}
