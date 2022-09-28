import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import IdsListView from 'ids-enterprise-wc/components/ids-list-view/ids-list-view';
import { DataService } from 'src/app/shared/mock/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('listView', { read: ElementRef }) listView: IdsListView;

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
