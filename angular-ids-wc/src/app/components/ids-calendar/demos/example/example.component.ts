import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/shared/mock/data.service';
import IdsCalender from 'ids-enterprise-wc/components/ids-calendar/ids-calendar';
import IdsPopupMenu from 'ids-enterprise-wc/components/ids-popup-menu/ids-popup-menu';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('calendar', { read: ElementRef }) calendar: ElementRef<IdsCalender>;
  @ViewChild('addMenu', { read: ElementRef }) addMenu: ElementRef<IdsPopupMenu>;

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
        this.calendar.nativeElement.eventsData = res;
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
