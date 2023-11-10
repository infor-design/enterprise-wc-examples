import { Component, OnInit, AfterViewInit, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';
import { kebabCase } from 'ids-enterprise-wc/utils/ids-string-utils/ids-string-utils';
import { cssTransitionTimeout } from 'ids-enterprise-wc/utils/ids-timer-utils/ids-timer-utils';
import IdsIcon from 'ids-enterprise-wc/components/ids-icon/ids-icon';
import { IdsModuleNavDisplayMode } from 'ids-enterprise-wc/components/ids-module-nav/ids-module-nav-common';

const DatasetMap = {
  'default': '/api/accordion-module-nav-demo.json',
  'nested-with-icons': '/api/accordion-nested-with-icons.json',
  'nested-no-icons': '/api/accordion-nested-no-icons.json'
};

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit, AfterViewInit, AfterContentChecked {
  @ViewChild('moduleNavRef', { read: ElementRef }) moduleNavRef;
  @ViewChild('moduleNavBarRef', { read: ElementRef }) moduleNavBarRef;
  @ViewChild('moduleNavContentRef', { read: ElementRef }) moduleNavContentRef;
  @ViewChild('moduleNavTriggerBtnRef', { read: ElementRef }) moduleNavTriggerBtnRef;
  @ViewChild('moduleNavAccordionRef', { read: ElementRef }) moduleNavAccordionRef;
  @ViewChild('displayModeDropdownRef', { read: ElementRef }) displayModeDropdownRef;
  @ViewChild('offsetContentCheckRef', { read: ElementRef }) offsetContentCheckRef;

  public datasetName: string = 'default';
  public displayMode: IdsModuleNavDisplayMode = this.isWithinMobileBreakpoint() ? false : 'collapsed';
  public filterable = true;
  public oneAccordionPane = false;
  public offsetContent = true;
  public pinned = true;
  public responsive = true;
  public accordionItems = [];

  /** Needs to be changed to `true` in order for `ngAfterContentChecked` to run efficiently */
  private viewNeedsRefresh = false;

  private isWithinMobileBreakpoint() {
    return this.moduleNavRef?.nativeElement.isWithinMobileBreakpoint() || false;
  }

  private updateDisplayMode(mode: IdsModuleNavDisplayMode) {
    if (this.displayMode !== mode) {
      this.displayMode = mode;
      this.moduleNavRef.nativeElement.displayMode = mode;
      this.displayModeDropdownRef.nativeElement.value = !mode ? 'hidden' : mode;
      console.info('Module Nav Display Mode Updated:', mode || 'hidden');
    }
  }

  private async updateWebComponents() {
    await cssTransitionTimeout(1);
    this.moduleNavAccordionRef.nativeElement.checkExpanders();
  }

  private async loadAccoridonItemData(url: string) {
    const accordionItemRes = await fetch(url);
    const accordionItemData = await accordionItemRes.json();
    this.viewNeedsRefresh = true;
    this.accordionItems = accordionItemData;
  }

  private async loadAppIconData() {
    const appIconRes = await fetch('/api/icons-app.json');
    const appIconData = await appIconRes.json();
    IdsIcon.customIconData = { ...appIconData };
  }

  constructor() { }

  getDisplayModeDropdownValue(val: IdsModuleNavDisplayMode) {
    return typeof val !== 'string' ? '' : val;
  }

  getItemIdFromText(val: string) {
    return `item-${kebabCase(val)}`;
  }

  async ngOnInit() {
    await this.loadAppIconData();
    await this.loadAccoridonItemData(DatasetMap[this.datasetName]);
    console.log('Module Nav sandbox init');
  }

  ngAfterViewInit() {
    this.moduleNavBarRef.nativeElement.target = this.moduleNavTriggerBtnRef.nativeElement;
    this.updateDisplayMode(this.isWithinMobileBreakpoint() ? false : 'collapsed');
  }

  ngAfterContentChecked() {
    if (this.viewNeedsRefresh) {
      this.updateWebComponents();
      this.viewNeedsRefresh = false;
    }
  }

  handleDatasetChange(e: CustomEvent) {
    this.datasetName = e.detail.value;
    this.loadAccoridonItemData(DatasetMap[this.datasetName]);
  }

  handleDisplayModeChange(e: CustomEvent) {
    const newDisplayMode = e.detail.displayMode;
    console.info('Module Nav "displaymodechange" event handled: ', newDisplayMode);
    this.updateDisplayMode(newDisplayMode);
  }

  handleDisplayModeDropdownChange(e: CustomEvent) {
    const val = e.detail.value;
    this.updateDisplayMode(val === '' ? false : val);
  }

  handleAllowOnePaneChange(e: CustomEvent) {
    this.moduleNavAccordionRef.nativeElement.allowOnePane = e.detail.checked;
  }

  handleFilteringChange(e: CustomEvent) {
    this.moduleNavBarRef.nativeElement.filterable = e.detail.checked;
  }

  handleOffsetContentChange(e: CustomEvent) {
    this.moduleNavContentRef.nativeElement.offsetContent = e.detail.checked;
  }

  handlePinnedChange(e: CustomEvent) {
    this.moduleNavBarRef.nativeElement.pinned = e.detail.checked;
  }

  handleResponsiveChange(e: CustomEvent) {
    const isResponsive = e.detail.checked;
    this.moduleNavRef.nativeElement.responsive = isResponsive;
    this.displayModeDropdownRef.nativeElement.disabled = isResponsive;
    this.offsetContentCheckRef.nativeElement.disabled = isResponsive;
  }

  handleHamburgerButtonClick() {
    console.info('Hamburger Button click');
    const alternateMode = this.isWithinMobileBreakpoint() ? false : 'collapsed';
    this.updateDisplayMode(this.displayMode === 'expanded' ? alternateMode : 'expanded');
  }

  handleSelected(e: CustomEvent) {
    console.info(`Module Nav Item "${(e.target as any).textContent.trim()}" was selected.`);
  }
}
