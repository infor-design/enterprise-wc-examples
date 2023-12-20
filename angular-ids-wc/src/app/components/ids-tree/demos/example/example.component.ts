import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/mock/data.service';

@Component({
  selector: 'app-example-tree',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('tree', { read: ElementRef }) tree;

  constructor(
    private dataService: DataService
  ) { }

  ngAfterViewInit(): void {
    this.dataService.getJsonData('tree-basic')
      .subscribe(res => {
        this.tree.nativeElement.data = res;
      })
    console.log('example init');
  }
}
