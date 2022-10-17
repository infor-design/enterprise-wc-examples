import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/shared/mock/data.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements AfterViewInit {
  @ViewChild('listView', { read: ElementRef }) listView;

  constructor(
    private dataService: DataService
  ) { }

  ngAfterViewInit(): void {
    this.listView.nativeElement.defaultTemplate = '<ids-text font-size="16" type="h2">${subject}</ids-text><ids-text font-size="12" type="span">Comments: ${comments}</ids-text>';
    this.dataService.getJsonData('events')
      .subscribe(res => {
        this.listView.nativeElement.data = res;
      });
  }

}
