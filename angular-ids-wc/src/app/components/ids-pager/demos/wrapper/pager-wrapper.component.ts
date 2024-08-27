// @ts-strict
import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';

import IdsPager from 'ids-enterprise-wc/components/ids-pager/ids-pager';
import IdsPagerDropdown from 'ids-enterprise-wc/components/ids-pager/ids-pager-dropdown';
import 'ids-enterprise-wc/components/ids-pager/ids-pager';
import 'ids-enterprise-wc/components/ids-pager/ids-pager-button';
import 'ids-enterprise-wc/components/ids-pager/ids-pager-dropdown';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell';

@Component({
  selector: 'app-pager-wrapper',
  templateUrl: './pager-wrapper.component.html',
  // styleUrls: [ 'pager-wrapper.component.scss' ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagerWrapperComponent implements AfterViewInit {

  @Input() enableFirstButton = false;
  @Input() enablePreviousButton = false;
  @Input() enableNextButton = false;
  @Input() enableLastButton = false;

  @Input() pageSize = 0
  @Input() pageSizes = [];

  @Output() firstPage: EventEmitter<any> = new EventEmitter<any>();
  @Output() previousPage: EventEmitter<any> = new EventEmitter<any>();
  @Output() nextPage: EventEmitter<any> = new EventEmitter<any>();
  @Output() lastPage: EventEmitter<any> = new EventEmitter<any>();
  @Output() pageSizeChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('IdsPager') pagerElementRef!: ElementRef;
  @ViewChild('IdsPagerDropdown') pagerDropdownElementRef!: ElementRef;

  constructor(private renderer2: Renderer2) {
  }

  ngAfterViewInit() {
    if (this.pagerElementRef) {
      const idsPager: IdsPager = this.pagerElementRef.nativeElement as IdsPager;
      idsPager.pageSizes = this.pageSizes;
      idsPager.pageSize = this.pageSize;

      this.renderer2.listen(idsPager, 'pagesizechange', (event) => this.onPageSizeChange(event));
    }
  }

  onFirstPage($event: any) {
    this.firstPage.emit({ pageOp: 'first' });
  }

  onPreviousPage($event: any) {
    this.previousPage.emit({ pageOp: 'previous' });
  }

  onNextPage($event: any) {
    this.nextPage.emit({ pageOp: 'next' });
  }

  onLastPage($event: any) {
    this.lastPage.emit({ pageOp: 'last' });
  }

  onPageSizeChange($event: any) {
    const newEvent = {
      pageOp: 'pagesize',
      pageSize: ($event as CustomEvent).detail.value
    };
    this.pageSizeChange.emit(newEvent);
  }
}
