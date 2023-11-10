import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import IdsIcon from 'ids-enterprise-wc/components/ids-icon/ids-icon';
import { IdsModuleNavDisplayMode } from 'ids-enterprise-wc/components/ids-module-nav/ids-module-nav-common';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('moduleNavRef', { read: ElementRef }) moduleNavRef;
  @ViewChild('moduleNavBarRef', { read: ElementRef }) moduleNavBarRef;
  @ViewChild('moduleNavTriggerBtnRef', { read: ElementRef }) moduleNavTriggerBtnRef;
  
  public displayMode: IdsModuleNavDisplayMode = this.isWithinMobileBreakpoint() ? false : 'collapsed';
  public filterable = true;
  public pinned = true;
  public responsive = true;

  private isWithinMobileBreakpoint() {
    return this.moduleNavRef?.nativeElement.isWithinMobileBreakpoint() || false;
  }

  private updateDisplayMode(mode: IdsModuleNavDisplayMode) {
    if (this.displayMode !== mode) {
      this.displayMode = mode;
      this.moduleNavRef.nativeElement.displayMode = mode;
      console.info('Module Nav Display Mode Updated:', mode || 'hidden');
    }
  }

  private async loadAppIconData() {
    const appIconRes = await fetch('/api/icons-app.json');
    const appIconData = await appIconRes.json();
    IdsIcon.customIconData = { ...appIconData };
  }

  constructor() { }

  ngOnInit(): void {
    this.loadAppIconData();
    console.log('Module Nav example init');
  }

  ngAfterViewInit(): void {
    this.moduleNavBarRef.nativeElement.target = this.moduleNavTriggerBtnRef.nativeElement;
    this.updateDisplayMode(this.isWithinMobileBreakpoint() ? false : 'collapsed');
  }

  handleDisplayModeChange(e: CustomEvent) {
    const newDisplayMode = e.detail.displayMode;
    console.info('Module Nav "displaymodechange" event handled: ', newDisplayMode);
    this.updateDisplayMode(newDisplayMode);
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
