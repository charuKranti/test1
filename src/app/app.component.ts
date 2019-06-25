import { Component } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userlistAngularApp';
  
  currentUrl: string;
  constructor(private router: Router, private http: HttpClient) {
      router.events.subscribe((event: RouterEvent) => {
          this.navigationInterceptor(event)
      })
  }

  // this is for getting currnt url name
  navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
          //this.loading = true;
          console.log('NavigationStart ');
      }
      if (event instanceof NavigationEnd) {
          //this.loading = false;
          console.log(event.constructor.name +" currentUrl -- "+event.url);
          this.currentUrl = (event.url === "/login" || event.url === "/") ? "" : event.url;
      }
  }


}