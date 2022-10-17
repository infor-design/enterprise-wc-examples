import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import IdsToolbar from 'ids-enterprise-wc/components/ids-toolbar/ids-toolbar';
import IdsMenuButton from 'ids-enterprise-wc/components/ids-menu-button/ids-menu-button';

@Component({
  selector: 'app-toolbar-overflow-example',
  templateUrl: './overflowed.component.html',
  styleUrls: ['./overflowed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverflowedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('overflow init');
  }

}
