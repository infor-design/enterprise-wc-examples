import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('menuButton1', { read: ElementRef }) menuButton1;

  constructor() { }

  ngOnInit() {
    console.log('ids-menu-button OnInit');
  }

  ngAfterViewInit(): void {
    this.menuButton1.nativeElement.menuEl.addEventListener('show', () => {
      console.info(`Menu Button items were displayed`);
    });

    this.menuButton1.nativeElement.menuEl.addEventListener('hide', () => {
      console.info(`Menu Button items were hidden`);
    });

    this.menuButton1.nativeElement.menuEl.addEventListener('selected', (e: Event) => {
      this.menuItemResponse(e, 'selected');
    });

    this.menuButton1.nativeElement.menuEl.addEventListener('deselected', (e: Event) => {
      this.menuItemResponse(e, 'deselected');
    });
  }

  menuItemResponse = (e: any, msg: string) => {
    const target = e.detail.elem;
    if (target !== null) {
      const text = target.textContent.trim();
      console.info(`Menu Item "${text}" was ${msg}`, e.detail.elem);
    }
  };
}
