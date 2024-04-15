import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-example-action-sheet',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {
  public visible = false;

  constructor() { }

  openPanel() {
    this.visible = true;
  }

  closePanel() {
    this.visible = false;
  }

  onSaveClick() {
    console.info('Save Button Clicked');
    this.closePanel();
  }

  onCloseClick() {
    console.info('Close Button Clicked');
    this.closePanel();
  }
}
