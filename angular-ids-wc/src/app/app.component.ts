import { 
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  @Input()
    routerLinkActiveOptions: {
    exact: boolean;
  }
}
