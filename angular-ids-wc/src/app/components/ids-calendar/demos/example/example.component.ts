import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import IdsCalendar from 'ids-enterprise-wc/components/ids-calendar/ids-calendar';
import { DataService } from 'src/app/shared/mock/data.service';
// import IdsMonthView from 'ids-enterprise-wc/components/ids-month-view/ids-month-view';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('calendar', { read: ElementRef }) calendar: IdsCalendar;
  @ViewChild('addMenu', { read: ElementRef }) addMenu;

  constructor(
    private dataService: DataService
  ) { }

  ngAfterViewInit() {

    this.dataService.getJsonData('event-types')
      .subscribe(res => {
        this.calendar.nativeElement.eventTypesData = res;
      });

    this.dataService.getJsonData('events')
      .subscribe(res => {
        this.calendar.nativeElement.eventData = res;
      });

    this.addMenu.nativeElement?.addEventListener('selected', (evt: any) => {
      // Mock user defined id
      const id: string = Date.now().toString() + Math.floor(Math.random() * 100);
  
      switch (evt.detail.value) {
        case 'add-modal':
          this.calendar.nativeElement.createNewEvent(id, true);
          break;
        case 'add-api':
          this.calendar.nativeElement.createNewEvent(id, false);
          break;
        case 'clear':
          this.calendar.nativeElement.clearEvents();
          break;
        default:
          break;
      }
    });

  }

}
