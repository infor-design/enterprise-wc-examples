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
  enableNextPage = false;
  enableLastPage = false;

  pageNumber = 1;
  pageSize = 10;
  pageSizes = [ 5, 10, 20, 50, 100, 200 ];
  totalPages = Math.ceil(this.totalRecords / this.pageSize);

  constructor() { }

  ngOnInit(): void {
    console.log('wrapper example init');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.enableFirstPage = false;
      this.enablePreviousPage = false;
      this.enableNextPage = true;
      this.enableLastPage = true;
    });
  }

  onFirstPage($event: any) {
    console.log('first Page Clicked')
    this.pageNumber = 1;
    this.enableFirstPage = false;
    this.enablePreviousPage = false;
    this.enableNextPage = true;
    this.enableLastPage = true;
  }

  onPreviousPage($event: any) {
    console.log('first Page Clicked')
    this.pageNumber--;
    this.enableLastPage = true;
    this.enableNextPage = true;

    if (this.pageNumber === 1) {
      this.enableFirstPage = false;
      this.enablePreviousPage = false;
    } else {
      this.enableFirstPage = true;
      this.enablePreviousPage = true;
    }
  }

  onNextPage($event: any) {
    console.log('first Page Clicked')
    this.pageNumber++;
    this.enableFirstPage = true;
    this.enablePreviousPage = true;

    if (this.pageNumber === this.totalPages) {
      this.enableLastPage = false;
      this.enableNextPage = false;
    } else {
      this.enableNextPage = true;
      this.enableLastPage = true;
    }
  }

  onLastPage($event: any) {
    console.log('first Page Clicked')
    this.pageNumber = this.totalPages;
    this.enableFirstPage = true;
    this.enablePreviousPage = true;
    this.enableNextPage = false;
    this.enableLastPage = false;
  }

  onPageSizeChange($event: any) {
    console.log('first Page Clicked')
  }
}
