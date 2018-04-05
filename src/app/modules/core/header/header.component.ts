import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../../services/settings.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public settingsService: SettingsService, private router:Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
  }

  updateSubsites() {
    this.settingsService.contextQueryBase.includeSubSites = !this.settingsService.contextQueryBase.includeSubSites ;

    console.log(this.settingsService.contextQueryBase.includeSubSites );
    const _params = {
      includeSubSites: this.settingsService.contextQueryBase.includeSubSites,
    };
    this.router.navigate(['.'], {queryParams: _params, relativeTo: this.activatedRoute, queryParamsHandling: 'merge'})
  }
}
