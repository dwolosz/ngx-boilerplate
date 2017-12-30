import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Router} from "@angular/router";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-site-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class SiteDashboardComponent implements OnInit, OnDestroy {

  public posts: any;

  constructor(private http: HttpService, private router: Router, private settings: SettingsService) {

  }

  ngOnInit() {
    this.http.getHttpData('/posts', { userId: this.settings.userData.id})
      .subscribe(
        (data) => {
          this.posts = data;
        }
      )
  }

  ngOnDestroy() {
  }
}
