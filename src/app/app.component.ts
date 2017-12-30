import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private router: Router, private scrollService: ScrollToService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      //window.scrollTo(0, 0)

      const config: ScrollToConfigOptions = {
        target: 'top-page',
        duration: 650
      };

      this.scrollService.scrollTo(config);

    });
  }

}
