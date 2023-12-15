import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/mock/data.service';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements AfterViewInit {
  @ViewChild('tree', { read: ElementRef }) tree;

  constructor(
    private dataService: DataService
  ) { }

  ngAfterViewInit(): void {
    this.dataService.getJsonData('tree-basic')
      .subscribe(res => {
        this.tree.nativeElement.data = res;
      })
  }
}
