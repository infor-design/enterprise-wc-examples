import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { breakpoints } from 'ids-enterprise-wc/utils/ids-breakpoint-utils/ids-breakpoint-utils';

@Component({
  selector: 'app-fullsize',
  templateUrl: './fullsize.component.html',
  styleUrls: ['./fullsize.component.css']
})
export class FullsizeComponent implements OnInit {
  @ViewChild('modal', { read: ElementRef }) modal;

  constructor(
    private host: ElementRef,
    private zone: NgZone
  ) { }

  public model = {
    breakpoints: [],
    currentBreakpoint: null,
    viewportSize: 0
  };

  /**
   * Creates selectable radio items representing available IDS breakpoints
   * (draws from IdsBreakpointUtils)
   */
  private defineBreakpoints() {
    const fullsizeValues: Array<string | null> = [null, ...Object.keys(breakpoints).reverse(), 'always'];
    const radioDefs = [];

    fullsizeValues.forEach((val, i) => {
      const checked = i < 1;
      let text = val;
      let size = '';

      if (val !== null && val !== 'always') {
        size = breakpoints[val];
      }
      if (val === null) {
        text = 'Never';
      }
      if (val === 'always') {
        text = 'Always';
        size = 'always'
      }
      if (size.length) {
        text += ` (${size})`;
      }

      radioDefs.push({
        checked, 
        size, 
        text, 
        value: val
      })
    });

    this.model.breakpoints = radioDefs;
  }

  /**
   * Resize Observer for displaying current window width
   */
  private observeViewportSize() {
    // note: ResizeObserver updates MUST run inside NgZone
    // @see https://dev.to/christiankohler/how-to-use-resizeobserver-with-angular-9l5#3-trigger-change-detection
    const ro = new ResizeObserver(() => {
      this.zone.run(() => {
        this.model.viewportSize = window.innerWidth;
      })
    });
    ro.observe(document.querySelector('body') as any);
  }

  ngOnInit(): void {
    console.log('fullsize init');
    this.defineBreakpoints();
    this.observeViewportSize();
  }

  handleShow() {
    this.modal.nativeElement.show();
  }

  handleHide() {
    this.modal.nativeElement.hide();
  }

  onRadioChange(e: CustomEvent) {
    this.model.currentBreakpoint = e.detail.value;
  }
}
