import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-display-selected',
  templateUrl: './display-selected.component.html',
  styleUrls: ['./display-selected.component.css']
})
export class DisplaySelectedComponent implements OnInit, AfterViewInit {
  @ViewChild('btnSpanEl', { read: ElementRef }) btnSpanEl;

  constructor() { }

  ngOnInit(): void {
    console.log('ids-menu-button display selected OnInit');
  }

  ngAfterViewInit(): void {
    console.log('ids-menu-button display selected AfterViewInit');
  }

  handleSelected(e: CustomEvent) {
    const target = e.detail.elem;
    if (target !== null) {
      const text = target.textContent.trim();
      this.btnSpanEl.nativeElement.innerHTML = text;
      console.info('Menu Item Selected', e.detail.elem);
    }
  }
}
