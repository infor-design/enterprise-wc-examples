import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('mySwaplist', { read: ElementRef }) swaplist;

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
    this.swaplist.nativeElement.defaultTemplate = '<ids-swappable-item><ids-text>${city}</ids-text></ids-swappable-item>';
    this.swaplist.nativeElement.data = this.periods;
  }

  handleClick(e) {
    console.log(e);
  }
}
