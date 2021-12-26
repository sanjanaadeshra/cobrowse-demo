import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cobrowsing-poc';

  constructor() {

    console.log('>>>>>>>>>>>' + sessionStorage.getItem('togetherjs-session.status'));
  }
}
