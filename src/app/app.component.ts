import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  tab = window.location.href.split("/").reverse()[0];

  updateTab(tab : string) {
    this.tab = tab;
  }
}
