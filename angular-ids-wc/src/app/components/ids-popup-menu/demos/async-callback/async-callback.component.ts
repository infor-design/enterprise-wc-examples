import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { DataService } from 'src/app/shared/mock/data.service';

@Component({
  selector: 'app-async-callback',
  templateUrl: './async-callback.component.html',
  styleUrls: ['./async-callback.component.css']
})
export class AsyncCallbackComponent implements OnInit, AfterViewInit {
  @ViewChild('popupmenuEl', { read: ElementRef }) popupmenuEl;

  constructor(
    private dataService: DataService,
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
    console.log('ids-popup-menu data-driven OnInit');
  }

  ngAfterViewInit(): void {
    // Configure the menu
    this.popupmenuEl.nativeElement.align = 'top, left';

    this.renderer2.listen(this.popupmenuEl.nativeElement,'beforeshow', () => {
      console.log('got here!');

      this.dataService.getJsonData('menu-contents')
          .subscribe(res => {
              this.popupmenuEl.nativeElement.data = res;
          });
    });
  }
}
