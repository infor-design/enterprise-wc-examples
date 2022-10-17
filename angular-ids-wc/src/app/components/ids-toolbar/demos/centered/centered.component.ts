import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import IdsToolbar from 'ids-enterprise-wc/components/ids-toolbar/ids-toolbar';
import IdsMenuButton from 'ids-enterprise-wc/components/ids-menu-button/ids-menu-button';

@Component({
  selector: 'app-toolbar-centered-example',
  templateUrl: './centered.component.html',
  styleUrls: ['./centered.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CenteredComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('centered init');
  }

}
