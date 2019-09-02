import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PhoneBook';
  displayAddButton: boolean;

  constructor(private router: Router) {

    this.router.events.subscribe(value => {
      if (value instanceof NavigationStart) {
        if (value.url === "/home") {
          this.displayAddButton = true;
        }
      }
    });
  }

}
