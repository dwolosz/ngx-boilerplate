import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // navigation ended
      }
    });
  }

  ngOnInit() {
  }
}
