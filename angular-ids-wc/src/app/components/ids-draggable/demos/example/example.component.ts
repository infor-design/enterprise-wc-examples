import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChildren('draggable', { read: ElementRef }) draggable;

  constructor() { }

  ngOnInit(): void {
    console.log('IdsDraggable example OnInit');
  }

  ngAfterViewInit(): void {
    this.draggable.toArray()
      .forEach((d: ElementRef) => {
        d.nativeElement.addEventListener('ids-dragstart', (e: any) => {
          console.info('ids-dragstart', d, e.detail);
        });
      
        d.nativeElement.addEventListener('ids-drag', (e: any) => {
          console.info('ids-drag', d, e.detail);
        });
      
        d.nativeElement.addEventListener('ids-dragend', (e: any) => {
          console.info('ids-dragend', d, e.detail);
        });
      })
  }
}
