import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  constructor() { }

  container = null;

  ngOnInit(): void {
    console.log('sandbox init');
    this.container = document.querySelector('ids-container');
  }

  isChecked = (sel: any) => document.querySelector(sel)?.checked;

  openToastVariant() {
    const draggable = this.isChecked('#cb-toast-draggable');
    const destroyOnComplete = this.isChecked('#cb-toast-destroy-on-complete');
    const position = (document.querySelector('#radio-toast-position') as any).value;

    const allowLink = this.isChecked('#cb-toast-allow-link');
    const audible = this.isChecked('#cb-toast-audible');
    const closeButtonLabel = this.isChecked('#cb-toast-close-button-label') ? 'Click here to close' : null;
    const progressBar = this.isChecked('#cb-toast-progress-bar');
    const timeout = this.isChecked('#cb-toast-timeout') ? 2000 : null;

    const title = 'Application Offline';
    const message = !allowLink
      ? 'This is a Toast message.'
      : 'Link in message: <ids-hyperlink href="http://www.example.com" target="_blank">Google</ids-hyperlink>';

    const toastId = 'test-toast-variant';

    let toast: any = document.querySelector(`#${toastId}`);
    if (!toast) {
      toast = document.createElement('ids-toast');
      toast.setAttribute('id', toastId);
      this.container?.appendChild(toast);
    }

    toast.draggable = draggable;
    toast.destroyOnComplete = destroyOnComplete;
    toast.position = position;

    toast.show({
      title,
      message,
      allowLink,
      audible,
      closeButtonLabel,
      progressBar,
      timeout
    });
  }

  setClearButtons = (sel: any, toast: any) => {
    const buttons: any = {
      clearAll: document.querySelector('#btn-toast-clear-position-all'),
      btnClear1: document.querySelector('#btn-toast-clear-position-1'),
      btnClear2: document.querySelector('#btn-toast-clear-position-2'),
    };
    if (buttons.btnClear1 && buttons.btnClear2 && buttons.clearAll && toast) {
      const btn = buttons[`btnClear${sel}`];
      const btnAlt = buttons[`btnClear${sel !== 1 ? 1 : 2}`];
      buttons.clearAll.disabled = true;
      btn.disabled = true;
      toast.addEventListener('remove-container', () => {
        btn.disabled = false;
        if (!btnAlt.disabled) {
          buttons.clearAll.disabled = false;
        }
      });
    }
  };

  handleSavePosition = (sel: any) => {
    const toastId = `test-toast-save-position-${sel}`;
    let toast: any = document.querySelector(`#${toastId}`);
    if (!toast) {
      toast = document.createElement('ids-toast');
      toast.setAttribute('id', toastId);
      toast.uniqueId = sel === 1 ? 'some-uniqueid-1' : 'some-uniqueid-2';
      toast.savePosition = true;
      toast.draggable = true;
      this.container?.appendChild(toast);
    }
    toast.show({
      title: `Application Offline (${sel})`,
      message: 'This is a Toast message.'
    });

    // Set clear buttons disable/enable, so it not in action while toast active
    this.setClearButtons(sel, toast);
  };

  handleClearPosition = (sel: any) => {
    const toast: any = document.createElement('ids-toast');
    toast?.clearPosition(sel);
  }

  handleClearAll = () => {
    const toast: any = document.createElement('ids-toast');
    toast?.clearPositionAll();
  }

  openMarkUpToast() {
    const toastMarkup: any = document.querySelector('#toast-markup');
    toastMarkup.show();
  }
}
