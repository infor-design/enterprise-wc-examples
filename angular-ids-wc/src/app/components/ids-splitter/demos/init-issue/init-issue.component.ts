import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import 'ids-enterprise-wc/components/ids-splitter/ids-splitter';
import IdsSplitter, { IdsSplitterCollapseExpandOpts } from 'ids-enterprise-wc/components/ids-splitter/ids-splitter';

@Component({
  selector: 'app-init-issue-splitter',
  templateUrl: './init-issue.component.html',
  styleUrls: ['./init-issue.component.css']
})
export class InitIssueComponent implements AfterViewInit {
  @ViewChild('IdsSplitter') idsSplitterRef: ElementRef;
  private idsSplitter: IdsSplitter;

  private readonly idsSplitterCollapseExpandOpts: IdsSplitterCollapseExpandOpts = {
    startPane: '#splitter-left',
    endPane: '#splitter-right',
  };

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsSplitter AfterViewInit');
    this.idsSplitter = this.idsSplitterRef.nativeElement;
    this.idsSplitter.collapse(this.idsSplitterCollapseExpandOpts)
  }
}
