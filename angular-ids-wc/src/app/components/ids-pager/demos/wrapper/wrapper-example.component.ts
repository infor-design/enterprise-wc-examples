import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import IdsPagerDropdown from 'ids-enterprise-wc/components/ids-pager/ids-pager-dropdown';

@Component({
  selector: 'app-wrapper-example',
  templateUrl: './wrapper-example.component.html',
  // styleUrls: ['./wrapper-example.component.css']
})
export class WrapperExampleComponent implements OnInit, AfterViewInit {

  private page = 'first';
  private totalRecords = 51;

  enableFirstPage = false;
  enablePreviousPage = false;
  enableNextPage = true;
  enableLastPage = true;

  pageSize = 10;
  pageSizes = [ 5, 10, 20, 50, 100, 200 ];

  constructor() { }

  ngOnInit(): void {
    console.log('wrapper example init');
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.enableFirstPage = true;
    //   this.enablePreviousPage = true;
    //   this.enableNextPage = false;
    //   this.enableLastPage = false;
    // });
  }

  onFirstPage($event: any) {
    console.log('first Page Clicked')

    this.enableFirstPage = false;
    this.enablePreviousPage = false;
    this.enableNextPage = true;
    this.enableLastPage = true;
  }

  onPreviousPage($event: any) {
    console.log('first Page Clicked')
  }

  onNextPage($event: any) {
    console.log('first Page Clicked')
    this.enableFirstPage = true;
    this.enablePreviousPage = true;
    this.enableNextPage = true;
    this.enableLastPage = true;
  }

  onLastPage($event: any) {
    console.log('first Page Clicked')

    this.enableFirstPage = true;
    this.enablePreviousPage = true;
    this.enableNextPage = false;
    this.enableLastPage = false;
  }

  onPageSizeChange($event: any) {
    console.log('first Page Clicked')
  }
}
