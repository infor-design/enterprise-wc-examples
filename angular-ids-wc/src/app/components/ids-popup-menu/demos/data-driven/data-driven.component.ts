import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/shared/mock/data.service';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit, AfterViewInit {
  @ViewChild('popupmenuEl', { read: ElementRef }) popupmenuEl;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    console.log('ids-popup-menu data-driven OnInit');
  }

  ngAfterViewInit(): void {
    // Configure the menu
    this.popupmenuEl.nativeElement.align = 'top, left';

    this.dataService.getJsonData('menu-contents')
      .subscribe(res => {
        this.popupmenuEl.nativeElement.data = res;
      })
  }
}
