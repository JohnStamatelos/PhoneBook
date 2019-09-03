import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PhoneBook';
  displayAddButton: boolean;

  constructor(private router: Router) {

    this.router.events.subscribe(value => {
      if (value instanceof NavigationStart) {
        if (value.url === "/home" || value.url !=="/add") {
          this.displayAddButton = true;
        }
        else{
          this.displayAddButton = false;
        }
      }
    });
  }

  ngOnInit(){
    // localStorage.removeItem('phoneBookData');
  }

}
