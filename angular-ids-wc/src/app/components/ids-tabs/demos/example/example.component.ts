import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChildren('tabElements', { read: ElementRef }) tabElements;

  constructor() { }

  ngOnInit(): void {
    console.log('example OnInit');
  }

  ngAfterViewInit(): void {
    this.tabElements.toArray()
      .forEach((el) => el.nativeElement.addEventListener('change', (e: Event | CustomEvent | any) => {
        console.info(`ids-tabs.on('change') =>`, e.target?.value);
      }));
  }

}
