import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/shared/mock/data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, AfterViewInit {
  @ViewChild('blockGrid', { read: ElementRef }) blockGrid;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    console.log('IdsBlockGrid pagination OnInit');
  }

  ngAfterViewInit(): void {
    this.dataService.getJsonData('employees')
      .subscribe(res => {
        this.blockGrid.nativeElement.data = res;
        this.blockGrid.nativeElement.pageTotal = res.length;
      });

    this.blockGrid.nativeElement.pager.addEventListener('pagenumberchange', async (e: { detail: { value: any; }; }) => {
      console.info(`On page-number change # ${e.detail.value}`);
    });
  
    this.blockGrid.nativeElement.pager.addEventListener('pagesizechange', async (e: { detail: { value: any; }; }) => {
      console.info(`On page-size change # ${e.detail.value}`);
    });
  }

}
