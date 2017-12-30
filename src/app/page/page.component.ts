import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../services/http.service";

import {UserData} from "../models/user";
import {SettingsService} from "../services/settings.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  public user: UserData;

  constructor( private route: ActivatedRoute, private http: HttpService, private router: Router, private settings: SettingsService) {

  }

  ngOnInit(){

    // sample user
    this.user = this.route.snapshot.data['nav'][0];

    //updated url link parameters
    let _params = {
      userId: this.user.id,
    };

    //update link parameters ( without navigating to other page)
    this.router.navigate([], {queryParams: _params, queryParamsHandling: 'merge'});

    //store data in global settings
    this.settings.userData = this.user;



  }

  ngOnDestroy(){

  }
}
