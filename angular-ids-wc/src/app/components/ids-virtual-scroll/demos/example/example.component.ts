import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/shared/mock/data.service';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('virtualScroll1', { read: ElementRef }) virtualScroll1;
  @ViewChild('virtualScroll2', { read: ElementRef }) virtualScroll2;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    console.log('ids-virtual-scroll example OnInit');
  }

  ngAfterViewInit(): void {
    this.dataService.getJsonData('products')
      .subscribe((res) => {
        // VirtualScroll w/List-view
        this.virtualScroll1.nativeElement.data = res;
        this.virtualScroll1.nativeElement.itemTemplate = (item: any) => `<div part="list-item">${item.productName}</div>`;
        this.virtualScroll1.nativeElement.scrollTarget = document.querySelector('ids-card')?.shadowRoot?.querySelector('.ids-card-content');
        
        // VirtualScroll w/DataGrid
        this.virtualScroll2.nativeElement.scrollTarget = document.querySelector('.ids-data-grid');
        this.virtualScroll2.nativeElement.itemTemplate = (item: any) => `<div part="row" role="row" class="ids-data-grid-row">
          <span role="cell" part="cell" class="ids-data-grid-cell"><span class="text-ellipsis" part="text-ellipsis">${item.productId}</span></span>
          <span role="cell" part="cell" class="ids-data-grid-cell"><span class="text-ellipsis" part="text-ellipsis">${item.productName}</span></span>
        </div>`;
        this.virtualScroll2.nativeElement.data = res;
      });
  }
}
