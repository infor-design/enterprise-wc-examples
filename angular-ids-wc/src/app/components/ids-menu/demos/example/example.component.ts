import { Component } from '@angular/core';
import { of } from 'rxjs';

const MENU_DATA = [
  {
    value: 'one',
    label: 'One'
  },
  {
    value: 'two',
    label: 'Two'
  },
  {
    value: 'three',
    label: 'Three'
  }
]

const MENU_DATA_ICONS = [
  {
    id: 'main-settings',
    type: 'group',
    menuItems: [
      {
        value: 'mail',
        label: 'Mail',
        icon: 'mail'
      },
      {
        value: 'filter',
        label: 'Filter',
        icon: 'filter'
      },
      {
        value: 'settings',
        label: 'Settings',
        icon: 'settings'
      },
      {
        type: 'separator'
      },
      {
        value: 'long-no-icons',
        label: 'Very long, indescribable action with no icons',
      },
      {
        value: 'big-with-icons',
        label: 'Another big menu item, but with icons!',
        disabled: true,
        icon: 'url'
      },
    ]
  },
  {
    type: 'separator'
  },
  {
    id: 'additional-actions-header',
    type: 'header',
    label: 'Additional Actions'
  },
  {
    id: 'more-settings',
    type: 'group',
    menuItems: [
      {
        value: 'more-actions',
        label: 'More Actions'
      },
      {
        value: 'even-more-actions',
        label: 'Even More Actions',
        icon: 'user'
      },
      {
        value: 'no-select',
        label: "This one can't be selected (Check the console)",

      }
    ]
  },
  {
    type: 'separator'
  },
  {
    id: 'other-settings',
    type: 'group',
    menuItems: [
      {
        value: 'other-items',
        label: 'Other Items',
        icon: 'more'
      }
    ]
  }
]

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  menuData$ = of(MENU_DATA);
  menuIconsData$ = of(MENU_DATA_ICONS);

  constructor() {}

  onBeforeSelected(evt: CustomEvent) {
    const preventSelect = ['no-select'];
    const value = evt.detail?.data?.value;
    const allowSelect = preventSelect.indexOf(value) === -1;
    evt.detail.response(allowSelect);
  }

  onSelected(evt: CustomEvent) {
    console.info('selected:', evt.detail);
  }
}
