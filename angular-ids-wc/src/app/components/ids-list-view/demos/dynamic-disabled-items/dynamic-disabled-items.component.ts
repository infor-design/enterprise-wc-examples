import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-disabled-items',
  templateUrl: './dynamic-disabled-items.component.html',
  styleUrls: ['./dynamic-disabled-items.component.css']
})
export class DynamicDisabledItemsComponent implements AfterViewInit {
  itemDisable = null;
  items = [
    { itemType: 'type1', id: 1, comments: 'One' },
    { itemType: 'type2', id: 2, comments: 'Two' },
    { itemType: 'type3', id: 3, comments: 'Three' },
    { itemType: 'type4', id: 4, comments: 'Four' },
    { itemType: 'type5', id: 5, comments: 'Five' },
    { itemType: 'type6', id: 6, comments: 'Six' },
    { itemType: 'type7', id: 7, comments: 'Seven' },
    { itemType: 'type8', id: 8, comments: 'Eight' },
    { itemType: 'type9', id: 9, comments: 'Nine' },
    { itemType: 'type10', id: 10, comments: 'Ten' },
    { itemType: 'type11', id: 11, comments: 'Eleven' },
    { itemType: 'type12', id: 12, comments: 'Twelve' },
    { itemType: 'type13', id: 13, comments: 'Thirteen' },
    { itemType: 'type14', id: 14, comments: 'Fourteen' },
    { itemType: 'type15', id: 15, comments: 'Fifteen' },
    { itemType: 'type16', id: 16, comments: 'Sixteen' },
    { itemType: 'type17', id: 17, comments: 'Seventeen' },
    { itemType: 'type18', id: 18, comments: 'Eighteen' }
  ];

  constructor() { }

  ngAfterViewInit(): void {
  }

  onRowClick(item) {
    this.itemDisable = item.itemType;
  }
}
