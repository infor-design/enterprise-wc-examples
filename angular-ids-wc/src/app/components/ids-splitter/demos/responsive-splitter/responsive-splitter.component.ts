import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import 'ids-enterprise-wc/components/ids-splitter/ids-splitter';
import IdsSplitter, { IdsSplitterCollapseExpandOpts } from 'ids-enterprise-wc/components/ids-splitter/ids-splitter';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import IdsButton from 'ids-enterprise-wc/components/ids-button/ids-button';

@Component({
  selector: 'app-responsive-splitter',
  templateUrl: './responsive-splitter.component.html',
  styleUrls: ['./responsive-splitter.component.css']
})
export class ResponsiveSplitterComponent implements AfterViewInit {
  @ViewChild('IdsSplitter') idsSplitterRef: ElementRef;
  @ViewChild('IdsButton') idsButtonRef: ElementRef;
  private idsSplitter: IdsSplitter;
  private expandCollapseButton: IdsButton;

  collapsed: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngAfterViewInit(): void {
    console.log('IdsSplitter AfterViewInit');
    this.idsSplitter = this.idsSplitterRef.nativeElement;
    this.expandCollapseButton = this.idsButtonRef.nativeElement;

    this.breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe((result: BreakpointState) => {
      setTimeout(() => this.collapsed = result.matches);
    });

    this.expandCollapseButton.addEventListener('click', () => {
      console.log('expandCollapseButton clicked');
      this.collapsed = !this.collapsed;
    });

    // this.idsSplitter.collapse(this.idsSplitterCollapseExpandOpts)
  }
}
